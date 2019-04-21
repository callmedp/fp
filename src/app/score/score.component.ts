import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { ActivatedRoute } from '@angular/router';


export interface sometype  {stname :String,checkedans:Array<any>, score : Number }


export interface sometype1 { position : Number , result :number}

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
  public dataSource :sometype1[]
  temp 
  temp2 = []
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
      this.temp=datascore.checkedans

      for (let index = 0; index < this.temp.length; index++) {
        let val = this.temp[index];
        this.temp2.push({position : index , result : val})
        this.dataSource = this.temp2
        console.log(this.dataSource)
       
      }

      
    })
  }

   displayedColumns: string[] = ['position','result'];
  




}
