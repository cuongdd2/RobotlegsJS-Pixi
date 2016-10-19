/**
 * Container existence event
 * @private
 */
import { Event } from "robotlegs";
export declare class ContainerRegistryEvent extends Event {
    static CONTAINER_ADD: string;
    static CONTAINER_REMOVE: string;
    static ROOT_CONTAINER_ADD: string;
    static ROOT_CONTAINER_REMOVE: string;
    private _container;
    /**
     * The container associated with this event
     */
    readonly container: any;
    /**
     * Creates a new container existence event
     * @param type The event type
     * @param container The container associated with this event
     */
    constructor(type: string, container: any);
    /**
     * @inheritDoc
     */
    clone(): ContainerRegistryEvent;
}
