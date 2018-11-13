import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { RouterModule, Routes } from '@angular/router';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SidebarModule } from 'ng-sidebar';
import { ClickStopPropagation } from './directives/stop-click-propogation.directive';
import 'hammerjs';

import { AppComponent } from './app.component';
import { VotingSlideComponent } from './pages/voting-slide/voting-slide.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'voting-slide', component: VotingSlideComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VotingSlideComponent,
    HomeComponent,
    ClickStopPropagation
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
