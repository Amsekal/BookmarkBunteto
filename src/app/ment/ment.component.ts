import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-ment',
  templateUrl: './ment.component.html',
  styleUrls: ['./ment.component.scss']
})
export class MentComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://stage.bunteto.com/api/bookmark").subscribe(respons => this.bookmarkHandler(respons));
  }

  public bookmarkArray: any = [];
  public bookmarkNumber=0;

  bookmarkHandler(adat: any) {
    for (var bookmark of adat.data) {

      if (bookmark.owner.id === "d03b3c0c-0fb8-4fc0-954f-41569842434c") {
        this.bookmarkArray = bookmark.articles;
      }
    }
    this.bookmarkNumber=this.bookmarkArray.length;
    console.log(this.bookmarkArray);
    console.log(this.bookmarkNumber);
  }
}
//d03b3c0c-0fb8-4fc0-954f-41569842434c