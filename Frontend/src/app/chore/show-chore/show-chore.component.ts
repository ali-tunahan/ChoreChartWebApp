import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-chore',
  templateUrl: './show-chore.component.html',
  styleUrls: ['./show-chore.component.css']
})



export class ShowChoreComponent implements OnInit {


  constructor(private service:SharedService) { }

  UnfinishedChoresList:any = [];
  FinishedChoresList:any=[];

  ModalTitle:string = "";
  ActivateAddEditChoreComp:boolean=false;
  cho:any;

  ChoreNameFilter:string = ""
  ChoresListUnfinishedWithoutFilter:any
  ChoresListFinishedWithoutFilter: any
  ChorePriorityFilter:string = ""
  ChoreDescriptionFilter: string = ""
  ShowFinishedChores: boolean = true


  ngOnInit(): void {
    this.refreshChoresList();
  }

  addClick(){
    this.cho={
      Id:0,
      Name:"",
      IsDone:0
    }
    this.ModalTitle="Add Chore";
    this.ActivateAddEditChoreComp=true;
  }

  editClick(item:any){
    this.cho=item;
    this.ModalTitle="Edit Chore";
    this.ActivateAddEditChoreComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure? This action cannot be reversed!')){
      this.service.deleteChore(item).subscribe(data=>{
        this.refreshChoresList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditChoreComp=false;
    this.refreshChoresList();
  }

  changeIsDoneClick (item:any) {
    item.IsDone = Math.abs(item.IsDone - 1);
    this.service.updateChore(item).subscribe(data => {
      this.refreshChoresList();
    })
  }

  refreshChoresList(){
    this.FinishedChoresList = [];
    this.UnfinishedChoresList = [];
    this.ChoresListUnfinishedWithoutFilter = [];
    this.ChoresListFinishedWithoutFilter = [];
    this.service.getAllChores().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        this.initializeNulls(data[index]);
        if (data[index].IsDone == 0) {
          this.UnfinishedChoresList.push(data[index]);
          this.ChoresListUnfinishedWithoutFilter.push(data[index]);
        }else{
          this.FinishedChoresList.push(data[index])
          this.ChoresListFinishedWithoutFilter.push(data[index])
        }
      }
      this
    });
  }

  initializeNulls(chore:any){
    if (chore.Name == null) {
      chore.Name = "";
    }if (chore.Description == null) {
      chore.Description = "";
    }if(chore.Priority == null){
      chore.Priority = "";
    }
  }

  FilterFn(){
    var ChorePriorityFilter = this.ChorePriorityFilter;
    if (this.ChorePriorityFilter == "-") {
      ChorePriorityFilter =" ";
    }
    var ChoreNameFilter = this.ChoreNameFilter;
    var ChoreDescriptionFilter = this.ChoreDescriptionFilter;
    var HideFinishedChores = this.ShowFinishedChores;
    this.FinishedChoresList = this.ChoresListFinishedWithoutFilter.filter(function (el:any){
      return el.Priority.toString().toLowerCase().includes(ChorePriorityFilter.toString().trim().toLowerCase()) 
        && el.Name.toString().toLowerCase().includes(ChoreNameFilter.toString().trim().toLowerCase())
        && el.Description.toString().toLowerCase().includes(ChoreDescriptionFilter.toString().trim().toLowerCase())
        && (HideFinishedChores)
    });
    this.UnfinishedChoresList = this.ChoresListUnfinishedWithoutFilter.filter(function (el: any) {
      return el.Priority.toString().toLowerCase().includes(ChorePriorityFilter.toString().trim().toLowerCase())
        && el.Name.toString().toLowerCase().includes(ChoreNameFilter.toString().trim().toLowerCase())
        && el.Description.toString().toLowerCase().includes(ChoreDescriptionFilter.toString().trim().toLowerCase());
    }) 
  }

}
