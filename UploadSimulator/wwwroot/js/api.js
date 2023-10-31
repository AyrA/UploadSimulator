"use strict";
var FileType;
(function (FileType) {
    FileType[FileType["Image"] = 1] = "Image";
    FileType[FileType["Document"] = 2] = "Document";
    FileType[FileType["Video"] = 3] = "Video";
    FileType[FileType["Other"] = 4] = "Other";
})(FileType || (FileType = {}));
async function apiCall(func) {
    const response = await fetch(`/api/${encodeURIComponent(func)}`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error(`API error. Status ${response.status} ${response.statusText}`);
}
async function GetUploadedFiles() {
    const result = await apiCall("GetFiles");
    if (result.success && result.data) {
        return result.data.files;
    }
    throw new Error(result?.error ?? "Unknown error");
}
//# sourceMappingURL=api.js.map