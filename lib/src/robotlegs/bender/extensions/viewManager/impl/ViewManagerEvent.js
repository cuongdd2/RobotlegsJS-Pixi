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
var robotlegs_1 = require("robotlegs");
/**
 * Container existence event
 * @private
 */
var ViewManagerEvent = (function (_super) {
    __extends(ViewManagerEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a view manager event
     * @param type The event type
     * @param container The container associated with this event
     * @param handler The view handler associated with this event
     */
    function ViewManagerEvent(type, container, handler) {
        _super.call(this, type);
        this._container = container;
        this._handler = handler;
    }
    Object.defineProperty(ViewManagerEvent.prototype, "container", {
        /**
         * The container associated with this event
         */
        get: function () {
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewManagerEvent.prototype, "handler", {
        /**
         * The view handler associated with this event
         */
        get: function () {
            return this._handler;
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
    ViewManagerEvent.prototype.clone = function () {
        return new ViewManagerEvent(this.type, this._container, this._handler);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    ViewManagerEvent.CONTAINER_ADD = 'containerAdd';
    ViewManagerEvent.CONTAINER_REMOVE = 'containerRemove';
    ViewManagerEvent.HANDLER_ADD = 'handlerAdd';
    ViewManagerEvent.HANDLER_REMOVE = 'handlerRemove';
    return ViewManagerEvent;
}(robotlegs_1.Event));
exports.ViewManagerEvent = ViewManagerEvent;
//# sourceMappingURL=ViewManagerEvent.js.map