// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
/**
 * The Context View represents the root any for a Context
 */
var ContextView = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * The Context View represents the root any for a Context
     * @param view The root any for this Context
     */
    function ContextView(view) {
        this._view = view;
    }
    Object.defineProperty(ContextView.prototype, "view", {
        /**
         * The root DisplayObjectContainer for this Context
         */
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    return ContextView;
}());
exports.ContextView = ContextView;
//# sourceMappingURL=ContextView.js.map