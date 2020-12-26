import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  dog = '../../../../img/dog_listening.jpg';
  dogs: [{ dog,kk }];

  ngOnInit(): void {}
}
