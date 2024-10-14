import { Component, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { MessageService } from '../../../services/message.service';



interface ChatInput {
 message: string;
}

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,FormsModule ],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {

  constructor(private messageService: MessageService) { 
    
  }

  chatInput: ChatInput = {} as ChatInput;

  //add initialiser to messageId


  onSend() {
    this.messageService.submitMessage(this.chatInput.message);
    console.log(this.chatInput.message);
    this.chatInput.message = '';
  }



}
