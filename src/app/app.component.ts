import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerCutOutComponent } from "./banner-cut-out/banner-cut-out.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BannerCutOutComponent]
})
export class AppComponent {
  imageUrl = 'assets/back-1.jpg';
  title = 'Angular Challenge -- banner cut out';
}
