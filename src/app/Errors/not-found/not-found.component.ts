import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  user: User;

  ngOnInit(): void { 
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
  constructor() {
  }
}
