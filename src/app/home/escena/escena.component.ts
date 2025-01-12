import { Component, Input } from '@angular/core';
import { IStep } from '../../interfaces/i-step';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escena',
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
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
