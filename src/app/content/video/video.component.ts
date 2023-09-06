import { Component, OnInit } from '@angular/core';
import { IActivity } from 'src/app/interfaces/activity';
import { IVideo } from 'src/app/interfaces/video';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private api:ApiService){}

  videos: IVideo[] = [];
  activities: IActivity[] = [];

  ngOnInit(): void {
    this.loadVideos();
    this.loadAcitivties();
  }

  loadVideos(){
    this.api.getVideos().subscribe({
      next: response => {
        this.videos = response;
        console.log(this.videos);
      }
    });
  }

  loadAcitivties(){
    this.api.getActivities().subscribe({
      next: response => {
        this.activities = response;
        console.log(this.activities);
      }
    });
  }


}
