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
var ContainerBindingEvent_1 = require("./ContainerBindingEvent");
/*[Event(name="bindingEmpty", type="robotlegs.bender.extensions.viewManager.impl.ContainerBindingEvent")]*/
/**
 * @private
 */
var ContainerBinding = (function (_super) {
    __extends(ContainerBinding, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ContainerBinding(container) {
        _super.call(this);
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._handlers = [];
        this._container = container;
    }
    Object.defineProperty(ContainerBinding.prototype, "parent", {
        /**
         * @private
         */
        get: function () {
            return this._parent;
        },
        /**
         * @private
         */
        set: function (value) {
            this._parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerBinding.prototype, "container", {
        /**
         * @private
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
     * @private
     */
    ContainerBinding.prototype.addHandler = function (handler) {
        if (this._handlers.indexOf(handler) > -1)
            return;
        this._handlers.push(handler);
    };
    /**
     * @private
     */
    ContainerBinding.prototype.removeHandler = function (handler) {
        var index = this._handlers.indexOf(handler);
        if (index > -1) {
            this._handlers.splice(index, 1);
            if (this._handlers.length == 0) {
                this.dispatchEvent(new ContainerBindingEvent_1.ContainerBindingEvent(ContainerBindingEvent_1.ContainerBindingEvent.BINDING_EMPTY));
            }
        }
    };
    /**
     * @private
     */
    ContainerBinding.prototype.handleView = function (view, type) {
        var length = this._handlers.length;
        for (var i = 0; i < length; i++) {
            var handler = this._handlers[i];
            handler.handleView(view, type);
        }
    };
    return ContainerBinding;
}(robotlegs_1.EventDispatcher));
exports.ContainerBinding = ContainerBinding;
//# sourceMappingURL=ContainerBinding.js.map