!function(e){var t={};function l(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}([function(e,t){e.exports=scene},function(e,t,l){e.exports=l(2)},function(e,t,l){"use strict";l.r(t);var r=l(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"value",name:"value",property:"value"},{type:"number",label:"start-value",name:"startValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"end-value",name:"endValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"step-text-size",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"sub-step",name:"subStep",property:"subStep"},{type:"number",label:"step-needle-size",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"number",label:"start-angle",name:"startAngle",property:"startAngle"},{type:"number",label:"end-angle",name:"endAngle",property:"endAngle"},{type:"color",label:"text-fill-style",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needle-fill-style",name:"needleFillStyle",property:"needleFillStyle"},{type:"color",label:"inner-circle-fill-style",name:"innerCircleFillStyle",property:"innerCircleFillStyle"},{type:"color",label:"step-fill-style",name:"stepFillStyle",property:"stepFillStyle"},{type:"solid-color-stops",label:"color-stops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"show-start-value",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"show-end-value",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"show-step-line",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"show-step-text",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"show-sub-step",name:"showSubStep",property:"showSubStep"},{type:"checkbox",label:"in-text",name:"inText",property:"inText"},{type:"checkbox",label:"anim-from-base",name:"animFromBase"}]};function u(e,t,l,r){e.rotate(t),e.translate(0,-l),e.fillRect(0,.14*-l,r,.175*l),e.translate(0,l),e.rotate(-t)}function c(e,t,l,r){e.rotate(t),e.translate(0,-l),e.fillRect(0,.04*-l,r,.075*l),e.translate(0,l),e.rotate(-t)}function y(e,t,l,r){e.rotate(l),e.translate(0,.83*-r),e.rotate(-l),e.fillText(t,0,0),e.rotate(l),e.translate(0,.83*r),e.rotate(-l)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,i(t).apply(this,arguments))}var l,o,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,Object(r["ValueHolder"])(r["Donut"])),l=t,(o=[{key:"_draw",value:function(e){var t=this.model,l=(t.lineWidth,t.startValue),r=t.endValue,o=t.step,n=t.subStep,a=t.startAngle,i=void 0===a?0:a,p=t.endAngle,s=void 0===p?180:p,f=(t.fontColor,t.showStepText),b=void 0===f||f,h=t.showStartValue,m=void 0===h||h,S=t.showEndValue,d=void 0===S||S,v=t.showStepLine,x=void 0===v||v,w=t.showSubStep,g=void 0===w||w,P=t.inText,T=void 0===P||P,O=t.colorStops,V=(t.fillStyle,t.textFillStyle),M=void 0===V?"black":V,F=t.needleFillStyle,_=void 0===F?"black":F,k=t.innerCircleFillStyle,z=void 0===k?"gray":k,j=t.stepNeedleSize,E=void 0===j?2:j,N=t.stepFillStyle,I=t.stepTextSize,R=t.cx,C=t.cy,A=t.rx,B=t.ry,L=t.ratio,q=t.animFromBase,H=void 0!==q&&q;l=Number(l),this.animOnValueChange(this.value,H,l);var G=.0174533/Math.PI,D=A/100*L,W=B/100*L,J=(s-i)/180,K=r-l;if(i=i*G-.5,s=s*G-.5,e.translate(R,C),e.beginPath(),e.ellipse(0,0,Math.abs(A),Math.abs(B),0,(i*Math.PI).toFixed(2),(s*Math.PI).toFixed(2)),this.drawStroke(e),e.ellipse(0,0,Math.abs(D),Math.abs(W),0,(s*Math.PI).toFixed(2),(i*Math.PI).toFixed(2),!0),e.closePath(),O){var Q=0,U=0;e.moveTo(0,0),O.forEach(function(t,r,o){e.beginPath();var n=Math.max(Math.min(t.position-l,K),0),a=U||Math.PI*(i+J*Q/K);if(U=r===o.length-1?Math.PI*(i+J):Math.PI*(i+J*n/K),Q>K||Q>n)return!1;e.ellipse(0,0,Math.abs(A),Math.abs(B),0,a,U),e.ellipse(0,0,Math.abs(D),Math.abs(W),0,U,a,!0),e.fillStyle=t.color,e.fill(),Q=n})}e.scale(1,B/A),e.beginPath();var X=this.animValue;X=Math.max(Math.min(X,r),l);var Y=Math.PI*(J*(X-l)/K+i-.5);if(function(e,t,l){e.rotate(l),e.beginPath(),e.moveTo(.035*t,0),e.lineTo(0,.8*t),e.lineTo(.035*-t,0),e.lineTo(.015*-t,.2*-t),e.lineTo(.015*t,.2*-t),e.rotate(-l)}(e,A,Y),e.fillStyle=_,e.fill(),e.beginPath(),e.ellipse(0,0,Math.abs(A)/15,Math.abs(A)/15,0,0,2*Math.PI),e.fillStyle=z,e.fill(),e.fillStyle=N,x){var Z=K/o;u(e,Math.PI*(i+.5),.8*A,E);for(var $=1;$<Z;$++){var ee=Math.PI*(J/Z*$+i+.5);u(e,ee,.8*A,E)}u(e,Math.PI*(s+.5),.8*A,E)}if(g)for(var te=K,le=1;le<=te;le++)if(le%o!=0&&le%n==0){var re=Math.PI*(J/te*le+i+.5);c(e,re,.8*A,E)}e.fillStyle=M,e.font=A*I/50+"px arial",e.textBaseline="middle",e.textAlign="center";var oe=T?.8:1.35;if(m&&y(e,l,Math.PI*(i+.5),A*oe),d&&y(e,r,Math.PI*(s+.5),A*oe),b)for(var ne=K/o,ae=1;ae<ne;ae++){var ie=l+o*ae,pe=Math.PI*(J/ne*ae+i+.5);y(e,ie,pe,A*oe)}e.scale(1,A/B),e.translate(-R,-C)}},{key:"contains",value:function(e,t){var l=this.model,r=l.cx,o=l.cy,n=(e-r)/(2*l.rx-.5),a=(t-o)/(2*l.ry-.5);return n*n+a*a<.25}},{key:"_post_draw",value:function(e){this.drawText(e)}},{key:"nature",get:function(){return s}}])&&n(l.prototype,o),f&&n(l,f),t}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.Component.register("gauge-circle",f);var v={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"value",name:"value",property:"value"},{type:"number",label:"start-value",name:"startValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"end-value",name:"endValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"step-text-size",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"sub-step",name:"subStep",property:"subStep"},{type:"number",label:"step-needle-size",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"color",label:"text-fill-style",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needle-fill-style",name:"needleFillStyle",property:"needleFillStyle"},{type:"number",label:"needle-size",name:"needleSize",property:"needleSize"},{type:"color",label:"step-fill-style",name:"stepFillStyle",property:"stepFillStyle"},{type:"solid-color-stops",label:"color-stops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"show-start-value",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"show-end-value",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"show-step-line",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"show-step-text",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"show-sub-step",name:"showSubStep",property:"showSubStep"},{type:"checkbox",label:"anim-from-base",name:"animFromBase"}]},x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,S(t).apply(this,arguments))}var l,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,Object(r["ValueHolder"])(Object(r["RectPath"])(r["Shape"]))),l=t,(o=[{key:"_draw",value:function(e){var t=this.model,l=t.startValue,r=t.endValue,o=t.step,n=t.subStep,a=t.colorStops,i=t.needleFillStyle,p=t.stepFillStyle,s=t.textFillStyle,u=t.needleSize,c=t.stepNeedleSize,y=t.stepTextSize,f=t.showStepText,b=void 0===f||f,h=t.showStartValue,m=void 0===h||h,S=t.showEndValue,d=void 0===S||S,v=t.showStepLine,x=void 0===v||v,w=t.showSubStep,g=void 0===w||w,P=t.width,T=t.height,O=t.top,V=t.left,M=t.animFromBase,F=void 0!==M&&M;l=Number(l),this.animOnValueChange(this.value,F,l);var _=r-l;if(e.translate(V,O),e.beginPath(),e.rect(0,0,P,T),this.drawFill(e),this.drawStroke(e),e.closePath(),a){var k=0;a.forEach(function(t,r,o){e.beginPath();var n,a=Math.max(Math.min(t.position-l,_),0),i=T*k/_;if(n=r===o.length-1||i+T*a/_?T-i:T-T*a/_,k>_||k>a)return!1;e.rect(0,T-i,P,-n),e.fillStyle=t.color,e.fill(),k=a})}e.beginPath();var z=this.animValue;z=Math.max(Math.min(z,r),l);var j=T-(z-l)/_*T;if(u*=4,e.moveTo(1.05*P,j),e.lineTo(1.05*P+u,j+u/2),e.lineTo(1.05*P+u,j-u/2),e.fillStyle=i,e.fill(),e.closePath(),e.fillStyle=p,x){var E=_/o;e.fillRect(0,T,.06*T,c);for(var N=1;N<E;N++){var I=T/E*N;e.fillRect(0,I,.06*T,c)}e.fillRect(0,0,.06*T,c)}if(g){var R=_;e.fillRect(0,0,.027*T,c);for(var C=1;C<=R;C++)if(C%o!=0&&C%n==0){var A=T/R*C;e.fillRect(0,A,.027*T,c)}}var B=T*y/150;if(e.fillStyle=s,e.font=B+"px arial",e.textBaseline="middle",e.textAlign="center",m&&e.fillText(l,-B,T),d&&e.fillText(r,-B,0),b)for(var L=_/o,q=1;q<L;q++){var H=l+Number(o)*q,G=T-T/L*q;e.fillText(H,-B,G)}e.translate(-V,-O)}},{key:"_post_draw",value:function(e){this.drawText(e)}},{key:"nature",get:function(){return v}}])&&h(l.prototype,o),n&&h(l,n),t}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.Component.register("gauge-vertical",x);var V={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"value",name:"value",property:"value"},{type:"number",label:"start-value",name:"startValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"end-value",name:"endValue",observe:function(e){this.parentNode.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"step-text-size",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"sub-step",name:"subStep",property:"subStep"},{type:"number",label:"step-needle-size",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"color",label:"text-fill-style",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needle-fill-style",name:"needleFillStyle",property:"needleFillStyle"},{type:"number",label:"needle-size",name:"needleSize",property:"needleSize"},{type:"color",label:"step-fill-style",name:"stepFillStyle",property:"stepFillStyle"},{type:"solid-color-stops",label:"color-stops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"show-start-value",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"show-end-value",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"show-step-line",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"show-step-text",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"show-sub-step",name:"showSubStep",property:"showSubStep"},{type:"checkbox",label:"anim-from-base",name:"animFromBase"}]},M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,T(t).apply(this,arguments))}var l,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,Object(r["ValueHolder"])(Object(r["RectPath"])(r["Shape"]))),l=t,(o=[{key:"_draw",value:function(e){var t=this.model,l=t.startValue,r=t.endValue,o=t.step,n=t.subStep,a=t.colorStops,i=t.needleFillStyle,p=t.stepFillStyle,s=t.textFillStyle,u=t.needleSize,c=t.stepNeedleSize,y=t.stepTextSize,f=t.showStepText,b=void 0===f||f,h=t.showStartValue,m=void 0===h||h,S=t.showEndValue,d=void 0===S||S,v=t.showStepLine,x=void 0===v||v,w=t.showSubStep,g=void 0===w||w,P=t.width,T=t.height,O=t.top,V=t.left,M=t.animFromBase,F=void 0!==M&&M;l=Number(l),this.animOnValueChange(this.value,F,l);var _=r-l;if(e.translate(V,O),e.beginPath(),e.rect(0,0,P,T),this.drawFill(e),this.drawStroke(e),e.closePath(),a){var k=0;a.forEach(function(t,r,o){e.beginPath();var n,a=Math.max(Math.min(t.position-l,_),0),i=P*k/_;if(n=r==o.length-1||i+P*a/_?P-i:P*a/_,k>_||k>a)return!1;e.rect(i,0,n,T),e.fillStyle=t.color,e.fill(),k=a})}if(e.fillStyle=p,x){var z=_/o,j=.06*P;e.fillRect(0,T-j,c,j);for(var E=1;E<z;E++){var N=P/z*E;e.fillRect(N,T-j,c,j)}e.fillRect(P,T-j,c,j)}if(g){var I=_,R=.027*P;e.fillRect(0,T-R,c,R);for(var C=1;C<=I;C++)if(C%o!=0&&C%n==0){var A=P/I*C;e.fillRect(A,T-R,c,R)}}var B=P*y/150;if(e.fillStyle=s,e.font=B+"px arial",e.textBaseline="middle",e.textAlign="center",m&&e.fillText(l,0,T+.75*B),d&&e.fillText(r,P,T+.75*B),b)for(var L=_/o,q=1;q<L;q++){var H=l+o*q,G=P/L*q;e.fillText(H,G,T+.75*B)}e.beginPath();var D=this.animValue,W=((D=Math.max(Math.min(D,r),l))-l)/_*P;u*=4,e.moveTo(W,T+1.4*B),e.lineTo(W+u/2,T+u+1.4*B),e.lineTo(W-u/2,T+u+1.4*B),e.fillStyle=i,e.fill(),e.closePath(),e.translate(-V,-O)}},{key:"_post_draw",value:function(e){this.drawText(e)}},{key:"nature",get:function(){return V}}])&&g(l.prototype,o),n&&g(l,n),t}();r.Component.register("gauge-horizon",M),l.d(t,"GaugeCircle",function(){return f}),l.d(t,"GaugeVertical",function(){return x}),l.d(t,"GaugeHorizon",function(){return M})}]);
//# sourceMappingURL=things-scene-gauge-ie.js.map