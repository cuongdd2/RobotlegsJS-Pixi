// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var IViewManager_1 = require("../viewManager/api/IViewManager");
var ViewManager_1 = require("../viewManager/impl/ViewManager");
var ContainerRegistry_1 = require("./impl/ContainerRegistry");
/**
 * This extension install a View Manager into the context
 */
var ViewManagerExtension = (function () {
    function ViewManagerExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ViewManagerExtension.prototype.extend = function (context) {
        context.whenInitializing(this.whenInitializing.bind(this));
        context.whenDestroying(this.whenDestroying.bind(this));
        this._injector = context.injector;
        // Just one Container Registry
        ViewManagerExtension._containerRegistry = ViewManagerExtension._containerRegistry || new ContainerRegistry_1.ContainerRegistry();
        this._injector.bind(ContainerRegistry_1.ContainerRegistry).toConstantValue(ViewManagerExtension._containerRegistry);
        // But you get your own View Manager
        this._injector.bind(IViewManager_1.IViewManager).to(ViewManager_1.ViewManager).inSingletonScope();
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ViewManagerExtension.prototype.whenInitializing = function () {
        console.log("initializing ViewManagerExtension");
        this._viewManager = this._injector.get(IViewManager_1.IViewManager);
    };
    ViewManagerExtension.prototype.whenDestroying = function () {
        this._viewManager.removeAllHandlers();
        this._injector.unbind(IViewManager_1.IViewManager);
        this._injector.unbind(ContainerRegistry_1.ContainerRegistry);
    };
    return ViewManagerExtension;
}());
exports.ViewManagerExtension = ViewManagerExtension;
//# sourceMappingURL=ViewManagerExtension.js.map