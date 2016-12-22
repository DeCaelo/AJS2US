import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class SeoService {
    public event$: EventEmitter<any>;
    private seoModel: any;

    constructor() {
        this.event$ = new EventEmitter();
        this.seoModel = {title: '', description: ''}
    }

    /**
     * set seoModel and emit event
     * @param seoModel
     */
    public set(seoModel): void {
        this.seoModel = seoModel;
        this.emit();
    }

    /**
     * private emit function to avoid duplicate code
     */
    private emit(): void {
        this.event$.emit(this.seoModel);
    }
}
