import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devkit-page',
  templateUrl: './devkit-page.component.html',
  styleUrls: ['./devkit-page.component.css']
})
export class DevkitPageComponent implements OnInit {

  constructor(private router: Router) { }

  hardwareButton () {
    this.router.navigateByUrl('/hardware')
  }

  thingButton () {
    window.open("https://www.thingiverse.com/thing:5363225")
  }

  ngOnInit(): void {
  }

}
