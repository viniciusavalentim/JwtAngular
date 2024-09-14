import { Component } from '@angular/core';
import { user } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgDotNetAuth';
  user = new user();

  constructor(private authService: AuthService) {
  }

  register(user: user){
    this.authService.register(user).subscribe();
  }

  login(user: user){
    this.authService.login(user).subscribe((token:string) =>{
      localStorage.setItem(`authToken`, token);
      //pelo o que eu entendi esse lcoalstorage faz a minha sessao
    });
  }

  logout(){
    this.authService.logout();
  }
  getMe(){
    this.authService.getMe().subscribe((name: string) =>{
      console.log(name);
    })
  }

}
