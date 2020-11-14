import { Injectable } from '@angular/core';
import { provinsi } from '../daerah.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinsiService {

  private prov: provinsi[]=[
    {
      idPulau:'1',
      idProv:'1',
      nama:'Banten'
    },
    {
      idPulau:'1',
      idProv:'2',
      nama:'Jawa Barat'
    },
    {
      idPulau:'1',
      idProv:'3',
      nama:'Jawa Timur'
    },,
    {
      idPulau:'2',
      idProv:'1',
      nama:'Sumatra Barat'
    },
    {
      idPulau:'2',
      idProv:'2',
      nama:'Aceh'
    }
  ];

  constructor() { }

  getAllProv(){
    return[...this.prov];
  }

  getPulau(idProv: String){
    return {...this.prov.find(prov =>{
      return prov.idProv === idProv;
    })};
  }
}
