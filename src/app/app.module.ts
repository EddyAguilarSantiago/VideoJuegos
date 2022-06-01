import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { VideojuegosService } from './servicios/videojuegos.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { VideojuegoTarjetaComponent } from './components/videojuego-tarjeta/videojuego-tarjeta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    VideojuegosComponent,
    VideojuegoTarjetaComponent,
    BuscadorComponent,
    VideojuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    VideojuegosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
