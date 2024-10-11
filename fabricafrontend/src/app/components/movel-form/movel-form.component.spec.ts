import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovelFormComponent } from './movel-form.component';

describe('MovelFormComponent', () => {
  let component: MovelFormComponent;
  let fixture: ComponentFixture<MovelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovelFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
