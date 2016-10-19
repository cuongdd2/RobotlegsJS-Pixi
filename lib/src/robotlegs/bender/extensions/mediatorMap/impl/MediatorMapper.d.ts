import { ILogger, ITypeFilter } from "robotlegs";
import { IMediatorConfigurator } from "../dsl/IMediatorConfigurator";
import { IMediatorMapper } from "../dsl/IMediatorMapper";
import { IMediatorUnmapper } from "../dsl/IMediatorUnmapper";
import { MediatorViewHandler } from "./MediatorViewHandler";
/**
 * @private
 */
export declare class MediatorMapper implements IMediatorMapper, IMediatorUnmapper {
    private _mappings;
    private _typeFilter;
    private _handler;
    private _logger;
    /**
     * @private
     */
    constructor(typeFilter: ITypeFilter, handler: MediatorViewHandler, logger?: ILogger);
    /**
     * @inheritDoc
     */
    toMediator(mediatorClass: any): IMediatorConfigurator;
    /**
     * @inheritDoc
     */
    fromMediator(mediatorClass: any): void;
    /**
     * @inheritDoc
     */
    fromAll(): void;
    private createMapping(mediatorClass);
    private deleteMapping(mapping);
    private overwriteMapping(mapping);
}
