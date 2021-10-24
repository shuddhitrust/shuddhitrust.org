import { Component, OnInit } from '@angular/core';
import { uiroutes } from 'src/app/shared/ui-routes';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss'],
})
export class RefundComponent implements OnInit {
  contact = uiroutes.CONTACT_ROUTE;
  constructor() {}

  ngOnInit(): void {}
}
