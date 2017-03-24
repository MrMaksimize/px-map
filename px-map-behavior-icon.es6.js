(function() {
  'use strict';

  /****************************************************************************
   * KLASSES
   ****************************************************************************/

  /* Ensures the klass namespace is created */
  window.PxMap = (window.PxMap || {});

  /**
   *
   * @class PxMap.StaticIcon
   */
  class StaticIcon {
    constructor(settings={}) {
      this.icon = this.createIcon(settings);
      return this.icon;
    }

    createIcon(settings={}) {
      // Extract `type` and `badge` from settings with defaults
      let { type='info', badge=false, styleScope } = settings;

      const className = this._generateStaticIconClasses(type, badge, styleScope);

      // Static options
      const html = `
        <i class="map-icon-static__body"></i>
        <i class="map-icon-static__descender"></i>
        <i class="map-icon-static__badge"></i>
      `;
      const iconSize = L.point(50,50);
      const iconAnchor = L.point(9.8, 40.3);
      const popupAnchor = L.point(1,-38);

      // Define the `divIcon` options
      const options = {
        className,
        html,
        iconSize,
        iconAnchor,
        popupAnchor
      };

      return L.divIcon(options);
    }

    _generateStaticIconClasses(type, badge, styleScope) {
      const classes = ['map-icon', 'map-icon-static'];
      if (type && type.length) {
        classes.push(`map-icon-static--${type}`);
      }
      if (badge) {
        classes.push(`map-icon-static--with-badge`);
      }
      if (styleScope) {
        classes.push(styleScope);
      }
      return classes.join(' ');
    }
  };
  /* Bind StaticIcon klass */
  PxMap.StaticIcon = StaticIcon;

  /**
   *
   * @class PxMap.SymbolIcon
   */
  class SymbolIcon {
    constructor(settings={}) {
      this.icon = this.createIcon(settings);
      return this.icon;
    }

    createIcon(settings={}) {
      // Extract `type` and `badge` from settings with defaults
      let { type='info', badge=false, symbol='fa fa-bolt', styleScope } = settings;
      const className = this._generateSymbolIconClasses(type, badge, styleScope);

      // Symbol options
      const html = `
        <div class="map-icon-symbol__wrapper">
          <i class="map-icon-symbol__body">
            <div class="map-icon-symbol__symbol--container flex flex--middle flex--center">
              <i class="map-icon-symbol__symbol ${symbol}"></i>
            </div>
          </i>
          <i class="map-icon-symbol__descender"></i>
          <i class="map-icon-symbol__badge"></i>
        </div>
      `;
      const iconSize = L.point(55,66);
      const iconAnchor = L.point(19.8, 65);
      const popupAnchor = L.point(1,-38);

      // Define the `divIcon` options
      const options = {
        className,
        html,
        iconSize,
        iconAnchor,
        popupAnchor
      };

      return L.divIcon(options);
    }

    _generateSymbolIconClasses(type, badge, styleScope) {
      const classes = ['map-icon', 'map-icon-symbol'];
      if (type && type.length) {
        classes.push(`map-icon-symbol--${type}`);
      }
      if (badge) {
        classes.push(`map-icon-symbol--with-badge`);
      }
      if (styleScope) {
        classes.push(styleScope);
      }
      return classes.join(' ');
    }
  };
  /* Bind SymbolIcon klass */
  PxMap.SymbolIcon = SymbolIcon;

  /**
   *
   * @class PxMap.ClusterIcon
   */
  class ClusterIcon {
    constructor(settings={}) {
      this.icon = this.createIcon(settings);
      return this.icon;
    }

    createIcon(settings={}) {
      // Extract `count`, `countByType`, `colorsByType`
      const { count, countByType, colorsByType, containerSize=50, pathSize=10, borderSize=0, className='', styleScope } = settings;

      // The chart size is the container size with the border size subtracted out,
      // so we can draw and transform our SVG in the right dimensions
      const chartSize = (containerSize - (borderSize > 0 ? (borderSize*2)-0.5 : 0));

      // The icon size is a point representing the size of the icon's outer container
      const iconSize = L.point(containerSize, containerSize);

      // Get the SVG for this icon
      const svg = this._generateClusterIconSVG(countByType, colorsByType, chartSize, pathSize);

      // Generate the classes and wrapper HTML
      const classes = `map-icon-cluster ${className||''} ${styleScope||''}`;
      const html = `
        <div class="map-icon-cluster__container" style="width: ${containerSize}px; height: ${containerSize}px">
          <i class="map-icon-cluster__svg">${svg}</i>
          <div class="map-icon-cluster__body">${count}</div>
        </div>
      `;

      // Define the `divIcon` options
      const options = {
        iconSize: iconSize,
        className: classes,
        html: html
      };

      return L.divIcon(options);
    }

    _generateClusterIconSVG(countByType, colorsByType, chartSize, pathSize) {
      // Combine the `countByType` and `colorsByType` into one array of objects,
      // each describing a type with its associated count and color
      const typeKeys = Object.keys(countByType);
      const typeObjs = typeKeys.map(type => ({ type: type, count: countByType[type], color: colorsByType[type] }));

      // Sort the types from highest->lowest
      typeObjs.sort((a,b) => a.count - b.count);

      // Create two parallel arrays of [types] and [colors]
      const types = [];
      const colors = [];
      let i, len, type, total;
      for (i=0, len=typeKeys.length; i<len; i++) {
        type = typeKeys[i];
        total = countByType[type];
        types.push(countByType[type]);
        colors.push(colorsByType[type])
      }

      // Return the pie chart
      return this.createPieChart(types, colors, chartSize, pathSize);
    }

    createPieChart(groupsArray, colorsArray, chartSize, pathSize) {
      // Create a pie generator and pass it the `groupsArray` to create a set
      // of arcs we can draw as a donut pie cart
      const pieGeneratorFn = Px.d3.pie();
      const arcData = pieGeneratorFn(groupsArray);

      // Calculate the `radius` and `innerRadius` of the chart
      const radius = (chartSize / 2);
      const innerRadius = (radius - pathSize);

      // Create a path generator. Individual entries of `arcData` can be passed
      // in to the path geneator to yield a stringified path that can be
      // appended to a `<path>` tag's `d` attribute.
      const arcPathGeneratorFn = Px.d3.arc().outerRadius(radius).innerRadius(innerRadius);

      // Iterate over a list of `arcData` entries and return a block of paths
      const pathListTmpl = (paths) => paths.map(pathTmpl).join('');

      // For each path, generate a `<path>` tag with the correct attributes
      const pathTmpl = (pathData, pathIndex) => `<path d="${arcPathGeneratorFn(pathData)}" fill="${colorsArray[pathIndex]}" opacity="1"></path>`;

      return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${chartSize}" height="${chartSize}">
            <g transform="translate(${radius}, ${radius})">
                ${pathListTmpl(arcData)}
            </g>
        </svg>
      `;
    }
  };
  /* Bind ClusterIcon klass */
  PxMap.ClusterIcon = ClusterIcon;
})();
