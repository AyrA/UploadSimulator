"use strict";
var API;
(function (API) {
    async function GetUploadedFiles() {
        const result = await API.apiCall("GetFiles");
        if (result.success && result.data) {
            return result.data.files;
        }
        throw new Error(result?.error ?? "Unknown error");
    }
    API.GetUploadedFiles = GetUploadedFiles;
})(API || (API = {}));
//# sourceMappingURL=api.files.js.map