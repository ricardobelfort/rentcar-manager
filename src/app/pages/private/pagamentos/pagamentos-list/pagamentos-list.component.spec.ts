import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosListComponent } from './pagamentos-list.component';

describe('PagamentosListComponent', () => {
  let component: PagamentosListComponent;
  let fixture: ComponentFixture<PagamentosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
