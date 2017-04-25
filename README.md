# angular2_built_in_directives
Example implements Angular built in directives

Directives
==========
- Directives are instructions in the DOM.
- Angular templates are dynamic. When Angular renders them, it transfers the DOM according to the instructions given by Directives
- Components are kind of such instructions which tells angular to add our component whenever selector is used. Components are Directives with template.

Structural Directives
---------------------
- Changes the structure of DOM
- Alters layout by adding,removing or replacing elements in DOM
- Starts with *

*ngIf
	<p *ngIf = "username"> Hello, {{username}} </p>
*ngIf else
	<p *ngIf = "username; else entername"> Hello, {{username}}</p>
	<ng-template #entername>
		<p>Please enter your name in the input box provided</p>
	</ng-template>
*ngFor
	<div *ngFor = "let hit of hits; let i=index">{{hit}}</div>
*ngSwitch


Attribute Directives
--------------------
- Attribute Directives dont add or remove elements. They only change the element where they are placed on.
- They alter the appearance or behaviour of an existing element

ngStyle 
- Allows to dynamically add a style

<p [ngStyle]="{backgroundColor: getColor()}">Server status is {{serverStatus}}</p>

getColor() {
      return this.serverStatus== 'online'?'green': 'red';
  }
  
ngClass
- Allow to dynamically add or remove CSS classes based on the condition
- Takes Javascript object with key-value pairs
   key- css class
   value- condition

<p [ngClass]="{online: serverStatus=='online'}">Server status is {{serverStatus}}</p>

Excercise
===========
Create a button with name "Display Details"
Add a paragraph with any content of your choice
Toggle the displaying of that paragraph with the button created in the first step
Log all button clicks in an array and output the array below the paragraph
Starting 5th log item, give all future log items blue background with [ngStyle] and white color with [ngClass]
  



