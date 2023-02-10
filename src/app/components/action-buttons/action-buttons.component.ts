import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModalComponent } from '../add-modal/add-modal.component';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent {

  constructor (private dialog : MatDialog){
    
  }

  openAddModal() {
    const dialogRef = this.dialog.open(AddModalComponent)
  }
}
