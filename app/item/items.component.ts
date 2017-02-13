import { Component, OnInit } from "@angular/core";
import { Http } from '@angular/http';

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService,
        private http: Http) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        // let url = 'https://jsonplaceholder.typicode.com/posts/1';
        // let url = 'https://jsonplaceholder.typicode.com/posts';
        let url = 'https://api.myexpensekeeper.io/locales';
        // let url = 'https://api.myexpensekeeper.io/countries';
        // let url = 'http://192.168.31.120:3000/locales';

        console.log(`URL: ${url}`);
        this.http.get(url).subscribe(
            res => {
                let jsonResponse = res.json();
                console.log(`Response: ${JSON.stringify(jsonResponse)}`);
            },
            err => {
                console.log(`Error: ${JSON.stringify(err)}`);
            }
        );
    }
}
