import {Component} from '@angular/core';
import {CountryAPIService} from '../services/countryapi.service';
import {CountryDetails} from '../services/countryapi.service';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'wm-details',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  countryDetails: CountryDetails = {
    name: '',
    language: '',
    currency: '',
    incomeLevel: '',
    capital: '',
    region: '',
    population: ''
  };
  countryService: CountryAPIService;

  constructor(countryService: CountryAPIService) {
    this.countryService = countryService;

  }

  ngOnInit() {
    this.subscribeToSelectedCountry()
  }

  subscribeToSelectedCountry() {
    this.countryService.countryDetails.subscribe(country => {
        this.countryDetails = country;
      }
    )
  }
}
