import { Component, Input, ChangeDetectorRef} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../models/student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent{
  // @Input() set newStudentFromFather( _newStudentFromFather: Student){
  //   if (_newStudentFromFather) {
     
  //   }  
  
  // };


  students : Student[] = [
    {
      name : 'Matias',
      surname: 'Garnica',
      id: 1533,
      age: 17,
      isActive: true,
      gender: 'M',
      subjects: ['Matemática', 'Inglés', 'Física']
    },
    {
      name : 'Laura',
      surname: 'Espinosa',
      id: 1256,
      age: 16,
      isActive: true,
      gender: 'F',
      subjects: ['Alemán', 'Diseño']
    },
    {
      name : 'Juan',
      surname: 'Ramirez',
      id: 1752,
      age: 14,
      isActive: false,
      gender: 'M',
      subjects: ['Matemática', 'Educación Física']
    },
    {
      name : 'Mariela',
      surname: 'Gomez',
      id: 1566,
      age: 15,
      isActive: true,
      gender: 'X',
      subjects: ['Inglés', 'Física']
    },
    {
      name : 'Germán',
      surname: 'Mendez',
      id: 1025,
      age: 13,
      isActive: false,
      gender: 'M',
      subjects: ['Geografía','Física']
    }
  ]

  dataSource : MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students)
  dataColumns: string[] = ['name', 'id', 'age', 'isActive', 'gender', 'subjects','actions']


  addNewStudent(newStudent : Student){
    const data = this.dataSource.data;
    data.push(newStudent);
    this.dataSource.data = data;
  }
}

