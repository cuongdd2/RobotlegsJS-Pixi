// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var MediatorMapping_1 = require("./MediatorMapping");
/**
 * @private
 */
var MediatorMapper = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorMapper(typeFilter, handler, logger) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappings = new Map();
        this._typeFilter = typeFilter;
        this._handler = handler;
        this._logger = logger;
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MediatorMapper.prototype.toMediator = function (mediatorClass) {
        var mapping = this._mappings[mediatorClass];
        return mapping
            ? this.overwriteMapping(mapping)
            : this.createMapping(mediatorClass);
    };
    /**
     * @inheritDoc
     */
    MediatorMapper.prototype.fromMediator = function (mediatorClass) {
        var mapping = this._mappings[mediatorClass];
        mapping && this.deleteMapping(mapping);
    };
    /**
     * @inheritDoc
     */
    MediatorMapper.prototype.fromAll = function () {
        for (var i in this._mappings) {
            var mapping = this._mappings[i];
            this.deleteMapping(mapping);
        }
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorMapper.prototype.createMapping = function (mediatorClass) {
        var mapping = new MediatorMapping_1.MediatorMapping(this._typeFilter, mediatorClass);
        this._handler.addMapping(mapping);
        this._mappings[mediatorClass] = mapping;
        this._logger && this._logger.debug('{0} mapped to {1}', [this._typeFilter, mapping]);
        return mapping;
    };
    MediatorMapper.prototype.deleteMapping = function (mapping) {
        this._handler.removeMapping(mapping);
        delete this._mappings[mapping.mediatorClass];
        this._logger && this._logger.debug('{0} unmapped from {1}', [this._typeFilter, mapping]);
    };
    MediatorMapper.prototype.overwriteMapping = function (mapping) {
        this._logger && this._logger.warn('{0} already mapped to {1}\n' +
            'If you have overridden this mapping intentionally you can use "unmap()" ' +
            'prior to your replacement mapping in order to avoid seeing this message.\n', [this._typeFilter, mapping]);
        this.deleteMapping(mapping);
        return this.createMapping(mapping.mediatorClass);
    };
    return MediatorMapper;
}());
exports.MediatorMapper = MediatorMapper;
//# sourceMappingURL=MediatorMapper.js.map