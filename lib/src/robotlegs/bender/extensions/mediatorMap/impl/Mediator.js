// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
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
/**
 * Classic Robotlegs mediator implementation
 *
 * <p>Override initialize and destroy to hook into the mediator lifecycle.</p>
 */
var Mediator = (function () {
    function Mediator() {
    }
    Object.defineProperty(Mediator.prototype, "viewComponent", {
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        /**
         * @private
         */
        set: function (view) {
            this._viewComponent = view;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Runs after the mediator has been destroyed.
     * Cleans up listeners mapped through the local EventMap.
     */
    Mediator.prototype.postDestroy = function () {
        this.eventMap.unmapListeners();
    };
    /*============================================================================*/
    /* Protected Functions                                                        */
    /*============================================================================*/
    Mediator.prototype.addViewListener = function (eventString, listener, eventClass) {
        this.eventMap.mapListener(this._viewComponent, eventString, listener, eventClass);
    };
    Mediator.prototype.addContextListener = function (eventString, listener, eventClass) {
        this.eventMap.mapListener(this.eventDispatcher, eventString, listener, eventClass);
    };
    Mediator.prototype.removeViewListener = function (eventString, listener, eventClass) {
        this.eventMap.unmapListener(this._viewComponent, eventString, listener, eventClass);
    };
    Mediator.prototype.removeContextListener = function (eventString, listener, eventClass) {
        this.eventMap.unmapListener(this.eventDispatcher, eventString, listener, eventClass);
    };
    Mediator.prototype.dispatch = function (event) {
        if (this.eventDispatcher.hasEventListener(event.type)) {
            this.eventDispatcher.dispatchEvent(event);
        }
    };
    __decorate([
        inversify_1.inject(robotlegs_1.IEventMap), 
        __metadata('design:type', Object)
    ], Mediator.prototype, "eventMap", void 0);
    __decorate([
        inversify_1.inject(robotlegs_1.IEventDispatcher), 
        __metadata('design:type', Object)
    ], Mediator.prototype, "eventDispatcher", void 0);
    Mediator = __decorate([
        inversify_1.injectable(), 
        __metadata('design:paramtypes', [])
    ], Mediator);
    return Mediator;
}());
exports.Mediator = Mediator;
//# sourceMappingURL=Mediator.js.map