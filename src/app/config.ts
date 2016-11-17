import { Injectable } from '@angular/core';

@Injectable()
// Will contain all of the urls and constants of the app
export class Config {
    // language
    public static get defaultLang():string { return 'en'; }
    public static get languages():Array<string> { return ['bg', 'en']; }
    public static get hearthBeatIntervalInSeconds():number { return 20; }
    // urls
    // public static get getUnknownWord():string { return "http://4055c814.ngrok.io/api/getUnknownWord"; }
    // public static get heartbeatUrl():string { return "http://4055c814.ngrok.io/api/heartbeat"; }

    // staging
    public static get getUnknownWord():string { return "https://afternoon-anchorage-50297.herokuapp.com/api/getUnknownWord"; }
    public static get heartbeatUrl():string { return "https://afternoon-anchorage-50297.herokuapp.com/api/heartbeat"; }
}
