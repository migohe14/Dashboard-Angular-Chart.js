import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  editMovie: FormGroup;

  @Input() movie: { name: string, year: number, description: string};
  @Output()
  propagar = new EventEmitter<object>();
  constructor() { 

  }

  ngOnInit() {
    this.editMovie = new FormGroup({
      name: new FormControl(''),
      year: new FormControl(''),
      description: new FormControl('')
    });
    this.movie = {name: "name", year: 1999, description: "description"}
    // this.editedMovie = {name: this.movie.name, year: this.movie.year, description: this.movie.description}
  }

  onPropagar(movie) {
    let data = {
      movie: movie,
      editedMovie: this.editMovie
    }
    this.propagar.emit(data);

    this.editMovie.reset()

  }
}
