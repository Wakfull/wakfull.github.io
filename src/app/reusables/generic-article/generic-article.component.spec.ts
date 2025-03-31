import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericArticleComponent } from './generic-article.component';

describe('GenericArticleComponent', () => {
  let component: GenericArticleComponent;
  let fixture: ComponentFixture<GenericArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
