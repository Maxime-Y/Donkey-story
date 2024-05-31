import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DonkeyService } from '../donkey.service';

@Component({
  selector: 'app-create-donkey',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-donkey.component.html',
  styleUrls: ['./create-donkey.component.css']
})
export class CreateDonkeyComponent {
  donkeyForm: FormGroup;

  constructor(private fb: FormBuilder, private donkeyService: DonkeyService) {
    this.donkeyForm = this.fb.group({
      name: ['', Validators.required],
      origin: ['', Validators.required],
      birthDate: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.donkeyForm.valid) {
      this.donkeyService.addDonkey(this.donkeyForm.value);
      this.donkeyForm.reset();
    }
  }
}
