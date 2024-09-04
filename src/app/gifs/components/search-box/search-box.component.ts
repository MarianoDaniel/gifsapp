import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar:</h5>
    <input (keyup.enter)="searchTag()" type="text" class="form-control" placeholder="Buscar gifs..." #txtTagInput>
    `
})

export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    /* tagInput! none null operator, desactiva la evaluación de elementos que podrían llegar a venir nulos. */
    public tagInput!: ElementRef<HTMLInputElement>

    constructor(private gifsService: GifsService) { }

    searchTag() {
        const newTag = this.tagInput.nativeElement.value
        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value = '';
    }

}