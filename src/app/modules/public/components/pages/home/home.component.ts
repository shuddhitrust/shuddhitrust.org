import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { parseDateTime } from 'src/app/shared/functions';
import { shuddhiVidhya, videos, Video } from 'src/app/shared/links.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('iframeContainer') iframeContainer: QueryList<ElementRef>;

  shuddhiVidhya = shuddhiVidhya;
  videos: Video[] = videos.slice(0, 10);
  constructor(private sanitizer: DomSanitizer) {
    this.videos = this.videos.map((v) => {
      return {
        ...v,
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/' + v.id
        ),
        srcdoc: `<a href=https://www.youtube.com/embed/${v.id}?autoplay=1><img src=https://img.youtube.com/vi/${v.id}/hqdefault.jpg alt='${v.title}'><span>▶</span></a>`,
      };
    });
  }

  ngAfterViewInit() {
    this.loadStyleToIframe();
  }

  /**
   * Using this to lazy load the iframes of the YouTube videos
   */
  loadStyleToIframe = () => {
    // @ts-ignore
    const allvideos = this.iframeContainer._results.map(
      (iframe) => iframe.nativeElement
    );
    allvideos.forEach((iframe) => {
      iframe?.addEventListener('load', function (event) {
        const new_style_element = document.createElement('style');
        new_style_element.textContent =
          '{padding:0;margin:0;overflow:hidden}html,body{height:100%; overflow: hidden;}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}';
        iframe.contentDocument.head.appendChild(new_style_element);
      });
    });
  };
  parseDate(dateString) {
    const date = new Date(dateString).toDateString();
    return parseDateTime(date);
  }

  slideClass(i) {
    return i == 0 ? 'carousel-item active' : 'carousel-item';
  }

  ngOnInit(): void {}
}
