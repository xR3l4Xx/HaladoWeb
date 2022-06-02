import { Injectable } from "@angular/core";
import { Store } from "rxjs-observable-store";
import { Owner, Site, Wagon } from "./models";
import { owners, sites, wagons } from "./mock/data";

class DatabaseState {
    wagons: Wagon[] = [...wagons];
    owners: Owner[] = [...owners];
    sites: Site[] = [...sites];
}

@Injectable({ providedIn: 'root' })
export class DataStore extends Store<DatabaseState> {
    constructor() {
        super(new DatabaseState())
    }

    addWagon(wagon: Wagon): void {
        const maxId = this.state.wagons.length > 0 ? Math.max(...this.state.wagons.map(wagon => wagon.id)) : 0;
        wagon.id = maxId + 1;
        this.setState({
            ...this.state,
            wagons: [...this.state.wagons, wagon]
        });
    }

    updateWagon(wagon: Wagon): void {

    }

    addSite(site: Site): void {

    }

    updateSite(site: Site): void {
        
    }

    addOwner(owner: Owner): void {

    }
}