import { Injectable } from '@angular/core';
import {Http, Response,RequestMethod, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {BranchData} from "./branch/branch.component";

@Injectable()
export class BranchService{

  constructor(private http:Http) {

  }

  saveBranch(branch:BranchData):Observable<any>
  {
    var url:string = localStorage.getItem("remoteUrl") + "api/saveModules";
    return this.http.post(url,branch).map((res:Response) =>res.json())
  }

  getBranches():Observable<any[]>
  {
    var url:string = localStorage.getItem("remoteUrl") + "api/getAllBranches";
    return this.http.get(url).map((res:Response) =>res.json())
  }

}
