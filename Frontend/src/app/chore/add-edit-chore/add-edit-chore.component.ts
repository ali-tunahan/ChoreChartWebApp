import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ShowChoreComponent } from '../show-chore/show-chore.component';
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
      alert("Chore Added")
    }, error => {
      console.log(error.error.Message)
      if (error.error.Message != undefined) {
        alert(error.error.Message)
      }else{
        alert(this.cutFluentValidationMessage(error.error))
      }
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

  cutFluentValidationMessage(error:string){
    var result = ""
    var foundIndex = 0;
    var currentChar;
    for (let index = 0; index < error.length; index++) {
       currentChar = error.charAt(index)
       if (currentChar == "-") {
         foundIndex = index + 2
         break;
       }
    }
    var remainingError = error.substring(foundIndex,error.length)
    var words = remainingError.split(" ")
    for (let index = 0; index < words.length; index++) {
      var element = words[index];
      if (element == "Severity:") {
        break;
      }else{
        result = result + element + " "
      }
    }
    return result;
  }
}

