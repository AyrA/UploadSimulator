namespace API {
    export async function GetUploadedFiles(): Promise<ApiFileInfo[]> {
        const result = await API.apiCall<ApiFileResult>("GetFiles");
        if (result.success && result.data) {
            return result.data.files;
        }
        throw new Error(result?.error ?? "Unknown error");
    }
}