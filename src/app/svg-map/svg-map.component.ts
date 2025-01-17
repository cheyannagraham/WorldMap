import {Component, EventEmitter, Output} from '@angular/core';
import {CountryAPIService} from '../services/countryapi.service';

@Component({
  selector: 'wm-svg-map',
  standalone: true,
  imports: [],
  templateUrl: './svg-map.component.svg',
  styleUrl: './svg-map.component.scss'
})
export class SvgMapComponent {
  pathId = '';
  countryApiService;
  selectedCountry: any = {};

  @Output() emitMapClick = new EventEmitter<SVGPathElement>();

  constructor(countryAPIService: CountryAPIService) {
    this.countryApiService = countryAPIService;

  }

  ngOnInit() {
    this.subscribeToSelectedCountry();
  }

  subscribeToSelectedCountry() {
    this.countryApiService.selectedCountry.subscribe(
      country => {
        if (country.code) {
          this.selectedCountry = country;
          const el = document.querySelector(`#${country.code}`) as SVGPathElement;
          this.toggleSelectedClass(el);
          this.updateUseEl(el);
        }
      });
  }

  //for child
  emitEvent(event: MouseEvent) {
    this.emitMapClick.emit(event.target as SVGPathElement);
  }

  // Create circle around selected path of "small" countries
  updateUseEl(el: SVGPathElement) {
    let width = el?.getBoundingClientRect().width;
    let height = el?.getBoundingClientRect().height;
    let totalSize = el?.getTotalLength();
    const avgSize = (width + height) / 2;

    if (avgSize < 35 || totalSize < 30) {
      this.pathId = '#' + this.selectedCountry.code;
      el.classList.add("highlight");
    }
  }

  toggleSelectedClass(element: SVGPathElement) {
    const selected = document.querySelector('.selected');
    selected?.classList.remove('selected');
    element?.classList.add('selected');
  }
}
