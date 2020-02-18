import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { PublicationsService } from 'src/app/services/PublicationsService';
@Component({
  selector: 'app-home-publication',
  templateUrl: './home-publication.component.html',
  styleUrls: ['./home-publication.component.scss']
})
export class HomePublicationComponent implements OnInit {

  p:any;
  iframe_html: any[] = [];
  listInfo: any;
  listvideo: any;
  showinfo: boolean;
  constructor(private publicationSservice: PublicationsService, private embedService: EmbedVideoService) {
    this.showinfo = false;
    this.loadInfoPublications();
  }

  ngOnInit() {

  }

  loadInfoPublications() {
    this.showinfo = false;
    this.publicationSservice.requestpublication().subscribe(async res => {
      if (res.responseCode == 200) {
        this.listInfo = res.object;
        await this.loadVideos();
      } else {
        alert(res.message)
      }
    })
  }

  async loadVideos() {
    var i = 0;
    await this.listInfo.forEach(element => {
      this.iframe_html[i] = this.embedService.embed(element.link_Sound, {
        query: { portrait: 0, color: '333' },
      });
      i++;
    });
    this.showinfo = true;
    console.log(this.iframe_html)
  }

  prueba() {
    this.listInfo.forEach(element => {
      console.log(element);
    })
  }

}
