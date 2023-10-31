"use strict";
var API;
(function (API) {
    let FileType;
    (function (FileType) {
        FileType[FileType["Image"] = 1] = "Image";
        FileType[FileType["Document"] = 2] = "Document";
        FileType[FileType["Video"] = 3] = "Video";
        FileType[FileType["Other"] = 4] = "Other";
    })(FileType = API.FileType || (API.FileType = {}));
    async function apiCall(func) {
        const response = await fetch(`/api/${encodeURIComponent(func)}`);
        if (response.ok) {
            return await response.json();
        }
        throw new Error(`API error. Status ${response.status} ${response.statusText}`);
    }
    API.apiCall = apiCall;
})(API || (API = {}));
//# sourceMappingURL=api.js.map