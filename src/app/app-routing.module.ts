import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPage1Component } from './components/test-page1/test-page1.component';
import { TestPage2Component } from './components/test-page2/test-page2.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GithubComponent } from './components/github/github.component';
import { SoftwarePageComponent } from './components/software-page/software-page.component'
import { GarageControlPageComponent } from './components/garage-control-page/garage-control-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { TripPlannerPageComponent } from './components/trip-planner-page/trip-planner-page.component';
import { EnergyDashPageComponent } from './components/energy-dash-page/energy-dash-page.component';
import { FirstWebitePageComponent } from './components/first-webite-page/first-webite-page.component';
import { ThreeDTestComponent } from './components/three-dtest/three-dtest.component';

const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log("this is the width (responsive),", width)
var routingTest: any;
    
    if (width > 960)
    {
      routingTest = TestPage2Component
    }
    else
    { 
      routingTest = TestPage1Component
    }

console.log("routing file test", width , routingTest)

const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: 'testing', component: TestPage2Component },
  { path: 'software', component: SoftwarePageComponent },
  { path: 'hardware', component: HomePageComponent },
  { path: 'github', component: GithubComponent },

  { path: 'garage', component: GarageControlPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'tripPlanner', component: TripPlannerPageComponent },
  { path: 'energyUI', component: EnergyDashPageComponent },
  { path: 'firstWebsite', component: FirstWebitePageComponent },

  { path: '3dTest', component: ThreeDTestComponent },

  { path: '**', component: TestPage1Component },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
