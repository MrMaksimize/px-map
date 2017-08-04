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

})();
