import { Routes } from '@angular/router';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/chatBox', pathMatch: 'full'},
    {path: 'chatBox', component: ChatBoxComponent},
    {path:'login', component: LoginComponent},
];
