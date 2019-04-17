import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { ActivatedRoute } from '@angular/router';

// export interface PeriodicElement {
  
 
//  marks : number;
 
// }
export interface sometype  {stname :String,checkedans:Array<any>, score : Number }




@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private scoreservice : ScoreService,
    private route : ActivatedRoute) { }

  public stname
  public passkey
  public obj ={ username : this.stname,passkey : this.passkey}
  public result : sometype ={
    stname : "somename",
    checkedans : ['false'],
    score : 0
  }
  public score
  public flag : boolean =false
  // public result : sometype = {
  //   checkedans : [],
  //   stname : " ",
  //   score : 0
  // }
  
  //  ELEMENT_DATA: PeriodicElement[] = this.result.checkedans
   checkedanslength :number

  ngOnInit() {
    this.flag = false
    this.stname = this.route.snapshot.paramMap.get('username');
    this.passkey = this.route.snapshot.paramMap.get('passkey');
    
    
      this.obj.username= this.stname;
      this.obj.passkey= this.passkey

      this.scoreservice.getscore(this.obj)
    .subscribe((datascore : sometype )=>{
      this.result = datascore
      this.score = datascore.score;
      this.flag = true

      console.log(datascore)
    })
    
    
    

    // this.checkedanslength = this.result.checkedans.length
    // for(let i=0;i<this.checkedanslength;i++)
    // {
    //   if(this.result.checkedans[i]==true)
    //   this.result.checkedans[i]=1;
    //   else
    //   {
    //     this.result.checkedans[i]=0;
    //   }
    // }


  }

  //  displayedColumns: string[] = ['position','marks'];
  // dataSource = this.ELEMENT_DATA;




}
