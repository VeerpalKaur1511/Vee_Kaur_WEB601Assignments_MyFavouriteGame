// your-theme.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class GameServiceService {
    constructor(private messageService: MessageService) {}

    getContent(): Observable<any[]> {
        this.messageService.changeMessage('Content array loaded!');
        return of(content);
    }

    getContentById(id: number): Observable<any> {
      if (id < 1 || id > content.length || isNaN(id)) {
          this.messageService.changeMessage('Error: ID number is out of bounds.');
          return of(null);
      }

      const item = content.find(item => item.id === id);
      if (item) {
          this.messageService.changeMessage(`Content Item at id: ${id}`);
      }
      return of(item);
    }
}
