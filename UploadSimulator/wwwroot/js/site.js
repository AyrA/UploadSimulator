"use strict";
(function () {
    const e = document.querySelector("[type=file]");
    e === null || e === void 0 ? void 0 : e.addEventListener("change", function () {
        const fileList = this.files;
        if (fileList != null && fileList.length > 0) {
            startUpload(Array.from(fileList));
        }
    });
})();
//# sourceMappingURL=site.js.map