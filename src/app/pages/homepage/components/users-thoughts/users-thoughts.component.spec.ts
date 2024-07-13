import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersThoughtsComponent } from './users-thoughts.component';

describe('UsersThoughtsComponent', () => {
  let component: UsersThoughtsComponent;
  let fixture: ComponentFixture<UsersThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersThoughtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
