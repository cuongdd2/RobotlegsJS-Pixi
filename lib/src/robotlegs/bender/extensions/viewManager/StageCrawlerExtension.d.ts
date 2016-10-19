import { IContext, IExtension } from "robotlegs";
/**
 * View Handlers (like the MediatorMap) handle views as they land on stage.
 *
 * This extension checks for views that might already be on the stage
 * after context initialization and ensures that those views are handled.
 */
export declare class StageCrawlerExtension implements IExtension {
    private _logger;
    private _injector;
    private _containerRegistry;
    /**
     * @inheritDoc
     */
    extend(context: IContext): void;
    private afterInitializing();
    private scanViewManagedContainers();
    private scanContextView();
    private scanContainer(container);
}
