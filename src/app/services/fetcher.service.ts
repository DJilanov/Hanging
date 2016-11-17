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
    public getWord(body) {
        return this.http.post( Config.getUnknownWord, body );
    }
    /**
    * @getUsers get all users
    * @return {Promise} http request
    */
    public heartbeat() {
        return this.http.get( Config.heartbeatUrl );
    }

    constructor( 
        private http: Http 
    ) {}
}
