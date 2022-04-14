import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TestPage1Component } from './components/test-page1/test-page1.component';
import { TestPage2Component } from './components/test-page2/test-page2.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { TestCardComponent } from './components/test-card/test-card.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GithubComponent } from './components/github/github.component';
import { HardwareCardsComponent } from './components/hardware-cards/hardware-cards.component';
import { SoftwarePageComponent } from './components/software-page/software-page.component';
import { GarageControlPageComponent } from './components/garage-control-page/garage-control-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { TripPlannerPageComponent } from './components/trip-planner-page/trip-planner-page.component';
import { EnergyDashPageComponent } from './components/energy-dash-page/energy-dash-page.component';
import { FirstWebitePageComponent } from './components/first-webite-page/first-webite-page.component';
import { ThreeDTestComponent } from './components/three-dtest/three-dtest.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestPage1Component,
    TestPage2Component,
    TestCardComponent,
    MainNavComponent,
    HomePageComponent,
    GithubComponent,
    HardwareCardsComponent,
    SoftwarePageComponent,
    GarageControlPageComponent,
    PortfolioPageComponent,
    TripPlannerPageComponent,
    EnergyDashPageComponent,
    FirstWebitePageComponent,
    ThreeDTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
