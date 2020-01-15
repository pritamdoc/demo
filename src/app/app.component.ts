import { Component, HostListener, Inject} from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:false
})
export class AppComponent {
  title = 'Sahosoft';
  // constructor(@Inject(MyserviceService)myserviceServicer){
  //   console.log("myserviceServicer");
    
  //   console.log("Hi this is component");
  // }

  // @HostListener('click',['$event'])
  // onhostclick(event:Event)
  // {
  //   alert('Hello');
  // }

  btnclick()
  {
    alert("You clickesd Me !");
  }

}
