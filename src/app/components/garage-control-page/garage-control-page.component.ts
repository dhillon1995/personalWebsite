import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garage-control-page',
  templateUrl: './garage-control-page.component.html',
  styleUrls: ['./garage-control-page.component.css']
})
export class GarageControlPageComponent implements OnInit {

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
