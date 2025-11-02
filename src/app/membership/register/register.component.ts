import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Customer } from '../models/customer';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model = new Customer(
    'Ravi',
    'Tambade',
    'ravi.tambade@transflower.in',
    9881735801,
    28,
    new Date(1975, 8, 18),
    'Pune',
    'gold',
    false,
    ['Facebook', 'Twitter']
  );

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('✅ Form Submitted');
    console.log('Form Data:', this.model);
    alert('Registered Successfully!');
     // Save to localStorage
     sessionStorage.setItem('customerData', JSON.stringify(this.model));
    this.router.navigate(['../sign-in']);
  }
}
