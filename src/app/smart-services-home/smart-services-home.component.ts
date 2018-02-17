import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-smart-services-home',
  templateUrl: './smart-services-home.component.html',
  styleUrls: ['./smart-services-home.component.css']
})
export class SmartServicesHomeComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  navigateToSmartServiceCapabilities(): void {
    this._route.navigate(['/smartServiceCapabilities']);
  }

}
