(function() {
  "use strict";

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = window.PxMapGlBehavior || {};

  /**
   * @polymerBehavior PxMapGlBehavior.DirectionsControl
   */
  PxMapGlBehavior.DirectionsControlImpl = {
    // TODO - properties.
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
      return new MapboxDirections({
        accessToken: this.mglToken
      });
    },
    getInstOptions() {
      return {
        position: this.position
      };
    }
  };

  PxMapGlBehavior.DirectionsControl = [
    PxMapGlBehavior.Control,
    PxMapGlBehavior.DirectionsControlImpl
  ];
})();
