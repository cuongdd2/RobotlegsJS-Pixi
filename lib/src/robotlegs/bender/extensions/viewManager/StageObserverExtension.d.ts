import { IContext, IExtension } from "robotlegs";
/**
 * This extension install an automatic Stage Observer
 */
export declare class StageObserverExtension implements IExtension {
    private static _stageObserver;
    private _injector;
    private _logger;
    /**
     * @inheritDoc
     */
    extend(context: IContext): void;
    private whenInitializing();
    private whenDestroying();
}
