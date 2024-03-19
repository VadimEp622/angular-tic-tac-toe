import { Component, Input, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'board',
  standalone: true,
  imports: [TileComponent, NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit {
  @Input() isGameOn!: boolean
  @Input() tileList!: ('X' | 'O' | null)[]
  @Input() isPlayerNext!: boolean


  constructor() { }

  ngOnInit() {
  }

  // TODO: raise event to parent using emitter
  onTileClick(idx: number) {
    console.log('idx', idx)
  }

}
