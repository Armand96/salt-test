import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActivity } from '../../interfaces/activity';
import { IChannel } from '../../interfaces/channel';
import { IDocument } from '../../interfaces/document';
import { IPeople } from '../../interfaces/people';
import { IVideo } from '../../interfaces/video';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = `/assets/`;
  videoUrl = this.url + 'videos.json';
  activityUrl = this.url + 'activities.json';
  peopleUrl = this.url + 'people.json';
  channelUrl = this.url + 'channels.json';
  documentUrl = this.url + 'documents.json';

  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get<IVideo[]>(this.videoUrl);
  }

  getActivities() {
    return this.http.get<IActivity[]>(this.activityUrl);
  }

  getPeople() {
    return this.http.get<IPeople[]>(this.peopleUrl);
  }

  getChannels() {
    return this.http.get<IChannel[]>(this.channelUrl);
  }

  getDocuments() {
    return this.http.get<IDocument[]>(this.documentUrl);
  }
}
