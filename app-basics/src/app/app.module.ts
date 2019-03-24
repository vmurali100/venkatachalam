import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmployedetailsComponent } from './Employee/employedetails/employedetails.component';
import { EmployelistComponent } from './Employee/employelist/employelist.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { LeftsiblingComponent } from './siblings/leftsibling/leftsibling.component';
import { RightsiblingComponent } from './siblings/rightsibling/rightsibling.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployedetailsComponent,
    EmployelistComponent,
    SiblingsComponent,
    LeftsiblingComponent,
    RightsiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
