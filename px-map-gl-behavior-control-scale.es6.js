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

})();
