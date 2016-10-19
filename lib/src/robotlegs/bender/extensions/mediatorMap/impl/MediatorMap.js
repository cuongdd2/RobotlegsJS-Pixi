// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var robotlegs_1 = require("robotlegs");
var MediatorFactory_1 = require("./MediatorFactory");
var MediatorViewHandler_1 = require("./MediatorViewHandler");
var NullMediatorUnmapper_1 = require("./NullMediatorUnmapper");
var MediatorMapper_1 = require("./MediatorMapper");
var inversify_1 = require("inversify");
/**
 * @private
 */
var MediatorMap = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorMap(context) {
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._mappers = new Map();
        this.NULL_UNMAPPER = new NullMediatorUnmapper_1.NullMediatorUnmapper();
        this._logger = context.getLogger(this);
        this._factory = new MediatorFactory_1.MediatorFactory(context.injector);
        this._viewHandler = new MediatorViewHandler_1.MediatorViewHandler(this._factory);
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.mapMatcher = function (matcher) {
        this._mappers[matcher.createTypeFilter().descriptor] =
            this._mappers[matcher.createTypeFilter().descriptor] || this.createMapper(matcher);
        return this._mappers[matcher.createTypeFilter().descriptor];
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.map = function (type) {
        return this.mapMatcher(new robotlegs_1.TypeMatcher().allOf(type));
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.unmapMatcher = function (matcher) {
        return this._mappers[matcher.createTypeFilter().descriptor] || this.NULL_UNMAPPER;
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.unmap = function (type) {
        return this.unmapMatcher((new robotlegs_1.TypeMatcher().allOf(type)));
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.handleView = function (view, type) {
        this._viewHandler.handleView(view, type);
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.mediate = function (item) {
        this._viewHandler.handleItem(item, item['constructor']);
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.unmediate = function (item) {
        this._factory.removeMediators(item);
    };
    /**
     * @inheritDoc
     */
    MediatorMap.prototype.unmediateAll = function () {
        this._factory.removeAllMediators();
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    MediatorMap.prototype.createMapper = function (matcher) {
        return new MediatorMapper_1.MediatorMapper(matcher.createTypeFilter(), this._viewHandler, this._logger);
    };
    MediatorMap = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(robotlegs_1.IContext)), 
        __metadata('design:paramtypes', [Object])
    ], MediatorMap);
    return MediatorMap;
}());
exports.MediatorMap = MediatorMap;
//# sourceMappingURL=MediatorMap.js.map