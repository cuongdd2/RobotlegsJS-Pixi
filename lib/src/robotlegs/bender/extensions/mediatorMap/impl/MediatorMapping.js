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
var MediatorMapping = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function MediatorMapping(matcher, mediatorClass) {
        this._guards = [];
        this._hooks = [];
        this._autoRemoveEnabled = true;
        this._matcher = matcher;
        this._mediatorClass = mediatorClass;
    }
    Object.defineProperty(MediatorMapping.prototype, "matcher", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._matcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMapping.prototype, "mediatorClass", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._mediatorClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMapping.prototype, "guards", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._guards;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMapping.prototype, "hooks", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._hooks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediatorMapping.prototype, "autoRemoveEnabled", {
        /**
         * @inheritDoc
         */
        get: function () {
            return this._autoRemoveEnabled;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @inheritDoc
     */
    MediatorMapping.prototype.withGuards = function () {
        var guards = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            guards[_i - 0] = arguments[_i];
        }
        this._guards = this._guards.concat.apply(null, guards);
        return this;
    };
    /**
     * @inheritDoc
     */
    MediatorMapping.prototype.withHooks = function () {
        var hooks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hooks[_i - 0] = arguments[_i];
        }
        this._hooks = this._hooks.concat.apply(null, hooks);
        return this;
    };
    /**
     * @inheritDoc
     */
    MediatorMapping.prototype.autoRemove = function (value) {
        if (value === void 0) { value = true; }
        this._autoRemoveEnabled = value;
        return this;
    };
    return MediatorMapping;
}());
exports.MediatorMapping = MediatorMapping;
//# sourceMappingURL=MediatorMapping.js.map