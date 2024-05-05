import { Component } from '@angular/core';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { CarouselComponent } from '../../units/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
