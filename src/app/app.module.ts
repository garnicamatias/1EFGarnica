import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFlatModule } from './modules/material-flat/material-flat.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CompleteNamePipe } from './pipes/complete-name.pipe';
import { FixedArrayPipe } from './pipes/fixed-array.pipe';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { BooleanStyledDirective } from './directives/boolean-styled.directive';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    ContentAreaComponent,
    SidebarComponent,
    CompleteNamePipe,
    FixedArrayPipe,
    AddModalComponent,
    BooleanStyledDirective,
    BooleanToTextPipe,
    StudentsTableComponent,
    ActionButtonsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialFlatModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
