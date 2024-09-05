import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  public get getTags(): string[] {
    return this.gifsService.tagsHistory;
  }
  getSameTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
