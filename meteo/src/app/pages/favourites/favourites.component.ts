import { Component } from '@angular/core';
import { IGeneral } from 'src/app/models/weather/general';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  favourites!:IGeneral[]

  constructor(private weatherSvc:WeatherService){
    this.favourites = this.weatherSvc.favourites
  }

  removeFromFavourites(city:IGeneral){
    this.favourites = this.favourites.filter( el => el!= city)
    this.weatherSvc.favourites = this.favourites
  }
}
