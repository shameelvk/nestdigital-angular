import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardData = [
    {
      title: 'Aerospace Business Unit',
      image: 'https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-20-1.jpg',
      description: 'Specializing in aerospace engineering and technology, our business unit is committed to pushing the boundaries of flight. From designing cutting-edge aircraft to advancing space exploration, we are at the forefront of innovation in the aerospace industry.',
      link: 'aerospace.html'
    },
    {
      title: 'Mobility Business Unit',
      image: 'https://nestdigital.com/wp-content/uploads/2023/04/Rectangle-20-1.jpg',
      description: 'Our mobility business unit focuses on revolutionizing transportation. We develop innovative solutions for urban mobility, autonomous vehicles, and sustainable transportation systems. Join us in shaping the future of mobility.',
      link: 'mobility.html'
    },
    {
      title: 'Industrial Business Unit',
      image: 'https://nestdigital.com/wp-content/uploads/2023/06/Rectangle-167.jpg',
      description: 'As leaders in industrial technology, our business unit drives progress in manufacturing, automation, and industrial IoT. We empower industries to optimize operations, enhance productivity, and embrace digital transformation.',
      link: 'industrial.html'
    },
    {
      title: 'Banking & Financial Services',
      image: 'https://nestdigital.com/wp-content/uploads/2023/08/Rectangle-365.jpg',
      description: 'Our banking and financial services unit delivers cutting-edge solutions for the finance industry. From secure payment platforms to advanced analytics, we empower financial institutions to thrive in the digital age.',
      link: 'banking.html'
    },
    {
      title: 'GIS',
      image: 'https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-85-1-2.jpg',
      description: 'Geographic Information Systems (GIS) are at the heart of our spatial data solutions. Our GIS business unit provides comprehensive mapping, analysis, and visualization tools for industries ranging from urban planning to environmental management.',
      link: 'gis.html'
    },
    {
      title: 'Healthcare Business Unit',
      image: 'https://nestdigital.com/wp-content/uploads/2023/06/Rectangle-168.jpg',
      description: 'Dedicated to improving healthcare outcomes, our business unit develops innovative software solutions for healthcare providers. From electronic health records to telemedicine platforms, we strive to enhance patient care and streamline operations.',
      link: 'healthcare.html'
    }
  ];
}
