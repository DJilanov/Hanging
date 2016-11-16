import { Injectable } from '@angular/core';

@Injectable()
export class BulgarianDictionary {
    public dictionary = {
        "error": "Възникна проблем",
        "offlineMode": "Възникна проблем с връзката ви към сървъра. Активиран локален режим.",
        "success": "Проблема с конекцията е решен.",
        "onlineMode": "Влизате в активен режим.",
        "offlineUpdate": "В момента няма връзка със сървъра. Вашата промяна ще бъде изпратена при валидна връзка."
    }
}