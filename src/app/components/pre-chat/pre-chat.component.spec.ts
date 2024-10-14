import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreChatComponent } from './pre-chat.component';

describe('PreChatComponent', () => {
  let component: PreChatComponent;
  let fixture: ComponentFixture<PreChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
