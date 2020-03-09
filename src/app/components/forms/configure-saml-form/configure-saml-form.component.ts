import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-saml-form',
  templateUrl: './configure-saml-form.component.html',
  styleUrls: ['./configure-saml-form.component.scss']
})
export class ConfigureSamlFormComponent implements OnInit {
  customerServiceUrl="https://api.wom.com/auth/saml/";
  constructor() { }

  ngOnInit() {
  }

}
