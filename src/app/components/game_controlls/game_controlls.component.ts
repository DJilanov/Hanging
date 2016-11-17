import { Component, ViewChild } from '@angular/core';
import { Dictionary } from '../../language/dictionary.service';
import { CachingService } from '../../services/caching.service';
import { EventEmiterService } from '../../services/event.emiter.service';

@Component({
    selector: 'game-controlls',
    styleUrls: ['./game_controlls.component.css'],
    templateUrl: './game_controlls.component.html'
})

export class GameControllsComponent {
    private title:string;

    @ViewChild('gameControllsModal') private gameControllsModal;

    /**
    * @showGameControllsModal used to show the game controlls modal
    * @eventData {Object} event data
    */
    private showGameControllsModal(eventData:Event):void {
        this.gameControllsModal.show();
    }

    /**
    * @hideGameControllsModal used to hide game controlls modal
    */
    private hideGameControllsModal():void {
        this.gameControllsModal.hide();
    }

    constructor(
        private dictionary: Dictionary,
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.showGameControllsModal.subscribe(eventData => this.showGameControllsModal(eventData));
    }
}
