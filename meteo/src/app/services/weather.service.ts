import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISearchedCity } from '../models/weather/searched-city';
import { IGeneral } from '../models/weather/general';
import { IList } from '../models/weather/list';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  searchedCity!:ISearchedCity[]
  favourites!:IGeneral[]
  apiKey :string = 'b3df8c2191731ce389a9f1762d2fd91a'

  constructor(
    private http:HttpClient
  ) { }

  getWeather( url:string = `http://api.openweathermap.org/data/2.5/forecast?lat=40.667029&lon=16.6063265&appid=${this.apiKey}&units=metric`){
    return this.http.get(url)
  }

  getCity( url:string){
    return this.http.get(url)
  }
}
