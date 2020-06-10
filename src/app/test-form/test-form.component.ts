import { Component, OnInit } from '@angular/core';
import { TestformService } from '../testform.service';


@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  testformdata={
    passkey : ""
  }
  public save = "Save"
  public disabled = false 
  public color = "primary"
  constructor(private testform :TestformService) { }

  ngOnInit() {
  }

  testformsubmit()
  {
    this.save="Submited"
    this.disabled = true
    this.color = "warn"
    console.log("this is test form data",this.testformdata)
    this.testform.sendmessage(this.testformdata.passkey);
    this.testform.storetestfrom(this.testformdata)
    .subscribe(
      res =>{console.log(res);
       
        
      },
       err=>console.log(err)
    );
  }

}
