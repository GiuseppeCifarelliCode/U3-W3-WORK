import { IWeather } from "./weather"

export interface IList {

  cloud:{
    all:string
  }
  dt:number
  time:string
  main:{
    feels:number
    ground:number
    humidity:number
    pressure:number
    sea_level:number
    temp:number
    temp_kf:number
    temp_max:number
    temp_min:number
  }
  pop:number
  sys:{
    pod:string
  }
  visibility:number
  weather:IWeather[]
  wind:{
    deg:number
    gust:number
    speed:number
  }
}
