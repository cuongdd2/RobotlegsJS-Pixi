import { IEventMap, IEventDispatcher, Event } from "robotlegs";
import { IMediator } from "../api/IMediator";
/**
 * Classic Robotlegs mediator implementation
 *
 * <p>Override initialize and destroy to hook into the mediator lifecycle.</p>
 */
export declare abstract class Mediator implements IMediator {
    protected eventMap: IEventMap;
    protected eventDispatcher: IEventDispatcher;
    protected _viewComponent: IEventDispatcher;
    /**
     * @private
     */
    viewComponent: IEventDispatcher;
    /**
     * @inheritDoc
     */
    abstract initialize(): void;
    /**
     * @inheritDoc
     */
    abstract destroy(): void;
    /**
     * Runs after the mediator has been destroyed.
     * Cleans up listeners mapped through the local EventMap.
     */
    postDestroy(): void;
    protected addViewListener(eventString: string, listener: Function, eventClass?: Object): void;
    protected addContextListener(eventString: string, listener: Function, eventClass?: Object): void;
    protected removeViewListener(eventString: string, listener: Function, eventClass?: Object): void;
    protected removeContextListener(eventString: string, listener: Function, eventClass?: Object): void;
    protected dispatch(event: Event): void;
}
