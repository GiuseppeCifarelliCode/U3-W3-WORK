import { ICity } from "./city";
import { IList } from "./list";

export interface IGeneral {

  city:ICity
  cnt:number
  cod:string
  list:IList[]
  message:number
}
