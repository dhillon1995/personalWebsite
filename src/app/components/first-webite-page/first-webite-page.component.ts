import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-webite-page',
  templateUrl: './first-webite-page.component.html',
  styleUrls: ['./first-webite-page.component.css']
})
export class FirstWebitePageComponent implements OnInit {

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
