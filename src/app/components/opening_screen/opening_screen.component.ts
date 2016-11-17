import { Component } from '@angular/core';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'opening-screen',
    styleUrls: ['./opening_screen.component.css'],
    templateUrl: './opening_screen.component.html'
})
// will be screen into the router in the later stage
export class OpeningScreenComponent {
    
    private hideOpeningScreen() {
        this.eventEmiterService.emitHideOpeningScreen({});
    }

    constructor(
        private eventEmiterService: EventEmiterService
    ) {
        
    };
}
