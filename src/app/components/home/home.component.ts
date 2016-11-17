import { Component } from '@angular/core';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
// will be screen into the router in the later stage
export class HomeComponent {

    private showOpeningScreen: boolean = true;

    /**
    * @hideOpeningScreen used to hide the opening screen and show the game
    * @eventData {Object} event data
    */
    private hideOpeningScreen(eventData:Event):void {
        this.showOpeningScreen = false;
    }

    constructor(
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.hideOpeningScreen.subscribe(eventData => this.hideOpeningScreen(eventData));
    };
}
