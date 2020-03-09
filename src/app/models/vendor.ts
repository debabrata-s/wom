//for getallvendor
export interface Vendor {
    id: number;
    CompanyName: string;
    Address: string;
    Phone: string;
    WebSite: string;
    Name: string;
    Email: string;
    VendorType: string;
    Description: string;
    deleted: number;
    api_token: string;
    updated_at: Date;
    created_at: Date;
    customerdata: []
}