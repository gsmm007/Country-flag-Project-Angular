import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.css'],
  //standalone: true
})
export class CountryFlagComponent implements OnInit {

  countriesInfo: any;


  constructor(private cfService: CountriesService, private router: Router) { }

  ngOnInit() {
    this.cfService.getCountriesInfo().subscribe(res=> {
      try {
        this.countriesInfo = res
      } catch (error) {
        error("Unable to Fecth Data !!!")
      }
    })

  }

  showCountryDetails(country) {
    this.router.navigate(['/country', country.cca3]);
  }



}
