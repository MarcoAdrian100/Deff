
import { Component } from '@angular/core';

interface Movie {
  imageSrc: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  movies: Movie[] = [
    {
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Movie 1',
      description: 'This is the description for movie 1.'
    },
    {
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Movie 2',
      description: 'This is the description for movie 2.'
    },
    {
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Movie 3',
      description: 'This is the description for movie 3.'
    }
  ];

  viewDetails(movie: Movie) {
    alert(`More details about ${movie.title}`);
  }
}
