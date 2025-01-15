import { Component, Input } from '@angular/core';
import { IStep } from '../interfaces/i-step';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(120%)', opacity: 0 }),
        animate(
          '700ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate(
          '50ms ease-out',
          style({ transform: 'translateX(100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class EscenaComponent {
  @Input() stepsChild: IStep[] = [];

  currentStep = 0;

  nextStep(): void {
    if (this.currentStep < this.stepsChild.length - 1) {
      this.currentStep++;
    }
  }
  beforeStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
