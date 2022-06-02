export interface Owner {
    name: string;
}

export interface Wagon {
    serialNumber: string;
    yearOfProduction: number;
    owner: Owner;
    readonly site: Site;
}

export interface Site {
    name: string;
    postalAddress: string;
    code: string;
    owner: Owner;
    readonly wagons: Wagon[];
}