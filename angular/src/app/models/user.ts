export class User {
    //String username, int password, String firstName, String lastName, Date dateOfBirth, String description,int gender, byte[] picture
    userid: number;
    username:string;
    firstName:string;
    lastName:string;
    dateOfBirth:string;
    description: string;
    gender:number;
    //picture:number[];

    constructor(
    userid: number,
    username:string,
    firstName:string,
    lastName:string,
    dateOfBirth:string,
    description: string,
    gender:number
    ){
    this.userid = userid;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.description = description;
    this.gender = gender;
    }
}
