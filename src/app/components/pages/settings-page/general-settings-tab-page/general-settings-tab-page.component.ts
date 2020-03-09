import { Component, OnInit } from '@angular/core';
import { TimeZones } from '../../../../services/timezones';
@Component({
  selector: 'app-general-settings-tab-page',
  templateUrl: './general-settings-tab-page.component.html',
  styleUrls: ['./general-settings-tab-page.component.scss']
})
export class GeneralSettingsTabPageComponent implements OnInit {
  languages = ['English','Arabic'];
  dateFormats = ['MM/DD/YY', 'DD/MM/YY'];
  currencies = ['USD', 'EUR', 'INR'];
  businessTypes = ['Facility Management', 'Building Management', 'Equipment Management'];
  timezones;
  constructor(private tz: TimeZones) { }

  ngOnInit() {
    
    this.timezones = this.tz.timezones;
  }

}
