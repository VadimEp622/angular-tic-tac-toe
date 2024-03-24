import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../cmps/app-header/app-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tic-tac-toe';

  // TODO: add an app encompassing loader bar at the top of the page (line bar), for viewing that user action to change route is happening

  // TODO (optional): make a game service, which has a list of game objects, by which we can make game routes, and game buttons in home page
  // OR... think about making game/:id route, and consider how to handle the different game's services
}
