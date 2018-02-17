import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-value-integration',
  templateUrl: './value-integration.component.html',
  styleUrls: ['./value-integration.component.css']
})
export class ValueIntegrationComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  navigateToValueIntegrationCapabilities(): void{
    this._route.navigate(['/valueIntegraionCapabilities']);
  }

}
