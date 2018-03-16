import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BranchComponent } from './branch/branch.component';
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BranchService} from "./branch.service";
import { FunctionalAreasComponent } from './functional-areas/functional-areas.component';
import { MenuComponent } from './menu/menu.component';
import {FunctionalAreasService} from "./functional-areas.service";

const routes: Routes = [
  {path: 'branch', component: BranchComponent},
  {path: 'fa', component: FunctionalAreasComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    FunctionalAreasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [BranchService,FunctionalAreasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
