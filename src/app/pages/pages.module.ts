import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { HeroPageModule } from './hero-page/hero-page.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    HeroPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HeroPageModule,
    HomePageModule,
    RouterModule
  ],
  exports: [HeroPageComponent,HomePageComponent],
  providers: [],
})

export class PagesModule { }
