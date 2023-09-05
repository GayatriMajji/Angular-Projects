import { Component, OnInit } from "@angular/core";
import { HighlightDirective } from "../directives/highlight.directive";
import { ChangeTextDirective } from "../directives/change-text.directive";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{


    constructor(){

    }

    ngOnInit(): void {
        
    }
}