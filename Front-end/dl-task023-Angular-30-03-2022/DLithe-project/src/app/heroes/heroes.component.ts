import { Component, OnInit } from '@angular/core';
import { HeroserviceService } from '../heroservice.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroservice: HeroserviceService) { }

  ngOnInit(): void {
  }

  
}
