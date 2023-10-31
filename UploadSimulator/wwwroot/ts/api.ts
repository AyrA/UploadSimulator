interface ApiResult<T> {
    success: boolean;
    error?: string;
    data?: T
}

interface ApiFileResult {
    files: ApiFileInfo[];
    remainingQuota: number;
}

interface ApiFileInfo extends ApiOwnerInfo {
    name: string;
    size: number;
    type: FileType
}

interface ApiOwnerInfo {
    ownerId: string;
}

enum FileType {
    Image = 1,
    Document = 2,
    Video = 3,
    Other = 4
}

async function apiCall<T>(func: string): Promise<ApiResult<T>> {
    const response = await fetch(`/api/${encodeURIComponent(func)}`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error(`API error. Status ${response.status} ${response.statusText}`);
}

async function GetUploadedFiles(): Promise<ApiFileInfo[]> {
    const result = await apiCall<ApiFileResult>("GetFiles");
    if (result.success && result.data) {
        return result.data.files;
    }
    throw new Error(result?.error ?? "Unknown error");
}