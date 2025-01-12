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
}
