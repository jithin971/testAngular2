import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{RouterModule,Routes }from '@angular/router';
import { NgForComponent } from './ng-for/ng-for.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import{FormsModule,ReactiveFormsModule }from '@angular/forms'


const route:Routes=[
  {path:'about',component:NgForComponent},
   {path:'home',component:HomeComponent},
   {path:'formValidation',component:FormValidationComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgForComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
