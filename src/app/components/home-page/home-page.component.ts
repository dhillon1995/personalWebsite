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
    window.open("https://www.thingiverse.com/thing:5363194")
  }

  DevkitModel () {
    window.open("https://www.thingiverse.com/thing:5363225")
  }

  CarbonModel () {
    window.open("https://www.thingiverse.com/thing:5363237")
  }

  ForgedCarbonModel () {
    window.open("https://www.thingiverse.com/thing:5363205")
  }

  devKit () {
    this.router.navigateByUrl('/Devkit')
  }

  eFoil () {
    this.router.navigateByUrl('/eFoil')
  }

  carbon () {
    this.router.navigateByUrl('/Carbon')
  }

  forgedCarbon () {
    this.router.navigateByUrl('/ForgedCarbon')
  }

  ngOnInit(): void {
  }

}
