import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContainerComponent } from './layouts/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './layouts/header/search-bar/search-bar.component';
import { IconBarComponent } from './layouts/header/icon-bar/icon-bar.component';
import { NavbarComponent } from './layouts/header/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    NavbarComponent,
    SearchBarComponent,
    IconBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
