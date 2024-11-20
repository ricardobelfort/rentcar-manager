import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocacaoListComponent } from './locacao-list.component';

describe('LocacaoListComponent', () => {
  let component: LocacaoListComponent;
  let fixture: ComponentFixture<LocacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocacaoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
