import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


interface ChatInput {
  message: string;
  messageId: number;
 }

@Component({
  selector: 'app-pre-chat',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pre-chat.component.html',
  styleUrl: './pre-chat.component.css'
})
export class PreChatComponent {
  
    chatInput: ChatInput = {} as ChatInput;

}
