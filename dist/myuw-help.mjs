var tpl = "<style> :host {\n    display: flex;\n    font-style: inherit;\n    font-variant: inherit;\n    font-family: inherit;\n  }\n\n  :host([hidden]) {\n    display: none;\n  }\n\n  :host([show-default-content]) #myuw-help__default-content {\n    display: block;\n  }\n\n  :host([show-button]) #help-button {\n    display: flex;\n  }\n\n  :host([open]) #myuw-help__dialog {\n    opacity: 1;\n    display: block;\n    position: fixed;\n  }\n\n  :host([open]) #myuw-help__shadow {\n    opacity: 1;\n    height: 100%;\n  }\n\n  /* Duplicate styles to appease firefox */\n  myuw-help {\n    display: flex;\n    font-style: inherit;\n    font-variant: inherit;\n    font-family: inherit;\n  }\n\n  myuw-help[hidden] {\n    display: none;\n  }\n\n  myuw-help[show-default-content] #myuw-help__default-content {\n    display: block;\n  }\n\n  myuw-help[show-button] #help-button {\n    display: flex;\n  }\n\n  myuw-help[open] #myuw-help__dialog {\n    opacity: 1;\n    display: block;\n    position: fixed;\n  }\n\n  myuw-help[open] #myuw-help__shadow {\n    opacity: 1;\n    height: 100%;\n  }\n\n  #myuw-help__dialog {\n    display: none;\n    max-width: 80%;\n    min-width: 300px;\n    height: auto;\n    -webkit-box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15), 0 13px 25px 0 rgba(0, 0, 0, 0.3);\n    box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15), 0 13px 25px 0 rgba(0, 0, 0, 0.3);\n    background-color: #FFFFFF;\n    padding: 22px 24px 12px;\n    margin-top: 0;\n    margin-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 5px;\n    font-family: var(--myuw-font, 'Roboto', Arial, sans-serif);\n    opacity: 0;\n    position: absolute;\n    float: left;\n    top: 0;\n    right: -1000px;\n    -webkit-transition: all .4s cubic-bezier(.25, .8, .25, 1);\n    transition: all .4s cubic-bezier(.25, .8, .25, 1);\n    z-index: 101;\n  }\n\n  #myuw-help__heading {\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n  }\n\n  #myuw-help__title {\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0.03px;\n  }\n\n  #myuw-help__content {\n    font-weight: 400;\n    font-size: 16px;\n    color: rgba(0, 0, 0, .8);\n    line-height: 24px;\n    text-align: left;\n    letter-spacing: 0.03px;\n    padding: 8px 0 16px;\n  }\n\n  #myuw-help__default-content ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  #myuw-help__default-content ul li {\n    transition: background 0.4s cubic-bezier(.25, .8, .25, 1);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    min-height: 38px;\n    height: auto;\n    padding: 0 16px 0 6px;\n  }\n\n  #myuw-help__default-content ul li:hover {\n    background: rgba(158, 158, 158, 0.2);\n  }\n\n  #myuw-help__default-content a {\n    text-decoration: none;\n    color: #0479a8;\n    /* TODO: use styles variables */\n    min-height: 38px;\n    line-height: 38px;\n    flex: auto;\n    display: flex;\n    align-items: center;\n  }\n\n  #myuw-help__default-content .material-icons {\n    width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    margin-right: 12px;\n    color: #434343;\n  }\n\n  #myuw-help__shadow {\n    position: fixed;\n    top: 64px;\n    left: 0;\n    width: 100%;\n    height: 0;\n    opacity: 0;\n    background: rgba(0, 0, 0, 0.3);\n    transition: opacity 0.3s cubic-bezier(.25, .8, .25, 1);\n    z-index: 100;\n  }\n\n  #myuw-help__close-button {\n    min-width: 48px;\n    max-width: 48px;\n    min-height: 48px;\n    max-height: 48px;\n    margin: 0;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-box-align: center;\n    -ms-flex-line-pack: center;\n    -ms-flex-align: center;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    position: relative;\n    cursor: pointer;\n    border-radius: 3px;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 0;\n    padding: 0 6px;\n    background: transparent;\n    white-space: nowrap;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 14px;\n    text-decoration: none;\n    overflow: hidden;\n    -webkit-transition: box-shadow .4s cubic-bezier(.25, .8, .25, 1), background-color .4s cubic-bezier(.25, .8, .25, 1);\n    transition: box-shadow .4s cubic-bezier(.25, .8, .25, 1), background-color .4s cubic-bezier(.25, .8, .25, 1);\n    border-radius: 50%;\n  }\n\n  #myuw-help__close-button:hover {\n    background-color: rgba(158, 158, 158, 0.2);\n  }\n\n  #help-button {\n    display: none;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    position: relative;\n    cursor: pointer;\n    min-height: 42px;\n    min-width: 42px;\n    height: 42px;\n    width: 42px;\n    user-select: none;\n    outline: none;\n    padding: 0;\n    border: 0;\n    border-radius: 50%;\n    margin: 0 6px;\n    background-color: transparent;\n    -webkit-transition: background-color .3s cubic-bezier(.35, 0, .25, 1);\n    transition: background-color .3s cubic-bezier(.35, 0, .25, 1);\n  }\n\n  #help-icon {\n    color: var(--myuw-primary-color, #fff);\n    fill: var(--myuw-primary-color, #fff);\n    height: 30px;\n    width: 30px;\n  }\n\n  #help-button:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n\n  #help-button:focus,\n  #help-button:active {\n    outline: 2px solid #5e9ed6;\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n\n  @media all and (min-width: 481px) and (max-width: 840px) {\n    #myuw-help__dialog {\n      width: 400px;\n    }\n  }\n\n  @media all and (min-width: 841px) {\n    #myuw-help__dialog {\n      width: 600px;\n    }\n  } </style> <button id=\"help-button\" aria-label=\"Open help dialog\"> <svg id=\"help-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </button> <div id=\"myuw-help__dialog\" role=\"dialog\" aria-labelledby=\"myuw-help__title\" aria-modal=\"true\"> <div id=\"myuw-help__heading\"> <h1 id=\"myuw-help__title\"></h1> <button id=\"myuw-help__close-button\" aria-label=\"Close help dialog\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </button> </div> <div id=\"myuw-help__content\"> <slot name=\"myuw-help-content\"> <div id=\"myuw-help__default-content\"> <ul> <li> <a href=\"tel:608-264-4357\">Call the help desk</a> </li> <li> <a href=\"mailto:help@doit.wisc.edu\">Email the help desk</a> </li> <li> <a href=\"https://it.wisc.edu\">Get help another way</a> </li> <li> <a href=\"https://outages.doit.wisc.edu/\">Check the Outages page</a> </li> <li> <a href=\"https://kb.wisc.edu/\">Search the KnowledgeBase</a> </li> </ul> </div> </slot> </div> </div> <div id=\"myuw-help__shadow\"></div> ";

