import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-generic-class-page-layout',
    imports: [RouterOutlet],
    templateUrl: './generic-class-page-layout.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './generic-class-page-layout.component.css'
})
export class GenericClassPageLayoutComponent {

}
