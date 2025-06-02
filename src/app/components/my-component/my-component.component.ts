import { Component } from '@angular/core'
import { NzInfiniteScrollComponent } from '../nz-infinite-scroll/nz-infinite-scroll.component'

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [
    NzInfiniteScrollComponent,
  ],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss',
})
export class MyComponentComponent {}
