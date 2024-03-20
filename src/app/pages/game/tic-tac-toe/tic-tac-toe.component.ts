import { Component, OnInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { NgIf } from '@angular/common';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'tic-tac-toe',
  host: {
    class: 'full main-layout'
  },
  standalone: true,
  imports: [BoardComponent, NgIf],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent implements OnInit {
  isGameOn: boolean = false
  player: 'X' | 'O' | null = null
  isPlayerNext!: boolean
  tileList: ('X' | 'O' | null)[] = []
  isWin: boolean = false
  winner: 'X' | 'O' | 'tie' | null = null

  constructor(public utilService: UtilService) { }


  ngOnInit() {
    this.onNewGame()
  }


  onNewGame() {
    this.isGameOn = true
    this.isPlayerNext = this.utilService.getRandBool()
    this.tileList = Array(9).fill(null)
    this.isWin = false
    this.winner = null
  }

  onPlayerPick(player: 'X' | 'O') {
    this.player = player
    if (!this.isPlayerNext) this.machineTurn()
  }

  machineTurn() {
    const possibleMoves = this.getPossibleMoves()
    const idx = this.utilService.getRandomIntInclusive(0, possibleMoves.length - 1)
    this.doMove(possibleMoves[idx])
  }

  doMove(idx: number) {
    if (!this.isGameOn || this.isWin) return
    const possibleMoves = this.getPossibleMoves()
    if (!possibleMoves.includes(idx)) return

    this.tileList[idx] = this.getWhoIsNext()

    const isWinner = this.checkWin()
    if (isWinner) this.endGame(isWinner)

    this.isPlayerNext = !this.isPlayerNext
    if (!this.isPlayerNext) this.machineTurn()
  }

  checkWin() {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i]
      if (
        this.tileList[a] &&
        this.tileList[a] === this.tileList[b] &&
        this.tileList[a] === this.tileList[c]
      ) {
        return this.tileList[a]
      }
    }
    if (this.checkIsBoardFull()) return 'tie'
    return null
  }

  checkIsBoardFull() {
    return !this.tileList.includes(null)
  }

  endGame(winner: 'X' | 'O' | 'tie') {
    this.isWin = true
    this.isGameOn = false
    this.winner = winner
  }

  getPossibleMoves(): number[] {
    return this.tileList.reduce((acc, tile, idx) => {
      if (tile === null) acc.push(idx)
      return acc
    }, [] as number[])
  }

  getWhoIsNext() {
    return (this.isPlayerNext ? (this.player === 'X' ? 'X' : 'O') : (this.player === 'X' ? 'O' : 'X'))
  }

}
