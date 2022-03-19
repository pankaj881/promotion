import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {PromotionType} from "./pormotion.interface";
import { APIS } from './pormotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  constructor(private _http: HttpClient) { }

  getDataFromApi(): Observable<PromotionType[]> {
    if (this.getLocal() !== null) {
      return of(this.getLocal());
    }

    return this._http.get<PromotionType[]>(APIS.Mocky);
  }

  getLocal(): PromotionType[] {
    return JSON.parse(<string>localStorage.getItem('apiData')) as PromotionType[];
  }

  setLocal(data: PromotionType[]): PromotionType[] {
    localStorage.setItem('apiData', JSON.stringify(data));
    return data;
  }

  getAllPromoLocal(): PromotionType[] {
    return JSON.parse(<string>localStorage.getItem('allPromotionData')) as PromotionType[];
  }

  setAllPromoLocal(data: PromotionType[]): PromotionType[] {
    localStorage.setItem('allPromotionData', JSON.stringify(data));
    return data;
  }
}
