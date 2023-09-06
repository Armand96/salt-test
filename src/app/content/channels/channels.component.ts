import { Component, OnInit } from '@angular/core';
import { IChannel } from '../../interfaces/channel';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
})
export class ChannelsComponent implements OnInit {
  constructor(private api: ApiService) {}

  channels: IChannel[] = [];

  ngOnInit(): void {
    this.loadChannel();
  }

  loadChannel() {
    this.api.getChannels().subscribe({
      next: (resp) => {
        this.channels = resp;
      },
    });
  }
}
