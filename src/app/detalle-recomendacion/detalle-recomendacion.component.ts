import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-recomendacion',
  templateUrl: './detalle-recomendacion.component.html',
  styleUrls: ['./detalle-recomendacion.component.css']
})
export class DetalleRecomendacionComponent implements OnInit {
  numero: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.numero = this.route.snapshot.paramMap.get('numero');
  }

}
