import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  standalone: true,
  imports: [],
  templateUrl: './banner-cut-out.component.html',
  styleUrl: './banner-cut-out.component.scss'
})
export class BannerCutOutComponent {
  @Input() public imageUrl = '';
  @Input() public title = '';
}
