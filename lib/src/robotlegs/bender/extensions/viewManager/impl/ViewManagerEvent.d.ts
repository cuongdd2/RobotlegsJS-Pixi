import { Event } from "robotlegs";
import { IViewHandler } from "../api/IViewHandler";
/**
 * Container existence event
 * @private
 */
export declare class ViewManagerEvent extends Event {
    static CONTAINER_ADD: string;
    static CONTAINER_REMOVE: string;
    static HANDLER_ADD: string;
    static HANDLER_REMOVE: string;
    private _container;
    /**
     * The container associated with this event
     */
    readonly container: any;
    private _handler;
    /**
     * The view handler associated with this event
     */
    readonly handler: IViewHandler;
    /**
     * Creates a view manager event
     * @param type The event type
     * @param container The container associated with this event
     * @param handler The view handler associated with this event
     */
    constructor(type: string, container?: any, handler?: IViewHandler);
    /**
     * @inheritDoc
     */
    clone(): ViewManagerEvent;
}
