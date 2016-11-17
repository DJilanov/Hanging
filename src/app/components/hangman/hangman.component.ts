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
    private maxHangedCounter:number = 6;

    /**
    * @increaseHanged used to check do we have that letter or increase hanged counter
    * @eventData {Object} event data
    */  
    private increaseHanged(eventData: Event) {
        this.hangedCounter++;
        if(this.hangedCounter == this.maxHangedCounter) {
            this.eventEmiterService.emitHanged({});
        }
    }

    /**
    * @resetHanged used to reset hanged counter on new word fetch
    * @eventData {Object} event data
    */  
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
