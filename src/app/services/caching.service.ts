import { Injectable, EventEmitter } from '@angular/core';
import { Word } from '../interfaces/word.interface';
import { LocalStorageService } from 'angular-2-local-storage';
import { EventEmiterService } from '../services/event.emiter.service';

import { Config } from '../config';

@Injectable()

/**
 * @CachingService used to cache the data to have offline mode
 */
export class CachingService {
    // TODO: cache the users in the front-end localstorage
    private knownWordsList;

    /**
    * @addWordToKnown: add new word to the known array
    * @word:<Word> Contins the new known word
    */
    public addWordToKnown(word) {
        this.knownWordsList.push(word);
        this.cacheWord(this.knownWordsList);
    }

    /**
    * @cacheWord: saves the new word in the word array in the localstorage
    * @users:<Word[]> Contins the expected array with the changed users
    */
    private cacheWord(words) {
        // save them to the local storage
        this.localStorageService.set('knownWords', words);
    }

    /**
    * @getKnownWords: returns the known words array
    */
    public getKnownWords() {
        return this.knownWordsList;
    }

    /**
    * @getKnownWord: returns random known word from the words array
    */
    public getKnownWord() {
        // use localstorage words if the back-end doesnt respond. The error handler has to call the cache service in case 
        // of problem and it must emit event to the main that we have the cachied copies and warn the user!
        return this.knownWordsList[Math.floor(Math.random() * this.knownWordsList.length)];
    }

    constructor(
        private eventEmiterService: EventEmiterService,
        private localStorageService: LocalStorageService
    ) {
        this.knownWordsList = this.localStorageService.get('knownWords') || [];
        this.eventEmiterService.fetchedData.subscribe(word => this.addWordToKnown(word));
    }
}
