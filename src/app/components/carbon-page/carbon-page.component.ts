import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carbon-page',
  templateUrl: './carbon-page.component.html',
  styleUrls: ['./carbon-page.component.css']
})
export class CarbonPageComponent implements OnInit {

  constructor(private router: Router) { }

  hardwareButton () {
    this.router.navigateByUrl('/hardware')
  }

  thingButton () {
    window.open("https://www.thingiverse.com/thing:5363237")
  }

  ngOnInit(): void {
  }

}
