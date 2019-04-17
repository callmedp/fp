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
  constructor(private testform :TestformService) { }

  ngOnInit() {
  }

  testformsubmit()
  {
    this.testform.sendmessage(this.testformdata.passkey);
    // this.testform.storetestfrom(this.testformdata)
    // .subscribe(
    //   res =>{console.log(res);
       
        
    //   },
    //    err=>console.log(err)
    // );
  }

}
