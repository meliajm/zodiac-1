import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  user: User;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  gender: number;
  date: Date;
  zodiac: string;
  
  placement = 'top';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  calcZodiac(): string {
    let bday = new Date(this.date).toUTCString();
    let bdayMonth = bday.split(' ')[2];
    let bdayDay = bday.split(' ')[1];

    if (bdayMonth === 'Mar') {
      //aires or pisces
      if (parseInt(bdayDay) > 20) {
        return 'aries';
      } else {
        return 'pisces';
      }
    }
    if (bdayMonth == 'Apr') {
      if (parseInt(bdayDay) > 19) {
        return 'taurus';
      } else {
        return 'aries';
      }
    }
    if (bdayMonth == 'May') {
      if (parseInt(bdayDay) > 20) {
        return 'gemini';
      } else {
        return 'taurus';
      }
    }
    if (bdayMonth == 'Jun') {
      if (parseInt(bdayDay) > 20) {
        return 'cancer';
      } else {
        return 'gemini';
      }
    }
    if (bdayMonth == 'Jul') {
      if (parseInt(bdayDay) > 22) {
        return 'leo';
      } else {
        return 'cancer';
      }
    }
    if (bdayMonth == 'Aug') {
      if (parseInt(bdayDay) > 22) {
        return 'virgo';
      } else {
        return 'leo';
      }
    }
    if (bdayMonth == 'Sep') {
      if (parseInt(bdayDay) > 22) {
        return 'libra';
      } else {
        return 'virgo';
      }
    }

    if (bdayMonth == 'Oct') {
      if (parseInt(bdayDay) > 22) {
        return 'scorpio';
      } else {
        return 'libra';
      }
    }
    if (bdayMonth == 'Nov') {
      if (parseInt(bdayDay) > 22) {
        return 'sagittarius';
      } else {
        return 'scorpio';
      }
    }
    if (bdayMonth == 'Dec') {
      if (parseInt(bdayDay) > 21) {
        return 'capricorn';
      } else {
        return 'sagittarius';
      }
    }
    if (bdayMonth == 'Jan') {
      if (parseInt(bdayDay) > 19) {
        return 'aquarius';
      } else {
        return 'capricorn';
      }
    }
    if (bdayMonth == 'Feb') {
      if (parseInt(bdayDay) > 21) {
        return 'pisces';
      } else {
        return 'aquarius';
      }
    }
  }

  register() {
    this.user = {
      id: 0,
      username: this.username,
      password: this.password,
      first_name: this.firstname,
      last_name: this.lastname,
      date_of_birth: new Date(this.date).toUTCString(),
      zodiac: this.calcZodiac(),
      description: '',
      gender: this.gender
    }

    this.userService.register(this.user).subscribe(
      response => {
        this.user = response;
        console.log(response);
        console.log("user successfully registered!");
      }, error => {
        console.log("somethign went wrong!");
      }
    )
  }

}
