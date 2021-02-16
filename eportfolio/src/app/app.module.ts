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
import { ReflectionsComponent } from '../components/reflections/reflections.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from '../components/hero/hero.component';
import { StudiesComponent } from '../components/studies/studies.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DataService } from 'src/data/dataService';
import { ArtefactsComponent } from '../components/artefacts/artefacts.component';
import { AccordionComponent } from 'src/components/accordion/accordion.component';
import { WritingsComponent } from 'src/components/writings/writings.component';



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
    ReflectionsComponent,
    HeroComponent,
    StudiesComponent,
    SidebarComponent,
    ArtefactsComponent,
    AccordionComponent,
    WritingsComponent
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
