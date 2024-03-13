import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../../cmps/app-header/app-header.component';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
