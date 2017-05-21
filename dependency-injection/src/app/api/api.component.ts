import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private apiSerivec: ApiService) { }

  ngOnInit() {
  }

  invokeApi(): void {
  	this.apiSerivec.get();
  }

}
