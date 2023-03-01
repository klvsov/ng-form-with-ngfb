import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.scss'],
})
export class FbComponent {
  @Input() targetUrl: string | undefined;
  @Input() successCallback?: () => void;
}
