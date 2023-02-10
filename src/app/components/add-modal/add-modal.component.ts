import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {

  addStudentForm : FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<AddModalComponent>,
    
  ){
    
    let regexEmail : string = '^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$';
    let regexPassword : string = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$';
    let controls: any = {
      name : new FormControl('', [Validators.required]),
      surname : new FormControl('',[Validators.required]),
      id : new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      age: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      isActive : new FormControl('',[Validators.required]),
      gender : new FormControl('', [Validators.required]),
      subjects : new FormControl('', [Validators.required])
    }

    this.addStudentForm = new FormGroup(controls);
  }

  
  
 
  getClass(input: string): string{
  
    if (this.addStudentForm.controls[input].valid) {
      return 'validInput'
    }

    switch (input) {
      case 'name':
      case 'surname':

      if (this.addStudentForm.controls[input].touched && this.addStudentForm.controls[input].errors?.['required'] ) 
      return 'invalidInput';
      break;
    
      case 'username':
      
      if (this.addStudentForm.controls['username'].touched && this.addStudentForm.controls['username'].errors?.['required'] || (this.addStudentForm.controls['username'].errors?.['minlength'] || this.addStudentForm.controls['username'].errors?.['maxlength'])) 
      return 'invalidInput';
      break;

      case 'email':
      if ((this.addStudentForm.controls['email'].touched && this.addStudentForm.controls['email'].errors?.['required']) || this.addStudentForm.controls['email'].errors?.['pattern']) 

      return 'invalidInput'
      break;

      case 'password' :
      if ((this.addStudentForm.controls['password'].touched && this.addStudentForm.controls['password'].errors?.['required']) || this.addStudentForm.controls['password'].errors?.['pattern']) 
      
      return 'invalidInput'
      break;

    }

    return 'form-control'
  }

  requiredAlert(input : string): boolean{
    return this.addStudentForm.controls[input].errors?.['required'] && (this.addStudentForm.controls[input].dirty || this.addStudentForm.controls[input].touched)
  }


  addStudent(){
    console.log(this.addStudentForm)
  }
}
