import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students : Student[] = [
    {
      id: 0,
      name : 'Matias',
      surname: 'Garnica',
      fileNumber: 1533,
      age: 17,
      isActive: true,
      gender: 'M',
      subject: 'Física'
    },
    {
      id: 1,
      name : 'Laura',
      surname: 'Espinosa',
      fileNumber: 1256,
      age: 16,
      isActive: true,
      gender: 'F',
      subject:  'Diseño'
    },
    {
      id: 2,
      name : 'Juan',
      surname: 'Ramirez',
      fileNumber: 1752,
      age: 14,
      isActive: false,
      gender: 'M',
      subject: 'Matemática'
    },
    {
      id: 3,
      name : 'Mariela',
      surname: 'Gomez',
      fileNumber: 1566,
      age: 15,
      isActive: true,
      gender: 'X',
      subject: 'Inglés'
    },
    {
      id: 4,
      name : 'Germán',
      surname: 'Mendez',
      fileNumber: 1025,
      age: 13,
      isActive: false,
      gender: 'M',
      subject: 'Geografía'
    }
  ]

  constructor() { }


  getStudents () : Student[] {
    return this.students
  }

  addStudent (newStudent : Student) {
    this.students.push(newStudent)
  }

  editStudent (newStudent : Student, indexOfElement : number){
    this.students[indexOfElement] = newStudent;
  }

  deleteStudent(studentId : number){
    this.students = this.students.filter(e => 
      e.id !== studentId)
  }
}
