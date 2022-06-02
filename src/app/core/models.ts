export interface Owner {
    id: number;
    name: string;
}

export interface Wagon {
    id: number,
    serialNumber: string;
    yearOfProduction: number;
    fleetNumber: string;
    ownerId: number;
    deleted: boolean;
    siteId: number;
}

export interface Site {
    id: number;
    name: string;
    postalCode: number;
    code: string;
    deleted: boolean;
    ownerId: number;
}