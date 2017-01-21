;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M672.278528 137.880576c71.1168-1.255424 108.962816 24.65792 145.115136 57.61536 30.664704-2.648064 70.530048-19.795968 94.026752-31.700992 7.61856-4.17792 15.223808-8.354816 22.841344-12.506112-13.41952 36.262912-31.620096 64.632832-59.552768 86.177792-6.21056 4.777984-12.36992 11.222016-20.164608 14.27968l0 0.437248c39.824384-0.4096 72.700928-18.376704 103.911424-28.12416l0 0.463872c-16.4096 26.049536-38.583296 52.482048-62.256128 71.431168-9.558016 7.590912-19.115008 15.182848-28.670976 22.772736 0.519168 42.160128-0.601088 82.408448-8.507392 117.851136-45.845504 206.048256-167.315456 345.936896-359.602176 405.87264-69.042176 21.516288-180.627456 30.334976-259.731456 10.703872-39.238656-9.749504-74.68032-20.72576-107.938816-35.253248-18.458624-8.082432-35.579904-16.846848-51.936256-26.81344-5.379072-3.277824-10.758144-6.5536-16.109568-9.803776 17.829888 0.520192 38.706176 5.435392 58.651648 2.21184 18.049024-2.921472 35.743744-2.128896 52.385792-5.787648 41.546752-9.120768 78.408704-21.161984 110.164992-39.757824 15.40096-8.982528 38.774784-19.577856 49.723392-32.575488-20.629504 0.355328-39.319552-4.42368-54.638592-9.831424-59.390976-20.970496-93.959168-59.52512-116.431872-117.413888 17.994752 1.939456 69.82144 6.634496 81.944576-3.575808-22.664192-1.256448-44.42624-14.363648-60.017664-24.111104-47.758336-29.9008-86.72256-80.033792-86.422528-157.145088 6.281216 2.94912 12.547072 5.924864 18.813952 8.901632 12.000256 5.07904 24.192 7.7824 38.501376 10.703872 6.06208 1.256448 18.14528 4.83328 25.094144 2.239488l-0.90112 0c-9.229312-10.730496-24.301568-17.912832-33.586176-29.435904-30.650368-38.1184-59.363328-96.744448-41.1904-166.564864 4.600832-17.693696 11.904-33.340416 19.70176-47.758336 0.28672 0.137216 0.600064 0.301056 0.886784 0.437248 3.56352 7.481344 11.523072 12.94336 16.561152 19.195904 15.673344 19.414016 34.978816 36.862976 54.638592 52.235264 67.035136 52.427776 127.408128 84.647936 224.370688 108.485632 24.576 6.061056 53.02784 10.702848 82.395136 10.730496-8.246272-24.029184-5.610496-62.912512 0.887808-86.176768 16.355328-58.487808 51.825664-100.621312 103.911424-123.230208 12.438528-5.379072 26.254336-9.33888 40.73984-12.479488C657.355776 139.682816 664.809472 138.781696 672.278528 137.880576"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-facebook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M643.314688 170.966016l112.260096 0 0-168.06912L612.108288 2.896896l0 0.70656C423.75168 10.19392 385.068032 115.33312 381.717504 225.780736l-0.386048 0L381.331456 342.531072 269.07648 342.531072l0 168.090624 112.256 0 0 511.174656 201.403392 0L582.735872 510.62272l144.297984 0 28.540928-168.090624L582.735872 342.532096l0-104.3456C582.735872 201.049088 607.67744 170.966016 643.314688 170.966016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-linkedin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M743.838206 384.733455c-87.422072 0-146.035004 43.980677-170.026418 85.654822l-2.403746 0 0-72.467475L399.064858 397.920802l0 530.393929 179.524746 0 0-262.396175c0-69.170382 14.360056-136.185682 107.859543-136.185682 92.142583 0 93.368504 79.127152 93.368504 140.646274l0 257.935584 179.566702 0 0-290.925952C959.385377 494.586398 925.795351 384.733455 743.838206 384.733455zM101.006462 928.271752l149.266605 0L250.273067 384.453069 101.006462 384.453069 101.006462 928.271752zM175.636183 94.431719c-61.827137 0-111.952768 48.678676-111.952768 108.754936 0 60.078307 50.125631 108.777449 111.952768 108.777449 61.829184 0 111.954815-48.699142 111.954815-108.777449C287.590997 143.110395 237.465366 94.431719 175.636183 94.431719z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)