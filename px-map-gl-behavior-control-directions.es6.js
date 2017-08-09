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
  PxMapGlBehavior.DirectionsControlImpl = {
    // TODO - properties.
    properties: {
      mglToken: {
        type: String,
        value: ''
      }
    },

    createInst(options) {
      return new MapboxDirections({
        accessToken: this.mglToken
      });
    },
    getInstOptions() {
      return {
        position: this.position
      }
    }
  }

  PxMapGlBehavior.DirectionsControl= [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.DirectionsControlImpl
  ];



})();
