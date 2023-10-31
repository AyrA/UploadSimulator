namespace API {
    export interface ApiResult<T> {
        success: boolean;
        error?: string;
        data?: T
    }

    export interface ApiFileResult {
        files: ApiFileInfo[];
        remainingQuota: number;
    }

    export interface ApiFileInfo extends ApiOwnerInfo {
        name: string;
        size: number;
        type: FileType
    }

    export interface ApiOwnerInfo {
        ownerId: string;
    }

    export enum FileType {
        Image = 1,
        Document = 2,
        Video = 3,
        Other = 4
    }

    export async function apiCall<T>(func: string): Promise<ApiResult<T>> {
        const response = await fetch(`/api/${encodeURIComponent(func)}`);
        if (response.ok) {
            return await response.json();
        }
        throw new Error(`API error. Status ${response.status} ${response.statusText}`);
    }
}