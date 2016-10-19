// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var ContainerRegistry_1 = require("./impl/ContainerRegistry");
var StageObserver_1 = require("./impl/StageObserver");
var installCount = 0;
/**
 * This extension install an automatic Stage Observer
 */
var StageObserverExtension = (function () {
    function StageObserverExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    StageObserverExtension.prototype.extend = function (context) {
        context.whenInitializing(this.whenInitializing.bind(this));
        context.whenDestroying(this.whenDestroying.bind(this));
        installCount++;
        this._injector = context.injector;
        this._logger = context.getLogger(this);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageObserverExtension.prototype.whenInitializing = function () {
        // Hark, an actual Singleton!
        if (!StageObserverExtension._stageObserver) {
            var containerRegistry = this._injector.get(ContainerRegistry_1.ContainerRegistry);
            this._logger.debug("Creating genuine StageObserver Singleton");
            StageObserverExtension._stageObserver = new StageObserver_1.StageObserver(containerRegistry);
        }
    };
    StageObserverExtension.prototype.whenDestroying = function () {
        installCount--;
        if (installCount == 0) {
            this._logger.debug("Destroying genuine StageObserver Singleton");
            StageObserverExtension._stageObserver.destroy();
            StageObserverExtension._stageObserver = null;
        }
    };
    /*============================================================================*/
    /* Private Static Properties                                                  */
    /*============================================================================*/
    // Really? Yes, there can be only one.
    StageObserverExtension._stageObserver = null;
    return StageObserverExtension;
}());
exports.StageObserverExtension = StageObserverExtension;
//# sourceMappingURL=StageObserverExtension.js.map