import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fontAwesomeIcons} from './shared/font-awesome-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faIconLibrary = inject(FaIconLibrary)

  ngOnInit(): void {
    this.initFontAwesome();
  }


  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
