import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
//import Forms module
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';


interface User{
     username: string;
     password: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

user : User ={} as User;

constructor( 
  private userService: UserService,

) { }

async onSubmit() {
  try{
  await this.userService.createUser(this.user);
  console.log('User created');
  }
  catch(e){
    console.log(e);
  }
}

}
