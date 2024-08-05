import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsaDragonComponent } from './osa-dragon.component';

describe('OsaDragonComponent', () => {
  let component: OsaDragonComponent;
  let fixture: ComponentFixture<OsaDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsaDragonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsaDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
