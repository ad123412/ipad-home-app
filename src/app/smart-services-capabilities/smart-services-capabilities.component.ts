import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-smart-services-capabilities',
  templateUrl: './smart-services-capabilities.component.html',
  styleUrls: ['./smart-services-capabilities.component.css']
})
export class SmartServicesCapabilitiesComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  navigateToHome(): void {
    this._route.navigate(['/menu']);
  }

}
