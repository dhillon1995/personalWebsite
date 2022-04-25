import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foil-page',
  templateUrl: './foil-page.component.html',
  styleUrls: ['./foil-page.component.css']
})
export class FoilPageComponent implements OnInit {

  constructor(private router: Router) { }

  hardwareButton () {
    this.router.navigateByUrl('/hardware')
  }

  thingButton () {
    window.open("https://www.thingiverse.com/thing:5363194")
  }

  ngOnInit(): void {
  }

}
