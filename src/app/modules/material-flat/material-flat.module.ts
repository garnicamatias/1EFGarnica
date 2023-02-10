import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatTableModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule, 
    MatSidenavModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class MaterialFlatModule { }
