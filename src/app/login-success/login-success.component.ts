import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-success',
  standalone: true,
  imports: [],
  templateUrl: './login-success.component.html',
  styleUrl: './login-success.component.scss'
})
export class LoginSuccessComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToRecomendaciones() {
    this.router.navigate(['/recomendaciones']);
  }


}
