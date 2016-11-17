import { Component } from '@angular/core';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'game-screen',
    styleUrls: ['./game_screen.component.css'],
    templateUrl: './game_screen.component.html'
})
// will be screen into the router in the later stage
export class GameScreenComponent {
    
    private hideOpeningScreen() {
        this.eventEmiterService.emitHideOpeningScreen({});
    }

    constructor(
        private eventEmiterService: EventEmiterService
    ) {
        
    };
}
