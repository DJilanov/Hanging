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
    * @showUserModal used to show the user modal with the data we sended to it
    * @options {Object} user data
    */
    private showGameControllsModal(options):void {
        this.gameControllsModal.show();
    }

    /**
    * @hideUserModal used to hide user modal
    */
    private hideUserModal():void {
        this.gameControllsModal.hide();
    }

    constructor(
        private dictionary: Dictionary,
        private eventEmiterService: EventEmiterService
    ) {
        this.eventEmiterService.showGameControllsModal.subscribe(options => this.showGameControllsModal(options));
    }
}
