/**
 * View Configuration Event
 * @private
 */
export declare class ConfigureViewEvent extends Event {
    static CONFIGURE_VIEW: string;
    private _view;
    /**
     * The view instance associated with this event
     */
    readonly view: any;
    /**
     * Creates a view configuration event
     * @param type The event type
     * @param view The associated view instance
     */
    constructor(type: string, view?: any);
    /**
     * @inheritDoc
     */
    clone(): Event;
}
