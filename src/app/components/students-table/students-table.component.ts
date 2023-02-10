import { Component, Input, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from '../../models/student';
import { EditModalComponent } from '../edit-modal/edit-modal.component';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent{

  students !: Student[]
  
  dataSource : MatTableDataSource<Student> 
  dataColumns: string[] = ['name', 'id', 'age', 'isActive', 'gender', 'subject','actions']

  constructor(
    private studentsService : StudentsService,
    private dialog : MatDialog)
    {
    this.students = studentsService.getStudents();
    this.dataSource = new MatTableDataSource<Student>(this.students)
  }
  
  deleteStudent(studentId : number){
    this.studentsService.deleteStudent(studentId)
  }

  addNewStudent(newStudent : Student){
    const data = this.dataSource.data;
    data.push(newStudent);
    this.dataSource.data = data;
  }

  editStudent(student : Student){
    const dialogRef = this.dialog.open(EditModalComponent)
  }
}

