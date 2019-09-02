import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  step: number = 1;
  movies: { name: string, year: number, description: string,image: string }[] = [{name: "Interestellar", year: 2018, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "../../assets/interestellar.jpg"}, {name: "Naúfrago", year: 1993, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "../../assets/naufrago.jpg"}, {name: "Origen", year: 2016, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "../../assets/origen.jpg"}, {name: "Forest Gump", year: 1999, description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", image: "../../assets/forestgump.jpg"}];
  status: string;
  constructor() { }

  ngOnInit() {
  }
  prevStep() {
    return this.step--;
  }
  nextStep() {
    return this.step++;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  procesaPropagar(data) {
    // this.movies.push(editedMovie)
    // console.log(data.movie.value);
    let index =  this.movies.map((e) => { return e.name; }).indexOf(data.movie.name);
    
    this.movies[index].name = data.editedMovie.value.name
    this.movies[index].year = data.editedMovie.value.year
    this.movies[index].description = data.editedMovie.value.description

    // console.log(data.editedMovie.value);
  }

  getColor() {
    return Math.random() > 0.5 ? 'red' : 'green';
  }

}
