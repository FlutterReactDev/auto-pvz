export interface SvgParams {
    dwg_id: number;
    layer_id: number;
    grid_x?: number;
    grid_y?: number;
    zoom?: number;
}
export interface UploadDwgRequest {
    file: File;
}

export interface UploadDwgResponse {
    id: number;
    message: string;
}

export interface DwgResponse {
    max_x: number;
    max_y: number;
    min_x: number;
    min_y: number;
}

export interface Layer {
    id: number;
    name: string;
}
