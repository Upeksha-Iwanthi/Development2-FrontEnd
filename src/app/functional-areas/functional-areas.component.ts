import { Component, OnInit } from '@angular/core';
import {FunctionalAreasService} from "../functional-areas.service";


@Component({
  selector: 'app-functional-area',
  templateUrl: './functional-areas.component.html',
  styleUrls: ['./functional-areas.component.css']
})
export class FunctionalAreasComponent implements OnInit {

  issue_Id:IssueId;

  issueSearchResultRow : IssueSearchResultRow;
  issueSearchResult = {message : "",issueSearchResultList : []};

  constructor(private functionalAreaService:FunctionalAreasService) {
    this.issueSearchResultRow = new IssueSearchResultRow();
    this.issue_Id = new IssueId();
  }

  ngOnInit() {
  }

  doSearch()
  {
    this.functionalAreaService.searchFunctionalAreas(this.issue_Id.issueId).subscribe(
      data =>{
        this.issueSearchResult = data;
        this.issueSearchResult.issueSearchResultList = data.issueSearchResultList;
        console.log(this.issueSearchResult.issueSearchResultList);
      }
    );
  }

}

export class IssueSearchResultRow{
  classPath:string;
  module:string;
  functionalAreas:string;
  percentage:string;
  issueList:string;
}

export class IssueId{
  issueId:string;
}

