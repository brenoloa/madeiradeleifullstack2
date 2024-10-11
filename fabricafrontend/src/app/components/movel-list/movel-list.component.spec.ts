import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovelListComponent } from './movel-list.component';

describe('MovelListComponent', () => {
  let component: MovelListComponent;
  let fixture: ComponentFixture<MovelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovelListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
