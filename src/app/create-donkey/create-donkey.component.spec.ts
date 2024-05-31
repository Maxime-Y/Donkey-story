import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDonkeyComponent } from './create-donkey.component';

describe('CreateDonkeyComponent', () => {
  let component: CreateDonkeyComponent;
  let fixture: ComponentFixture<CreateDonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDonkeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
