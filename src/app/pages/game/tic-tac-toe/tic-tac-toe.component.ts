import { Component, OnInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { NgIf } from '@angular/common';

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


  ngOnInit() {
    this.onNewGame()
    if (!this.isPlayerNext) this.machineTurn()
  }


  onNewGame() {
    this.isGameOn = true
    this.isPlayerNext = this.getRandBool()
    this.tileList = Array(9).fill(null)
  }

  onPlayerPick(player: 'X' | 'O') {
    this.player = player
  }

  machineTurn() {
    return this.doMove(this.getRandomIntInclusive(0, this.getPossibleMoves().length - 1))
  }

  doMove(idx: number) {
    console.log('idx', idx)


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

  getRandBool() {
    return Math.round(Math.random()) === 0
  }

  getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
  }

  getWhoIsNext() {
    return (this.isPlayerNext ? (this.player === 'X' ? 'X' : 'O') : (this.player === 'X' ? 'O' : 'X'))
  }

}
