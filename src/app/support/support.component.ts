import { Component, OnInit } from '@angular/core';
import { volunteer, patreon, upi } from 'src/links.config';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  volunteer = volunteer;
  patreon = patreon;
  upi = upi;
  upiModalOpen = false;

  constructor() {}

  copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = upi;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  openUpiModal() {
    window.scroll(0, 0);
    console.log('opening upi modal...');
    this.copyToClipboard();
    this.upiModalOpen = true;

    /* Alert the copied text */
    // window.alert(upi + '\n\nUPI ID copied to clipboard!');
  }
  closeUpiModal() {
    this.upiModalOpen = false;
  }
  ngOnInit(): void {}
}
