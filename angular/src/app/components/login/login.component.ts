import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: UserService,
    private router: Router
    ) { }

  user: User;
  username: string;
  password: string;
  loading = false;

  ngOnInit(): void {
    
  }

  login() {
    this.user = {
      id: 0,
      username: this.username,
      password: this.password,
      first_name: '',
      last_name: '',
      date_of_birth: '',
      zodiac: '',
      description: '',
      gender: 0
    }

    this.loading = true;
    this.loginService.login(this.user).subscribe(
      (response: User) => {
        this.user = response;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('loggedin', 'true');
        console.log(localStorage);
        this.router.navigate(['/dashboard']);
      }, error => {
        this.loading = false;
        console.log("what happened... it didn't work!");
      }
    );
  }

}
