import {
  Directive,
  ElementRef,
  NgZone,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
})
export class InViewDirective {
  @Output() inView: EventEmitter<boolean> = new EventEmitter<boolean>();

  private intersectionObserver: IntersectionObserver;

  constructor(private el: ElementRef, private ngZone: NgZone) {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        this.ngZone.run(() => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              this.inView.emit(true);
            }
            // else {
            //   this.inView.emit(false);
            // }
          });
        });
      },
      { threshold: 0.5 }
    );
  }

  ngAfterViewInit() {
    this.intersectionObserver.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.intersectionObserver.disconnect();
  }
}
