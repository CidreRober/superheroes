import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { CommonModule } from '@angular/common';
import { HeroPageRoutingModule } from './hero-page-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HeroPageRoutingModule
  ],
  exports: [],
  providers: [],
})

export class HeroPageModule { }
