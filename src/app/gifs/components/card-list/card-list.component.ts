import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];
}
