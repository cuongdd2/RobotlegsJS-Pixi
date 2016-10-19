import { IMediatorUnmapper } from "../dsl/IMediatorUnmapper";
/**
 * @private
 */
export declare class NullMediatorUnmapper implements IMediatorUnmapper {
    /**
     * @private
     */
    fromMediator(mediatorClass: FunctionConstructor): void;
    /**
     * @private
     */
    fromAll(): void;
}
