import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../../cmps/app-header/app-header.component';

@Component({
  selector: 'details-layout',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './details-layout.component.html',
  styleUrl: './details-layout.component.scss'
})
export class DetailsLayoutComponent {

}
