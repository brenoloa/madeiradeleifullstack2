import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importe apenas os componentes que serão utilizados diretamente no template do AppComponent
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    SignupComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fabrica-moveis-frontend';
}
