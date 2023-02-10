import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  addStudentForm : FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<EditModalComponent>,
    private studentService: StudentsService,
    private dialog : MatDialog
  ){
   
    let regexOnlyNumbers : string = '^[0-9]+$'
    let controls: any = {
      name : new FormControl('', [Validators.required]),
      surname : new FormControl('',[Validators.required]),
      id : new FormControl('',[Validators.required, Validators.pattern(regexOnlyNumbers)]),
      age: new FormControl('',[Validators.required, Validators.pattern(regexOnlyNumbers)]),
      isActive : new FormControl('',[Validators.required]),
      gender : new FormControl('', [Validators.required]),
      subject : new FormControl('', [Validators.required])
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
    
      case 'id':
      case 'age':
      
      if (this.addStudentForm.controls[input].touched && this.addStudentForm.controls[input].errors?.['required'] || this.addStudentForm.controls[input].errors?.['pattern']) 
      return 'invalidInput';
      break;

    }

    return 'form-control'
  }

  requiredAlert(input : string): boolean{
    return this.addStudentForm.controls[input].errors?.['required'] && (this.addStudentForm.controls[input].dirty || this.addStudentForm.controls[input].touched)
  }


  addStudent(){
    let newStudent : Student;
    let booleanValue : boolean;
    this.addStudentForm.value.isActive === "true" ? booleanValue = true : booleanValue = false
    newStudent = {
      name: this.addStudentForm.value.name,
      surname: this.addStudentForm.value.name,
      id: this.addStudentForm.value.id,
      age: this.addStudentForm.value.age,
      isActive: booleanValue,
      gender: this.addStudentForm.value.gender,
      subject: this.addStudentForm.value.subject
    }

    this.studentService.addStudent(newStudent)
    const dialogRef = this.dialog.closeAll()
  }
  
  closeModal(){
    const dialogRef = this.dialog.closeAll()
  }

}



