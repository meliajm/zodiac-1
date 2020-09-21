import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class SignupComponent implements OnInit {

  user: User;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  gender: string;
  date: Date;
  picture: number[];
  
  placement = 'top';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
  
  register() {
    this.user = {
      id: 0,
      username: this.username,
      password: this.password,
      first_name: this.firstname,
      last_name: this.lastname,
      dateOfBirth: this.date.toISOString().slice(0,10),
      description: '',
      gender: parseInt(this.gender),
      picture: null
    }

    this.userService.register(this.user).subscribe(
      response => {
        this.user = response;
        console.log(response);
        console.log("user successfully registered!");
      }, error => {
        console.log(this.user);
        console.log("somethign went wrong!");
      }
    )
  }

}
