import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  xmlData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getXmlData().subscribe((data) => {
      this.xmlData = data;
      console.log(data); // Muestra los datos en la consola para verificar
    });
  }
}