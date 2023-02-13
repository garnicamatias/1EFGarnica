import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from '../../models/student';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { AddModalComponent } from '../add-modal/add-modal.component';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent{

  students !: Student[]
  
  dataSource : MatTableDataSource<Student> 
  dataColumns: string[] = ['name', 'fileNumber', 'age', 'isActive', 'gender', 'subject','actions']

  constructor(
    private studentsService : StudentsService,
    private dialog : MatDialog)

    {
    this.students = studentsService.getStudents();
    this.dataSource = new MatTableDataSource<Student>(this.students)
  }
  
  deleteStudent(studentId : number){
    this.studentsService.deleteStudent(studentId)
    this.updateStudentsTable()
  }

  editStudent = (student : Student) => {
    this.dialog.open(EditModalComponent, { data: student })
    setTimeout(() => {
      this.updateStudentsTable()
    }, 10000);
  }

  openAddModal() {
    const dialogRef = this.dialog.open(AddModalComponent)
    setTimeout(() => {
      this.updateStudentsTable()
    }, 10000);
  }

  updateStudentsTable(){
    this.students = this.studentsService.getStudents();
    this.dataSource = new MatTableDataSource<Student>(this.students)
  }
}

