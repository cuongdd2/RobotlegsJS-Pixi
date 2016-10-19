import { IContext, ITypeMatcher } from "robotlegs";
import { IMediatorMap } from "../api/IMediatorMap";
import { IMediatorMapper } from "../dsl/IMediatorMapper";
import { IMediatorUnmapper } from "../dsl/IMediatorUnmapper";
import { IViewHandler } from "../../viewManager/api/IViewHandler";
/**
 * @private
 */
export declare class MediatorMap implements IMediatorMap, IViewHandler {
    private _mappers;
    private _logger;
    private _factory;
    private _viewHandler;
    private NULL_UNMAPPER;
    /**
     * @private
     */
    constructor(context: IContext);
    /**
     * @inheritDoc
     */
    mapMatcher(matcher: ITypeMatcher): IMediatorMapper;
    /**
     * @inheritDoc
     */
    map(type: any): IMediatorMapper;
    /**
     * @inheritDoc
     */
    unmapMatcher(matcher: ITypeMatcher): IMediatorUnmapper;
    /**
     * @inheritDoc
     */
    unmap(type: any): IMediatorUnmapper;
    /**
     * @inheritDoc
     */
    handleView(view: any, type: any): void;
    /**
     * @inheritDoc
     */
    mediate(item: any): void;
    /**
     * @inheritDoc
     */
    unmediate(item: any): void;
    /**
     * @inheritDoc
     */
    unmediateAll(): void;
    private createMapper(matcher);
}
