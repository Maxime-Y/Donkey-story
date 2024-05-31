import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonkeyService } from '../donkey.service';
import { Donkey } from '../donkey.model';

@Component({
  selector: 'app-list-donkey',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-donkey.component.html',
  styleUrls: ['./list-donkey.component.css']
})
export class ListDonkeyComponent implements OnInit {
  donkeys: Donkey[] = [];

  constructor(private donkeyService: DonkeyService) {}

  ngOnInit() {
    this.donkeyService.donkeys$.subscribe(donkeys => this.donkeys = donkeys);
  }

  toggleDetails(donkey: Donkey, show: boolean) {
    donkey.showInfo = show;
  }

  removeDonkey(donkey: Donkey) {
    this.donkeyService.removeDonkey(donkey);
  }

  adoptDonkey(donkey: Donkey) {
    this.donkeyService.adoptDonkey(donkey);
  }
}
