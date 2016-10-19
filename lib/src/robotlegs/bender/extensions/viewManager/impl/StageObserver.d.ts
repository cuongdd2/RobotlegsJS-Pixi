import { ContainerRegistry } from "./ContainerRegistry";
/**
 * @private
 */
export declare class StageObserver {
    private _registry;
    /**
     * @private
     */
    constructor(containerRegistry: ContainerRegistry);
    /**
     * @private
     */
    destroy(): void;
    private onRootContainerAdd(event);
    private onRootContainerRemove(event);
    private addRootListener(container);
    private removeRootListener(container);
    private onViewAddedToStage(event);
}
