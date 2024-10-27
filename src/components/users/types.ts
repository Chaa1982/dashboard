export interface IDashboardUser {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "phone": string,
    "website": string,
    "address": AddressInterface,
    "company": CompanyInterface
}

interface AddressInterface {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": GeoInterface,
}

interface GeoInterface {
    "lat": string,
    "lng": string,
}

interface CompanyInterface {
    "name": string,
    "catchPhrase": string,
    "bs": string,
}