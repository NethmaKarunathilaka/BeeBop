import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import app-chat-box
import { ChatBoxComponent } from './components/chat-box/chat-box.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChatBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BeeBop';
}
