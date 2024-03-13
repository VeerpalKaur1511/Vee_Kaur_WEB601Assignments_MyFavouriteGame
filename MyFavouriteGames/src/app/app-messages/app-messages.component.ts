// app-messages.component.ts
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-app-messages',
    templateUrl: './app-messages.component.html',
    styleUrls: ['./app-messages.component.css']
})
export class AppMessagesComponent implements OnInit {
    message: string = '';

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {
        this.messageService.changeMessage.subscribe(message => this.message = message);
    }
}
