import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ConfigureSamlFormComponent } from 'src/app/components/forms/configure-saml-form/configure-saml-form.component';

@Component({
  selector: 'app-authentication-tab-page',
  templateUrl: './authentication-tab-page.component.html',
  styleUrls: ['./authentication-tab-page.component.scss']
})
export class AuthenticationTabPageComponent implements OnInit {
  samlAuthForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.samlAuthForm = this.fb.group({
      provider:['',Validators.required]
    })
  }
 
  onSubmit(){
    console.log(this.samlAuthForm.value);
    this.dialog.open(ConfigureSamlFormComponent, {
      width: '800px',
      height:'600px'
    });
  }
  

}
