!function e(t,l,r){function a(n,i){if(!l[n]){if(!t[n]){var p="function"==typeof require&&require;if(!i&&p)return p(n,!0);if(o)return o(n,!0);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}var u=l[n]={exports:{}};t[n][0].call(u.exports,function(e){var l=t[n][1][e];return a(l?l:e)},u,u.exports,e,t,l,r)}return l[n].exports}for(var o="function"==typeof require&&require,n=0;n<r.length;n++)a(r[n]);return a}({1:[function(e,t,l){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e,t,l,r){e.rotate(t),e.translate(0,-l),e.fillRect(0,.14*-l,r,.175*l),e.translate(0,l),e.rotate(-t)}function i(e,t,l,r){e.rotate(t),e.translate(0,-l),e.fillRect(0,.04*-l,r,.075*l),e.translate(0,l),e.rotate(-t)}function p(e,t,l,r){e.rotate(l),e.translate(0,.83*-r),e.rotate(-l),e.fillText(t,0,0),e.rotate(l),e.translate(0,.83*r),e.rotate(-l)}function s(e,t,l){e.rotate(l),e.beginPath(),e.moveTo(.035*t,0),e.lineTo(0,.8*t),e.lineTo(.035*-t,0),e.lineTo(.015*-t,.2*-t),e.lineTo(.015*t,.2*-t),e.rotate(-l)}Object.defineProperty(l,"__esModule",{value:!0});var u=function(){function e(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,l,r){return l&&e(t.prototype,l),r&&e(t,r),t}}(),c={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"value",name:"value",property:"value"},{type:"number",label:"startValue",name:"startValue",observe:function(e){this.parentElement.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"endValue",name:"endValue",observe:function(e){this.parentElement.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"stepTextSize",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"subStep",name:"subStep",property:"subStep"},{type:"number",label:"stepNeedleSize",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"number",label:"startAngle",name:"startAngle",property:"startAngle"},{type:"number",label:"endAngle",name:"endAngle",property:"endAngle"},{type:"color",label:"textFillStyle",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needleFillStyle",name:"needleFillStyle",property:"needleFillStyle"},{type:"color",label:"innerCircleFillStyle",name:"innerCircleFillStyle",property:"innerCircleFillStyle"},{type:"color",label:"stepFillStyle",name:"stepFillStyle",property:"stepFillStyle"},{type:"gradient-color-stops",label:"colorStops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"showStartValue",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"showEndValue",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"showStepLine",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"showStepText",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"showSubStep",name:"showSubStep",property:"showSubStep"},{type:"checkbox",label:"inText",name:"inText",property:"inText"}]},y=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"_draw",value:function(e){var t=this.model,l=t.value,r=void 0===l?0:l,a=(t.lineWidth,t.startValue),o=t.endValue,u=t.step,c=t.subStep,y=t.startAngle,h=void 0===y?0:y,f=t.endAngle,b=void 0===f?180:f,S=(t.fontColor,t.showStepText),m=void 0===S?!0:S,d=t.showStartValue,v=void 0===d?!0:d,w=t.showEndValue,x=void 0===w?!0:w,g=t.showStepLine,_=void 0===g?!0:g,T=t.showSubStep,P=void 0===T?!0:T,V=t.inText,M=void 0===V?!0:V,F=t.colorStops,O=(t.fillStyle,t.textFillStyle),k=void 0===O?"black":O,z=t.needleFillStyle,E=void 0===z?"black":z,j=t.innerCircleFillStyle,I=void 0===j?"gray":j,R=t.stepNeedleSize,N=void 0===R?2:R,C=t.stepFillStyle,L=t.stepTextSize,A=t.cx,q=t.cy,B=t.rx,D=t.ry,G=t.ratio,U=.0174533/Math.PI,H=B/100*G,W=D/100*G,J=(b-h)/180,K=o-a;h=h*U-.5,b=b*U-.5,e.translate(A,q),e.beginPath(),e.ellipse(0,0,Math.abs(B),Math.abs(D),0,h*Math.PI,b*Math.PI),this.drawStroke(e),e.ellipse(0,0,Math.abs(H),Math.abs(W),0,b*Math.PI,h*Math.PI,!0),this.drawFill(e),e.closePath(),F&&!function(){var t=0;F.forEach(function(l,r,o){e.beginPath();var n=Math.max(Math.min(l.position-a,K),0),i=Math.PI*(h+J*t/K),p=void 0;return p=r===o.length-1?Math.PI*(h+J):Math.PI*(h+J*n/K),t>K||t>n?!1:(e.moveTo(0,0),e.ellipse(0,0,Math.abs(B),Math.abs(D),0,i,p),e.lineTo(0,0),e.ellipse(0,0,Math.abs(H),Math.abs(W),0,p,i,!0),e.fillStyle=l.color,e.fill(),void(t=n))})}(),e.scale(1,D/B),e.beginPath();var Q=r+(this._anim_alpha||0);Q=Math.max(Math.min(Q,o),a);var X=Math.PI*(J*(Q-a)/K+h-.5);if(s(e,B,X),e.fillStyle=E,e.fill(),e.closePath(),e.beginPath(),e.ellipse(0,0,Math.abs(B)/15,Math.abs(B)/15,0,0,2*Math.PI),e.fillStyle=I,e.fill(),e.fillStyle=C,_){var Y=K/u;n(e,Math.PI*(h+.5),.8*B,N);for(var Z=1;Y>Z;Z++){var $=Math.PI*(J/Y*Z+h+.5);n(e,$,.8*B,N)}n(e,Math.PI*(b+.5),.8*B,N)}if(P)for(var ee=K,te=1;ee>=te;te++)if(te%u!=0&&te%c==0){var le=Math.PI*(J/ee*te+h+.5);i(e,le,.8*B,N)}e.fillStyle=k,e.font=B*L/50+"px arial",e.textBaseline="middle",e.textAlign="center";var re=M?.8:1.35;if(v&&p(e,a,Math.PI*(h+.5),B*re),x&&p(e,o,Math.PI*(b+.5),B*re),m)for(var ae=K/u,oe=1;ae>oe;oe++){var ne=a+u*oe,ie=Math.PI*(J/ae*oe+h+.5);p(e,ne,ie,B*re)}e.scale(1,B/D),e.translate(-A,-q)}},{key:"contains",value:function(e,t){var l=this.model,r=l.cx,a=l.cy,o=l.rx,n=l.ry,i=(e-r)/(2*o-.5),p=(t-a)/(2*n-.5);return.25>i*i+p*p}},{key:"onchange",value:function(e,t){if(e.hasOwnProperty("value")){var l=this,r=e.value-t.value;this._anim_alpha=-r,this.animate({step:function(e){l._anim_alpha=r*(e-1),l.invalidate()},duration:1e3,delta:"bounce",ease:"out"}).start()}}},{key:"_post_draw",value:function(e){this.drawText(e)}},{key:"nature",get:function(){return c}}]),t}(scene.Donut);l["default"]=y,scene.Component.register("gauge-circle",y)},{}],2:[function(e,t,l){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(l,"__esModule",{value:!0});var n=function(){function e(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,l,r){return l&&e(t.prototype,l),r&&e(t,r),t}}(),i={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"value",name:"value",property:"value"},{type:"number",label:"startValue",name:"startValue",observe:function(e){this.parentElement.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"endValue",name:"endValue",observe:function(e){this.parentElement.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"stepTextSize",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"subStep",name:"subStep",property:"subStep"},{type:"number",label:"stepNeedleSize",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"color",label:"textFillStyle",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needleFillStyle",name:"needleFillStyle",property:"needleFillStyle"},{type:"number",label:"needleSize",name:"needleSize",property:"needleSize"},{type:"color",label:"stepFillStyle",name:"stepFillStyle",property:"stepFillStyle"},{type:"gradient-color-stops",label:"colorStops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"showStartValue",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"showEndValue",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"showStepLine",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"showStepText",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"showSubStep",name:"showSubStep",property:"showSubStep"}]},p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),n(t,[{key:"_draw",value:function(e){var t=this.model,l=t.value,r=void 0===l?0:l,a=t.startValue,o=t.endValue,n=t.step,i=t.subStep,p=t.colorStops,s=t.needleFillStyle,u=t.stepFillStyle,c=t.textFillStyle,y=t.needleSize,h=t.stepNeedleSize,f=t.stepTextSize,b=t.showStepText,S=void 0===b?!0:b,m=t.showStartValue,d=void 0===m?!0:m,v=t.showEndValue,w=void 0===v?!0:v,x=t.showStepLine,g=void 0===x?!0:x,_=t.showSubStep,T=void 0===_?!0:_,P=t.width,V=t.height,M=t.top,F=t.left,O=o-a;if(e.translate(F,M),e.beginPath(),e.rect(0,0,P,V),this.drawFill(e),this.drawStroke(e),e.closePath(),p&&!function(){var t=0;p.forEach(function(l,r,o){e.beginPath();var n=Math.max(Math.min(l.position-a,O),0),i=P*t/O,p=void 0;return p=r==o.length-1||i+P*n/O?P-i:P*n/O,t>O||t>n?!1:(e.rect(i,0,p,V),e.fillStyle=l.color,e.fill(),void(t=n))})}(),e.fillStyle=u,g){var k=O/n,z=.06*P;e.fillRect(0,V-z,h,z);for(var E=1;k>E;E++){var j=P/k*E;e.fillRect(j,V-z,h,z)}e.fillRect(P,V-z,h,z)}if(T){var I=O,R=.027*P;e.fillRect(0,V-R,h,R);for(var N=1;I>=N;N++)if(N%n!=0&&N%i==0){var C=P/I*N;e.fillRect(C,V-R,h,R)}}var L=P*f/150;if(e.fillStyle=c,e.font=L+"px arial",e.textBaseline="middle",e.textAlign="center",d&&e.fillText(a,0,V+.75*L),w&&e.fillText(o,P,V+.75*L),S)for(var A=O/n,q=1;A>q;q++){var B=a+n*q,D=P/A*q;e.fillText(B,D,V+.75*L)}e.beginPath();var G=r+(this._anim_alpha||0);G=Math.max(Math.min(G,o),a);var U=(G-a)/O*P;y*=4,e.moveTo(U,V+1.4*L),e.lineTo(U+y/2,V+y+1.4*L),e.lineTo(U-y/2,V+y+1.4*L),e.fillStyle=s,e.fill(),e.closePath(),e.translate(-F,-M)}},{key:"onchange",value:function(e,t){if(e.hasOwnProperty("value")){var l=this,r=e.value-t.value;this._anim_alpha=-r,this.animate({step:function(e){l._anim_alpha=r*(e-1),l.invalidate()},duration:1e3,delta:"circ",options:{x:1},ease:"out"}).start()}}},{key:"_post_draw",value:function(e){this.drawText(e)}},{key:"controls",get:function(){}},{key:"nature",get:function(){return i}}]),t}(scene.Rect);l["default"]=p,scene.Component.register("gauge-horizon",p)},{}],3:[function(e,t,l){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(l,"__esModule",{value:!0});var n=function(){function e(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,l,r){return l&&e(t.prototype,l),r&&e(t,r),t}}(),i={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"value",name:"value",property:"value"},{type:"number",label:"startValue",name:"startValue",observe:function(e){this.parentElement.querySelector("[name=colorStops]").set("property.min",e)},property:"startValue"},{type:"number",label:"endValue",name:"endValue",observe:function(e){this.parentElement.querySelector("[name=colorStops]").set("property.max",e)},property:"endValue"},{type:"number",label:"step",name:"step",property:"step"},{type:"number",label:"stepTextSize",name:"stepTextSize",property:"stepTextSize"},{type:"number",label:"subStep",name:"subStep",property:"subStep"},{type:"number",label:"stepNeedleSize",name:"stepNeedleSize",property:"stepNeedleSize"},{type:"color",label:"textFillStyle",name:"textFillStyle",property:"textFillStyle"},{type:"color",label:"needleFillStyle",name:"needleFillStyle",property:"needleFillStyle"},{type:"number",label:"needleSize",name:"needleSize",property:"needleSize"},{type:"color",label:"stepFillStyle",name:"stepFillStyle",property:"stepFillStyle"},{type:"gradient-color-stops",label:"colorStops",name:"colorStops",property:{min:0,max:100}},{type:"legend",label:"",name:"toggleOption",property:{label:"Toggle Option"}},{type:"checkbox",label:"showStartValue",name:"showStartValue",property:"showStartValue"},{type:"checkbox",label:"showEndValue",name:"showEndValue",property:"showEndValue"},{type:"checkbox",label:"showStepLine",name:"showStepLine",property:"showStepLine"},{type:"checkbox",label:"showStepText",name:"showStepText",property:"showStepText"},{type:"checkbox",label:"showSubStep",name:"showSubStep",property:"showSubStep"}]},p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),n(t,[{key:"_draw",value:function(e){var t=this.model,l=t.value,r=void 0===l?0:l,a=t.startValue,o=t.endValue,n=t.step,i=t.subStep,p=t.colorStops,s=t.needleFillStyle,u=t.stepFillStyle,c=t.textFillStyle,y=t.needleSize,h=t.stepNeedleSize,f=t.stepTextSize,b=t.showStepText,S=void 0===b?!0:b,m=t.showStartValue,d=void 0===m?!0:m,v=t.showEndValue,w=void 0===v?!0:v,x=t.showStepLine,g=void 0===x?!0:x,_=t.showSubStep,T=void 0===_?!0:_,P=t.width,V=t.height,M=t.top,F=t.left,O=o-a;e.translate(F,M),e.beginPath(),e.rect(0,0,P,V),this.drawFill(e),this.drawStroke(e),e.closePath(),p&&!function(){var t=0;p.forEach(function(l,r,o){e.beginPath();var n=Math.max(Math.min(l.position-a,O),0),i=V*t/O,p=void 0;return p=r===o.length-1||i+V*n/O?V-i:V-V*n/O,t>O||t>n?!1:(e.rect(0,V-i,P,-p),e.fillStyle=l.color,e.fill(),void(t=n))})}(),e.beginPath();var k=r+(this._anim_alpha||0);k=Math.max(Math.min(k,o),a);var z=V-(k-a)/O*V;if(y*=4,e.moveTo(1.05*P,z),e.lineTo(1.05*P+y,z+y/2),e.lineTo(1.05*P+y,z-y/2),e.fillStyle=s,e.fill(),e.closePath(),e.fillStyle=u,g){var E=O/n;e.fillRect(0,V,.06*V,h);for(var j=1;E>j;j++){var I=V/E*j;e.fillRect(0,I,.06*V,h)}e.fillRect(0,0,.06*V,h)}if(T){var R=O;e.fillRect(0,0,.027*V,h);for(var N=1;R>=N;N++)if(N%n!=0&&N%i==0){var C=V/R*N;e.fillRect(0,C,.027*V,h)}}var L=V*f/150;if(e.fillStyle=c,e.font=L+"px arial",e.textBaseline="middle",e.textAlign="center",d&&e.fillText(a,-L,V),w&&e.fillText(o,-L,0),S)for(var A=O/n,q=1;A>q;q++){var B=a+n*q,D=V-V/A*q;e.fillText(B,-L,D)}e.translate(-F,-M)}},{key:"onchange",value:function(e,t){if(e.hasOwnProperty("value")){var l=this,r=e.value-t.value;this._anim_alpha=-r,this.animate({step:function(e){l._anim_alpha=r*(e-1),l.invalidate()},duration:1e3,delta:"circ",options:{x:1},ease:"out"}).start()}}},{key:"_post_draw",value:function(e){this.drawText(e)}},{key:"controls",get:function(){}},{key:"nature",get:function(){return i}}]),t}(scene.Rect);l["default"]=p,scene.Component.register("gauge-vertical",p)},{}],4:[function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(l,"__esModule",{value:!0});var a=e("./gauge-circle");Object.defineProperty(l,"GaugeCircle",{enumerable:!0,get:function(){return r(a)["default"]}});var o=e("./gauge-vertical");Object.defineProperty(l,"GaugeVertical",{enumerable:!0,get:function(){return r(o)["default"]}});var n=e("./gauge-horizon");Object.defineProperty(l,"GaugeHorizon",{enumerable:!0,get:function(){return r(n)["default"]}})},{"./gauge-circle":1,"./gauge-horizon":2,"./gauge-vertical":3}]},{},[4]);