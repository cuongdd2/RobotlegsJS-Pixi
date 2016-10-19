// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var ContainerRegistry_1 = require("./impl/ContainerRegistry");
var ManualStageObserver_1 = require("./impl/ManualStageObserver");
var installCount = 0;
/**
 * This extension install a manual Stage Observer
 */
var ManualStageObserverExtension = (function () {
    function ManualStageObserverExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ManualStageObserverExtension.prototype.extend = function (context) {
        context.whenInitializing(this.whenInitializing);
        context.whenDestroying(this.whenDestroying);
        installCount++;
        this._injector = context.injector;
        this._logger = context.getLogger(this);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ManualStageObserverExtension.prototype.whenInitializing = function () {
        // Hark, an actual Singleton!
        if (!ManualStageObserverExtension._manualStageObserver) {
            // var containerRegistry: ContainerRegistry = this._injector.getInstance(ContainerRegistry);
            var containerRegistry = this._injector.get(ContainerRegistry_1.ContainerRegistry);
            this._logger.debug("Creating genuine ManualStageObserver Singleton");
            ManualStageObserverExtension._manualStageObserver = new ManualStageObserver_1.ManualStageObserver(containerRegistry);
        }
    };
    ManualStageObserverExtension.prototype.whenDestroying = function () {
        installCount--;
        if (installCount == 0) {
            this._logger.debug("Destroying genuine ManualStageObserver Singleton");
            ManualStageObserverExtension._manualStageObserver.destroy();
            ManualStageObserverExtension._manualStageObserver = null;
        }
    };
    return ManualStageObserverExtension;
}());
exports.ManualStageObserverExtension = ManualStageObserverExtension;
//# sourceMappingURL=ManualStageObserverExtension.js.map