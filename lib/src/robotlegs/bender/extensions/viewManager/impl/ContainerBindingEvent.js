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
 * @private
 */
var ContainerBindingEvent = (function (_super) {
    __extends(ContainerBindingEvent, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ContainerBindingEvent(type) {
        _super.call(this, type);
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ContainerBindingEvent.prototype.clone = function () {
        return new ContainerBindingEvent(this.type);
    };
    /*============================================================================*/
    /* Public Static Properties                                                   */
    /*============================================================================*/
    ContainerBindingEvent.BINDING_EMPTY = "bindingEmpty";
    return ContainerBindingEvent;
}(Event));
exports.ContainerBindingEvent = ContainerBindingEvent;
//# sourceMappingURL=ContainerBindingEvent.js.map