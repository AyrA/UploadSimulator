"use strict";
(function () {
    const e = document.querySelector("[type=file]");
    e?.addEventListener("change", function (this: HTMLInputElement) {
        const fileList = this.files as FileList;
        if (fileList != null && fileList.length > 0) {
            startUpload(Array.from(fileList));
        }
    });
})();