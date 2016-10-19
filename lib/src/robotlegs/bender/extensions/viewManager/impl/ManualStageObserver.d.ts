import { ContainerRegistry } from "./ContainerRegistry";
/**
 * @private
 */
export declare class ManualStageObserver {
    private _registry;
    /**
     * @private
     */
    constructor(containerRegistry: ContainerRegistry);
    /**
     * @private
     */
    destroy(): void;
    private onContainerAdd(event);
    private onContainerRemove(event);
    private addContainerListener(container);
    private removeContainerListener(container);
    private onConfigureView(event);
}
