import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-chat-reply',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './chat-reply.component.html',
  styleUrl: './chat-reply.component.css'
})
export class ChatReplyComponent {

}
