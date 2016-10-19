// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var robotlegs_1 = require("robotlegs");
var ContextView_1 = require("./impl/ContextView");
/**
 * <p>This Extension waits for a ContextView to be added as a configuration,
 * and initializes and destroys the context based on the contextView's stage presence.</p>
 *
 * <p>It should be installed before context initialization.</p>
 */
var StageSyncExtension = (function () {
    function StageSyncExtension() {
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    StageSyncExtension.prototype.extend = function (context) {
        this._context = context;
        this._logger = context.getLogger(this);
        this._context.addConfigHandler(robotlegs_1.instanceOfType(ContextView_1.ContextView), this.handleContextView.bind(this));
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageSyncExtension.prototype.handleContextView = function (contextView) {
        if (this._contextView) {
            this._logger.warn("A contextView has already been installed, ignoring {0}", [contextView.view]);
            return;
        }
        this._contextView = contextView.view;
        if (this._contextView.stage) {
            this.initializeContext();
        }
        else {
            this._logger.debug("Context view is not yet on stage. Waiting...");
        }
    };
    StageSyncExtension.prototype.onAddedToStage = function (event) {
        // this._contextView.removeEventListener(Event.ADDED_TO_STAGE, this.onAddedToStage);
        this.initializeContext();
    };
    StageSyncExtension.prototype.initializeContext = function () {
        this._logger.debug("Context view is now on stage. Initializing context...");
        this._context.initialize();
        // this._contextView.addEventListener(Event.REMOVED_FROM_STAGE, this.onRemovedFromStage);
    };
    StageSyncExtension.prototype.onRemovedFromStage = function (event) {
        this._logger.debug("Context view has left the stage. Destroying context...");
        // this._contextView.removeEventListener(Event.REMOVED_FROM_STAGE, this.onRemovedFromStage);
        this._context.destroy();
    };
    return StageSyncExtension;
}());
exports.StageSyncExtension = StageSyncExtension;
//# sourceMappingURL=StageSyncExtension.js.map