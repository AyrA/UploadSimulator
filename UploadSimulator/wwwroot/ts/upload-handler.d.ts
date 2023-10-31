declare interface ProgressInfo {
    file: File,
    progressBytes: number,
    progressPercent: number
}

declare class UploadInfo {
    count(): number;
    cancel(): void;
    files: File[];
    onProgress(this: UploadInfo, progress: ProgressInfo): void;
    onComplete(this: UploadInfo): void;
}

declare function startUpload(files: ArrayLike<File>): UploadInfo;
