/**
 * Unmaps a Mediator
 */
export interface IMediatorUnmapper {
    /**
     * Unmaps a mediator from this matcher
     * @param mediatorClass Mediator to unmap
     */
    fromMediator(mediatorClass: FunctionConstructor): void;
    /**
     * Unmaps all mediator mappings for this matcher
     */
    fromAll(): void;
}
