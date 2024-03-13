import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { MessageService } from './services/message.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  inputId: number;
  singleContent: any;

  constructor(private gameService: GameService,
    private messageService: MessageService
    ) {}

    getContentById(): void {
      if (isNaN(this.inputId)) {
          this.messageService.changeMessage('Error: Please enter a valid number.');
          return;
      }
      this.gameService.getContentById(this.inputId).subscribe(
        (item) => {
            this.singleContent = item;
        },
        (error) => {
            this.messageService.changeMessage('Error: An error occurred while retrieving content.');
        }
    );

  }
}
}
