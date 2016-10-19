/**
 * Patch PIXI event handling.
 *
 * - Proxy PIXI events to be compatible with EventDispatcher
 * - Implements event bubbling on `dispatchEvent` when `bubbles` is true.
 */
"use strict";
var EventEmitter = require("eventemitter3");
var pixi_js_1 = require("pixi.js");
var EventDispatcherMixin = {
    addEventListener: function (type, listener, thisObject) {
        this.on(type, listener, thisObject);
    },
    hasEventListener: function (type, listener) {
        return this.listeners(type).length > 0;
    },
    removeEventListener: function (type, listener, thisObject) {
        this.off(type, listener, thisObject);
    },
    willTrigger: function (type) {
        return this.hasEventListener(type);
    },
    dispatchEvent: function (event) {
        event.target = this;
        var currentTarget = this;
        do {
            event.currentTarget = currentTarget;
            event.currentTarget.emit(event.type, event);
            currentTarget = currentTarget.parent;
        } while (currentTarget && event.bubbles);
    },
};
Object.assign(pixi_js_1.DisplayObject.prototype, EventDispatcherMixin);
Object.assign(EventEmitter.prototype, EventDispatcherMixin);
//# sourceMappingURL=eventemitter3-patch.js.map