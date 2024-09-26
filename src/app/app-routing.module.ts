import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { DetalleRecomendacionComponent } from './detalle-recomendacion/detalle-recomendacion.component';
import { LoginComponent } from './login/login.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';

const routes: Routes = [
  { path: 'recomendaciones', component: RecomendacionesComponent },
  { path: 'detalle-recomendacion/:numero', component: DetalleRecomendacionComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Cambiado a '/login'
  { path: 'login', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  { path: 'register', component: RegisterSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

