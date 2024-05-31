import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Donkey } from './donkey.model';

@Injectable({
  providedIn: 'root'
})
export class DonkeyService {
  private donkeysSubject = new BehaviorSubject<Donkey[]>([]);
  donkeys$ = this.donkeysSubject.asObservable();

  private adoptedDonkeysSubject = new BehaviorSubject<Donkey[]>([]);
  adoptedDonkeys$ = this.adoptedDonkeysSubject.asObservable();

  addDonkey(donkey: Donkey) {
    const currentDonkeys = this.donkeysSubject.getValue();
    this.donkeysSubject.next([...currentDonkeys, donkey]);
  }

  adoptDonkey(donkey: Donkey) {
    this.removeDonkey(donkey);
    const currentAdoptedDonkeys = this.adoptedDonkeysSubject.getValue();
    this.adoptedDonkeysSubject.next([...currentAdoptedDonkeys, donkey]);
  }

  removeDonkey(donkey: Donkey) {
    const currentDonkeys = this.donkeysSubject.getValue().filter(d => d !== donkey);
    this.donkeysSubject.next(currentDonkeys);
  }

  removeAdoptedDonkey(donkey: Donkey) {
    const currentAdoptedDonkeys = this.adoptedDonkeysSubject.getValue().filter(d => d !== donkey);
    this.adoptedDonkeysSubject.next(currentAdoptedDonkeys);
  }

  unadoptDonkey(donkey: Donkey) {
    this.removeAdoptedDonkey(donkey);
    this.addDonkey(donkey);
  }
}
