import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-success',
  standalone: true,
  imports: [],
  templateUrl: './register-success.component.html',
  styleUrl: './register-success.component.scss'
})
export class RegisterSuccessComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRecomendaciones() {
    this.router.navigate(['/recomendaciones']);
  }


}
