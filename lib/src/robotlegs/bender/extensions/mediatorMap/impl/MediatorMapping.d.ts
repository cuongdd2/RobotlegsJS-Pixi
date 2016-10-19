import { IGuard, IHook, ITypeFilter } from "robotlegs";
import { IMediatorMapping } from "../api/IMediatorMapping";
import { IMediatorConfigurator } from "../dsl/IMediatorConfigurator";
/**
 * @private
 */
export declare class MediatorMapping implements IMediatorMapping, IMediatorConfigurator {
    private _matcher;
    /**
     * @inheritDoc
     */
    readonly matcher: ITypeFilter;
    private _mediatorClass;
    /**
     * @inheritDoc
     */
    readonly mediatorClass: FunctionConstructor;
    private _guards;
    /**
     * @inheritDoc
     */
    readonly guards: IGuard[];
    private _hooks;
    /**
     * @inheritDoc
     */
    readonly hooks: IHook[];
    private _autoRemoveEnabled;
    /**
     * @inheritDoc
     */
    readonly autoRemoveEnabled: boolean;
    /**
     * @private
     */
    constructor(matcher: ITypeFilter, mediatorClass: FunctionConstructor);
    /**
     * @inheritDoc
     */
    withGuards(...guards: IGuard[]): IMediatorConfigurator;
    /**
     * @inheritDoc
     */
    withHooks(...hooks: IHook[]): IMediatorConfigurator;
    /**
     * @inheritDoc
     */
    autoRemove(value?: boolean): IMediatorConfigurator;
}
