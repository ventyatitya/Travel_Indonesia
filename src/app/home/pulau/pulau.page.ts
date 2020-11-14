import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { provinsi } from 'src/app/daerah.model';
import { HomeService } from '../home.service';
import { ProvinsiService } from '../provinsi.service';

@Component({
  selector: 'app-pulau',
  templateUrl: './pulau.page.html',
  styleUrls: ['./pulau.page.scss'],
})
export class PulauPage implements OnInit {

  pulau;
  prov:provinsi[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private provService: ProvinsiService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      
      if(!paramMap.has('idPulau')){return;}
        const id = paramMap.get('idPulau');
        this.pulau = this.homeService.getPulau(id);
        this.prov = this.provService.getAllProv();
    });
    
  }

}
