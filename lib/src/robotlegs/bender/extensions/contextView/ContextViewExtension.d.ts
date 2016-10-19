import { IContext, IExtension } from "robotlegs";
/**
 * <p>This Extension waits for a ContextView to be added as a configuration
 * and maps it into the context's injector.</p>
 *
 * <p>It should be installed before context initialization.</p>
 */
export declare class ContextViewExtension implements IExtension {
    private _injector;
    private _logger;
    /**
     * @inheritDoc
     */
    extend(context: IContext): void;
    private handleContextView(contextView);
    private beforeInitializing();
}
