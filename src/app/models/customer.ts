//for getallcustomer
export interface Customer {
    id: number;
    CustomerName: string;
    Address: string;
    Phone: string;
    WebSite: string;
    Email: string;
    CoustomerType: string;
    Description: string;
    BillingName: string;
    BillingAddress: string;
    BillingAddressLine2: string;
    BillingAddressLine3: string;
    Currency: number;
    deleted: number;
    api_token: string;
    updated_at: Date;
    created_at: Date;
    CurrencyName: string;
    customerdata: [
        {
            FieldTitle: string;
            FieldValue: string;
        }
    ]
}