import { Component, Inject, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Word } from './interfaces/word.interface';
import { Dictionary } from './language/dictionary.service';
import { FetcherService } from './services/fetcher.service';
import { CachingService } from './services/caching.service';
import { HeartBeatService } from './services/heart.beat.service';
import { EventEmiterService } from './services/event.emiter.service';
import { ErrorHandlerService } from './services/error.handler.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [ require('./sass/style.scss') ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    private word: Word;

    constructor(
        private fetcher: FetcherService,
        private dictionary: Dictionary,
        private toasterService: ToasterService,
        private cachingService: CachingService,
        private heartBeatService: HeartBeatService,
        private eventEmiterService: EventEmiterService,
        private errorHandlerService: ErrorHandlerService,
        private localStorageService: LocalStorageService
    ) {
        // we start the heartbeating of the application
        heartBeatService.setHeartbeat();
        this.eventEmiterService.getWord.subscribe(knownWords => this.getWord(knownWords));
    };

    /**
    * @updateUser handle heart beat response
    * @options<object> Form data with user changes
    */
    private getWord(knownWords) {
        if(this.heartBeatService.online) {
            this.fetcher.getWord(knownWords).subscribe(
                response => this.fetchedWord(response.json()),
                err => this.errorHandlerService.handleError(err)
            );
        } else {
            // ofline mode query adding
            this.toasterService.pop({
                type: 'error',
                title: this.dictionary.getTexts('error'),
                body: this.dictionary.getTexts('offlineUpdate'),
                showCloseButton: true
            });
            // TODO: SET A WORD FROM THE KNOWN ONES
        }
        
    }

    /**
    * @fetchedData emit that we work online and set the users that we fetch from the back-end
    * @users <User[]> The users from the API
    */
    private fetchedWord(word) {
        this.setWord(word);
        this.eventEmiterService.emitWorkingOnline(this.word);
    }

    /**
    * @setUsers we set the users to the app
    * @users <User[]> The users from the API
    */
    private setWord(word) {
        this.word = <Word>word;
        this.eventEmiterService.emitFetchedData(this.word);
    }
}
