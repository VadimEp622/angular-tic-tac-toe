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

  // TODO: add color pallete to scss _variables.scss for the tic-tac-toe game
  // TODO: when it is not user's turn, and user hovers over the game, mouse cursor should change to show => please wait, machine is thinking...
  // TODO: add colors to 'X' and 'O', to more easily indentify who's turn it is (AFTER! deciding a color pallete for the game)

  handleTileClick(idx: number) {
    if (this.ticTacToeService.getGame().isPlayerNext) {
      this.ticTacToeService.doMove(idx)
    }
  }

  onPlayerPick(player: 'X' | 'O') {
    this.ticTacToeService.setPlayer(player)
    if (!this.ticTacToeService.getGame().isPlayerNext) this.ticTacToeService.machineTurn()
  }
}
