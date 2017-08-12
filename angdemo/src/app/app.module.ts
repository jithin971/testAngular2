import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{Routes,RouterModule }from '@angular/router';


const route:Routes=[
  {path:'about',component:HomeComponent},
   {path:'home',component:HomeComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(this.route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
