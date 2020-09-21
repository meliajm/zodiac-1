import { Component, OnInit } from '@angular/core';
import { DatashareService } from 'src/app/services/datashare.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: User;
  isUserLoggedIn: boolean;

  constructor(
    private dataShare: DatashareService,
    private userService: UserService,
    private router: Router) {
      this.dataShare.user.subscribe(value => {
        this.user = JSON.parse(localStorage.getItem('user'));
      })
    this.dataShare.loggedIn.subscribe(value => {
      this.isUserLoggedIn = JSON.parse(localStorage.getItem('loggedin'));
    });
  }

  ngOnInit(): void {

  }

  logout() {
    this.userService.logout(this.user).subscribe(
      response => {
        localStorage.clear();
        this.router.navigate(['/']);
      }, error => {
        console.log("logout failed, somehow!");
      }
    )
  }

}
