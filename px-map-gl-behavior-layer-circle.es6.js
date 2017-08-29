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
  PxMapGlBehavior.CircleLayerImpl = {

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
      const circleLayerInst = options;
      return circleLayerInst;
    },


    getInstOptions() {
      const options = PxMapGlBehavior.LayerImpl.getInstOptions.call(this);
      options.type = 'circle';

      // Layout
      //options.layout['icon-allow-overlap'] = this.iconAllowOverlap;
      //options.layout['icon-size'] = this.iconSize;
      //options.layout['icon-image'] = this.iconImage

      return options;
    }
  };
  /* Bind GeoJSONSource behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.CircleLayer = [
    PxMapGlBehavior.Layer,
    PxMapGlBehavior.CircleLayerImpl
  ];
})();
