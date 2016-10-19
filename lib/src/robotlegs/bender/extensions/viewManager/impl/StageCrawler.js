// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
/**
 * @private
 */
var StageCrawler = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function StageCrawler(containerBinding) {
        this._binding = containerBinding;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    StageCrawler.prototype.scan = function (view) {
        this.scanContainer(view);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageCrawler.prototype.scanContainer = function (container) {
        this.processView(container);
        var numChildren = container.numChildren;
        for (var i = 0; i < numChildren; i++) {
            // TODO: abstract view layer (pixi.js/three.js)
            var child = container.getChildAt(i);
            child['addChild'] // is a container?
                ? this.scanContainer(child)
                : this.processView(child);
        }
    };
    StageCrawler.prototype.processView = function (view) {
        this._binding.handleView(view, view['constructor']);
    };
    return StageCrawler;
}());
exports.StageCrawler = StageCrawler;
//# sourceMappingURL=StageCrawler.js.map