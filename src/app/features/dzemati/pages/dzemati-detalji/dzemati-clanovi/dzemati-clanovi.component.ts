import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dzemati-clanovi.component.html',
  styleUrls: ['./dzemati-clanovi.component.scss']
})
export class DzematiClanoviComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.previousNavigation);
   }

  ngOnInit(): void {
  }

}
