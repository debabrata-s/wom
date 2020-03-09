//for getallworkorder
export interface WorkOrder {
    id: number;
    Title: string;
    Description: string;
    Images: string;
    DueDate: Date;
    RepeatingDuration: string;
    Priority: string;
    CategoryId: number;
    WorkerId: number;
    AdditionalWorkerId: number;
    TeamId: number;
    LocationId: number;
    AssetId: number;
    PurchaseOrderId: number;
    EstimatedDuration: string;
    deleted: number;
    api_token: string;
    updated_at: Date;
    created_at: Date;
    TeamName: string;
    LocationName: string;
}