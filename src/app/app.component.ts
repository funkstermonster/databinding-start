import { Component } from "@angular/core";
import { ServerElement } from "./server-element/interface/server-element";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements: ServerElement[] = [
    {
      type: "server",
      name: "Testserver",
      content: "Just a test!",
    },
    {
      type: "blueprint",
      name: "Jenkins",
      content: "CI",
    },
    {
      type: "blueprint",
      name: "Jenkins",
      content: "CI 2",
    },
  ];

  name: string = "Henry"
}
