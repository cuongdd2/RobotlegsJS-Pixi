import { EventDispatcher } from "robotlegs";
import { ContainerBinding } from "./ContainerBinding";
/**
 * @private
 */
export declare class ContainerRegistry extends EventDispatcher {
    private _bindings;
    /**
     * @private
     */
    readonly bindings: ContainerBinding[];
    private _rootBindings;
    /**
     * @private
     */
    readonly rootBindings: ContainerBinding[];
    private _bindingByContainer;
    /**
     * @private
     */
    addContainer(container: any): ContainerBinding;
    /**
     * @private
     */
    removeContainer(container: any): ContainerBinding;
    /**
     * Finds the closest parent binding for a given display object
     *
     * @private
     */
    findParentBinding(target: any): ContainerBinding;
    /**
     * @private
     */
    getBinding(container: any): ContainerBinding;
    private createBinding(container);
    private removeBinding(binding);
    private addRootBinding(binding);
    private removeRootBinding(binding);
    private onBindingEmpty(event);
}
