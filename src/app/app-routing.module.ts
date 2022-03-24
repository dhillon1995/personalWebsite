import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPage1Component } from './components/test-page1/test-page1.component';
import { TestPage2Component } from './components/test-page2/test-page2.component';
import { HomePageComponent } from './components/home-page/home-page.component';

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
  { path: 'home2', redirectTo: '' },
  { path: 'testing', component: TestPage1Component },
  { path: 'home', component: TestPage2Component },

  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
