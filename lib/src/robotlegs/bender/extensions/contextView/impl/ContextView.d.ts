import { IContextView } from "../api/IContextView";
/**
 * The Context View represents the root any for a Context
 */
export declare class ContextView implements IContextView {
    private _view;
    /**
     * The root DisplayObjectContainer for this Context
     */
    readonly view: any;
    /**
     * The Context View represents the root any for a Context
     * @param view The root any for this Context
     */
    constructor(view: any);
}
