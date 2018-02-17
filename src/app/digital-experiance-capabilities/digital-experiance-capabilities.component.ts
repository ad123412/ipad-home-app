import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-digital-experiance-capabilities',
  templateUrl: './digital-experiance-capabilities.component.html',
  styleUrls: ['./digital-experiance-capabilities.component.css']
})
export class DigitalExperianceCapabilitiesComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  navigateToHome(): void {
    this._route.navigate(['/menu']);
  }

}
