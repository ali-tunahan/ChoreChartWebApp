import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-chore',
  templateUrl: './add-edit-chore.component.html',
  styleUrls: ['./add-edit-chore.component.css']
})
export class AddEditChoreComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cho:any;
  Name:string = "";
  Id:number = -1;
  Description:string = "";
  Priority:number = 0;
  IsDone:number = 0;
  
  ngOnInit(): void {
    this.Name=this.cho.Name;
    this.Description = this.cho.Description;
    this.Priority = this.cho.Priority;
    this.Id = this.cho.Id;
    this.IsDone = this.cho.IsDone;
  }

  addChore(){
    var val = {
                Name:this.Name,
                IsDone:this.IsDone,
                Priority:this.Priority,
                Description:this.Description,
              };
    this.service.addChore(val).subscribe(res=>{
      alert("Chore Added");
    });
  }

  updateChore(){
    var val = {
      Name:this.Name,
      Description:this.Description,
      Priority:this.Priority,
      IsDone:this.IsDone,
      Id:this.Id
    };
    this.service.updateChore(val).subscribe(res=>{
    alert("Chore Updated");
    });
  }
}

