import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonkeyService } from '../donkey.service';
import { Donkey } from '../donkey.model';

@Component({
  selector: 'app-user-donkey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-donkey.component.html',
  styleUrls: ['./user-donkey.component.css']
})
export class UserDonkeyComponent implements OnInit {
  adoptedDonkeys: Donkey[] = [];

  constructor(private donkeyService: DonkeyService) {}

  ngOnInit() {
    this.donkeyService.adoptedDonkeys$.subscribe(donkeys => this.adoptedDonkeys = donkeys);
  }

  toggleDetails(donkey: Donkey, show: boolean) {
    donkey.showInfo = show;
  }

  removeAdoptedDonkey(donkey: Donkey) {
    this.donkeyService.removeAdoptedDonkey(donkey);
  }

  unadoptDonkey(donkey: Donkey) {
    this.donkeyService.unadoptDonkey(donkey);
  }
}
