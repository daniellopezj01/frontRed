import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { PublicationsService } from 'src/app/services/PublicationsService';

@Component({
  selector: 'app-tren-pubs',
  templateUrl: './tren-pubs.component.html',
  styleUrls: ['./tren-pubs.component.scss']
})
export class TrenPubsComponent implements OnInit {
  listPubs : any;
  iframe_html: string[] = [];
  showinfo: boolean;
  constructor(private publicationSservice: PublicationsService, private embedService: EmbedVideoService) { 
    this.showinfo = false;
    this.loadInfoPublications();
  }
    
  ngOnInit() {
  }

  loadInfoPublications() {
    this.showinfo = false;
    this.publicationSservice.requestTrending().subscribe(async res => {
      if (res.responseCode == 200) {
        this.listPubs = res[0].object;
        await this.loadVideos();
      } else {
        alert(res.message)
      }
    })
  }

  async loadVideos() {
    var i = 0;
    await this.listPubs.forEach(element => {
      this.iframe_html[i] = this.embedService.embed(element.link_Sound, {
        query: { portrait: 0, color: '333' },
        attr: { width: 450, height: 250 }
      });
      i++;
    });
    this.showinfo = true;
    console.log(this.iframe_html)
  }


  

}
