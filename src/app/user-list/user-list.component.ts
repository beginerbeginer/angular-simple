import { User } from '../user.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get users() {
    let user1 = new User('foo');
    let user2 = new User('bar', 'John', 'Doe', 'foo@example.com');
    return [user1, user2]
  }

}
