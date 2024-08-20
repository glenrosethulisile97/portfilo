import { Component } from '@angular/core';
import { ScrollFeatureComponent } from '../scroll-feature/scroll-feature.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  Navigation_Pro = [
    'Home','Profile','Skills','Contact','About','Thulisile',
  ]

}
