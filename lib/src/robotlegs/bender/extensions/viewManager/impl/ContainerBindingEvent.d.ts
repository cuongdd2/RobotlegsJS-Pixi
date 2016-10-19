/**
 * @private
 */
export declare class ContainerBindingEvent extends Event {
    static BINDING_EMPTY: string;
    /**
     * @private
     */
    constructor(type: string);
    /**
     * @inheritDoc
     */
    clone(): Event;
}
