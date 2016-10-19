// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * View Configuration Event
 * @private
 */
var ConfigureViewEvent = (function (_super) {
    __extends(ConfigureViewEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a view configuration event
     * @param type The event type
     * @param view The associated view instance
     */
    function ConfigureViewEvent(type, view) {
        // super(type, true, true);
        _super.call(this, type);
        this._view = view;
    }
    Object.defineProperty(ConfigureViewEvent.prototype, "view", {
        /**
         * The view instance associated with this event
         */
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ConfigureViewEvent.prototype.clone = function () {
        return new ConfigureViewEvent(this.type, this._view);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    ConfigureViewEvent.CONFIGURE_VIEW = "configureView";
    return ConfigureViewEvent;
}(Event));
exports.ConfigureViewEvent = ConfigureViewEvent;
//# sourceMappingURL=ConfigureViewEvent.js.map