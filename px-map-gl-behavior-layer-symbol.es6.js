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
  PxMapGlBehavior.SymbolLayerImpl = {
    properties: {
      /**
       * An object formatted as a GeoJSON FeatureCollection with one or many Features.
       * @type {Object}
       */
      // Properties defined here are only for this layer type.

      // Layout
      // Now, these get taken care of in the parent.
      /*symbolPlacement: { type: String, observer: 'shouldUpdateInst'},
      symbolSpacing: { type: Number, observer: 'shouldUpdateInst' },
      symbolAvoidEdges: { type: Boolean, observer: 'shouldUpdateInst' },
      iconAllowOverlap: { type: Boolean, value: false, observer: 'shouldUpdateInst'},
      iconIgnorePlacement: { type: Boolean, observer: 'shouldUpdateInst' },
      iconOptional: { type: Boolean, observer: 'shouldUpdateInst' },
      iconRotationAlignment: { type: String, observer: 'shouldUpdateInst' },
      iconSize: { type: Number, value: 1, observer: 'shouldUpdateInst'},
      iconTextFit: { type: String, observer: 'shouldUpdateInst' },
      iconTextFitPadding: { type: Array, observer: 'shouldUpdateInst' },
      iconImage: { type: String, observer: 'shouldUpdateInst'},
      iconRotate: { type: Number, observer: 'shouldUpdateInst' },
      iconPadding: { type: Number, observer: 'shouldUpdateInst' },
      iconKeepUpright: { type: Boolean, observer: 'shouldUpdateInst' },
      iconOffset: { type: Array, observer: 'shouldUpdateInst' },
      iconPitchAlignment: { type: String, observer: 'shouldUpdateInst' },
      textPitchAlignment: { type: String, observer: 'shouldUpdateInst' },
      textRotationAlignment: { type: String, observer: 'shouldUpdateInst' },
      textField: { type: String, observer: 'shouldUpdateInst' },
      textFont: { type: Array, observer: 'shouldUpdateInst' },
      textSize: { type: Number, observer: 'shouldUpdateInst' },
      textMaxWidth: { type: Number, observer: 'shouldUpdateInst' },
      textLineHeight: { type: Number, observer: 'shouldUpdateInst' },
      textLetterSpacing: { type: Number, observer: 'shouldUpdateInst' },
      textJustify: { type: String, observer: 'shouldUpdateInst' },
      textAnchor: { type: String, observer: 'shouldUpdateInst' },
      textMaxAngle: { type: Number, observer: 'shouldUpdateInst' },
      textRotate: { type: Number, observer: 'shouldUpdateInst' },
      textPadding: { type: Number, observer: 'shouldUpdateInst' },
      textKeepUpright: { type: Boolean, observer: 'shouldUpdateInst' },
      textTransform: { type: String, observer: 'shouldUpdateInst' },
      textOffset: { type: Array, observer: 'shouldUpdateInst' },
      textAllowOverlap: { type: Boolean, observer: 'shouldUpdateInst' },
      textIgnorePlacement: { type: Boolean, observer: 'shouldUpdateInst' },
      textOptional: { type: Boolean, observer: 'shouldUpdateInst' },

      // Paint
      iconOpacity: { type: Number, observer: 'shouldUpdateInst' },
      iconColor: { type: String, observer: 'shouldUpdateInst' },
      iconHaloColor: { type: String, observer: 'shouldUpdateInst' },
      iconHaloWidth: { type: Number, observer: 'shouldUpdateInst' },
      iconHaloBlur: { type: Number, observer: 'shouldUpdateInst' },
      iconTranslate: { type: Array, observer: 'shouldUpdateInst' },
      iconTranslateAnchor: { type: String, observer: 'shouldUpdateInst' },
      textOpacity: { type: Number, observer: 'shouldUpdateInst' },
      textColor: { type: String, observer: 'shouldUpdateInst' },
      textHaloColor: { type: String, observer: 'shouldUpdateInst' },
      textHaloWidth: { type: Number, observer: 'shouldUpdateInst' },
      textHaloBlur: { type: Number, observer: 'shouldUpdateInst' },
      textTranslate: { type: Array, observer: 'shouldUpdateInst' },
      textTranslateAnchor: { type: String, observer: 'shouldUpdateInst' }*/
    },


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
      const symbolLayerInst = options;
      return symbolLayerInst;
    },


    getInstOptions() {
      const options = PxMapGlBehavior.LayerImpl.getInstOptions.call(this);
      options.type = 'symbol';

      // Layout
      //options.layout['icon-allow-overlap'] = this.iconAllowOverlap;
      //options.layout['icon-size'] = this.iconSize;
      //options.layout['icon-image'] = this.iconImage

      return options;
    }
  };
  /* Bind GeoJSONSource behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.SymbolLayer = [
    PxMapGlBehavior.Layer,
    PxMapGlBehavior.SymbolLayerImpl
  ];
})();
