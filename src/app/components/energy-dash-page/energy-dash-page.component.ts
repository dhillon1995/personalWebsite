import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-energy-dash-page',
  templateUrl: './energy-dash-page.component.html',
  styleUrls: ['./energy-dash-page.component.css']
})
export class EnergyDashPageComponent implements OnInit {

  constructor(private router: Router) {}

  softwareButton () {
    this.router.navigateByUrl('/software')
  }

  githubButton () {
    this.router.navigateByUrl('/github')
  }

  ngOnInit(): void {
  }

}
