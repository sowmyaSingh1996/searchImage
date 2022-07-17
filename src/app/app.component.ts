import { Component } from '@angular/core';
import { createClient } from 'pexels';
import { RestapiService } from './services/restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  photos: any;
  query = '';
  client: any;
  image: any;
  inputEmpty: boolean;
  constructor(private restapi: RestapiService) {
  }
  ngOnInit(){
  }

  searchPixa() {
    if(this.query === ''){
      this.inputEmpty = true;
    } else {
      this.inputEmpty = false;

    const cPath = '?key=28666058-5e54c21b63486fef4a199ebb7&q=' + this.query + '&page=1&per_page=200&orientation=horizontal';
    this.restapi.getPIXAPI(cPath).subscribe(data => {
      console.log(data.results)
      this.image = data.hits
    }, err => {
      console.log(err)
      this.image = err.url
    }
    );
  }

  }
}
