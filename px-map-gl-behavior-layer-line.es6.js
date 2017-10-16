(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

  /**
   *
   * @polymerBehavior PxMapGlBehavior.GeoJSONLayer
   */
  PxMapGlBehavior.LineLayerImpl = {

    // extends the layer `addInst` method to harvest and fire events
    addInst(parent) {
      this.bindEvents({
        // Switch Pointer To Hand
        'mouseenter': this._switchPointer.bind(this),
        'mouseleave': this._switchPointer.bind(this)
      }, parent.elementInst, this.id)

      // Now call layer's add
      PxMapGlBehavior.LayerImpl.addInst.call(this, parent);
    },





    createInst(options) {
      const lineLayerInst = options;
      return lineLayerInst;
    },


    getInstOptions() {
      const options = PxMapGlBehavior.LayerImpl.getInstOptions.call(this);
      options.type = 'line';

      return options;
    }
  };
  /* Bind GeoJSONSource behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.LineLayer = [
    PxMapGlBehavior.Layer,
    PxMapGlBehavior.LineLayerImpl
  ];
})();
