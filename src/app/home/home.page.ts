import { Component, OnInit } from '@angular/core';
import { pulau } from '../daerah.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pulau:pulau[];
  constructor(private homeService: HomeService) {
  }

  ngOnInit(){
    this.pulau = this.homeService.getAllPulau();
  }

}
