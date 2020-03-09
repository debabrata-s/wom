//for getallpart
export interface Part {
    id: number;
    Title: string;
    Description: string;
    Category: string;
    Cost: number;
    Quantity: number;
    MinimumQuantity: number;
    Nonstock: number;
    Barcode: string;
    Area: string;
    AdditionalPartDetails: string;
    WorkerId: number;
    TeamId: number;
    VendorId: number;
    CustomerId: number;
    LocationId: number;
    Images: null;
    deleted: number;
    api_token: string;
    updated_at: Date;
    created_at: Date;
    WorkerTitle: string;
    VendorName: string;
    CustomerName: string;
}