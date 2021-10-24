import { Component, OnInit } from '@angular/core';
import {
  volunteer,
  donation,
  recurring250,
  recurring500,
  recurring1000,
  recurring2500,
  recurring5000,
  recurring10000,
} from 'src/app/shared/links.config';
import { uiroutes } from 'src/app/shared/ui-routes';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  volunteer = volunteer;
  donation = donation;
  recurring250 = recurring250;
  recurring500 = recurring500;
  recurring1000 = recurring1000;
  recurring2500 = recurring2500;
  recurring5000 = recurring5000;
  recurring10000 = recurring10000;
  termsConditions = uiroutes.TERMS_CONDITIONS_ROUTE;
  refund = uiroutes.REFUND_ROUTE;

  constructor() {}

  ngOnInit(): void {}
}
