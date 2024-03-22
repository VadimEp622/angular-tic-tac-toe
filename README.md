# Angular Tic-Tac-Toe

This project is a simple SPA written in angular, with the game Tic-Tac-Toe inside it.
- The game is build using **MVC** principle, with a service instance responsiple for state and logic, a component responsible for listening to user input and connecting with the service, and an HTML DOM that is being rendered onto.
- This project is build to be **scalable**.
- The project's routes are **lazy loaded**.

# Sneakpeek

![mainRoutes](https://github.com/VadimEp622/angular-tic-tac-toe/assets/118854398/afd5e290-abf2-4d00-8336-f7e9b54040e0)

A) The routes are devided into: 
- /
  - /
- /about
  - /
- /game
  - /tic-tac-toe
  - /insert-game-name-here
- /**
  - /


B) Each main route has its own layout wrapper, which allows for dynamic wrapping, using a layoutService that tracks current route.

C) Homepage route has a scaleable nav list which redirects to each specific game (/game/insert-game-name-here) the project may have.
