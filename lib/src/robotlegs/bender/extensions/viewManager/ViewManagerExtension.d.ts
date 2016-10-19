import { IContext, IExtension } from "robotlegs";
/**
 * This extension install a View Manager into the context
 */
export declare class ViewManagerExtension implements IExtension {
    private static _containerRegistry;
    private _injector;
    private _viewManager;
    /**
     * @inheritDoc
     */
    extend(context: IContext): void;
    private whenInitializing();
    private whenDestroying();
}
