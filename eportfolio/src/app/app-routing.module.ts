import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { CourseModuleComponent } from 'src/components/course-module/course-module.component';
import { EssexComponent } from 'src/components/essex/essex.component';
import { IndexComponent } from 'src/components/index/index.component';
import { MastersComponent } from 'src/components/masters/masters.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';
import { ReflectionsComponent } from 'src/components/reflections/reflections.component';
import { StudiesComponent } from 'src/components/studies/studies.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'studies',
    component: StudiesComponent,
    children:
    [
      {
        path: '', component: MastersComponent
      },
      {
        path: 'module/:id', component: CourseModuleComponent,
        children:[
        ]
      },
      { path: 'essex', component: EssexComponent },
      { path: "reflections", component: ReflectionsComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
