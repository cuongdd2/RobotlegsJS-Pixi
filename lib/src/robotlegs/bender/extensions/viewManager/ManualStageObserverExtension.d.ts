import { IContext, IExtension } from "robotlegs";
/**
 * This extension install a manual Stage Observer
 */
export declare class ManualStageObserverExtension implements IExtension {
    private static _manualStageObserver;
    private _injector;
    private _logger;
    /**
     * @inheritDoc
     */
    extend(context: IContext): void;
    private whenInitializing();
    private whenDestroying();
}
