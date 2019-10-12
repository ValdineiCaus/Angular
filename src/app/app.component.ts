import { Component } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  funcionarios = [];

  aoAdicionar(funcionario) {

    this.funcionarios.push(funcionario);

  }

}
