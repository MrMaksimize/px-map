(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

  /**
   * @polymerBehavior PxMapGlBehavior.GeocoderControl
   */
  PxMapGlBehavior.GeocoderControlImpl = {
    // TODO - properties.
    properties: {
      mglToken: {
        type: String,
        value: ''
      }
    },

    createInst(options) {
      return new MapboxGeocoder({
        accessToken: this.mglToken
      });
    },
    getInstOptions() {
      return {
        position: this.position
      }
    }
  }

  PxMapGlBehavior.GeocoderControl = [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.GeocoderControlImpl
  ];



})();
