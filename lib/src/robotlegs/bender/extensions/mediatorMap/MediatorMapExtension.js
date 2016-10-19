// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var IMediatorMap_1 = require("./api/IMediatorMap");
var MediatorMap_1 = require("./impl/MediatorMap");
var IViewManager_1 = require("../viewManager/api/IViewManager");
/**
 * This extension installs a shared IMediatorMap into the context
 */
var MediatorMapExtension = (function () {
    function MediatorMapExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MediatorMapExtension.prototype.extend = function (context) {
        context.beforeInitializing(this.beforeInitializing.bind(this))
            .beforeDestroying(this.beforeDestroying.bind(this))
            .whenDestroying(this.whenDestroying.bind(this));
        this._injector = context.injector;
        // this._injector.map(IMediatorMap).toSingleton(MediatorMap);
        this._injector.bind(IMediatorMap_1.IMediatorMap).to(MediatorMap_1.MediatorMap).inSingletonScope();
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorMapExtension.prototype.beforeInitializing = function () {
        this._mediatorMap = this._injector.get(IMediatorMap_1.IMediatorMap);
        // if (this._injector.satisfiesDirectly(IViewManager)) {
        if (this._injector.isBound(IViewManager_1.IViewManager)) {
            this._viewManager = this._injector.get(IViewManager_1.IViewManager);
            this._viewManager.addViewHandler(this._mediatorMap);
        }
    };
    MediatorMapExtension.prototype.beforeDestroying = function () {
        this._mediatorMap.unmediateAll();
        // if (this._injector.satisfiesDirectly(IViewManager)) {
        if (this._injector.isBound(IViewManager_1.IViewManager)) {
            this._viewManager = this._injector.get(IViewManager_1.IViewManager);
            this._viewManager.removeViewHandler(this._mediatorMap);
        }
    };
    MediatorMapExtension.prototype.whenDestroying = function () {
        // if (this._injector.satisfiesDirectly(IMediatorMap)) {
        if (this._injector.isBound(IMediatorMap_1.IMediatorMap)) {
            this._injector.unbind(IMediatorMap_1.IMediatorMap);
        }
    };
    return MediatorMapExtension;
}());
exports.MediatorMapExtension = MediatorMapExtension;
//# sourceMappingURL=MediatorMapExtension.js.map