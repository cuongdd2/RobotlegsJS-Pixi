// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var pixi_js_1 = require("pixi.js");
/**
 * @private
 */
var MediatorManager = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorManager(factory) {
        this._factory = factory;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    MediatorManager.prototype.addMediator = function (mediator, item, mapping) {
        var displayObject = item;
        // Watch Display Object for removal
        if (displayObject && mapping.autoRemoveEnabled)
            displayObject.on('removed', this.onRemovedFromStage, this);
        // displayObject.addEventListener(Event.REMOVED_FROM_STAGE, this.onRemovedFromStage);
        // Synchronize with item life-cycle
        this.initializeMediator(mediator, item);
    };
    /**
     * @private
     */
    MediatorManager.prototype.removeMediator = function (mediator, item, mapping) {
        if (item instanceof pixi_js_1.DisplayObject)
            item.off('removed', this.onRemovedFromStage);
        // displayObject.removeEventListener(Event.REMOVED_FROM_STAGE, this.onRemovedFromStage);
        this.destroyMediator(mediator);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorManager.prototype.onRemovedFromStage = function (event) {
        this._factory.removeMediators(event);
    };
    MediatorManager.prototype.initializeMediator = function (mediator, mediatedItem) {
        if ('preInitialize' in mediator)
            mediator.preInitialize();
        if ('viewComponent' in mediator)
            mediator.viewComponent = mediatedItem;
        if ('initialize' in mediator)
            mediator.initialize();
        if ('postInitialize' in mediator)
            mediator.postInitialize();
    };
    MediatorManager.prototype.destroyMediator = function (mediator) {
        if ('preDestroy' in mediator)
            mediator.preDestroy();
        if ('destroy' in mediator)
            mediator.destroy();
        if ('viewComponent' in mediator)
            mediator.viewComponent = null;
        if ('postDestroy' in mediator)
            mediator.postDestroy();
    };
    return MediatorManager;
}());
exports.MediatorManager = MediatorManager;
//# sourceMappingURL=MediatorManager.js.map