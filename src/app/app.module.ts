import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Ajout pour la gestion des formulaires

import { AppRoutingModule } from './app-routing.module'; // Gestion des routes
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form/product-form.component'; // Import du formulaire
import { ProductListComponent } from './product/product-list/product-list.component'; // Import de la liste

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    ProductComponent,    
    ProductFormComponent,  
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,             
    AppRoutingModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
