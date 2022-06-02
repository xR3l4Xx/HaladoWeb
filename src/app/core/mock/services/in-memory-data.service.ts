import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const owners = [
      {id: 1, name: "MÁV"},
      {id: 2, name: "Lölő"},
    ];

    const sites = [
      {id: 1, name: "Fehérvár", postalAddress: 8000, code: 37700, ownerId: 1},
      {id: 2, name: "Veszprém", postalAddress: 8200, code: 9770, ownerId: 2},
      {id: 3, name: "Budapest", postalAddress: 1001, code: 1234, ownerId: 2},
    ];

    const wagons = [
      {id: 1, serialNumber: "Bhv", yearOfProduction: 1956, owner: 1, site: 1},
      {id: 2, serialNumber: "BDbhv", yearOfProduction: 2000, owner: 1, site: 1},
      {id: 3, serialNumber: "Bhv", yearOfProduction: 1980, owner: 2, site: 2},
      {id: 4, serialNumber: "AcBc", yearOfProduction: 1998, owner: 2, site: 3},
    ];

    return {owners, sites, wagons}
  }
}
