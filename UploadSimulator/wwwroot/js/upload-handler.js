function delay(timeout) {
    return new Promise(a => setTimeout(a, timeout));
}

class UploadInfo {
    #fileList;

    onProgress;
    onComplete;

    get files() {
        return this.#fileList;
    }

    get count() {
        return this.#fileList.length;
    }

    constructor(files) {
        this.#fileList = files.concat([]);
    }

    cancel() {
        this.#fileList = [];
    }

    async upload() {
        while (this.#fileList.length > 0) {
            await this.#processItem();
        }
        this.onComplete?.call(this);
    }

    async #processItem() {
        const item = this.#fileList.pop();
        let progress = 0;
        while (progress <= 100) {
            this.onProgress?.call(this, {
                file: item,
                progressBytes: Math.round(item.size / 100 * progress),
                progressPercent: progress / 100
            });
            await delay(200);
            progress += 20;
        }
    }
}

function startUpload(files) {
    const info = new UploadInfo(files);
    const container = document.querySelector(".container").appendChild(document.createElement("div"));
    container.innerHTML = `<p></p>
    <progress max=100></progress><br />
    <progress max="${files.length}"></progress><br />
    <input type=button class="btn btn-danger"" value=cancel />`;

    container.querySelector("[type=button]").addEventListener("click", function () {
        info.cancel();
    });

    info.onProgress = function (progressInfo) {
        container.querySelector("p").textContent = progressInfo.file.name;
        container.querySelectorAll("progress")[0].value = progressInfo.progressPercent * 100;
        container.querySelectorAll("progress")[1].value = files.length - info.count;
    };

    info.onComplete = function () {
        container.remove();
    };
    info.upload();
    return info;
}

function getUploadedFiles() {

}