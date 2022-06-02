import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWagonComponent } from './create-wagon.component';

describe('CreateWagonComponent', () => {
  let component: CreateWagonComponent;
  let fixture: ComponentFixture<CreateWagonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWagonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWagonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
