import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { VideojuegosService } from '../../servicios/videojuegos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videojuego:any={};
  constructor(private activatedRoute: ActivatedRoute,
    private _videojuegosService: VideojuegosService) { 
      
    this.activatedRoute.params.subscribe( params =>{
      this.videojuego = this._videojuegosService.getVideojuego( params['id'] );
      // console.log(this.heroe);
  });
    }

  ngOnInit(): void {
  }

}
