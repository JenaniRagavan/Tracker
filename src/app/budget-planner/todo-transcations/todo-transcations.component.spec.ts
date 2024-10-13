import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTranscationsComponent } from './todo-transcations.component';

describe('TodoTranscationsComponent', () => {
  let component: TodoTranscationsComponent;
  let fixture: ComponentFixture<TodoTranscationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoTranscationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTranscationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
