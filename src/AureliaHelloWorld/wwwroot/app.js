export class App {

	constructor() {
		this.message = '';
	}

	activate() {
		this.message = 'Aurelia Test';
	}

	changeMessage(){
		this.message = 'Leaving ...';
	}

}
