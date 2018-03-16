import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
// import {IssueSearchResult} from "./functional-area/functional-area.component";

@Injectable()
export class FunctionalAreasService{
  constructor(private http:Http) { }

  searchFunctionalAreas(branch:string):Observable<any>
  {
    var url:string = localStorage.getItem("remoteUrl") + "api/findForJiraIssue";
    return this.http.post(url,branch).map((res:Response) =>res.json())
  }
}
