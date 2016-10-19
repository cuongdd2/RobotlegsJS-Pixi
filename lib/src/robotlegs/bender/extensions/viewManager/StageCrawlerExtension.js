// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var IContextView_1 = require("../contextView/api/IContextView");
var IViewManager_1 = require("./api/IViewManager");
var ContainerRegistry_1 = require("./impl/ContainerRegistry");
var StageCrawler_1 = require("./impl/StageCrawler");
/**
 * View Handlers (like the MediatorMap) handle views as they land on stage.
 *
 * This extension checks for views that might already be on the stage
 * after context initialization and ensures that those views are handled.
 */
var StageCrawlerExtension = (function () {
    function StageCrawlerExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    StageCrawlerExtension.prototype.extend = function (context) {
        this._injector = context.injector;
        this._logger = context.getLogger(this);
        context.afterInitializing(this.afterInitializing.bind(this));
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageCrawlerExtension.prototype.afterInitializing = function () {
        // this._containerRegistry = this._injector.getInstance(ContainerRegistry);
        this._containerRegistry = this._injector.get(ContainerRegistry_1.ContainerRegistry);
        this._injector.isBound(IViewManager_1.IViewManager)
            ? this.scanViewManagedContainers()
            : this.scanContextView();
    };
    StageCrawlerExtension.prototype.scanViewManagedContainers = function () {
        this._logger.debug("ViewManager is installed. Checking for managed containers...");
        var viewManager = this._injector.get(IViewManager_1.IViewManager);
        for (var i in viewManager.containers) {
            var container = viewManager.containers[i];
            container.stage && this.scanContainer(container);
        }
    };
    StageCrawlerExtension.prototype.scanContextView = function () {
        this._logger.debug("ViewManager is not installed. Checking the ContextView...");
        var contextView = this._injector.get(IContextView_1.IContextView);
        contextView.view.stage && this.scanContainer(contextView.view);
    };
    StageCrawlerExtension.prototype.scanContainer = function (container) {
        var binding = this._containerRegistry.getBinding(container);
        this._logger.debug("StageCrawler scanning container {0} ...", [container]);
        new StageCrawler_1.StageCrawler(binding).scan(container);
        this._logger.debug("StageCrawler finished scanning {0}", [container]);
    };
    return StageCrawlerExtension;
}());
exports.StageCrawlerExtension = StageCrawlerExtension;
//# sourceMappingURL=StageCrawlerExtension.js.map