import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SpringApiPage1Component } from './spring-api-page1/spring-api-page1.component';
import { SpringApiPage2Component } from './spring-api-page2/spring-api-page2.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page1/:id', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'spring-api', component: SpringApiPage1Component },
  { path: 'post-api', component: SpringApiPage2Component },
  { path: 'post-api/:id', component: SpringApiPage2Component },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
