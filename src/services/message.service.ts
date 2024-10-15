import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  async submitMessage(message: string) {
    try{
      await axios.post('https://localhost:7117/api/Message/SubmitMessage', { message});
      console.log('Message sent');
    }
    catch(e){
      console.log(e);
    }
       
  }
}
