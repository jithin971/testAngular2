import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
 myArray=[{ID:10,fName:"jithin",sName:"Raju"},{ID:11,fName:"jithin",sName:"Raju"}]
  constructor() { }

  ngOnInit() {
  }

}
