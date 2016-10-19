// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var robotlegs_1 = require("robotlegs");
var MediatorManager_1 = require("./MediatorManager");
/**
 * @private
 */
var MediatorFactory = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorFactory(injector, manager) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mediators = new Map();
        this._injector = injector;
        this._manager = manager || new MediatorManager_1.MediatorManager(this);
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    MediatorFactory.prototype.getMediator = function (item, mapping) {
        return this._mediators.get(item) ? this._mediators.get(item).get(mapping) : null;
    };
    /**
     * @private
     */
    MediatorFactory.prototype.createMediators = function (item, type, mappings) {
        var createdMediators = [];
        var mediator;
        for (var i in mappings) {
            var mapping = mappings[i];
            mediator = this.getMediator(item, mapping);
            if (!mediator) {
                this.mapTypeForFilterBinding(mapping.matcher, type, item);
                mediator = this.createMediator(item, mapping);
                this.unmapTypeForFilterBinding(mapping.matcher, type, item);
            }
            if (mediator)
                createdMediators.push(mediator);
        }
        return createdMediators;
    };
    /**
     * @private
     */
    MediatorFactory.prototype.removeMediators = function (item) {
        var mediators = this._mediators.get(item);
        if (!mediators)
            return;
        for (var mapping in mediators) {
            this._manager.removeMediator(mediators[mapping], item, mapping);
        }
        this._mediators.delete(item);
    };
    /**
     * @private
     */
    MediatorFactory.prototype.removeAllMediators = function () {
        var _this = this;
        this._mediators.forEach(function (value, key) { return _this.removeMediators(key); });
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorFactory.prototype.createMediator = function (item, mapping) {
        var mediator = this.getMediator(item, mapping);
        if (mediator)
            return mediator;
        if (mapping.guards.length == 0 || robotlegs_1.guardsApprove(mapping.guards, this._injector)) {
            var mediatorClass = mapping.mediatorClass;
            mediator = this._injector.instantiateUnmapped(mediatorClass);
            if (mapping.hooks.length > 0) {
                this._injector.bind(mediatorClass).toConstantValue(mediator);
                robotlegs_1.applyHooks(mapping.hooks, this._injector);
                this._injector.unbind(mediatorClass);
            }
            this.addMediator(mediator, item, mapping);
        }
        return mediator;
    };
    MediatorFactory.prototype.addMediator = function (mediator, item, mapping) {
        var mediatorMap = this._mediators.get(item) || new Map();
        this._mediators.set(item, mediatorMap);
        mediatorMap.set(mapping, mediator);
        this._manager.addMediator(mediator, item, mapping);
    };
    MediatorFactory.prototype.mapTypeForFilterBinding = function (filter, type, item) {
        var requiredTypes = this.requiredTypesFor(filter, type);
        for (var i in requiredTypes) {
            var requiredType = requiredTypes[i];
            this._injector.bind(requiredType).toConstantValue(item);
        }
    };
    MediatorFactory.prototype.unmapTypeForFilterBinding = function (filter, type, item) {
        var requiredTypes = this.requiredTypesFor(filter, type);
        for (var i in requiredTypes) {
            var requiredType = requiredTypes[i];
            if (this._injector.isBound(requiredType))
                this._injector.unbind(requiredType);
        }
    };
    MediatorFactory.prototype.requiredTypesFor = function (filter, type) {
        var requiredTypes = filter.allOfTypes.concat(filter.anyOfTypes);
        if (requiredTypes.indexOf(type) == -1)
            requiredTypes.push(type);
        return requiredTypes;
    };
    return MediatorFactory;
}());
exports.MediatorFactory = MediatorFactory;
//# sourceMappingURL=MediatorFactory.js.map