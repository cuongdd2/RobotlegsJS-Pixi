import { IContext, IExtension } from "robotlegs";
/**
 * This extension installs a shared IMediatorMap into the context
 */
export declare class MediatorMapExtension implements IExtension {
    private _injector;
    private _mediatorMap;
    private _viewManager;
    /**
     * @inheritDoc
     */
    extend(context: IContext): void;
    private beforeInitializing();
    private beforeDestroying();
    private whenDestroying();
}
