import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTitle } from './categoria-title';

describe('CategoriaTitle', () => {
  let component: CategoriaTitle;
  let fixture: ComponentFixture<CategoriaTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
