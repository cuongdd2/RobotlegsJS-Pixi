import { IMediatorMapping } from "../api/IMediatorMapping";
import { MediatorFactory } from "./MediatorFactory";
/**
 * @private
 */
export declare class MediatorManager {
    private static UIComponentClass;
    private _factory;
    /**
     * @private
     */
    constructor(factory: MediatorFactory);
    /**
     * @private
     */
    addMediator(mediator: any, item: any, mapping: IMediatorMapping): void;
    /**
     * @private
     */
    removeMediator(mediator: any, item: any, mapping: IMediatorMapping): void;
    private onRemovedFromStage(event);
    private initializeMediator(mediator, mediatedItem);
    private destroyMediator(mediator);
}
