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
    this.service.getAllChores().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        if (data[index].IsDone == 0) {
          this.UnfinishedChoresList.push(data[index])
        }else{
          this.FinishedChoresList.push(data[index])
        }
        
      }
    });
  }

}
