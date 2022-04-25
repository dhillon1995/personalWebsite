import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-planner-page',
  templateUrl: './trip-planner-page.component.html',
  styleUrls: ['./trip-planner-page.component.css']
})
export class TripPlannerPageComponent implements OnInit {

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
