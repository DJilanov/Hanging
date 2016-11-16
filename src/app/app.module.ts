// Angular 2 Modules
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';
import { BrowserModule }  from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { OpeningScreenComponent } from './components/opening_screen/opening_screen.component';
import { GameControllsComponent } from './components/game_controlls/game_controlls.component';

// Config
import { Config } from './config';

// Language
import { Dictionary } from './language/dictionary.service';
import { EnglishDictionary } from './language/en.dictionary';
import { BulgarianDictionary } from './language/bg.dictionary';

// Services
import { CachingService } from './services/caching.service';
import { FetcherService } from './services/fetcher.service';
import { HeartBeatService } from './services/heart.beat.service';
import { EventEmiterService } from './services/event.emiter.service';
import { ErrorHandlerService } from './services/error.handler.service';
// Create config options (see ILocalStorageServiceConfigOptions) for deets:
let localStorageServiceConfig = {
    prefix: 'hangman',
    storageType: 'localStorage'
};
@NgModule({
    // Modules & Libs
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        Ng2Webstorage,
        ToasterModule,
        Ng2BootstrapModule,
        ReactiveFormsModule
    ],
    // Components & Views
    declarations: [ 
        // Main components
        AppComponent,
        HomeComponent,
        HeaderComponent,
        GameControllsComponent,
        OpeningScreenComponent
    ],
    // Bootstraping
    bootstrap: [ 
        AppComponent 
    ],
    // Services
    providers: [
        // config of the app
        Config,
        // services of the app
        FetcherService,
        CachingService,
        ToasterService,
        HeartBeatService,
        EventEmiterService,
        ErrorHandlerService,
        LocalStorageService,
        // language
        Dictionary,
        EnglishDictionary,
        BulgarianDictionary,
        {
            provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
        }
    ]
})

export class AppModule { }