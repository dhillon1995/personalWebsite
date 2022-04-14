import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  hydroModel () {
    console.log("hydroModel Click")
    this.router.navigateByUrl('/3dTest')
  }

  ngOnInit(): void {
  }

}
