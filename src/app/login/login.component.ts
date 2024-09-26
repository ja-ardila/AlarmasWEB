import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Import here
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule], // Add ReactiveFormsModule here
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    // Initialize the form group
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Additional initialization if needed
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle form submission
      this.router.navigate(['/login-success']);
      console.log('Form Submitted!');
      // Here you could also add logic for authentication
    } else {
      console.log('Form is invalid');
    }
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }

}


