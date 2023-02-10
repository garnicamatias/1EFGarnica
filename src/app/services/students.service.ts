import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _refresh$ = new Subject<void>()

  private students : Student[] = [
    {
      name : 'Matias',
      surname: 'Garnica',
      id: 1533,
      age: 17,
      isActive: true,
      gender: 'M',
      subject: 'Física'
    },
    {
      name : 'Laura',
      surname: 'Espinosa',
      id: 1256,
      age: 16,
      isActive: true,
      gender: 'F',
      subject:  'Diseño'
    },
    {
      name : 'Juan',
      surname: 'Ramirez',
      id: 1752,
      age: 14,
      isActive: false,
      gender: 'M',
      subject: 'Matemática'
    },
    {
      name : 'Mariela',
      surname: 'Gomez',
      id: 1566,
      age: 15,
      isActive: true,
      gender: 'X',
      subject: 'Inglés'
    },
    {
      name : 'Germán',
      surname: 'Mendez',
      id: 1025,
      age: 13,
      isActive: false,
      gender: 'M',
      subject: 'Geografía'
    }
  ]

  constructor() { }

  get refresh$(){
    return this._refresh$
  }
  getStudents () : Student[] {
    return this.students
  }

  addStudent (newStudent : Student) {
    this.students.push(newStudent)
  }

  deleteStudent(studentId : number){
    this.students = this.students.filter(e => 
      e.id !== studentId)
    console.log(studentId)
    console.log(this.students)
  }
}
