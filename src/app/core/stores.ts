import { Injectable } from "@angular/core";
import { Store } from "rxjs-observable-store";
import { Owner, Site, Wagon } from "./models";

class DatabaseState {
    wagons: Wagon[] = [];
    owners: Owner[] = [];
    sites: Site[] = [];
}

@Injectable({providedIn: 'root'})
export class DataStore extends Store<DatabaseState> {
    constructor() {
        super(new DatabaseState())
    }
}