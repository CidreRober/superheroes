import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page.component';

    const routes: Routes = [
        {
            path: '',
            component: HeroPageComponent,
            pathMatch: 'full'
        },
    ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroPageRoutingModule { }