export class StatusUpdateDto {
    status!: boolean;

    constructor(status: boolean) {
        this.status = status;
    }
}