import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  regexe = new RegExp('^[a-zA-Z]+$')

  onSearchedWord(event) {
    if (this.regexe.test(event) == true && event !== undefined ) {
      console.log("you searched for : " + event);
      this.router.navigate(['/define', event]);
    } else {
      alert("Enter valid word!!!");
    }

  }
}
