import { Component, OnInit } from '@angular/core';
import { IDocument } from '../../interfaces/document';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  constructor(private api: ApiService) {}

  documents: IDocument[] = [];

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments() {
    this.api.getDocuments().subscribe({
      next: (resp) => {
        this.documents = resp;
      },
    });
  }
}
