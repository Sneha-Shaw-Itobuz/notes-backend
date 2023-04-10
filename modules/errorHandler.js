export class HttpError extends Error {

    constructor(message, status, data){
        super(message);
        this.status = status;
        this.data = data;
    }
}