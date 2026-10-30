import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-rift-page-layout',
    imports: [RouterOutlet],
    templateUrl: './rift-page-layout.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './rift-page-layout.component.css'
})
export class RiftPageLayoutComponent {

}
