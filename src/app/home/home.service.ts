import { Injectable } from '@angular/core';
import { pulau } from '../daerah.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private pulau: pulau[]=[
    {
      idPulau:'1',
      nama:'Java'
    },
    {
      idPulau:'2',
      nama:'Sumatra'
    }
  ];
  constructor() { }

  getAllPulau(){
    return[...this.pulau];
  }

  getPulau(idPulau: String){
    return {...this.pulau.find(pulau =>{
      return pulau.idPulau === idPulau;
    })};
  }
}
