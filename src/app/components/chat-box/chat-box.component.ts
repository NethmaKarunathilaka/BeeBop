import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ChatInputComponent } from "../chat-input/chat-input.component";
import { ChatReplyComponent } from "../chat-reply/chat-reply.component";
import {PreChatComponent} from '../pre-chat/pre-chat.component';



@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [MatCardModule, ChatInputComponent,PreChatComponent,ChatReplyComponent],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {

}
