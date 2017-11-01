(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

  /**
   * @polymerBehavior PxMapGlBehavior.Control
   */
  PxMapGlBehavior.ControlImpl = {

    properties: {
      position: {
        type: String,
        value: 'top-right',
      }
    },


    attached() {
      this.notifyInstReady(this.canAddInst());
      // http://sdgo.io/2vczACj
      this.listen(this.parentNode, 'px-map-gl-root-load', 'shouldAddInst');
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
      PxMapGlBehavior.ElementImpl.shouldAddInst.call(this, parent);

      if (this.elementInst && parent) {
        this.addInst(parent);
      };
    },

    shouldRemoveInst(parent) {
      PxMapGlBehavior.ElementImpl.shouldRemoveInst.call(this, parent);

      if (this.elementInst) {
        this.removeInst(parent ? parent : undefined);
      };
    },

    // Methods to bind to/unbind from parent
    addInst(parent) {
      parent.elementInst.addControl(this.elementInst, this.position);
    },

    removeInst(parent) {
      parent.elementInst.removeControl(this.elementInst);
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
  PxMapGlBehavior.Control = [
    PxMapGlBehavior.Element,
    PxMapGlBehavior.ControlImpl
  ];


  /**
   * @polymerBehavior PxMapGlBehavior.NavControl
   */
  PxMapGlBehavior.NavControlImpl = {
    createInst(options) {
      return new mapboxgl.NavigationControl();
    },
    getInstOptions() {
      return {
        position: this.position
      }
    }
  }

  PxMapGlBehavior.NavControl = [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.NavControlImpl
  ];


  /**
   * @polymerBehavior PxMapGlBehavior.Layer
   */
  PxMapGlBehavior.FullScreenControlImpl = {
    createInst(options) {
      return new mapboxgl.FullscreenControl();
    },
    getInstOptions() {
      return {
        position: this.position
      }
    }
  }

  PxMapGlBehavior.FullScreenControl = [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.FullScreenControlImpl
  ];



  /**
   * @polymerBehavior PxMapGlBehavior.Layer
   */
  PxMapGlBehavior.GeolocateControlImpl = {
    properties: {
      highAccuracy: {
        type: Boolean,
        default: false
      },
      timeout: {
        type: Number,
        default: 6000
      },
      // TODO -- these should be reactive.  But later.
      disableTrackUserLoc: {
        type: Boolean,
        default: false
      },
      disableShowUserLoc: {
        type: Boolean,
        default: false
      }

    },
    createInst(options) {
      return new mapboxgl.GeolocateControl(options);
    },

    getInstOptions() {
      return {
        position: this.position,
        positionOptions: {
            enableHighAccuracy: this.enableHighAccuracy,
            timeout: this.timeout
        },
        trackUserLocation: !this.disableTrackUserLoc,
        showUserLocation: !this.disableShowUserLoc
      }
    }
  }

  PxMapGlBehavior.GeolocateControl = [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.GeolocateControlImpl
  ];


  /**
   * @polymerBehavior PxMapGlBehavior.Layer
   */
  PxMapGlBehavior.ScaleControlImpl = {
    properties: {
        maxWidth: {
          type: String,
          default: '150'
        },
        unit: {
          type: String,
          default: 'metric'
        }
    },
    createInst(options) {
      return new mapboxgl.ScaleControl(options);
    },
    getInstOptions() {
      return {
        position: this.position,
        maxWidth: this.maxWidth,
        unit: this.unit
      }
    }
  }

  PxMapGlBehavior.ScaleControl = [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.ScaleControlImpl
  ];


  /**
   * @polymerBehavior PxMapGlBehavior.Layer
   */
  PxMapGlBehavior.AttributionControlImpl = {
    properties: {
        compact: {
          type: Boolean,
        }
    },
    createInst(options) {
      return new mapboxgl.AttributionControl(options);
    },
    getInstOptions() {
      return {
        position: this.position,
        compact: this.compact
      }
    }
  }

  PxMapGlBehavior.AttributionControl = [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.AttributionControlImpl
  ];



})();
