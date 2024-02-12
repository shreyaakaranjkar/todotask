import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todotask';

  items : Array<string> = ['HTML','CSS','Angular'];

  onAddSkill(item : HTMLInputElement){
    // console.log(item.value);
    // this.items.push(item.value);
    let items =localStorage.setItem("skill",JSON.stringify(this.items))
    this.items.push(item.value);
    item.value = '';

  }
}
