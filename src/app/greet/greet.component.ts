import { Component, Input } from "@angular/core";

@Component({
    selector: "welcome",
    templateUrl: "./greet.component.html",
    styleUrls: ["./greet.component.css"]
})

export class GreetComponent {
    @Input()
    name: string;
}