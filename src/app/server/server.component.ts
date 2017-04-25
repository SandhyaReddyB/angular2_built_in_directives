import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    private secretMsg:string = 'This is a secret code, 7777';
    private showMsg: boolean = false;
    private hits = [];

   constructor() {  
        
   }

   toggle() {
       this.showMsg = !this.showMsg;
       this.hits.push(this.hits.length+1);
   }
   //method required if getColor() is called instead of ternary operator for ngStyle
   getColor() {
       return this.hits.length>=6? 'blue':'white';
   }
}