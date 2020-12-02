import {AfterContentInit, Directive, ElementRef} from '@angular/core';
import {CityCoordsInterface} from '../interfaces/interfaces';
import {cityCoords} from '../data-static/city-coords';
import {fromEvent} from 'rxjs';

@Directive({
  selector: '[appAnimateLogo]'
})
export class AnimateLogoDirective implements AfterContentInit {

  private intervalId;
  private cityCoords: Array<CityCoordsInterface>;
  private isIntervalWork: boolean;

  constructor(private container: ElementRef) { }

  ngAfterContentInit(): void {
    this.cityCoords = cityCoords;
    this.interval();
    this.subscribeToScrollEvent();
  }

  private subscribeToScrollEvent(): void {
    fromEvent(window, 'scroll')
      .subscribe(_ => {
        const {offsetHeight} = this.container.nativeElement.parentNode.closest('.wrap');
        const {pageYOffset} = window;

        if (pageYOffset > offsetHeight && this.isIntervalWork) {
          clearInterval(this.intervalId);
          this.isIntervalWork = false;
        }

        if (pageYOffset < offsetHeight && !this.isIntervalWork) {
          this.interval();
        }
      })
  }

  private interval(): void {
    this.isIntervalWork = true;
    this.intervalId = setInterval( () => {
      this.addLogo();
    }, 150);
  }

  private createLogo(index: number): void {
    const logo = document.createElement('div');
    logo.innerHTML = `<i class="fab fa-vimeo-v"></i>`;
    logo.classList.add('logo');
    logo.setAttribute(
      'style',
      `bottom: ${this.cityCoords[index].y}%; right: ${this.cityCoords[index].x}%`);

    this.container.nativeElement.appendChild(logo);
    this.removeLogo(logo);
  }

  private addLogo(): void {
    const randomIndex = Math.floor(Math.random() * this.cityCoords.length);
    this.createLogo(randomIndex);
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
