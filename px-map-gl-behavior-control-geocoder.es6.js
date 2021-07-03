(function() {
  "use strict";

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = window.PxMapGlBehavior || {};

  /**
   * @polymerBehavior PxMapGlBehavior.GeocoderControl
   */
  PxMapGlBehavior.GeocoderControlImpl = {
    properties: {
      /**
       * Set the mapbox-gl token.
       *
       * This property is not dynamic and can only be set once when the map is
       * first initialized.
       *
       * @type {String}
       */
      mglToken: {
        type: String,
        value: ""
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
      };
    }
  };

  PxMapGlBehavior.GeocoderControl = [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.GeocoderControlImpl
  ];
})();
