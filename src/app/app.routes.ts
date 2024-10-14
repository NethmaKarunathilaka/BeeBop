import { Routes } from '@angular/router';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: '', redirectTo: '/chatBox', pathMatch: 'full'},
    {path: 'chatBox', component: ChatBoxComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent}
];
