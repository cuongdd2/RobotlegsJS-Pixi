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
 * Container existence event
 * @private
 */
var robotlegs_1 = require("robotlegs");
var ContainerRegistryEvent = (function (_super) {
    __extends(ContainerRegistryEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * Creates a new container existence event
     * @param type The event type
     * @param container The container associated with this event
     */
    function ContainerRegistryEvent(type, container) {
        _super.call(this, type);
        this._container = container;
    }
    Object.defineProperty(ContainerRegistryEvent.prototype, "container", {
        /**
         * The container associated with this event
         */
        get: function () {
            return this._container;
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
    ContainerRegistryEvent.prototype.clone = function () {
        return new ContainerRegistryEvent(this.type, this._container);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    ContainerRegistryEvent.CONTAINER_ADD = "containerAdd";
    ContainerRegistryEvent.CONTAINER_REMOVE = "containerRemove";
    ContainerRegistryEvent.ROOT_CONTAINER_ADD = "rootContainerAdd";
    ContainerRegistryEvent.ROOT_CONTAINER_REMOVE = "rootContainerRemove";
    return ContainerRegistryEvent;
}(robotlegs_1.Event));
exports.ContainerRegistryEvent = ContainerRegistryEvent;
//# sourceMappingURL=ContainerRegistryEvent.js.map