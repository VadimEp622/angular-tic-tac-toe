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

  constructor(public utilService: UtilService) { }


  ngOnInit() {
    this.onNewGame()
    // if (!this.isPlayerNext) this.machineTurn()
  }


  onNewGame() {
    this.isGameOn = true
    this.isPlayerNext = this.utilService.getRandBool()
    this.tileList = Array(9).fill(null)
  }

  onPlayerPick(player: 'X' | 'O') {
    this.player = player
    if (!this.isPlayerNext) this.machineTurn()
  }

  machineTurn() {
    const possibleMoves = this.getPossibleMoves()
    const possibleIdx = this.utilService.getRandomIntInclusive(0, possibleMoves.length - 1)
    return this.doMove(possibleMoves[possibleIdx])
  }

  doMove(idx: number) {
    const possibleMoves = this.getPossibleMoves()
    if (!possibleMoves.includes(idx)) return
    this.tileList[idx] = this.getWhoIsNext()


    //-----------------
    // TODO: check win
    // 
    //-----------------

    this.isPlayerNext = !this.isPlayerNext
    if (!this.isPlayerNext) this.machineTurn()
  }

  checkWin() {

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
