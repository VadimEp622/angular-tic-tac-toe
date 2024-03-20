import { TicTacToeService } from './../../../services/tic-tac-toe.service';
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

  constructor(public ticTacToeService: TicTacToeService) { }


  ngOnInit() {
    this.ticTacToeService.newGame()
  }

  // TODO: add timeout for machine turn

  handleTileClick(idx: number) {
    this.ticTacToeService.doMove(idx)
  }

  onPlayerPick(player: 'X' | 'O') {
    this.ticTacToeService.setPlayer(player)
    if (!this.ticTacToeService.getGame().isPlayerNext) this.ticTacToeService.machineTurn()
  }
}
