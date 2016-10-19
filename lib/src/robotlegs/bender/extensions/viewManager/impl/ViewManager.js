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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var inversify_1 = require("inversify");
var robotlegs_1 = require("robotlegs");
var ViewManagerEvent_1 = require("./ViewManagerEvent");
var ContainerRegistry_1 = require("../impl/ContainerRegistry");
/*[Event(name="containerAdd", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="containerRemove", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="handlerAdd", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/*[Event(name="handlerRemove", type="robotlegs.bender.extensions.viewManager.impl.ViewManagerEvent")]*/
/**
 * @private
 */
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ViewManager(containerRegistry) {
        _super.call(this);
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        this._containers = [];
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._handlers = [];
        this._registry = containerRegistry;
    }
    Object.defineProperty(ViewManager.prototype, "containers", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._containers;
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
    ViewManager.prototype.addContainer = function (container) {
        if (!this.validContainer(container))
            return;
        console.log("addContainer: ", container);
        this._containers.push(container);
        for (var i in this._handlers) {
            var handler = this._handlers[i];
            this._registry.addContainer(container).addHandler(handler);
        }
        this.dispatchEvent(new ViewManagerEvent_1.ViewManagerEvent(ViewManagerEvent_1.ViewManagerEvent.CONTAINER_ADD, container));
    };
    /**
     * @inheritDoc
     */
    ViewManager.prototype.removeContainer = function (container) {
        var index = this._containers.indexOf(container);
        if (index == -1)
            return;
        this._containers.splice(index, 1);
        var binding = this._registry.getBinding(container);
        for (var i in this._handlers) {
            var handler = this._handlers[i];
            binding.removeHandler(handler);
        }
        this.dispatchEvent(new ViewManagerEvent_1.ViewManagerEvent(ViewManagerEvent_1.ViewManagerEvent.CONTAINER_REMOVE, container));
    };
    /**
     * @inheritDoc
     */
    ViewManager.prototype.addViewHandler = function (handler) {
        if (this._handlers.indexOf(handler) != -1)
            return;
        this._handlers.push(handler);
        for (var i in this._containers) {
            var container = this._containers[i];
            this._registry.addContainer(container).addHandler(handler);
        }
        this.dispatchEvent(new ViewManagerEvent_1.ViewManagerEvent(ViewManagerEvent_1.ViewManagerEvent.HANDLER_ADD, null, handler));
    };
    /**
     * @inheritDoc
     */
    ViewManager.prototype.removeViewHandler = function (handler) {
        var index = this._handlers.indexOf(handler);
        if (index == -1)
            return;
        this._handlers.splice(index, 1);
        for (var i in this._containers) {
            var container = this._containers[i];
            this._registry.getBinding(container).removeHandler(handler);
        }
        this.dispatchEvent(new ViewManagerEvent_1.ViewManagerEvent(ViewManagerEvent_1.ViewManagerEvent.HANDLER_REMOVE, null, handler));
    };
    /**
     * @inheritDoc
     */
    ViewManager.prototype.removeAllHandlers = function () {
        for (var i in this._containers) {
            var container = this._containers[i];
            var binding = this._registry.getBinding(container);
            for (var j in this._handlers) {
                var handler = this._handlers[j];
                binding.removeHandler(handler);
            }
        }
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ViewManager.prototype.validContainer = function (container) {
        for (var i in this._containers) {
            var registeredContainer = this._containers[i];
            if (container == registeredContainer)
                return false;
            if (registeredContainer.contains(container) || container.contains(registeredContainer))
                throw new Error("Containers can not be nested");
        }
        return true;
    };
    ViewManager = __decorate([
        inversify_1.injectable(), 
        __metadata('design:paramtypes', [ContainerRegistry_1.ContainerRegistry])
    ], ViewManager);
    return ViewManager;
}(robotlegs_1.EventDispatcher));
exports.ViewManager = ViewManager;
//# sourceMappingURL=ViewManager.js.map