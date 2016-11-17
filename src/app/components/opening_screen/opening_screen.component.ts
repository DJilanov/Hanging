import { Component } from '@angular/core';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'opening-screen',
    styleUrls: ['./opening_screen.component.css'],
    templateUrl: './opening_screen.component.html'
})
// will be screen into the router in the later stage
export class OpeningScreenComponent {
    
    private hideOpeningScreen(eventData: Event):void {
        this.eventEmiterService.emitHideOpeningScreen({});
    }

    private startGame():void {
        this.eventEmiterService.emitGetWord({});
    }

    constructor(
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.fetchedData.subscribe(eventData => this.hideOpeningScreen(eventData));
    };
}
