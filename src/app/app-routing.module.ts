import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutersComponent } from './routers/routers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterDetailComponent} from './router-detail/router-detail.component';
import { LoginComponent} from './login/login.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'routers', component: RoutersComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'help', component: HelpComponent},
  { path: 'detail/:id', component: RouterDetailComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
