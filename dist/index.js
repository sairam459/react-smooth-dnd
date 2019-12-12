!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("prop-types"),require("smooth-dnd")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","smooth-dnd"],n):n((e=e||self).ReactSmoothDnD={},e.React,e.PropTypes,e.SmoothDnD)}(this,function(n,r,e,o){"use strict";var i="default"in r?r.default:r;function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n,t){return n&&s(e.prototype,n),t&&s(e,t),e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],0<=n.indexOf(t)||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],0<=n.indexOf(t)||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?d(e):n}e=e&&e.hasOwnProperty("default")?e.default:e,o.smoothDnD.dropHandler=o.dropHandlers.reactDropHandler().handler,o.smoothDnD.wrapChild=!1;var g=function(){function t(e){var n;return a(this,t),p(d(n=y(this,l(t).call(this,e))),"prevContainer",void 0),p(d(n),"container",null),p(d(n),"containerRef",i.createRef()),n.getContainerOptions=n.getContainerOptions.bind(d(n)),n.getContainer=n.getContainer.bind(d(n)),n.isObjectTypePropsChanged=n.isObjectTypePropsChanged.bind(d(n)),n.prevContainer=null,n}return u(t,r.Component),c(t,[{key:"componentDidMount",value:function(){this.prevContainer=this.getContainer(),this.container=o.smoothDnD(this.getContainer(),this.getContainerOptions())}},{key:"componentWillUnmount",value:function(){this.container.dispose(),this.container=null}},{key:"componentDidUpdate",value:function(e){if(this.getContainer()){if(this.prevContainer&&this.prevContainer!==this.getContainer())return this.container.dispose(),this.container=o.smoothDnD(this.getContainer(),this.getContainerOptions()),void(this.prevContainer=this.getContainer());this.isObjectTypePropsChanged(e)&&this.container.setOptions(this.getContainerOptions())}}},{key:"isObjectTypePropsChanged",value:function(e){var n=this.props,t=(n.render,n.children,n.style,h(n,["render","children","style"]));for(var r in t){var o=r;if(t.hasOwnProperty(o)){var i=t[o];if("function"!=typeof i&&i!==e[o])return!0}}return!1}},{key:"render",value:function(){return this.props.render?this.props.render(this.containerRef):i.createElement("div",{style:this.props.style,ref:this.containerRef},this.props.children)}},{key:"getContainer",value:function(){return this.containerRef.current}},{key:"getContainerOptions",value:function(){var o=this;return Object.keys(this.props).reduce(function(e,n){var t=n,r=o.props[t];return e[t]="function"==typeof r?function(){return o.props[t].apply(void 0,arguments)}:r,e},{})}}]),t}();p(g,"propTypes",{behaviour:e.oneOf(["move","copy","drop-zone","contain"]),groupName:e.string,orientation:e.oneOf(["horizontal","vertical"]),style:e.object,dragHandleSelector:e.string,nonDragAreaSelector:e.string,dragBeginDelay:e.number,animationDuration:e.number,autoScrollEnabled:e.bool,lockAxis:e.string,dragClass:e.string,dropClass:e.string,onDragStart:e.func,onDragEnd:e.func,onDrop:e.func,getChildPayload:e.func,shouldAnimateDrop:e.func,shouldAcceptDrop:e.func,onDragEnter:e.func,onDragLeave:e.func,render:e.func,getGhostParent:e.func,removeOnDropOut:e.bool,dropPlaceholder:e.oneOfType([e.shape({className:e.string,animationDuration:e.number,showOnTop:e.bool}),e.bool])}),p(g,"defaultProps",{behaviour:"move",orientation:"vertical"});var b=o.constants.wrapperClass,v=function(){function e(){return a(this,e),y(this,l(e).apply(this,arguments))}return u(e,r.Component),c(e,[{key:"render",value:function(){if(this.props.render)return i.cloneElement(this.props.render(),{className:b});var e="".concat(this.props.className?this.props.className+" ":"");return i.createElement("div",t({},this.props,{className:"".concat(e).concat(b)}),this.props.children)}}]),e}();p(v,"propsTypes",{render:e.func,className:e.string}),Object.keys(o).forEach(function(e){n[e]=o[e]}),n.Container=g,n.Draggable=v,Object.defineProperty(n,"__esModule",{value:!0})});
