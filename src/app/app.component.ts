import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module-four';
  
  user:any = {username: "", password: ""};
  success: Boolean = true;

  products:any = [
					{name: 'Cico Router', category: 'Network', price: 70},
					{name: 'Dairy Milk', category: 'Dairy', price: 10},
					{name: 'Soaps', category: 'Retail', price: 20}

				];


	onSubmit(loginForm) {
		if(loginForm.form.controls.username.value != 'admin' 
			|| loginForm.form.controls.password.value != 'admin'){

			this.success = false; 
		}

		alert(this.success);
	}
}
