import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserToken } from 'src/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private as:AuthenticationService) { }

  Form:FormGroup;

  ngOnInit(): void {
    this.Form = this.fb.group({
      Username: ['', [Validators.minLength(5), Validators.required]],
      Password: ['', [Validators.minLength(8), Validators.required]]
    })
  }

  signIn(){

    const email = this.Form.controls.Username.value;
    const password = this.Form.controls.Password.value;

    this.as.signIn(email, password).subscribe((userToken:UserToken) => {
      console.log(userToken);
    }, (error:any) => {
      console.error(error);
    });
  }
}
