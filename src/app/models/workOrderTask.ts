//for getallworkordertask
export interface WorkOrderTask {
    id: number;
    WorkOrderId: number;
    Task: string;
    UserId: number;
    AssetId: number;
    deleted: number;
    api_token: string;
    updated_at: Date;
    created_at: Date;
    UserName: string;
    WorkorderName: string;
}