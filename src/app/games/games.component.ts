import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() usuario = "";
  @Output() addFavoriteEvent = new EventEmitter<string>()

  games=[
    {
      id:1,
      nombre:"Mario Kart Pro 4",
      precio:12000
    },
    {
      id:2,
      nombre:"Metal Slug MarineFord",
      precio:16000
    },
    {
      id:3,
      nombre:"Call of duty Warrior masacre",
      precio:21000
    }
  ]

  comprar(nombre:string,usuario:string){
    alert(`Comprando ${nombre} por ${usuario}`)
  }

  favoritos(nombre:string){
    this.addFavoriteEvent.emit(nombre)
  }

  }

