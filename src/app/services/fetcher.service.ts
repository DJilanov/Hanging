import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Word } from '../interfaces/word.interface';

import { Config } from '../config';

@Injectable()

/**
 * @DriverService used on all connections to the back-end
 */
export class FetcherService {
    /**
    * @getUsers get all users
    * @return {Promise} http request
    */
    public getWord(body:Array<Word>) {
        return this.http.post( Config.getUnknownWord, body );
    }

    constructor( 
        private http: Http 
    ) {}
}
