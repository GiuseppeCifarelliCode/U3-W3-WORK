import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/models/auth/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  formData:IRegister = {
    username: '',
    email: '',
    password: 'password'
  }

  repeatPassword:string = ''

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}

  register(){
    this.authSvc.register(this.formData)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/home'])

    })
  }

}
