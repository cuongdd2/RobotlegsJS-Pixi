// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var robotlegs_1 = require("robotlegs");
var ContainerBinding_1 = require("./ContainerBinding");
var ContainerBindingEvent_1 = require("./ContainerBindingEvent");
var ContainerRegistryEvent_1 = require("./ContainerRegistryEvent");
/*[Event(name="containerAdd", type="robotlegs.bender.extensions.viewManager.impl.ContainerRegistryEvent")]*/
/*[Event(name="containerRemove", type="robotlegs.bender.extensions.viewManager.impl.ContainerRegistryEvent")]*/
/*[Event(name="rootContainerAdd", type="robotlegs.bender.extensions.viewManager.impl.ContainerRegistryEvent")]*/
/*[Event(name="rootContainerRemove", type="robotlegs.bender.extensions.viewManager.impl.ContainerRegistryEvent")]*/
/**
 * @private
 */
var ContainerRegistry = (function (_super) {
    __extends(ContainerRegistry, _super);
    function ContainerRegistry() {
        _super.apply(this, arguments);
        /*============================================================================*/
        /* Public Properties                                                          */
        /*============================================================================*/
        this._bindings = [];
        this._rootBindings = [];
        /*============================================================================*/
        /* Private Properties                                                         */
        /*============================================================================*/
        this._bindingByContainer = new Map();
    }
    Object.defineProperty(ContainerRegistry.prototype, "bindings", {
        /**
         * @private
         */
        get: function () {
            return this._bindings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerRegistry.prototype, "rootBindings", {
        /**
         * @private
         */
        get: function () {
            return this._rootBindings;
        },
        enumerable: true,
        configurable: true
    });
    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/
    /**
     * @private
     */
    ContainerRegistry.prototype.addContainer = function (container) {
        return this._bindingByContainer[container] = this._bindingByContainer[container] || this.createBinding(container);
    };
    /**
     * @private
     */
    ContainerRegistry.prototype.removeContainer = function (container) {
        var binding = this._bindingByContainer[container];
        binding && this.removeBinding(binding);
        return binding;
    };
    /**
     * Finds the closest parent binding for a given display object
     *
     * @private
     */
    ContainerRegistry.prototype.findParentBinding = function (target) {
        var parent = target.parent;
        while (parent) {
            var binding = this._bindingByContainer[parent];
            if (binding) {
                return binding;
            }
            parent = parent.parent;
        }
        return null;
    };
    /**
     * @private
     */
    ContainerRegistry.prototype.getBinding = function (container) {
        return this._bindingByContainer[container];
    };
    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/
    ContainerRegistry.prototype.createBinding = function (container) {
        var binding = new ContainerBinding_1.ContainerBinding(container);
        this._bindings.push(binding);
        // Add a listener so that we can remove this binding when it has no handlers
        binding.addEventListener(ContainerBindingEvent_1.ContainerBindingEvent.BINDING_EMPTY, this.onBindingEmpty);
        // If the new binding doesn't have a parent it is a Root
        binding.parent = this.findParentBinding(container);
        if (binding.parent == null) {
            this.addRootBinding(binding);
        }
        // Reparent any bindings which are contained within the new binding AND
        // A. Don't have a parent, OR
        // B. Have a parent that is not contained within the new binding
        for (var i in this._bindingByContainer) {
            var childBinding = this._bindingByContainer[i];
            if (container.contains(childBinding.container)) {
                if (!childBinding.parent) {
                    this.removeRootBinding(childBinding);
                    childBinding.parent = binding;
                }
                else if (!container.contains(childBinding.parent.container)) {
                    childBinding.parent = binding;
                }
            }
        }
        this.dispatchEvent(new ContainerRegistryEvent_1.ContainerRegistryEvent(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_ADD, binding.container));
        return binding;
    };
    ContainerRegistry.prototype.removeBinding = function (binding) {
        // Remove the binding itself
        delete this._bindingByContainer[binding.container];
        var index = this._bindings.indexOf(binding);
        this._bindings.splice(index, 1);
        // Drop the empty binding listener
        binding.removeEventListener(ContainerBindingEvent_1.ContainerBindingEvent.BINDING_EMPTY, this.onBindingEmpty);
        if (!binding.parent) {
            // This binding didn't have a parent, so it was a Root
            this.removeRootBinding(binding);
        }
        // Re-parent the bindings
        for (var i in this._bindingByContainer) {
            var childBinding = this._bindingByContainer[i];
            if (childBinding.parent == binding) {
                childBinding.parent = binding.parent;
                if (!childBinding.parent) {
                    // This binding used to have a parent,
                    // but no longer does, so it is now a Root
                    this.addRootBinding(childBinding);
                }
            }
        }
        this.dispatchEvent(new ContainerRegistryEvent_1.ContainerRegistryEvent(ContainerRegistryEvent_1.ContainerRegistryEvent.CONTAINER_REMOVE, binding.container));
    };
    ContainerRegistry.prototype.addRootBinding = function (binding) {
        this._rootBindings.push(binding);
        this.dispatchEvent(new ContainerRegistryEvent_1.ContainerRegistryEvent(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_ADD, binding.container));
    };
    ContainerRegistry.prototype.removeRootBinding = function (binding) {
        var index = this._rootBindings.indexOf(binding);
        this._rootBindings.splice(index, 1);
        this.dispatchEvent(new ContainerRegistryEvent_1.ContainerRegistryEvent(ContainerRegistryEvent_1.ContainerRegistryEvent.ROOT_CONTAINER_REMOVE, binding.container));
    };
    ContainerRegistry.prototype.onBindingEmpty = function (event) {
        this.removeBinding(event.target);
    };
    return ContainerRegistry;
}(robotlegs_1.EventDispatcher));
exports.ContainerRegistry = ContainerRegistry;
//# sourceMappingURL=ContainerRegistry.js.map