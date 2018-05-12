import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[href]',
  // tslint:disable-next-line:use-host-property-decorator
  host: { '(click)': 'preventDefault($event)' },
})
export class HrefPreventDefaultDirective implements AfterViewInit {
  @Input() href: string;

  constructor(private el: ElementRef) {

  }
  ngAfterViewInit() {

  }
  preventDefault(event) {
    if (this.href.length === 0 || this.href === '#') {
      event.preventDefault();
    }
  }

}
