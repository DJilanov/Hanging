import { Component } from '@angular/core';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'game-screen',
    styleUrls: ['./game_screen.component.css'],
    templateUrl: './game_screen.component.html'
})
// will be screen into the router in the later stage
export class GameScreenComponent {

    private word: string;
    private guessedWordArray: Array<string>;
    
    private updateWord(eventData):void {
        this.word = eventData.word;
        this.guessedWordArray.length = this.word.length;
        this.guessedWordArray.fill('_')
    }

    private checkLetter(letter) {

    }

    constructor(
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.fetchedData.subscribe(eventData => this.updateWord(eventData));
    };
}
