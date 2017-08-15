(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

  /**
   *
   *
   * @polymerBehavior PxMapGlBehavior.Layer
   */
  PxMapGlBehavior.LayerImpl = {
    // When this element is attached to the DOM, fire an event to notify
    // a parent that it is ready

    // Properties defined here are shared across all layer types
    properties: {
      id: {
        type: String
      },
      source: {
        type: String
      },
      sourceLayer: {
        type: String
      },
      hidden: {
        type: Boolean,
        value: false
      },
      minZoom: {
        type: Number,
        value: 0,
        observer: 'shouldUpdateInst'
      },
      maxZoom: {
        type: Number,
        value: 22,
        observer: 'shouldUpdateInst'
      },
      filter: {
        type: Array,
        observer: 'shouldUpdateInst'
      }
    },
    attached() {
      this.notifyInstReady(this.canAddInst());
      // http://sdgo.io/2vczACj
      this.listen(this.parentNode, 'px-map-gl-root-load', 'shouldAddInst');
      this.listen(this.parentNode, 'px-map-gl-root-styledata', 'shouldAddInst');
    },

    // When this element is detached from the DOM, its elementInst should be
    // removed from the parent

    detached() {
      this.shouldRemoveInst();
    },

    // Extends the `Element` behavior lifecycle methods to include adding the
    // instance to its parent

    shouldAddInst(evt) {
      // TODO - do we need this evt anymore since _getMapElement would just work?
      const parent = evt.detail;
      console.log('shouldAddInst on layer');
      PxMapGlBehavior.ElementImpl.shouldAddInst.call(this, parent);

      if (this.elementInst && parent && parent.elementInst.getLayer(this.id) == undefined) {
        console.log('shouldaddinst layer true');
        this.addInst(parent);
      };
    },

    shouldRemoveInst(parent) {
      PxMapGlBehavior.ElementImpl.shouldRemoveInst.call(this, parent);

      if (this.elementInst) {
        this.removeInst(parent ? parent : undefined);
      };
    },

    // Methods to bind to/unbind from parent

    addInst(parent) {
      console.log('addInst on layer');
      parent.elementInst.addLayer(this.elementInst);

      // Bind Events
      /* We're going to bind events here necessary for any layer.
       * When an event is triggered, it's going to be broadast out to the children
       * or popups.  It's also going to be broadcast up to any listeners
       */
      this.bindEvents({
        'click': this._broadcastEvent.bind(this),
        'dblclick': this._broadcastEvent.bind(this),
        'mouseenter': this._broadcastEvent.bind(this),
        'mouseleave': this._broadcastEvent.bind(this)
      }, parent.elementInst, this.id);

      // Bind Events.
      // TODO - use the normal binding pattern to bind events.
      /*this.bindEvents({
        // Switch Pointer To Hand
        'mouseenter': this._switchPointer.bind(this),
        'mouseleave': this._switchPointer.bind(this)
      }, parent.elementInst, this.id)*/
      /*parent.elementInst.on('mouseenter', this.id, this._broadcastEvent.bind(this));
      parent.elementInst.on('mouseenter', this.id, this._broadcastActiveFeature.bind(this));
      parent.elementInst.on('mouseenter', this.id, this._switchPointer.bind(this));

      parent.elementInst.on('mouseleave', this.id, this._broadcastEvent.bind(this));
      parent.elementInst.on('mouseleave', this.id, this._broadcastActiveFeature.bind(this));
      parent.elementInst.on('mouseleave', this.id, this._switchPointer.bind(this));*/
    },

    removeInst(parent) {
      parent.removeSource(this.elementInst);
      this.elementInst.remove();
    },


    updateInst(lastOptions, nextOptions) {
      console.log(lastOptions);
      console.log(nextOptions);
      nextOptions.layout.visibility = "hello";
      console.log(this._getMapElement());
      const mapEl = this._getMapElement()
      //if (lastOptions.maxZoom !== nextOptions.maxZoom && !isNaN(nextOptions.maxZoom)) {
      // map.setFilter('layer', null);
      if (!_.isEqual(lastOptions.filter, nextOptions.filter)) {
        mapEl.elementInst.setFilter(this.id, nextOptions.filter);
      }
      // TODO still need way to remove a filter

    },

    // TODO - should each sub-element have this method?
    // Think about how to better structure this, since layer and source need it.  Maybe extra behavior for sub-map-els?
    _getMapElement() {
      const mapEl = this.parentNode;
      if (mapEl.is !== 'px-map-gl')
        throw new Error('Layer elements need to have px-map-gl parent.')
      else
        return mapEl;
    },

    _broadcastEvent(e) {
      // TODO make this a param?
      const detail = {
        // TODO - tbd if I need full node here.
        emitter: this, // TBD - may not be neededed because.feature has layer.
        event: e
      };
      const eventName = 'px-map-gl-layer-' + e.type;
      console.log(eventName);
      console.log(detail);
      this.fire(eventName, detail);
    },

    _switchPointer(e) {
      if (e.type === 'mouseenter') {
        e.target.getCanvas().style.cursor = 'pointer';
      }
      else {
        e.target.getCanvas().style.cursor = '';
      }
    },


    /**
     * Some element instances may require a minimum number of defined options
     * to be able to attach to their parent. If those options are defined via.
     * attributes, they may not be deserialized or even set before the `willAddInst`
     * method is called.
     *
     * Elements that need to defer until some options are set should override
     * the `canAddInst` method and return `false` if the method
     *
     * Elements that may need to defer until some options are ready should
     * override `instReady` and set it to `false` by default.
     *
     * Later, when the `updateInst` function is called, the element should check
     * if all required options are set and call the method `this.notifyInstReady(true)`
     * to trigger an event the parent will catch and use to attach this element.
     */
    canAddInst() {
      return true;
    },

    getInstOptions() {
      const options = {
        id: this.id,
        source: this.source,
        minzoom: this.minZoom,
        maxzoom: this.maxZoom,
        layout: {
          visibility: this.hidden === true ? 'none' : 'visible'
        },
        paint: {},
      };

      if (this.sourceLayer)
        options['source-layer'] = this.sourceLayer

      if (this.filter)
        options['filter'] = this.filter

      return options;
    }
  };
  /* Bind Layer behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.Layer = [
    PxMapGlBehavior.Element,
    PxMapGlBehavior.LayerImpl
  ];

})();
