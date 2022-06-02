export interface Owner {
    id: number;
    name: string;
}

export interface Wagon {
    id: number,
    serialNumber: string;
    yearOfProduction: number;
    ownerId: number;
    readonly siteId: number;
}

export interface Site {
    id: number;
    name: string;
    postalAddress: string;
    code: string;
    ownerId: number;
}