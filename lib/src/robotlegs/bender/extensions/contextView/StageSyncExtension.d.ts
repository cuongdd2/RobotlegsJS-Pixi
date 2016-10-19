import { IContext, IExtension } from "robotlegs";
/**
 * <p>This Extension waits for a ContextView to be added as a configuration,
 * and initializes and destroys the context based on the contextView's stage presence.</p>
 *
 * <p>It should be installed before context initialization.</p>
 */
export declare class StageSyncExtension implements IExtension {
    private _context;
    private _contextView;
    private _logger;
    /**
     * @inheritDoc
     */
    extend(context: IContext): void;
    private handleContextView(contextView);
    private onAddedToStage(event);
    private initializeContext();
    private onRemovedFromStage(event);
}
