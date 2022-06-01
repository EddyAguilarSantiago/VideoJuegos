import { Injectable } from '@angular/core';

@Injectable()
export class VideojuegosService {

  private videojuegos:Videojuego[]=[
    {
      nombre: "Left 4 Dead 2",
      desc: "Left 4 Dead 2 es un videojuego de disparos en primera persona cooperativo de tipo videojuego de terror.",
      descComp:"Left 4 Dead 2 es un videojuego de disparos en primera persona cooperativo de tipo videojuego de terror creado por la compañía Valve."+
      " Es la secuela de Left 4 Dead y se lanzó al mercado el 17 de noviembre de 2009 en Estados Unidos y América. En Europa llegó tres días después,"+
      " el 20 de noviembre. Esta secuela está disponible para PC y para la consola Xbox 360. El 14 de diciembre de 2009 fue anunciado el primer contenido"+
      " descargable para esta secuela: una nueva campaña llamada The Passing, que se desarrolla entre las dos primeras campañas del juego. Aquí se reúnen"+
      " los protagonistas del primer Left 4 Dead (Francis, Louis y Zoey) con los sobrevivientes de esta secuela. Bill aparece sin vida, ya que se sacrificó"+
      " para que los demás pudieran escapar. Salió a la luz el 22 de abril de 2010. Se ha desarrollado una versión para Linux (utilizando Ubuntu en las pruebas)"+
      " cuya beta publica se lanzó en mayo de 2013.",
      img: "assets/img/l4d2.png",
      lanzamiento: "17 de Noviembre de 2009",
      desarrolladora:"Valve"
    },
    {
      nombre: "Super Smash Bros. Ultimate",
      desc: "Super Smash Bros. Ultimate se trata de un juego de lucha donde hay que debilitar a los rivales para expulsarles de los márgenes del escenario.",
      descComp:"Super Smash Bros. Ultimate (大乱闘スマッシュブラザーズ SPECIAL, Dairantō Sumasshu Burazāzu Special) es un videojuego de lucha desarrollado por Sora"+
      " Ltd. y Bandai Namco Entertainment y distribuido por Nintendo para la consola Nintendo Switch. Fue lanzado a nivel mundial el 7 de diciembre de 2018 y se trata"+
      " del quinto título de la serie Super Smash Bros. Igual que sus predecesores, se trata de un juego de lucha donde hay que debilitar a los rivales para expulsarles"+
      " de los márgenes del escenario. El plantel está formado por personajes de otros videojuegos, tanto de Nintendo como de otras desarrolladoras independientes, e "+
      " incluye a todos los combatientes de entregas anteriores. Además, puede ampliarse con la compra de contenido descargable. Los trofeos coleccionables han sido"+
      " reemplazados por los «espíritus», un nuevo concepto inspirado también en personajes de videojuegos, que permiten mejorar las características del luchador antes"+
      " de un combate. El título admite hasta ocho jugadores en modo local, se puede jugar en línea a través de Nintendo Switch Online, y es compatible con las figuras"+
      " Amiibo y con Nintendo Labo.",
      img: "assets/img/ssbu.jpg",
      lanzamiento: "7 de Diciembre de 2018",
      desarrolladora:"Sora Ltd. y Bandai Namco Entertainment"
    },
    {
      nombre: "Mario Kart 8 Deluxe",
      desc: "Mario Kart 8 Deluxe es un videojuego de carreras.",
      descComp:"Mario Kart 8 (マリオカート8 Mario Kāto Eito) es un videojuego de carreras desarrollado y publicado por Nintendo para la consola Wii U. Es la undécima"+
      " entrega de la serie Mario Kart, octava en consolas de Nintendo. Fue lanzado en todo el mundo a finales de mayo de 2014, con 1,2 millones de copias vendidas en"+
      " sus primeros cuatro días, convirtiéndose en el juego más rápidamente vendido de Wii U hasta la fecha. El 26 de junio de 2014, Nintendo registró unas ventas de 2"+
      " millones de copias en el primer mes a la venta. Fue anunciado junto a Yoshi's Woolly World, Super Mario 3D World y un nuevo juego de la saga Super Smash Bros."+
      " En el E3 2014, se anunció que en un futuro algunos títulos, entre ellos Mario Kart 8, tendrán soporte para la próxima línea de figuritas de Nintendo Amiibo.",
      img: "assets/img/mk8.jpg",
      lanzamiento: "27 de Abril de 2017",
      desarrolladora: "Nintendo"
    },
    {
      nombre: "Mario Party Superstars",
      desc: "Mario Party Superstars es un videojuego de socialización tipo juego de mesa.",
      descComp:"Mario Party Superstars (マリオパーティ スーパースターズ Mario Pāti Sūpāsutāzu?) es un videojuego de socialización de 2021 desarrollado por NDcube y publicado"+
      " por Nintendo para Nintendo Switch. Es el duodécimo videojuego de la serie Mario Party, y el segundo para Nintendo Switch después de Super Mario Party (2018). Fue"+
      " lanzado el 29 de octubre de 2021. El videojuego presenta cinco tableros remasterizados de la trilogía original de Nintendo 64 y un total de 100 minijuegos de entregas"+
      " anteriores en la serie, similar al juego de Nintendo 3DS Mario Party: The Top 100. A diferencia de Super Mario Party, Superstars puede ser jugado con los botones de"+
      " los controles. Cuando fue lanzado , Mario Party Superstars recibió mayoritariamente reseñas positivas por parte de la crítica.",
      img: "assets/img/mps.jpg",
      lanzamiento: "29 de Octubre de 2021",
      desarrolladora:"NDcube"
    },
    {
      nombre: "Luigi's Mansion 3",
      desc: "Luigi's Mansion 3 es un videojuego de terror de tipo videojuego de acción-aventura.",
      descComp:"Luigi's Mansion 3 es un videojuego de terror de tipo videojuego de acción-aventura desarrollado por Next Level Games y publicado por Nintendo para Nintendo"+
      " Switch. Es la secuela de Luigi's Mansion 2 y la tercera entrega de la serie Luigi's Mansion que se lanzó el 31 de octubre de 2019. El juego ve a los jugadores asumir"+
      " el papel de Luigi quien debe explorar un hotel embrujado de gran altura, incorporando diferentes temas en cada piso, y rescatar a sus amigos de los fantasmas que lo"+
      " habitan, después de que un viejo enemigo engaña al grupo para que lo visite de vacaciones. Junto con una serie de elementos de juego que regresan de entregas"+
      " anteriores, el juego incorpora nuevas características, que incluyen movimientos adicionales para la captura de fantasmas, un asistente de doppelganger llamado "+
      " Gomiluigi para resolver acertijos.",
      img: "assets/img/lm3.jpg",
      lanzamiento: "31 de Octubre de 2019",
      desarrolladora:"Next Level Games"
    },
    {
      nombre: "Boomerang Fu",
      desc: "Boomerang Fu es un juego en el que puedes cortar y rebanar a tus amigos con búmerans en grupo con físicas frenéticas..",
      descComp:"Corta y rebana a tus amigos con búmerans en este juego en grupo con físicas frenéticas. Únete a un grupo de tus alimentos favoritos mientras asas, enfrías"+
      " y derramas a tus enemigos. Descubre ridículos potenciadores y apílalos en combinaciones mortales para convertirte en el maestro definitivo de Boomerang Fu.",
      img: "assets/img/bf.jpg",
      lanzamiento: "13 de Agosto de 2020",
      desarrolladora:"Cranky Watermelon"
    },
    {
      nombre: "Pico Park",
      desc: "Pico Park es un juego de acción y rompecabezas en multijugador dedicado a jugar con amigos, padres e hijos.",
      descComp:"Pico Park es un juego de acción y rompecabezas desarrollado por el estudio de juegos independiente Tecopark. Es un juego multijugador dedicado a jugar con"+
      " amigos, padres e hijos. Teco, el desarrollador del juego, creó el juego con el objetivo de cooperar con un gran número de personas. El primer lanzamiento de Pico"+
      " Park fue en 2016 para Microsoft Windows y estaba disponible para su compra en línea a través del minorista de videojuegos Steam, con un juego multijugador local."+
      " El juego se llamaba anteriormente \"Picollecita\", pero se cambió a Pico Park porque la pronunciación era demasiado difícil. El 8 de junio de 2019, se lanzó Pico Park"+
      " para Nintendo Switch y luego, en 2021, el juego se actualizó y permitió a los jugadores jugar tanto en línea como localmente. Hay un total de 3 modos que los"+
      " jugadores pueden elegir: modo mundial, modo sin fin y modo de batalla. En el 'modo mundial', los jugadores deben cooperar para resolver el rompecabezas. En el"+
      " 'modo sin fin', los jugadores cooperan para lograr una puntuación alta, y en el 'modo de batalla' es donde los jugadores deben competir entre sí para ganar el"+
      " juego. Pico Park ganó el premio a la \"Mejor presentación\" en Sense of Wonder Night 2014. Según las estadísticas de Steam, el máximo de jugadores de todos los"+
      "tiempos en un momento dado fue de 16 802 jugadores, y el pico de espectadores de transmisión de Twitch de Pico Park fue de 137 814.",
      img: "assets/img/pp.jpg",
      lanzamiento: "28 de Abril de 2016",
      desarrolladora:"Tecopark"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getVideojuegos():Videojuego[]{
    return this.videojuegos;
  }

  getVideojuego( idx: number ){
    return this.videojuegos[idx];
  }

  buscarVideojuegos( termino:string ):Videojuego[]{

    let videojuegosArr:Videojuego[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.videojuegos.length; i ++ ){

      let videojuego = this.videojuegos[i];

      let nombre = videojuego.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        videojuego.idx = i;
        videojuegosArr.push( videojuego )
      }

    }

    return videojuegosArr;
  }
}

export interface Videojuego{
nombre: string;
desc: string;
descComp: string;
img: string;
lanzamiento: string;
desarrolladora: string;
idx?: number;
};
