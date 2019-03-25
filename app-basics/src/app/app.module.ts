import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmployedetailsComponent } from './Employee/employedetails/employedetails.component';
import { EmployelistComponent } from './Employee/employelist/employelist.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { LeftsiblingComponent } from './siblings/leftsibling/leftsibling.component';
import { RightsiblingComponent } from './siblings/rightsibling/rightsibling.component';
import { HttpservComponent } from './Services/httpserv/httpserv.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployedetailsComponent,
    EmployelistComponent,
    SiblingsComponent,
    LeftsiblingComponent,
    RightsiblingComponent,
    HttpservComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
