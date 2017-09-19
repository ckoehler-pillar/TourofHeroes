import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let de2: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    de2 = fixture.debugElement.query(By.css('h2'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/Tour of Heroes/i,
      '<h1> should say something about "Tour of Heroes"');
  });

  it('should create a hero', () => expect(comp.hero).toBeDefined() );

  it('should have expected hero name in h2', () => {
    fixture.detectChanges();
    const h2 = de2.nativeElement;
    expect(h2.innerText).toMatch(/WindStorm/i, '<h2> should say something about windstorm');
  });
});
