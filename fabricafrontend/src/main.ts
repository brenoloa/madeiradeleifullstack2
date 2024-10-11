import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importe aqui

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    BrowserAnimationsModule, // Adicione o BrowserAnimationsModule aqui
    // ... outros providers, se houver
  ]
}).catch(err => console.error(err));
