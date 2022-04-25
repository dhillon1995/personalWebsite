import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

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
