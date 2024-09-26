import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { DetalleRecomendacionComponent } from './detalle-recomendacion/detalle-recomendacion.component';
import { AdvertenciasComponent } from './advertencias/advertencias.component';

const routes: Routes = [
  { path: 'recomendaciones', component: RecomendacionesComponent},
  { path: 'detalle-recomendacion/:numero', component: DetalleRecomendacionComponent},
  { path: 'advertencias', component: AdvertenciasComponent},
  { path: '', redirectTo: '/recomendaciones', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
