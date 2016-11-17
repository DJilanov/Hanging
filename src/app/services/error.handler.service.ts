import { Injectable, EventEmitter } from '@angular/core';
import { CachingService } from './caching.service';
import { Dictionary } from '../language/dictionary.service';
import { EventEmiterService } from '../services/event.emiter.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { Config } from '../config';

@Injectable()

/**
 * @DriverService used on all connections to the back-end for the drivers
 */
export class ErrorHandlerService {

    public errorEmitter: EventEmitter<any>;

    /**
    * @emitOfflineMode emits entering offline mode to the app
    */
    private emitOfflineMode() {
        this.toasterService.pop({
            type: 'error',
            title: this.dictionary.getTexts('error'),
            body: this.dictionary.getTexts('offlineMode'),
            showCloseButton: true
        });
        this.eventEmiterService.emitWorkingOffline({});
    }

    /**
    * @handleError handle standart error
    * @err {Object} error object and information
    */
    public handleError(err):void {
        this.emitOfflineMode();
        this.eventEmiterService.emitFetchedData(this.cachingService.getKnownWord());
    }

    /**
    * @handleInitError handle the error from the init
    * @err {Object} error object and information
    */
    public handleInitError(err):void {
        this.emitOfflineMode();
    }

    /**
    * @handleHeartBeatError handle the heart beat error
    * @err {Object} error object and information
    */
    public handleHeartBeatError(err, justStop):void {
        if(justStop) {
            this.emitOfflineMode();
        }
    }

    /**
    * @emitError get specific user
    * @err {Object} error object and information
    */
    public emitError(data):void {
        this.errorEmitter.emit(data);
    }

    constructor(
        private dictionary: Dictionary,
        private cachingService: CachingService,
        private toasterService: ToasterService,
        private eventEmiterService: EventEmiterService
    ) {
        this.errorEmitter = new EventEmitter();
    }
}
