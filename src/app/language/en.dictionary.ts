import { Injectable } from '@angular/core';

@Injectable()
export class EnglishDictionary {
    public dictionary = {
        "error": "Problem occurred",
        "offlineMode": "There is a problem with your connection to the server. Offline mode activated.",
        "success": "The problem with your connection is fixed.",
        "onlineMode": "Active online connection.",
        "offlineUpdate": "In the moment there is no connection to the server. Your change will be sended when the connection is estabilished",
        "onlineUpdate": "Your change of user {{firstName}} was sended to the server.",
    }
}