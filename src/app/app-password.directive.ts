import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppPassword]'
})
export class AppPasswordDirective {
  // tslint:disable-next-line: variable-name
  private _shown = false;

  constructor(private el: ElementRef) {
    this.setup();
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = `Show password`;
    span.addEventListener('click', (event) => {
      alert('you just clicked me, you need to toggle view');
    });
    parent.appendChild(span);
  }
}
