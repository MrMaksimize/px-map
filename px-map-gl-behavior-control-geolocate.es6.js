(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

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

})();
