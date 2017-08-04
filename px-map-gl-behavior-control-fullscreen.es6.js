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

})();
