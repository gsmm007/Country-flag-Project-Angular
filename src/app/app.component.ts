import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`, // Router outlet for navigation
  styleUrls: ['./app.component.css'] // Optional: include styles if needed
})
export class AppComponent {
  title = 'Country List App';
}
