import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-value-integration-capabilities',
  templateUrl: './value-integration-capabilities.component.html',
  styleUrls: ['./value-integration-capabilities.component.css']
})
export class ValueIntegrationCapabilitiesComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  navigateToHome(): void {
    this._route.navigate(['/menu']);
  }

}
