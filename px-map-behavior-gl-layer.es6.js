(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   *
   * @polymerBehavior PxMapBehavior.Layer
   */
  PxMapBehavior.GlLayerImpl = {
    // When this element is attached to the DOM, fire an event to notify
    // a parent that it is ready

    // Properties defined here are shared across all layer types
    properties: {
      id: {
        type: String
      },
      source: {
        type: String
      },
      hidden: {
        type: Boolean,
        value: false
      },
      minZoom: {
        type: Number,
        value: 0,
        observer: 'shouldUpdateInst'
      },
      maxZoom: {
        type: Number,
        value: 22,
        observer: 'shouldUpdateInst'
      },
      filter: {
        type: Array,
        observer: 'shouldUpdateInst'
      }
    },
    attached() {
      this.notifyInstReady(this.canAddInst());
      // http://sdgo.io/2vczACj
      this.listen(this.parentNode, 'px-map-element-loaded', 'shouldAddInst');
    },

    // When this element is detached from the DOM, its elementInst should be
    // removed from the parent

    detached() {
      this.shouldRemoveInst();
    },

    // Extends the `Element` behavior lifecycle methods to include adding the
    // instance to its parent

    shouldAddInst(evt) {
      const parent = evt.detail;
      console.log('shouldAddInst on layer');
      PxMapBehavior.ElementImpl.shouldAddInst.call(this, parent);

      if (this.elementInst && parent) {
        console.log('shouldaddinst layer true');
        this.addInst(parent);
      };
    },

    shouldRemoveInst(parent) {
      PxMapBehavior.ElementImpl.shouldRemoveInst.call(this, parent);

      if (this.elementInst) {
        this.removeInst(parent ? parent : undefined);
      };
    },

    // Methods to bind to/unbind from parent

    addInst(parent) {
      console.log('addInst on layer');
      console.log(this.elementInst);
      parent.elementInst.addLayer(this.elementInst);
    },

    removeInst(parent) {
      parent.removeSource(this.elementInst);
      this.elementInst.remove();
    },

    /**
     * Some element instances may require a minimum number of defined options
     * to be able to attach to their parent. If those options are defined via.
     * attributes, they may not be deserialized or even set before the `willAddInst`
     * method is called.
     *
     * Elements that need to defer until some options are set should override
     * the `canAddInst` method and return `false` if the method
     *
     * Elements that may need to defer until some options are ready should
     * override `instReady` and set it to `false` by default.
     *
     * Later, when the `updateInst` function is called, the element should check
     * if all required options are set and call the method `this.notifyInstReady(true)`
     * to trigger an event the parent will catch and use to attach this element.
     */
    canAddInst() {
      return true;
    }
  };
  /* Bind Layer behavior */
  /** @polymerBehavior */
  PxMapBehavior.GlLayer = [
    PxMapBehavior.Element,
    PxMapBehavior.GlLayerImpl
  ];

})();
