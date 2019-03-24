import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmployedetailsComponent } from './Employee/employedetails/employedetails.component';
import { EmployelistComponent } from './Employee/employelist/employelist.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployedetailsComponent,
    EmployelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
