import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardlistComponent } from './dashboardlist/dashboardlist.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RickDetailComponent } from './rick-detail/rick-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterParentComponent } from './character-parent/character-parent.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RouteEventsService } from './services/route-events.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DashboardlistComponent,
    RickDetailComponent,
    PageNotFoundComponent,
    SearchCharacterComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterParentComponent,
    FilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule, RouteEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
