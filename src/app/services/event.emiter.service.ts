import { Injectable, EventEmitter } from '@angular/core';

import { Config } from '../config';

@Injectable()

/**
 * @DriverService used on all connections to the back-end for the drivers
 */
export class EventEmiterService {

    public hanged: EventEmitter<any>;
    public getWord: EventEmitter<any>;
    public workingOnline: EventEmitter<any>;
    public workingOffline: EventEmitter<any>;
    public fetchedData: EventEmitter<any>;
    public increaseHanged: EventEmitter<any>;
    public hideOpeningScreen: EventEmitter<any>;
    public showGameControllsModal: EventEmitter<any>;

    /**
    * @emitGetWord emit event with data to fetch a new word
    * @data {Object} data to emit
    */
    public emitGetWord(data):void {
        this.getWord.emit(data);
    }

    /**
    * @emitWorkingOnline emit that server become online
    * @data {Object} data to emit
    */
    public emitWorkingOnline(data):void {
        this.workingOnline.emit(data);
    }

    /**
    * @emitWorkingOffline emit that server become offline
    * @data {Object} data to emit
    */
    public emitWorkingOffline(data):void {
        this.workingOffline.emit(data);
    }

    /**
    * @emitFetchedData emit that data is fetched
    * @data {Object} data to emit
    */
    public emitFetchedData(data):void {
        this.fetchedData.emit(data);
    }

    /**
    * @emitShowGameControllsModal show controlls modal
    * @data {Object} data to emit
    */
    public emitShowGameControllsModal(data):void {
        this.showGameControllsModal.emit(data);
    }

    /**
    * @emitHideOpeningScreen hide opening screen and start the game
    * @data {Object} data to emit
    */
    public emitHideOpeningScreen(data):void {
        this.hideOpeningScreen.emit(data);
    }

    /**
    * @emitIncreaseHanged hang one more part ( increase hanged )
    * @data {Object} data to emit
    */
    public emitIncreaseHanged(data):void {
        this.increaseHanged.emit(data);
    }

    /**
    * @emitHanged hang the person ( max hanged counter )
    * @data {Object} data to emit
    */
    public emitHanged(data):void {
        this.hanged.emit(data);
    }

    constructor() {
        this.hanged = new EventEmitter();
        this.getWord = new EventEmitter();
        this.fetchedData = new EventEmitter();
        this.workingOnline = new EventEmitter();
        this.workingOffline = new EventEmitter();
        this.increaseHanged = new EventEmitter();
        this.hideOpeningScreen = new EventEmitter();
        this.showGameControllsModal = new EventEmitter();
    }
}
