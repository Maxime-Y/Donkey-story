import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDonkeyComponent } from '../create-donkey/create-donkey.component';
import { ListDonkeyComponent } from '../list-donkey/list-donkey.component';
import { UserDonkeyComponent } from '../user-donkey/user-donkey.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CreateDonkeyComponent, ListDonkeyComponent, UserDonkeyComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
