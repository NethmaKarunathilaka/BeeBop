import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
//import Forms module
import { FormsModule } from '@angular/forms';


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

onSubmit() {
throw new Error('Method not implemented.');
}

}
