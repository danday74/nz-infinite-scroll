import { Component } from '@angular/core'
import { MyComponentComponent } from './components/my-component/my-component.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MyComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
