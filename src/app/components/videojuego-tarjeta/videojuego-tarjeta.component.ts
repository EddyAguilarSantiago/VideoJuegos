import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videojuego-tarjeta',
  templateUrl: './videojuego-tarjeta.component.html',
  styleUrls: ['./videojuego-tarjeta.component.css']
})
export class VideojuegoTarjetaComponent implements OnInit {
  @Input() videojuego: any = {};
  @Input() index: number | undefined;
  @Output() videojuegoSeleccionado: EventEmitter<number>;


  constructor(private router: Router) {
    this.videojuegoSeleccionado = new EventEmitter(); }

  ngOnInit(): void {
  }

  verVideojuego() {
    // console.log(  this.index );
    this.router.navigate( ['/videojuego', this.index] );
    // this.heroeSeleccionado.emit( this.index );
  }

}
