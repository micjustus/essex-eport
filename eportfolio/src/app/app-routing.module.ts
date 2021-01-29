import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { CourseModuleComponent } from 'src/components/course-module/course-module.component';
import { EssexComponent } from 'src/components/essex/essex.component';
import { IndexComponent } from 'src/components/index/index.component';
import { MastersComponent } from 'src/components/masters/masters.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'studies', component: MastersComponent },
  { path: 'essex', component: EssexComponent },
  { path: 'module', component: CourseModuleComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
