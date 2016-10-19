import { IInjector } from "robotlegs";
import { IMediatorMapping } from "../api/IMediatorMapping";
import { MediatorManager } from "./MediatorManager";
/**
 * @private
 */
export declare class MediatorFactory {
    private _mediators;
    private _injector;
    private _manager;
    /**
     * @private
     */
    constructor(injector: IInjector, manager?: MediatorManager);
    /**
     * @private
     */
    getMediator(item: any, mapping: IMediatorMapping): any;
    /**
     * @private
     */
    createMediators(item: any, type: FunctionConstructor, mappings: any[]): any[];
    /**
     * @private
     */
    removeMediators(item: any): void;
    /**
     * @private
     */
    removeAllMediators(): void;
    private createMediator(item, mapping);
    private addMediator(mediator, item, mapping);
    private mapTypeForFilterBinding(filter, type, item);
    private unmapTypeForFilterBinding(filter, type, item);
    private requiredTypesFor(filter, type);
}
