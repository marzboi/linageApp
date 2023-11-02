import {
  Directive,
  ElementRef,
  Renderer2,
  NgZone,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
})
export class InViewDirective {
  @Output() inView: EventEmitter<void> = new EventEmitter();

  private intersectionObserver: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        this.ngZone.run(() => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              this.inView.emit();
            }
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
