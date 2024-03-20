import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

interface Game {
  isGameOn: boolean
  board: ('X' | 'O' | null)[]
  isPlayerNext: boolean
  isWin: boolean
  winner: 'X' | 'O' | 'tie' | null
}

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  private game!: Game
  private player!: 'X' | 'O' | null

  constructor(private utilService: UtilService) { }

  newGame() {
    this.game = this._createGame()
    this.player = null
    this.game.isGameOn = true
    if (this.player && !this.game.isPlayerNext) this.machineTurn()
  }

  restart() {
    this.game = this._createGame()
    this.game.isGameOn = true
    if (this.player && !this.game.isPlayerNext) this.machineTurn()
  }

  machineTurn() {
    const possibleMoves = this._getPossibleMoves()
    const idx = this.utilService.getRandomIntInclusive(0, possibleMoves.length - 1)
    this.doMove(possibleMoves[idx])
  }

  doMove(idx: number) {
    if (!this.game.isGameOn || this.game.isWin) return
    const possibleMoves = this._getPossibleMoves()
    if (!possibleMoves.includes(idx)) return

    this.game.board[idx] = this.getWhoIsNext()

    const isWinner = this._checkWin()
    if (isWinner) this._endGame(isWinner)

    this.game.isPlayerNext = !this.game.isPlayerNext
    if (!this.game.isPlayerNext) this.machineTurn()
  }

  // --------------------------- Setters ---------------------------
  setPlayer(player: 'X' | 'O') {
    this.player = player
  }

  // --------------------------- Getters ---------------------------
  getGame(): Game {
    return this.game
  }

  getPlayer(): 'X' | 'O' | null {
    return this.player
  }

  getWhoIsNext(): 'X' | 'O' {
    return (this.game.isPlayerNext ? (this.player === 'X' ? 'X' : 'O') : (this.player === 'X' ? 'O' : 'X'))
  }

  // =================================================================
  // ======================= Private Functions =======================
  // =================================================================
  private _endGame(winner: 'X' | 'O' | 'tie') {
    this.game.isWin = true
    this.game.isGameOn = false
    this.game.winner = winner
  }

  private _createGame(): Game {
    return {
      isGameOn: false,
      board: Array(9).fill(null),
      isPlayerNext: this.utilService.getRandBool(),
      isWin: false,
      winner: null
    }
  }

  private _getPossibleMoves(): number[] {
    return this.game.board.reduce((acc, tile, idx) => {
      if (tile === null) acc.push(idx)
      return acc
    }, [] as number[])
  }

  private _getPossibleWins(): number[][] {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  private _checkWin(): 'X' | 'O' | 'tie' | null {
    const possibleWins = this._getPossibleWins()

    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i]
      if (
        this.game.board[a] &&
        this.game.board[a] === this.game.board[b] &&
        this.game.board[a] === this.game.board[c]
      ) {
        return this.game.board[a]
      }
    }

    if (this._checkIsBoardFull()) return 'tie'
    return null
  }

  private _checkIsBoardFull(): boolean {
    return !this.game.board.includes(null)
  }
}
