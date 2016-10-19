import { IMediatorMapping } from "../api/IMediatorMapping";
import { IViewHandler } from "../../viewManager/api/IViewHandler";
import { MediatorFactory } from "./MediatorFactory";
/**
 * @private
 */
export declare class MediatorViewHandler implements IViewHandler {
    private _mappings;
    private _knownMappings;
    private _factory;
    /**
     * @private
     */
    constructor(factory: MediatorFactory);
    /**
     * @private
     */
    addMapping(mapping: IMediatorMapping): void;
    /**
     * @private
     */
    removeMapping(mapping: IMediatorMapping): void;
    /**
     * @private
     */
    handleView(view: any, type: FunctionConstructor): void;
    /**
     * @private
     */
    handleItem(item: Object, type: FunctionConstructor): void;
    private flushCache();
    private getInterestedMappingsFor(item, type);
}
