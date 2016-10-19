// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var robotlegs_1 = require("robotlegs");
var IContextView_1 = require("./api/IContextView");
var ContextView_1 = require("./impl/ContextView");
var pixiPatch_1 = require("./pixiPatch");
/**
 * <p>This Extension waits for a ContextView to be added as a configuration
 * and maps it into the context's injector.</p>
 *
 * <p>It should be installed before context initialization.</p>
 */
var ContextViewExtension = (function () {
    function ContextViewExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    ContextViewExtension.prototype.extend = function (context) {
        this._injector = context.injector;
        this._logger = context.getLogger(this);
        context.beforeInitializing(this.beforeInitializing.bind(this));
        context.addConfigHandler(robotlegs_1.instanceOfType(ContextView_1.ContextView), this.handleContextView.bind(this));
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ContextViewExtension.prototype.handleContextView = function (contextView) {
        if (this._injector.isBound(IContextView_1.IContextView)) {
            this._logger.warn("A contextView has already been installed, ignoring {0}", [contextView.view]);
        }
        else {
            this._logger.debug("Mapping {0} as contextView", [contextView.view]);
            pixiPatch_1.applyPixiPatch(contextView.view);
            this._injector.bind(IContextView_1.IContextView).toConstantValue(contextView);
        }
    };
    ContextViewExtension.prototype.beforeInitializing = function () {
        if (!this._injector.isBound(IContextView_1.IContextView)) {
            this._logger.error("A ContextView must be installed if you install the ContextViewExtension.");
        }
    };
    return ContextViewExtension;
}());
exports.ContextViewExtension = ContextViewExtension;
//# sourceMappingURL=ContextViewExtension.js.map