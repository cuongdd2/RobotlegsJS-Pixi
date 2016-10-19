import { EventDispatcher } from "robotlegs";
import { IViewHandler } from "../api/IViewHandler";
/**
 * @private
 */
export declare class ContainerBinding extends EventDispatcher {
    private _parent;
    /**
     * @private
     */
    /**
     * @private
     */
    parent: ContainerBinding;
    private _container;
    /**
     * @private
     */
    readonly container: any;
    private _handlers;
    /**
     * @private
     */
    constructor(container: any);
    /**
     * @private
     */
    addHandler(handler: IViewHandler): void;
    /**
     * @private
     */
    removeHandler(handler: IViewHandler): void;
    /**
     * @private
     */
    handleView(view: any, type: FunctionConstructor): void;
}
