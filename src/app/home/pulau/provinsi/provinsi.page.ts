import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../main.service';
import { provinsi, pulau } from '../../pulau';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.page.html',
  styleUrls: ['./provinsi.page.scss'],
})
export class ProvinsiPage implements OnInit {
  loaded;
  allProv;
  constructor(private activatedRoute:ActivatedRoute,
    private mainSrv:MainService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('provId')){return;}
      const id = paramMap.get('provId');
      this.loaded = this.mainSrv.getProv(id);
      this.allProv = this.mainSrv.getAllProv();
  
    });
  }

}
