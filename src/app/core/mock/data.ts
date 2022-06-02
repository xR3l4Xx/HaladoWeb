import { Wagon, Site, Owner } from "../models";

export const owners: Owner[] = [
    { id: 1, name: "MÁV" },
    { id: 2, name: "Lölő" },
];

export const sites: Site[] = [
    { id: 1, name: "Fehérvár", postalCode: 8000, code: "37700", ownerId: 1, deleted: false },
    { id: 2, name: "Veszprém", postalCode: 8200, code: "9770", ownerId: 2, deleted: false },
    { id: 3, name: "Budapest", postalCode: 1001, code: "1234", ownerId: 2, deleted: false },
];

export const wagons: Wagon[] = [
    { id: 1, serialNumber: "Bhv", yearOfProduction: 1956, fleetNumber: "50 55 20-05 555-7", ownerId: 1, siteId: 1, deleted: false },
    { id: 2, serialNumber: "BDbhv", yearOfProduction: 2000, fleetNumber: "50 55 22-15 600-3", ownerId: 1, siteId: 1, deleted: false },
    { id: 3, serialNumber: "Bhv", yearOfProduction: 1980, fleetNumber: "50 55 20-05 800-2", ownerId: 2, siteId: 2, deleted: false },
    { id: 4, serialNumber: "AcBc", yearOfProduction: 1998, fleetNumber: "50 20 30-23 555-8", ownerId: 2, siteId: 3, deleted: false },
];