import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showForm: boolean = false;
  alertForm: boolean = false;
  user = {
    name: '',
    lastname: '',
    job: '',
  }
  users: { name: string, lastname: string, job: string }[] = [{name: "Pepe", lastname: "Garcia", job: "BackEnd"}, {name: "Marco", lastname: "Polo", job: "FrontEnd"}, {name: "Paco", lastname: "Chocolate", job: "QA"}];
  notifications: string [] = [];
  userbtn: boolean = false;
  constructor() { 
    setTimeout(() => {
      this.userbtn = true;
    }, 2000)
  }

  ngOnInit() {
  }
  addUser() {
    let user = {name: this.user.name, lastname: this.user.lastname, job: this.user.job};
    this.users.push(user);

    this.user.name = '';
    this.user.lastname = '';
    this.user.job = '';

    this.notifications.push(this.user.name)
    this.alertForm = true;
  }
  deleteUser(user) {
    let index = this.users.indexOf(user)
    this.users.splice(index, 1)
    console.log(this.users)
  }

  displayForm() {
    this.showForm = true;
  }
  hiddeForm() {
    this.showForm = false;
  }
}
