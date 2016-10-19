import { EventDispatcher } from "robotlegs";
import { IViewHandler } from "../api/IViewHandler";
import { IViewManager } from "../api/IViewManager";
import { ContainerRegistry } from "../impl/ContainerRegistry";
/**
 * @private
 */
export declare class ViewManager extends EventDispatcher implements IViewManager {
    private _containers;
    /**
     * @inheritDoc
     */
    readonly containers: any[];
    private _handlers;
    private _registry;
    /**
     * @private
     */
    constructor(containerRegistry: ContainerRegistry);
    /**
     * @inheritDoc
     */
    addContainer(container: any): void;
    /**
     * @inheritDoc
     */
    removeContainer(container: any): void;
    /**
     * @inheritDoc
     */
    addViewHandler(handler: IViewHandler): void;
    /**
     * @inheritDoc
     */
    removeViewHandler(handler: IViewHandler): void;
    /**
     * @inheritDoc
     */
    removeAllHandlers(): void;
    private validContainer(container);
}
