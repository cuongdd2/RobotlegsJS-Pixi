// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var ContainerRegistryEvent_1 = require("./ContainerRegistryEvent");
var ConfigureViewEvent_1 = require("./ConfigureViewEvent");
/**
 * @private
 */
var ManualStageObserver = (function () {
    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/
    /**
     * @private
     */
    function ManualStageObserver(containerRegistry) {
        this._registry = containerRegistry;
        // We care about all containers (not just roots)
        this._registry.addEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_ADD, this.onContainerAdd);
        this._registry.addEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_REMOVE, this.onContainerRemove);
        // We might have arrived late on the scene
        for (var i in this._registry.bindings) {
            var binding = this._registry.bindings[i];
            this.addContainerListener(binding.container);
        }
    }
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    ManualStageObserver.prototype.destroy = function () {
        this._registry.removeEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_ADD, this.onContainerAdd);
        this._registry.removeEventListener(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_REMOVE, this.onContainerRemove);
        for (var i in this._registry.bindings) {
            var binding = this._registry.bindings[i];
            this.removeContainerListener(binding.container);
        }
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ManualStageObserver.prototype.onContainerAdd = function (event) {
        this.addContainerListener(event.container);
    };
    ManualStageObserver.prototype.onContainerRemove = function (event) {
        this.removeContainerListener(event.container);
    };
    ManualStageObserver.prototype.addContainerListener = function (container) {
        // We're interested in ALL container bindings
        // but just for normal, bubbling events
        container.addEventListener(ConfigureViewEvent_1.ConfigureViewEvent.CONFIGURE_VIEW, this.onConfigureView);
    };
    ManualStageObserver.prototype.removeContainerListener = function (container) {
        container.removeEventListener(ConfigureViewEvent_1.ConfigureViewEvent.CONFIGURE_VIEW, this.onConfigureView);
    };
    ManualStageObserver.prototype.onConfigureView = function (event) {
        // Stop that event!
        event.stopImmediatePropagation();
        var container = event.currentTarget;
        var view = event.target;
        var type = view['constructor'];
        this._registry.getBinding(container).handleView(view, type);
    };
    return ManualStageObserver;
}());
exports.ManualStageObserver = ManualStageObserver;
//# sourceMappingURL=ManualStageObserver.js.map