import {AfterContentInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAnimateLogo]'
})
export class AnimateLogoDirective implements AfterContentInit {

  private intervalId;

  constructor(private container: ElementRef) { }

  ngAfterContentInit(): void {
   this.intervalId = setInterval( () => {
      this.addLogo();
    }, 100);
  }

  private createLogo(x, y): void {
    const logo = document.createElement('div');
    logo.innerHTML = `<i class="fab fa-vimeo-v"></i>`;
    logo.classList.add('logo');
    logo.setAttribute('style', `left: ${x}px; top: ${y}px;`);
    this.container.nativeElement.appendChild(logo);

    this.removeLogo(logo);
  }

  private addLogo(): void {
    // this.createLogo(Math.floor(Math.random() * 400), Math.floor(Math.random() * 400));
  }

  private removeLogo(logo: HTMLDivElement): void {
    setTimeout(() => {
      logo.classList.add('animate');
    }, 500);

    setTimeout(() => {
      logo.remove();
    }, 2500);
  }
}
