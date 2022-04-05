import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() updateDataEvent= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
