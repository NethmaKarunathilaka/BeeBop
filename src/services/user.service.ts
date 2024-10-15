import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async createUser(user: any) {
        try{
          await axios.post('https://localhost:7117/api/User/CreateUser',  user);
          console.log('User created');
        }
        catch(e){
          console.log(e);

  }
}
}
