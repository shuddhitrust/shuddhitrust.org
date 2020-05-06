import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { videos } from './../../videos.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos = videos;
  constructor(private sanitizer: DomSanitizer) {
    this.videos = this.videos.map(v => {
      return { ...v, url: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + v.id) }
    })
  }

  slideClass(i) {
    return i == 0 ? "carousel-item active" : "carousel-item"
  }

  ngOnInit(): void {
  }

}
