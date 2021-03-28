import { Component, OnInit,Inject } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { FormBuilder , FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];
  searchedTeachers  = [];
  selectedTeacher : Event;
  result = false;
  InsertedTeacherData : any = {}

  TeacherDataForm : FormGroup;
  submitted = false;
  success = false;
  isShow = true;

  constructor(
    private _eventService : EventService, 
    public _authservice : AuthService,
     @Inject(DOCUMENT) private _document: Document, 
     private _router: Router,
     private route: ActivatedRoute
     ) { }

  ngOnInit(): void {

    this._eventService.getEvents()
    .subscribe(
      res => this.events=res,
      err => console.log(err)
    )

  }

  postTeacher(){
    this._eventService.postEvents(this.InsertedTeacherData)
    .subscribe(
      res=>{
        this.events.push(res);
        this.selectedTeacher=res;
      },
      err => console.log(err)
    )
  }

  toggleDisplay(){
    this.isShow=!this.isShow;
  }

  refreshPage() {
    this._document.defaultView.location.reload();
  }

  searchTeacher(area: String){
    this._eventService.searchTeacher(area).subscribe((res: any)=> {
      this.searchedTeachers=res,
      err => console.log(err)
    })
  }


  reload() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = "reload";
    this._router.navigate(["./"], { relativeTo: this.route });
  }

  
 
  
  // registerUser(){

  
  //   this._auth.registerUser(this.registerUserData)
  //   .subscribe(
  //     res => {
  //       console.log(res)
  //       localStorage.setItem('token', res.token)
  //       this._router.navigate(['/special'])
  //     },
  //     err => console.log(err)
      
  //   )
  // }


}
