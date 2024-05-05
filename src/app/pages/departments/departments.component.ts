import { Component } from '@angular/core';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { CardComponent } from '../../units/card/card.component';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [NavbarComponent,CardComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {
  
}
