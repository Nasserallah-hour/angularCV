import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { ProduitComponent } from './modules/general/produit/produit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurriculemComponent } from './modules/general/curriculem/curriculem.component';
import { CustomCardComponent } from './modules/Widgets/custom-card/custom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    SigninComponent,
    AboutComponent,
    ProduitComponent,
    CurriculemComponent,
    CustomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
