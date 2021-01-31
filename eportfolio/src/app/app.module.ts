import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastersComponent } from '../components/masters/masters.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutComponent } from '../components/about/about.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { IndexComponent } from '../components/index/index.component';
import { EssexComponent } from '../components/essex/essex.component';
import { CourseModuleComponent } from '../components/course-module/course-module.component';
import { DataService } from 'src/dataService';
import { ReflectionsComponent } from '../components/reflections/reflections.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MastersComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NotFoundComponent,
    IndexComponent,
    EssexComponent,
    CourseModuleComponent,
    ReflectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
