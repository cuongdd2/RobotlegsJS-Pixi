import { IConfig } from "robotlegs";
import { IContextView } from "../api/IContextView";
import { IViewManager } from "../../viewManager/api/IViewManager";
/**
 * This configuration file adds the ContextView to the viewManager.
 *
 * It requires that the ViewManagerExtension, ContextViewExtension
 * and a ContextView have been installed.
 */
export declare class ContextViewListenerConfig implements IConfig {
    private _contextView;
    private _viewManager;
    constructor(contextView: IContextView, viewManager: IViewManager);
    /**
     * @inheritDoc
     */
    configure(): void;
}
