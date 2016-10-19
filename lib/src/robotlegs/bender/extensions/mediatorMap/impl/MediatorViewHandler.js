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
var MediatorViewHandler = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorViewHandler(factory) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappings = [];
        this._knownMappings = new Map();
        this._factory = factory;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    MediatorViewHandler.prototype.addMapping = function (mapping) {
        var index = this._mappings.indexOf(mapping);
        if (index > -1)
            return;
        this._mappings.push(mapping);
        this.flushCache();
    };
    /**
     * @private
     */
    MediatorViewHandler.prototype.removeMapping = function (mapping) {
        var index = this._mappings.indexOf(mapping);
        if (index == -1)
            return;
        this._mappings.splice(index, 1);
        this.flushCache();
    };
    /**
     * @private
     */
    MediatorViewHandler.prototype.handleView = function (view, type) {
        var interestedMappings = this.getInterestedMappingsFor(view, type);
        if (interestedMappings)
            this._factory.createMediators(view, type, interestedMappings);
    };
    /**
     * @private
     */
    MediatorViewHandler.prototype.handleItem = function (item, type) {
        var interestedMappings = this.getInterestedMappingsFor(item, type);
        if (interestedMappings)
            this._factory.createMediators(item, type, interestedMappings);
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorViewHandler.prototype.flushCache = function () {
        this._knownMappings = new Map();
    };
    MediatorViewHandler.prototype.getInterestedMappingsFor = function (item, type) {
        var mapping;
        // we've seen this type before and nobody was interested
        if (this._knownMappings[type] === false)
            return null;
        // we haven't seen this type before
        if (this._knownMappings[type] == undefined) {
            this._knownMappings[type] = false;
            for (var i in this._mappings) {
                var mapping_1 = this._mappings[i];
                if (mapping_1.matcher.matches(item)) {
                    if (!this._knownMappings[type])
                        this._knownMappings[type] = [];
                    this._knownMappings[type].push(mapping_1);
                }
            }
            // nobody cares, let's get out of here
            if (this._knownMappings[type] === false)
                return null;
        }
        // these mappings really do care
        return this._knownMappings[type];
    };
    return MediatorViewHandler;
}());
exports.MediatorViewHandler = MediatorViewHandler;
//# sourceMappingURL=MediatorViewHandler.js.map