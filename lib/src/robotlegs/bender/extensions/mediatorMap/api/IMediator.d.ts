/**
 * Optional Mediator interface
 */
export interface IMediator {
    /**
     * Initializes the mediator. This is run automatically by the mediatorMap when a mediator is created.
     * Normally the initialize function is where you would add handlers using the eventMap.
     */
    initialize(): void;
    /**
     * Destroys the mediator. This is run automatically by the mediatorMap when a mediator is destroyed.
     * You should clean up any handlers that were added directly (eventMap handlers will be cleaned up automatically).
     */
    destroy(): void;
}
