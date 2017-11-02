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
  PxMapGlBehavior.VectorSourceImpl = {
    properties: {
      /**
       * An object formatted as a GeoJSON FeatureCollection with one or many Features.
       * Each feature can be formatted as any valid GeoJSON geometry type: Point,
       * LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon,
       * or GeometryCollection. See the [GeoJSON spec](http://geojson.org/geojson-spec.html)
       * for guidance on generating valid GeoJSON.
       *
       * Each feature should contain a `properties` object that can hold metadata
       * about the feature. Optionally, the feature's `properties.style` can be
       * set to an object that will be used to style the feature when it is drawn.
       * Styles set in a feature's `properties.style` will override the styles
       * set in the `featureStyle` attribute. See the `featureStyle` attribute
       * documentation for a list of available style options.
       *
       * @type {Object}
       */
      url: {
        type: String
      },
      tiles: {
        type: Array
      },
      id: {
        type: String
      }
      // Bounds, minzoom, maxzoom @todo
    },

    // extends the layer `addInst` method to harvest and fire events
    addInst(parent) {
      PxMapGlBehavior.SourceImpl.addInst.call(this, parent);
   },

    createInst(options) {
      return {
        url: options.url,
        tiles: options.tiles,
        id: options.id,
        type: options.type
      };
    },

    /*
     * Update the instance if the new data is not the same as the old OR if the
     * new style is not the same as the old. (Stringifying is needed here to be
     * able to do a deep equality check).
     */
    updateInst(lastOptions, nextOptions) {
      // Run Get Options to account for empty object and inject nullIsland:
      console.log(this.elementInst);
      const options = this.getInstOptions();
      this.elementInst.setData(options.data);
    },

    getInstOptions() {
      const options = PxMapGlBehavior.SourceImpl.getInstOptions.call(this);
      options.url = this.url;
      options.tiles = this.tiles;
      options.type = 'vector';
      return options;
    }
  };
  /* Bind GeoJSONSource behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.VectorSource = [
    PxMapGlBehavior.Source,
    PxMapGlBehavior.VectorSourceImpl
  ];
})();
