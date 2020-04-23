(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var tpl = "<style> :host {\n    display: flex;\n    font-style: inherit;\n    font-variant: inherit;\n    font-family: inherit;\n  }\n\n  :host([hidden]) {\n    display: none;\n  }\n\n  :host([show-default-content]) #myuw-help__default-content {\n    display: block;\n  }\n\n  :host([show-button]) #help-button {\n    display: flex;\n  }\n\n  :host([open]) #myuw-help__dialog {\n    opacity: 1;\n    display: block;\n    position: fixed;\n  }\n\n  :host([open]) #myuw-help__shadow {\n    opacity: 1;\n    height: 100%;\n  }\n\n  /* Duplicate styles to appease firefox */\n  myuw-help {\n    display: flex;\n    font-style: inherit;\n    font-variant: inherit;\n    font-family: inherit;\n  }\n\n  myuw-help[hidden] {\n    display: none;\n  }\n\n  myuw-help[show-default-content] #myuw-help__default-content {\n    display: block;\n  }\n\n  myuw-help[show-button] #help-button {\n    display: flex;\n  }\n\n  myuw-help[open] #myuw-help__dialog {\n    opacity: 1;\n    display: block;\n    position: fixed;\n  }\n\n  myuw-help[open] #myuw-help__shadow {\n    opacity: 1;\n    height: 100%;\n  }\n\n  #myuw-help__dialog {\n    display: none;\n    max-width: 80%;\n    min-width: 300px;\n    height: auto;\n    -webkit-box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15), 0 13px 25px 0 rgba(0, 0, 0, 0.3);\n    box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15), 0 13px 25px 0 rgba(0, 0, 0, 0.3);\n    background-color: #FFFFFF;\n    padding: 22px 24px 12px;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 5px;\n    font-family: var(--myuw-font, 'Roboto', Arial, sans-serif);\n    opacity: 0;\n    position: absolute;\n    float: left;\n    top: 0;\n    right: -1000px;\n    -webkit-transition: all .4s cubic-bezier(.25, .8, .25, 1);\n    transition: all .4s cubic-bezier(.25, .8, .25, 1);\n    z-index: 101;\n  }\n\n  #myuw-help__heading {\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n  }\n\n  #myuw-help__title {\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0.03px;\n  }\n\n  #myuw-help__content {\n    font-weight: 400;\n    font-size: 16px;\n    color: rgba(0, 0, 0, .8);\n    line-height: 24px;\n    text-align: left;\n    letter-spacing: 0.03px;\n    padding: 8px 0 16px;\n  }\n\n  #myuw-help__default-content ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  #myuw-help__default-content ul li {\n    transition: background 0.4s cubic-bezier(.25, .8, .25, 1);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    min-height: 38px;\n    height: auto;\n    padding: 0 16px 0 6px;\n  }\n\n  #myuw-help__default-content ul li:hover {\n    background: rgba(158, 158, 158, 0.2);\n  }\n\n  #myuw-help__default-content a {\n    text-decoration: none;\n    color: #0479a8;\n    /* TODO: use styles variables */\n    min-height: 38px;\n    line-height: 38px;\n    flex: auto;\n    display: flex;\n    align-items: center;\n  }\n\n  #myuw-help__default-content .material-icons {\n    width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    margin-right: 12px;\n    color: #434343;\n  }\n\n  #myuw-help__shadow {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 0;\n    opacity: 0;\n    background: rgba(0, 0, 0, 0.3);\n    transition: opacity 0.3s cubic-bezier(.25, .8, .25, 1);\n    z-index: 100;\n  }\n\n  #myuw-help__close-button {\n    min-width: 48px;\n    max-width: 48px;\n    min-height: 48px;\n    max-height: 48px;\n    margin: 0;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-box-align: center;\n    -ms-flex-line-pack: center;\n    -ms-flex-align: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    position: relative;\n    cursor: pointer;\n    border-radius: 3px;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 0;\n    padding: 0 6px;\n    background: transparent;\n    white-space: nowrap;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 14px;\n    text-decoration: none;\n    overflow: hidden;\n    -webkit-transition: box-shadow .4s cubic-bezier(.25, .8, .25, 1), background-color .4s cubic-bezier(.25, .8, .25, 1);\n    transition: box-shadow .4s cubic-bezier(.25, .8, .25, 1), background-color .4s cubic-bezier(.25, .8, .25, 1);\n    border-radius: 50%;\n  }\n\n  #myuw-help__close-button:hover {\n    background-color: rgba(158, 158, 158, 0.2);\n  }\n\n  #help-button {\n    display: none;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    position: relative;\n    cursor: pointer;\n    min-height: 42px;\n    min-width: 42px;\n    height: 42px;\n    width: 42px;\n    user-select: none;\n    outline: none;\n    padding: 0;\n    border: 0;\n    border-radius: 50%;\n    margin: 0 6px;\n    background-color: transparent;\n    -webkit-transition: background-color .3s cubic-bezier(.35, 0, .25, 1);\n    transition: background-color .3s cubic-bezier(.35, 0, .25, 1);\n  }\n\n  #help-icon {\n    color: var(--myuw-primary-color, #fff);\n    fill: var(--myuw-primary-color, #fff);\n    height: 30px;\n    width: 30px;\n  }\n\n  #help-button:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n\n  #help-button:focus,\n  #help-button:active {\n    outline: 2px solid #5e9ed6;\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n\n  @media all and (min-width: 481px) and (max-width: 840px) {\n    #myuw-help__dialog {\n      width: 400px;\n    }\n  }\n\n  @media all and (min-width: 841px) {\n    #myuw-help__dialog {\n      width: 600px;\n    }\n  } </style> <button id=\"help-button\" aria-label=\"Open help dialog\"> <svg id=\"help-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </button> <div id=\"myuw-help__dialog\" role=\"dialog\" aria-labelledby=\"myuw-help__title\" aria-modal=\"true\"> <div id=\"myuw-help__heading\"> <h1 id=\"myuw-help__title\"></h1> <button id=\"myuw-help__close-button\" aria-label=\"Close help dialog\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </button> </div> <div id=\"myuw-help__content\"> <slot name=\"myuw-help-content\"> <div id=\"myuw-help__default-content\"> <ul> <li> <a href=\"tel:608-264-4357\">Call the help desk</a> </li> <li> <a href=\"mailto:help@doit.wisc.edu\">Email the help desk</a> </li> <li> <a href=\"https://it.wisc.edu\">Get help another way</a> </li> <li> <a href=\"https://outages.doit.wisc.edu/\">Check the Outages page</a> </li> <li> <a href=\"https://kb.wisc.edu/\">Search the KnowledgeBase</a> </li> </ul> </div> </slot> </div> </div> <div id=\"myuw-help__shadow\"></div> ";

  var MyUWHelp =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MyUWHelp, _HTMLElement);

    _createClass(MyUWHelp, null, [{
      key: "elementName",
      get: function get() {
        return 'myuw-help';
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        return ['myuw-help-title', 'open', 'show-button', 'show-default-content'];
      }
    }, {
      key: "template",
      get: function get() {
        if (this._template === undefined) {
          this._template = document.createElement('template');
          this._template.innerHTML = tpl;
        }

        return this._template;
      }
    }]);

    function MyUWHelp() {
      var _this;

      _classCallCheck(this, MyUWHelp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MyUWHelp).call(this));

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(_this.constructor.template.content.cloneNode(true));

      _this.$customPosition = {};
      _this.titleHeadingElement = _this.shadowRoot.getElementById('myuw-help__title');
      _this.$button = _this.shadowRoot.getElementById('help-button');
      _this.$dialog = _this.shadowRoot.getElementById('myuw-help__dialog');
      _this.contentSlotElement = _this.shadowRoot.querySelector('slot[name=myuw-help-content]');
      _this.$backdrop = _this.shadowRoot.getElementById('myuw-help__shadow');
      _this.$dialogCloseButton = _this.shadowRoot.getElementById('myuw-help__close-button');
      _this.eventListeners = [{
        target: document,
        type: 'set-myuw-help-position',
        handler: function handler(event) {
          return _this.handleDocumentSetHelpPosition(event);
        }
      }, {
        target: document,
        type: 'show-myuw-help',
        handler: function handler(event) {
          return _this.handleDocumentShowHelp(event);
        }
      }, {
        target: _this.$backdrop,
        type: 'click',
        handler: function handler(event) {
          return _this.handleBackdropClick(event);
        }
      }, {
        target: _this.$button,
        type: 'click',
        handler: function handler(event) {
          return _this.handleButtonClick(event);
        }
      }, {
        target: _this.$dialog,
        type: 'keydown',
        handler: function handler(event) {
          return _this.handleDialogKeydown(event);
        }
      }, {
        target: _this.$dialogCloseButton,
        type: 'click',
        handler: function handler(event) {
          return _this.handleDialogCloseButtonClick(event);
        }
      }];
      return _this;
    }
    /**
     * Array of the focusable elements within the modal, with the close button last.
     * Always expected to have length 1 or greater, because of the close button.
     *
     * @returns {Array<Element>}
     */


    _createClass(MyUWHelp, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
          case 'myuw-help-title':
            this.titleHeadingElement.innerHTML = newValue;
            break;

          case 'open':
            // opening
            if (oldValue === null && newValue !== null) {
              this.setDialogPosition();
              this.focusableElements[0].focus();
              return;
            } // closing


            if (oldValue !== null && newValue === null) {
              this.resetDialogPosition();
            } // no change in open/close state; do nothing


            break;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.eventListeners.forEach(function (_ref) {
          var target = _ref.target,
              type = _ref.type,
              handler = _ref.handler;
          return target.addEventListener(type, handler);
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.eventListeners.forEach(function (_ref2) {
          var target = _ref2.target,
              type = _ref2.type,
              handler = _ref2.handler;
          return target.removeEventListener(type, handler);
        });
      }
    }, {
      key: "handleButtonClick",
      value: function handleButtonClick(event) {
        this.toggle();
        event.preventDefault();
      }
    }, {
      key: "handleDocumentShowHelp",
      value: function handleDocumentShowHelp(event) {
        this.toggle();
        event.preventDefault();
      }
    }, {
      key: "handleDocumentSetHelpPosition",
      value: function handleDocumentSetHelpPosition(event) {
        if (event.detail && event.detail.position) {
          this.$customPosition = event.detail.position;
        }

        event.preventDefault();
      }
    }, {
      key: "handleDialogKeydown",
      value: function handleDialogKeydown(event) {
        switch (event.key) {
          default:
            return;

          case 'Escape':
            this.close();
            break;

          case 'Tab':
            if (event.shiftKey) {
              this.focusPrevious();
            } else {
              this.focusNext();
            }

            break;

          case 'ArrowDown':
            this.focusNext();
            break;

          case 'ArrowUp':
            this.focusPrevious();
            break;
        }

        event.preventDefault();
      }
    }, {
      key: "handleBackdropClick",
      value: function handleBackdropClick(event) {
        this.close();
        event.preventDefault();
      }
    }, {
      key: "handleDialogCloseButtonClick",
      value: function handleDialogCloseButtonClick(event) {
        this.close();
        event.preventDefault();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.hasAttribute('open')) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.setAttribute('open', '');
      }
    }, {
      key: "close",
      value: function close() {
        this.removeAttribute('open');
      }
      /**
       * Focus the next option in the dialog, cycling around to the first
       */

    }, {
      key: "focusNext",
      value: function focusNext() {
        var focusableElements = this.focusableElements;
        var focusedElement = this.isSameNode(document.activeElement) ? this.shadowRoot.activeElement : document.activeElement;
        var focusedIndex = focusableElements.indexOf(focusedElement);

        if (focusedIndex === focusableElements.length - 1 || focusedIndex === -1) {
          focusableElements[0].focus();
        } else {
          focusableElements[focusedIndex + 1].focus();
        }
      }
      /**
       * Focus the previous option in the dialog, cycling around to the last (the close button)
       */

    }, {
      key: "focusPrevious",
      value: function focusPrevious() {
        var focusableElements = this.focusableElements;
        var focusedElement = this.isSameNode(document.activeElement) ? this.shadowRoot.activeElement : document.activeElement;
        var focusedIndex = focusableElements.indexOf(focusedElement);

        if (focusedIndex === 0 || focusedIndex === -1) {
          focusableElements[focusableElements.length - 1].focus();
        } else {
          focusableElements[focusedIndex - 1].focus();
        }
      }
      /**
       * Position the dialog off-screen
       */

    }, {
      key: "resetDialogPosition",
      value: function resetDialogPosition() {
        this.$dialog.style.top = 0;
        this.$dialog.style.left = 'auto';
        this.$dialog.style.right = '-1000px';
      }
      /**
       * Position the dialog in the middle of the screen
       */

    }, {
      key: "setDialogPosition",
      value: function setDialogPosition() {
        if (this.$customPosition.left && this.$customPosition.top) {
          this.$dialog.style.left = this.$customPosition.left;
          this.$dialog.style.top = this.$customPosition.top;
          this.$dialog.style.right = 'auto';
          return;
        } // Dialog dimensions


        var dialogWidth = this.$dialog.offsetWidth;
        var dialogHeight = this.$dialog.offsetHeight; // Screen dimensions
        // These variables check to make sure mobile is supported and scroll bar is accounted for across browsers

        var cssWidth = window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        var cssHeight = window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight; // Dialog position

        var topPosition = (cssHeight - dialogHeight) / 3;
        var leftPosition = (cssWidth - dialogWidth) / 2; // Set positioning

        this.$dialog.style.left = leftPosition + 'px';
        this.$dialog.style.top = topPosition + 'px';
        this.$dialog.style.right = 'auto';
      }
    }, {
      key: "focusableElements",
      get: function get() {
        var selector = "a[href], input:not([disabled]), button:not([disabled]), button, select, textarea";
        var focusableElements = this.contentSlotElement.assignedElements({
          flatten: true
        }).reduce(function (agg, node) {
          if (node.matches(selector)) {
            agg.push(node);
          } else {
            node.querySelectorAll(selector).forEach(function (each) {
              return agg.push(each);
            });
          }

          return agg;
        }, []);
        focusableElements.push(this.$dialogCloseButton);
        return focusableElements;
      }
    }]);

    return MyUWHelp;
  }(_wrapNativeSuper(HTMLElement));

  if (customElements.get(MyUWHelp.elementName) === undefined) {
    customElements.define(MyUWHelp.elementName, MyUWHelp);
  }

}());
