export interface CreateWorkOrder {
    Title: string;
    Description: string;
    DueDate: string;
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
    Images: string;
}