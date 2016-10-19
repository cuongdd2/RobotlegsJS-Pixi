// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var robotlegs_1 = require("robotlegs");
var ContextViewExtension_1 = require("../../extensions/contextView/ContextViewExtension");
var ContextViewListenerConfig_1 = require("../../extensions/contextView/impl/ContextViewListenerConfig");
var StageSyncExtension_1 = require("../../extensions/contextView/StageSyncExtension");
var MediatorMapExtension_1 = require("../../extensions/mediatorMap/MediatorMapExtension");
var StageCrawlerExtension_1 = require("../../extensions/viewManager/StageCrawlerExtension");
var StageObserverExtension_1 = require("../../extensions/viewManager/StageObserverExtension");
var ViewManagerExtension_1 = require("../../extensions/viewManager/ViewManagerExtension");
/**
 * For that Classic Robotlegs flavour
 *
 * <p>This bundle installs a number of extensions commonly used
 * in typical Robotlegs applications and modules.</p>
 */
var PixiBundle = (function () {
    function PixiBundle() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    PixiBundle.prototype.extend = function (context) {
        context.logLevel = robotlegs_1.LogLevel.DEBUG;
        context.install(ContextViewExtension_1.ContextViewExtension, ViewManagerExtension_1.ViewManagerExtension, StageObserverExtension_1.StageObserverExtension, MediatorMapExtension_1.MediatorMapExtension, StageCrawlerExtension_1.StageCrawlerExtension, StageSyncExtension_1.StageSyncExtension);
        context.configure(ContextViewListenerConfig_1.ContextViewListenerConfig);
    };
    return PixiBundle;
}());
exports.PixiBundle = PixiBundle;
//# sourceMappingURL=PixiBundle.js.map