import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-digital-experiance',
  templateUrl: './digital-experiance.component.html',
  styleUrls: ['./digital-experiance.component.css']
})
export class DigitalExperianceComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  navigateToDigitalExperianceCapabilities(): void {
    this._route.navigate(['/digitalExperianceCapabilities']);
  }

}
