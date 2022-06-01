import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { VideojuegosService } from '../../servicios/videojuegos.service';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent {
  videojuego:any = {};

  constructor( private activatedRoute: ActivatedRoute,
    private _videojuegosService: VideojuegosService) { 

      this.activatedRoute.params.subscribe( params =>{
        this.videojuego = this._videojuegosService.getVideojuego( params['id'] );
      });

    }


}
