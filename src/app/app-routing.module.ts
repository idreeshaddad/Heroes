import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './heroes/create-hero/create-hero.component';
import { DeleteHeroComponent } from './heroes/delete-hero/delete-hero.component';
import { EditHeroComponent } from './heroes/edit-hero/edit-hero.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-details', component: HeroDetailsComponent },
  { path: 'hero-details/:id', component: HeroDetailsComponent },
  { path: 'create-hero', component: CreateHeroComponent },
  { path: 'edit-hero/:id', component: EditHeroComponent },
  { path: 'delete-hero/:id', component: DeleteHeroComponent },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
