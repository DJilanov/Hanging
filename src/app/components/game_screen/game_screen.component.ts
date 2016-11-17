import { Component, HostListener } from '@angular/core';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'game-screen',
    styleUrls: ['./game_screen.component.css'],
    templateUrl: './game_screen.component.html'
})
// will be screen into the router in the later stage
export class GameScreenComponent {

    private word: string;
    private guessedWordArray: Array<string> = [];
    
    private updateWord(eventData):void {
        this.word = eventData.word;
        this.guessedWordArray.length = this.word.length;
        this.guessedWordArray.fill('_')
    }

    @HostListener('window:keydown', ['$event'])
    private checkLetter(event):void {
        // TODO: Do it better!!! This wont work everywhere
        let letter = event.key;
        let isRight = false;
        // it means it is letter
        if(event.which) {
            for(let index = 0; index < this.word.length; index++) {
                if (this.word[index] === letter) {
                    this.guessedWordArray[index] = letter;
                    isRight = true;
                }
            }
            if(!isRight) {
                this.eventEmiterService.emitIncreaseHanged({});
            }
        }
    }

    constructor(
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.fetchedData.subscribe(eventData => this.updateWord(eventData));
    };
}
