"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Dropdown=function(e){var t="dropdown",n="4.0.0-alpha",r="bs.dropdown",a="."+r,i=".data-api",o=e.fn[t],s={HIDE:"hide"+a,HIDDEN:"hidden"+a,SHOW:"show"+a,SHOWN:"shown"+a,CLICK:"click"+a,CLICK_DATA_API:"click"+a+i,KEYDOWN_DATA_API:"keydown"+a+i},l={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},c={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},d=function(){function t(e){_classCallCheck(this,t),this._element=e,this._addEventListeners()}return _createClass(t,[{key:"toggle",value:function(){if(this.disabled||e(this).hasClass(l.DISABLED))return!1;var n=t._getParentFromElement(this),r=e(n).hasClass(l.OPEN);if(t._clearMenus(),r)return!1;if("ontouchstart"in document.documentElement&&!e(n).closest(c.NAVBAR_NAV).length){var a=document.createElement("div");a.className=l.BACKDROP,e(a).insertBefore(this),e(a).on("click",t._clearMenus)}var i={relatedTarget:this},o=e.Event(s.SHOW,i);return e(n).trigger(o),o.isDefaultPrevented()?!1:(this.focus(),this.setAttribute("aria-expanded","true"),e(n).toggleClass(l.OPEN),e(n).trigger(e.Event(s.SHOWN,i)),!1)}},{key:"dispose",value:function(){e.removeData(this._element,r),e(this._element).off(a),this._element=null}},{key:"_addEventListeners",value:function(){e(this._element).on(s.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){var a=e(this).data(r);if(a||e(this).data(r,a=new t(this)),"string"==typeof n){if(void 0===a[n])throw new Error('No method named "'+n+'"');a[n].call(this)}})}},{key:"_clearMenus",value:function(n){if(!n||3!==n.which){var r=e(c.BACKDROP)[0];r&&r.parentNode.removeChild(r);for(var a=e.makeArray(e(c.DATA_TOGGLE)),i=0;i<a.length;i++){var o=t._getParentFromElement(a[i]),d={relatedTarget:a[i]};if(e(o).hasClass(l.OPEN)&&!(n&&"click"===n.type&&/input|textarea/i.test(n.target.tagName)&&e.contains(o,n.target))){var u=e.Event(s.HIDE,d);e(o).trigger(u),u.isDefaultPrevented()||(a[i].setAttribute("aria-expanded","false"),e(o).removeClass(l.OPEN).trigger(e.Event(s.HIDDEN,d)))}}}}},{key:"_getParentFromElement",value:function(t){var n=void 0,r=Util.getSelectorFromElement(t);return r&&(n=e(r)[0]),n||t.parentNode}},{key:"_dataApiKeydownHandler",value:function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!e(this).hasClass(l.DISABLED))){var r=t._getParentFromElement(this),a=e(r).hasClass(l.OPEN);if(!a&&27!==n.which||a&&27===n.which){if(27===n.which){var i=e(r).find(c.DATA_TOGGLE)[0];e(i).trigger("focus")}return void e(this).trigger("click")}var o=e.makeArray(e(c.VISIBLE_ITEMS));if(o=o.filter(function(e){return e.offsetWidth||e.offsetHeight}),o.length){var s=o.indexOf(n.target);38===n.which&&s>0&&s--,40===n.which&&s<o.length-1&&s++,~s||(s=0),o[s].focus()}}}},{key:"VERSION",get:function(){return n}}]),t}();return e(document).on(s.KEYDOWN_DATA_API,c.DATA_TOGGLE,d._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API,c.ROLE_MENU,d._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API,c.ROLE_LISTBOX,d._dataApiKeydownHandler).on(s.CLICK_DATA_API,d._clearMenus).on(s.CLICK_DATA_API,c.DATA_TOGGLE,d.prototype.toggle).on(s.CLICK_DATA_API,c.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=o,d._jQueryInterface},d}(jQuery);