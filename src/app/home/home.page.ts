import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { pulau } from './pulau';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pulau:pulau[];
  constructor(private pulauSrv:MainService) {}

  ngOnInit(){
    this.pulau = this.pulauSrv.getAllPulau();
  }
}
