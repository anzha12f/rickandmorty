import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterParentComponent } from './character-parent/character-parent.component';
import { DashboardlistComponent } from './dashboardlist/dashboardlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RickDetailComponent } from './rick-detail/rick-detail.component';

const routes: Routes = [
  { path: 'rickDetail/:productId', component: RickDetailComponent },
  { path: 'characters', component: CharacterParentComponent },
  { path: '', component: DashboardlistComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
