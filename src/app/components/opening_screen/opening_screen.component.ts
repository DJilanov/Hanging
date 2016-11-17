import { Component } from '@angular/core';
import { Dictionary } from '../../language/dictionary.service';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'opening-screen',
    styleUrls: ['./opening_screen.component.css'],
    templateUrl: './opening_screen.component.html'
})
// will be screen into the router in the later stage
export class OpeningScreenComponent {
    
    /**
    * @hideOpeningScreen used to hide the opening screen
    * @eventData {Object} event data
    */  
    private hideOpeningScreen(eventData: Event):void {
        this.eventEmiterService.emitHideOpeningScreen({});
    }
 
    /**
    * @startGame used to start the game when we click the button
    */
    private startGame():void {
        this.eventEmiterService.emitGetWord({});
    }

    constructor(
        private dictionary: Dictionary,
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.fetchedData.subscribe(eventData => this.hideOpeningScreen(eventData));
    };
}
