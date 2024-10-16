import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {

  countryDetails;
  currentCountryDetail
  currentCountryProps;

  constructor(private countryDetailRoute: ActivatedRoute, private cfs: CountriesService) { }

  ngOnInit() {

    const cc = this.countryDetailRoute.snapshot.paramMap.get('cc');
    this.cfs.getCountriesInfo().subscribe(res  => {
      this.countryDetails = res
      this.currentCountryDetail = this.countryDetails.find(item => item.cca3 === cc);
      if (this.currentCountryDetail) {
        this.currentCountryProps = Object.keys(this.currentCountryDetail); 
      }
    });

  }

  isArray(value) {
    return Array.isArray(value);
  }

  isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  objectKeys(value) {
    return Object.keys(value);
  }

  displayObject(obj: any, parentKey: string = '') {
    const res = [];
    for (const key in obj) {
      if (this.isObject(obj[key])) {
        res.push(...this.displayObject(obj[key], `${parentKey}${key}.`));
      } else {
        res.push({ key: `${parentKey}${key}`, value: obj[key] });
      }
    }
    return res;
  }


}
