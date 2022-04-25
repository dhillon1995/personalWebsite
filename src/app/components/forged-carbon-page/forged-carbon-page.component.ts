import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forged-carbon-page',
  templateUrl: './forged-carbon-page.component.html',
  styleUrls: ['./forged-carbon-page.component.css']
})
export class ForgedCarbonPageComponent implements OnInit {

  constructor(private router: Router) { }

  hardwareButton () {
    this.router.navigateByUrl('/hardware')
  }

  thingButton () {
    window.open("https://www.thingiverse.com/thing:5363205")
  }

  ngOnInit(): void {
  }

}