class MyUWHelp extends HTMLElement {

  static get elementName() {
    return 'myuw-help';
  }

  static get observedAttributes() {
    return [
      'myuw-help-title',
      'open',
      'show-button',
      'show-default-content'
    ];
  }

  static get template() {
    if (this._template===undefined) {
      this._template=document.createElement('template');
      this._template.innerHTML=tpl;
    }
    return this._template;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.constructor.template.content.cloneNode(true));
    this.$customPosition={};
    this.titleHeadingElement=this.shadowRoot.getElementById('myuw-help__title');
    this.$button=this.shadowRoot.getElementById('help-button');
    this.$dialog=this.shadowRoot.getElementById('myuw-help__dialog');
    this.contentSlotElement=this.shadowRoot.querySelector('slot[name=myuw-help-content]');
    this.$backdrop=this.shadowRoot.getElementById('myuw-help__shadow');
    this.$dialogCloseButton=this.shadowRoot.getElementById('myuw-help__close-button');
    this.eventListeners=[
      { target: document, type: 'set-myuw-help-position', handler: event => this.handleDocumentSetHelpPosition(event) },
      { target: document, type: 'show-myuw-help', handler: event => this.handleDocumentShowHelp(event) },
      { target: this.$backdrop, type: 'click', handler: event => this.handleBackdropClick(event) },
      { target: this.$button, type: 'click', handler: event => this.handleButtonClick(event) },
      { target: this.$dialog, type: 'keydown', handler: event => this.handleDialogKeydown(event) },
      { target: this.$dialogCloseButton, type: 'click', handler: event => this.handleDialogCloseButtonClick(event) }
    ];
  }

  /**
   * Array of the focusable elements within the modal, with the close button last.
   * Always expected to have length 1 or greater, because of the close button.
   *
   * @returns {Array<Element>}
   */
  get focusableElements() {
    const selector="a[href], input:not([disabled]), button:not([disabled]), button, select, textarea";
    const focusableElements=this.contentSlotElement.assignedElements({ flatten: true })
      .reduce(
        (agg, node) => {
          if (node.matches(selector)) {
            agg.push(node);
          }
          else {
            node.querySelectorAll(selector).forEach(each => agg.push(each));
          }
          return agg;
        },
        []
      )
      ;
    focusableElements.push(this.$dialogCloseButton);
    return focusableElements;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'myuw-help-title':
        this.titleHeadingElement.innerHTML=newValue;
        break;
      case 'open':
        // opening
        if (oldValue===null&&newValue!==null) {
          this.setDialogPosition();
          this.focusableElements[0].focus();
          return;
        }
        // closing
        if (oldValue!==null&&newValue===null) {
          this.resetDialogPosition();
        }
        // no change in open/close state; do nothing
        break;
    }
  }

  connectedCallback() {
    this.eventListeners.forEach(({ target, type, handler }) => target.addEventListener(type, handler));
  }

  disconnectedCallback() {
    this.eventListeners.forEach(({ target, type, handler }) => target.removeEventListener(type, handler));
  }

  handleButtonClick(event) {
    this.toggle();
    event.preventDefault();
  }

  handleDocumentShowHelp(event) {
    this.toggle();
    event.preventDefault();
  }

  handleDocumentSetHelpPosition(event) {
    if (event.detail&&event.detail.position) {
      this.$customPosition=event.detail.position;
    }
    event.preventDefault();
  }

  handleDialogKeydown(event) {
    switch (event.key) {
      default:
        return;
      case 'Escape':
        this.close();
        break;
      case 'Tab':
        if (event.shiftKey) {
          this.focusPrevious();
        }
        else {
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

  handleBackdropClick(event) {
    this.close();
    event.preventDefault();
  }

  handleDialogCloseButtonClick(event) {
    this.close();
    event.preventDefault();
  }

  toggle() {
    if (this.hasAttribute('open')) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.setAttribute('open', '');
  }

  close() {
    this.removeAttribute('open');
  }

  /**
   * Focus the next option in the dialog, cycling around to the first
   */
  focusNext() {
    const focusableElements=this.focusableElements;
    const focusedElement=this.isSameNode(document.activeElement)? this.shadowRoot.activeElement:document.activeElement;
    const focusedIndex=focusableElements.indexOf(focusedElement);
    if (focusedIndex===focusableElements.length-1||focusedIndex===-1) {
      focusableElements[0].focus();
    }
    else {
      focusableElements[focusedIndex+1].focus();
    }
  }

  /**
   * Focus the previous option in the dialog, cycling around to the last (the close button)
   */
  focusPrevious() {
    const focusableElements=this.focusableElements;
    const focusedElement=this.isSameNode(document.activeElement)? this.shadowRoot.activeElement:document.activeElement;
    const focusedIndex=focusableElements.indexOf(focusedElement);
    if (focusedIndex===0||focusedIndex===-1) {
      focusableElements[focusableElements.length-1].focus();
    }
    else {
      focusableElements[focusedIndex-1].focus();
    }
  }

  /**
   * Position the dialog off-screen
   */
  resetDialogPosition() {
    this.$dialog.style.top=0;
    this.$dialog.style.left='auto';
    this.$dialog.style.right='-1000px';
  }

  /**
   * Position the dialog in the middle of the screen
   */
  setDialogPosition() {
    if (this.$customPosition.left&&this.$customPosition.top) {
      this.$dialog.style.left=this.$customPosition.left;
      this.$dialog.style.top=this.$customPosition.top;
      this.$dialog.style.right='auto';
      return;
    }
    // Dialog dimensions
    const dialogWidth=this.$dialog.offsetWidth;
    const dialogHeight=this.$dialog.offsetHeight;
    // Screen dimensions
    // These variables check to make sure mobile is supported and scroll bar is accounted for across browsers
    const cssWidth=window.innerWidth&&document.documentElement.clientWidth
      ? Math.min(window.innerWidth, document.documentElement.clientWidth):window.innerWidth||
      document.documentElement.clientWidth||
      document.getElementsByTagName('body')[0].clientWidth;
    const cssHeight=window.innerHeight&&document.documentElement.clientHeight
      ? Math.min(window.innerHeight, document.documentElement.clientHeight):window.innerHeight||
      document.documentElement.clientHeight||
      document.getElementsByTagName('body')[0].clientHeight;
    // Dialog position
    const topPosition=((cssHeight-dialogHeight)/3);
    const leftPosition=((cssWidth-dialogWidth)/2);
    // Set positioning
    this.$dialog.style.left=leftPosition+'px';
    this.$dialog.style.top=topPosition+'px';
    this.$dialog.style.right='auto';
  }

}

if (customElements.get(MyUWHelp.elementName)===undefined) {
  customElements.define(MyUWHelp.elementName, MyUWHelp);
}
