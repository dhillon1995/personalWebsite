import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-software-page',
  templateUrl: './software-page.component.html',
  styleUrls: ['./software-page.component.css']
})
export class SoftwarePageComponent implements OnInit {

  constructor(private router: Router) {}

  garageButton () {
    this.router.navigateByUrl('/garage')
  }

  portfolioButton () {
    this.router.navigateByUrl('/portfolio')
  }

  tripButton () {
    this.router.navigateByUrl('/tripPlanner')
  }

  energyButton () {
    this.router.navigateByUrl('/energyUI')
  }

  firstButton () {
    this.router.navigateByUrl('/firstWebsite')
  }

  gitHub () {
    window.open("https://github.com/dhillon1995")
  }


  ngOnInit(): void {
  }

}
