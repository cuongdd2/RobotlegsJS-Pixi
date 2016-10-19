// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var ContainerRegistryEvent_1 = require("./ContainerRegistryEvent");
/**
 * @private
 */
var StageObserver = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function StageObserver(containerRegistry) {
        this._registry = containerRegistry;
        // We only care about roots
        this._registry.addEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_ADD, this.onRootContainerAdd, this);
        this._registry.addEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_REMOVE, this.onRootContainerRemove, this);
        // We might have arrived late on the scene
        for (var i in this._registry.rootBindings) {
            var binding = this._registry.rootBindings[i];
            this.addRootListener(binding.container);
        }
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    StageObserver.prototype.destroy = function () {
        this._registry.removeEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_ADD, this.onRootContainerAdd, this);
        this._registry.removeEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_REMOVE, this.onRootContainerRemove, this);
        for (var i in this._registry.rootBindings) {
            var binding = this._registry.rootBindings[i];
            this.removeRootListener(binding.container);
        }
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    StageObserver.prototype.onRootContainerAdd = function (event) {
        this.addRootListener(event.container);
    };
    StageObserver.prototype.onRootContainerRemove = function (event) {
        this.removeRootListener(event.container);
    };
    StageObserver.prototype.addRootListener = function (container) {
        container.addListener("added", this.onViewAddedToStage, this);
        // Watch the root container itself - nobody else is going to pick it up!
        // container.on("added", this.onContainerRootAddedToStage, this);
    };
    StageObserver.prototype.removeRootListener = function (container) {
        // container.removeEventListener(Event.ADDED_TO_STAGE, this.onViewAddedToStage, true);
        // container.removeEventListener(Event.ADDED_TO_STAGE, this.onContainerRootAddedToStage);
        container.removeListener("added", this.onViewAddedToStage, this);
        // container.on("removed", this.onContainerRootAddedToStage);
    };
    StageObserver.prototype.onViewAddedToStage = function (event) {
        var view = event.target;
        var type = view['constructor'];
        // Walk upwards from the nearest binding
        var binding = this._registry.findParentBinding(view);
        while (binding) {
            binding.handleView(view, type);
            binding = binding.parent;
        }
    };
    return StageObserver;
}());
exports.StageObserver = StageObserver;
//# sourceMappingURL=StageObserver.js.map