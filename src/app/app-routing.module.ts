import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { DetalleRecomendacionComponent } from './detalle-recomendacion/detalle-recomendacion.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'recomendaciones', component: RecomendacionesComponent},
  { path: 'detalle-recomendacion/:numero', component: DetalleRecomendacionComponent},
  { path: '', redirectTo: '/recomendaciones', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
