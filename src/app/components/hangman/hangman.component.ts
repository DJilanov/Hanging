import { Component } from '@angular/core';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'hangman',
    styleUrls: ['./hangman.component.css'],
    templateUrl: './hangman.component.html'
})
// will be screen into the router in the later stage
export class HangmanComponent {
    
    private hangedCounter:number = 0;
    private maxHangedCounter:number = 7;

    private increaseHanged(eventData: Event) {
        if(this.hangedCounter < this.maxHangedCounter) {
            this.hangedCounter++;
        } else {
            this.eventEmiterService.emitHanged({});
        }
    }

    private resetHanged(eventData: Event) {
        this.hangedCounter = 0;
    }

    constructor(
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.fetchedData.subscribe(eventData => this.resetHanged(eventData));
        this.eventEmiterService.increaseHanged.subscribe(eventData => this.increaseHanged(eventData));
    };
}
