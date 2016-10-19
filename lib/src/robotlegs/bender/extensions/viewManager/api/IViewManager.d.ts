import { IEventDispatcher } from "robotlegs";
import { IViewHandler } from "./IViewHandler";
/**
 * The View Manager allows you to add multiple "view root" containers to a context
 */
export declare let IViewManager: symbol;
export interface IViewManager extends IEventDispatcher {
    /**
     * A list of currently registered container
     */
    containers: any[];
    /**
     * Adds a container as a "view root" into the context
     * @param container
     */
    addContainer(container: any): void;
    /**
     * Removes a container from this context
     * @param container
     */
    removeContainer(container: any): void;
    /**
     * Registers a view handler
     * @param handler
     */
    addViewHandler(handler: IViewHandler): void;
    /**
     * Removes a view handler
     * @param handler
     */
    removeViewHandler(handler: IViewHandler): void;
    /**
     * Removes all view handlers from this context
     */
    removeAllHandlers(): void;
}
