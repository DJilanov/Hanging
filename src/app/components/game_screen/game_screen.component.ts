import { Component, HostListener } from '@angular/core';
import { Dictionary } from '../../language/dictionary.service';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'game-screen',
    styleUrls: ['./game_screen.component.css'],
    templateUrl: './game_screen.component.html'
})
// will be screen into the router in the later stage
export class GameScreenComponent {

    private word: string;
    private isHanged: boolean = false;
    private guessedWordArray: Array<string> = [];
    private wrongLettersArray: Array<string> = [];

    /**
    * @hanged used to show the word and block the input of the person
    * @eventData {Object} event data
    */
    private hanged(eventData):void {
        this.isHanged = true;
        this.guessedWordArray = this.word.split('');
    }

    /**
    * @updateWord used to update the word with the new one and reset the board
    * @eventData {Object} event data
    */   
    private updateWord(eventData):void {
        this.isHanged = false;
        this.word = eventData.word;
        this.guessedWordArray.length = this.word.length;
        this.guessedWordArray.fill('_')
        this.wrongLettersArray.length = 0;
    }

    /**
    * @checkLetter used to check do we have that letter or increase hanged counter
    * @event {Object} event data
    */  
    @HostListener('window:keydown', ['$event'])
    private checkLetter(event):void {
        // TODO: Do it better!!! This wont work everywhere
        let letter = event.key;
        let isRight = false;
        // it means it is letter
        if((event.which) && (this.wrongLettersArray.indexOf(letter) == -1) && !this.isHanged) {
            for(let index = 0; index < this.word.length; index++) {
                if (this.word[index] === letter) {
                    this.guessedWordArray[index] = letter;
                    isRight = true;
                }
            }
            if(!isRight) {
                this.wrongLettersArray.push(letter);
                this.eventEmiterService.emitIncreaseHanged({});
            }
        }
    }

    /**
    * @startGame used to tell the app to get new word and start new game
    */  
    private startGame() {
        this.eventEmiterService.emitGetWord({});
    }

    constructor(
        private dictionary: Dictionary,
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.hanged.subscribe(eventData => this.hanged(eventData));
        this.eventEmiterService.fetchedData.subscribe(eventData => this.updateWord(eventData));
    };
}
