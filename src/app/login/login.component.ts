import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginForm: any;

  constructor(private router:Router , private fb:FormBuilder, ) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({ 
      userName:["sai"],
      password:[""]
    })
    

  }



  // loginForm = new FormGroup({
  //   user:new FormControl(''),
  //   password:new FormControl(''),
  // })
  // onFormSubmit ()
  // {
  //   this.router.navigate(['grid'])
  // }

  onFormSubmit(){

  }
  onClick(){
    if(this.loginForm.value.userName==="sai" && this.loginForm.value.password=="vamshi"){
      this.router.navigate(['grid'])
    }
  }
  }
 
  
  


