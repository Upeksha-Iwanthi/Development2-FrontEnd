import { Component, OnInit } from '@angular/core';
import {BranchService} from "../branch.service";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  branchList = [];
  branchData: BranchData;
  response = {message : ""};

  constructor(private branchService: BranchService) {
    this.branchData = new BranchData();
  }

  ngOnInit() {
    this.branchService.getBranches().subscribe(
      data => {
        this.branchList = data
      }
    );
  }
  onchange()
  {
    this.response.message="";
  }

  saveBranch() {
    this.branchService.saveBranch(this.branchData).subscribe(
      data => {
        this.response = data;
        this.branchList = data.branchList;
        this.branchData = new BranchData();
      }
    );
  }

}
export class BranchData {
  svnURL: string;
  revision: number
  type: string;
}

