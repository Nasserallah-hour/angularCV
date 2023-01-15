import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculemComponent } from './curriculem.component';

describe('CurriculemComponent', () => {
  let component: CurriculemComponent;
  let fixture: ComponentFixture<CurriculemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurriculemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurriculemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
