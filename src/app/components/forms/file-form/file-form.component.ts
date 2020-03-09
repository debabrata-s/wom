import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss']
})
export class FileFormComponent implements OnInit {
  fileForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fileForm = this.fb.group({
      file:['']
    })
  }
  onSubmit(){
    console.log(this.fileForm.value);
    
  }

}
