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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inversify_1 = require("inversify");
var IContextView_1 = require("../api/IContextView");
var IViewManager_1 = require("../../viewManager/api/IViewManager");
/**
 * This configuration file adds the ContextView to the viewManager.
 *
 * It requires that the ViewManagerExtension, ContextViewExtension
 * and a ContextView have been installed.
 */
var ContextViewListenerConfig = (function () {
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    function ContextViewListenerConfig(contextView, viewManager) {
        this._contextView = contextView;
        this._viewManager = viewManager;
    }
    /**
     * @inheritDoc
     */
    ContextViewListenerConfig.prototype.configure = function () {
        // Adds the Context View to the View Manager at startup
        this._viewManager.addContainer(this._contextView.view);
    };
    ContextViewListenerConfig = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(IContextView_1.IContextView)),
        __param(1, inversify_1.inject(IViewManager_1.IViewManager)), 
        __metadata('design:paramtypes', [Object, Object])
    ], ContextViewListenerConfig);
    return ContextViewListenerConfig;
}());
exports.ContextViewListenerConfig = ContextViewListenerConfig;
//# sourceMappingURL=ContextViewListenerConfig.js.map