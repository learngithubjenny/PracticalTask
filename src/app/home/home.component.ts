import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content?: string;
  user_data?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
        this.content = JSON.parse(data).data;
        // console.log(this.content.email);
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

}
