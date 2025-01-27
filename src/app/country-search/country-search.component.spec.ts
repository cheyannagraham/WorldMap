import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountrySearchComponent } from './country-search.component';


describe('CountrySearchComponent', () => {
  let component: CountrySearchComponent;
  let fixture: ComponentFixture<CountrySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountrySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountrySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
