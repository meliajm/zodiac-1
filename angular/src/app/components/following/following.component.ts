import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ZodiacService } from '../../services/zodiac.service';
import { User } from '../../models/user';
import { Zodiac } from '../../models/zodiac';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  constructor(private userService:UserService, 
    private zodiacser:ZodiacService,
    private router: Router,
    ) { }

  users: User[];
  id: number;
  user: User;

  // usernames:string[] = [];
  // firstNames:string[]= [];
  // lastNames:string[] =[];
  zodiacs: Zodiac[]=[];
  bdays: string[]=[];
  bdayMonths: string[]=[];
  names: string[]=[];
  bdayDays: string[]=[];



  ngOnInit(): void {
    this.id = (JSON.parse(sessionStorage.getItem('user')).userid);

    this.userService.getFollowing(this.id).subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
        this.users.forEach(element => {
          this.bdays.push(new Date(JSON.parse(element.dateOfBirth)).toUTCString());
          
          console.log(this.bdayMonths);
          console.log(this.bdayDays);
        });
        this.bdays.forEach(element => {
            this.bdayMonths.push(element.split(' ')[2]);
            this.bdayDays.push(element.split(' ')[1]);  
        });
       
        for (let i=0; i<this.bdayMonths.length; i++) {
          if (this.bdayMonths[i]==='Mar') {
            if (parseInt(this.bdayDays[i])>20) {
              this.names.push('aires');
            } else {
              this.names.push('pisces');
            }
          }
          if (this.bdayMonths[i]=='Apr') {
            if (parseInt(this.bdayDays[i])>19) {
              this.names.push('taurus');
            } else {
              this.names.push('aires');
            }
          }
          if (this.bdayMonths[i]=='May') {
            if (parseInt(this.bdayDays[i])>20) {
              this.names.push('gemini');
            } else {
              this.names.push('taurus');
            }
          }
          if (this.bdayMonths[i]=='Jun') {
            if (parseInt(this.bdayDays[i])>20) {
              this.names.push('cancer');
            } else {
              this.names.push('gemini');
            }
          }
          if (this.bdayMonths[i]=='Jul') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('leo');
            } else {
              this.names.push('cancer');
            }
          }
          if (this.bdayMonths[i]=='Aug') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('virgo');
            console.log('names'+this.names)
            } else {
              this.names.push('leo');
            }
          }
          if (this.bdayMonths[i]=='Sep') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('libra');
            } else {
              this.names.push('virgo');
            }
          }

          if (this.bdayMonths[i]=='Oct') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('scorpio');
            } else {
              this.names.push('libra');
            }
          }
          if (this.bdayMonths[i]=='Nov') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('sagittarius');
            } else {
              this.names.push('scorpio');
            }
          }
          if (this.bdayMonths[i]=='Dec') {
            if (parseInt(this.bdayDays[i])>21) {
              this.names.push('capricorn');
            } else {
              this.names.push('sagittarius');
            }
          }
          if (this.bdayMonths[i]=='Jan') {
            if (parseInt(this.bdayDays[i])>19) {
              this.names.push('aquarius');
            } else {
              this.names.push('capricorn');
            }
          }
          if (this.bdayMonths[i]=='Feb') { 
            if (parseInt(this.bdayDays[i])>21) {
              this.names.push('pisces');
            } else {
              this.names.push('aquarius');
            }
          }
        }
        console.log("/////////////////////////names"+this.names);

        // this.names.forEach(name => {
          // this.users.forEach(user => {

       for (let i=0; i<this.users.length; i++) {

       
          this.zodiacser.getMoreInfo(this.names[i]).subscribe(
            (data) => {
              console.log(this.names[i]);
              console.log(data);
              this.users[i]['zodiac'] = data;
              console.log(this.users[i]);
              // this.zodiacs.push(data);
              // console.log('zodiac '+this.zodiacs[0][0].name);
              // console.log(zodiac[0].element);
            }, () => {
              console.log(this.names[i]);
              console.log('uhh did not work!')
            }
          )

            }    
          // )
          
          })
        };

        unfollow(id:number) {
          console.log('follow pressed');
          this.userService.removeFollowing(id).subscribe(
      
            (response: User) => {
              this.user = response;
              this.router.navigate(['/users']);
            }, (error) => {
              console.log(error+" what happened... it did NOT work!");
            }
          );
      
        }
      
      
      
}