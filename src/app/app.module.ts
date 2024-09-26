import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DetalleRecomendacionComponent } from './detalle-recomendacion/detalle-recomendacion.component';
import { DateComponent } from './date/date.component';
import { MatCalendar } from '@angular/material/datepicker';
import { MatCard } from '@angular/material/card';


@NgModule({
  declarations: [			
    AppComponent,
    RecomendacionesComponent,
    DetalleRecomendacionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCalendar,
    MatCard,
    DateComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
