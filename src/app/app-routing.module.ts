import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WatchComponent } from './watch/watch.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'watch/:id',
    component: WatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
