import { Component, OnInit } from '@angular/core';
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
  isGameOn: boolean = false;
  tileList: ('X' | 'O' | null)[] = [];

  constructor() { }

  ngOnInit() {
    this.tileList = Array(9).fill(null);
  }

  onTileClick(idx: number) {
    console.log('idx', idx)
  }

}
