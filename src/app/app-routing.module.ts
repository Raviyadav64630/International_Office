import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'news',component : NewsComponent},
  {path:'chat',component : ChatComponent},
  {path:'events',component : EventsComponent, canActivate: [AuthGuard]},
  {path:'navigation',component : NavigationComponent, canActivate: [AuthGuard]},
  {path:'login',component : LoginComponent},
  {path:'courses',component : CoursesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsComponent, EventsComponent, NavigationComponent, LoginComponent, CoursesComponent]
