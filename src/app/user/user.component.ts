import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  juegoFavorito = "";

  usuario="Diego Altamirano"
  activo= false

  saludar(){
    alert("Holaaaa")
  }

  getJuegoFavorito(nombre:string){
    this.juegoFavorito = nombre
  }
}
