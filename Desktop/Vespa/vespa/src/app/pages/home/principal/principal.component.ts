import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/Core/services/map.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  constructor(private map: MapService) {}

  ngOnInit(): void {
    this.map.buildMap();
  }
}
