
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-adventure-guide',
    imports: [RouterModule],
    templateUrl: './adventure-guide.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './adventure-guide.component.css'
})
export class AdventureGuideComponent {

}
