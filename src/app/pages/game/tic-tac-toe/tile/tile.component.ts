import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {

  @Input() tileItem: 'X' | 'O' | null = null;
}
