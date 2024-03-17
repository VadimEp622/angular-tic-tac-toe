import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  host: {
    class: 'full main-layout'
  },
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // INFO: The constructor runs immediately when the class is created,
  //  but you don't generally do anything in the constructor. (aside from inject your dependencies, as I understood - needs some research))
  constructor() { }
}
