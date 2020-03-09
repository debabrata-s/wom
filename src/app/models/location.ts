//for getalllocation
export interface Location {
    id: number;
    Title: string;
    Address: string;
    ParentLocationId: number;
    WorkerId: number;
    TeamId: number;
    VendorId: number;
    CustomerId: number;
    deleted: number;
    api_token: string;
    updated_at: Date;
    created_at: Date;
    WorkerTitle: string;
}