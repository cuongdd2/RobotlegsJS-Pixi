//
// Patch PIXI to emit "added"/"removed" events on global event dispatcher
//
"use strict";
require("./eventemitter3-patch");
var PIXI = require('pixi.js');
function applyPixiPatch(interaction) {
    var addChild = PIXI.Container.prototype.addChild;
    var addChildAt = PIXI.Container.prototype.addChildAt;
    var removeChild = PIXI.Container.prototype.removeChild;
    var removeChildAt = PIXI.Container.prototype.removeChildAt;
    PIXI.Container.prototype.addChild = function () {
        var child = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            child[_i - 0] = arguments[_i];
        }
        for (var i = 0, len = child.length; i < len; i++) {
            addChild.call(this, child[i]);
            interaction.emit("added", { target: child[i] });
        }
        return this;
    };
    PIXI.Container.prototype.addChildAt = function (child, index) {
        addChildAt.call(this, child);
        interaction.emit("added", { target: child });
        return this;
    };
    PIXI.Container.prototype.removeChild = function () {
        var child = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            child[_i - 0] = arguments[_i];
        }
        for (var i = 0, len = child.length; i < len; i++) {
            removeChild.call(this, child[i]);
            interaction.emit("removed", { target: child });
        }
        return this;
    };
    PIXI.Container.prototype.removeChildAt = function (index) {
        removeChildAt.call(this, index);
        interaction.emit("removed", { target: this.getChildAt(index) });
        return this;
    };
}
exports.applyPixiPatch = applyPixiPatch;
//# sourceMappingURL=index.js.map