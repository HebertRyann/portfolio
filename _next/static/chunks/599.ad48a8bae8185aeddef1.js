(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[599],{6983:function(t,e,i){"use strict";i.r(e);var o=i(5893),n=i(7294),s=i(9583),h=i(9936);e.default=function(){var t=(0,n.useState)(document.body.dataset.theme),e=t[0],i=t[1],r="light"===e?"dark":"light",a=(0,n.useCallback)((function(){i(r)}),[e]);return(0,n.useEffect)((function(){e&&(document.body.dataset.theme=e,localStorage.setItem("@Mychat:Theme",e))}),[e]),(0,o.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,o.jsx)(h.default,{onChange:a,checked:"dark"===e,checkedIcon:(0,o.jsx)(s.Mei,{size:16,style:{marginTop:"6px",marginLeft:"4px",color:"#312E38"}}),uncheckedIcon:(0,o.jsx)(s.TLr,{size:16,style:{marginTop:"6px",marginLeft:"8px",color:"#fff"}}),onColor:"#6BFA8A",offColor:"#0066ff"})})}},3231:function(t,e,i){var o=i(7294);function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}var s=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),h=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function a(t,e,i,o,n){return function(t,e,i,o,n){var s=(t-i)/(e-i);if(0===s)return o;if(1===s)return n;for(var h="#",r=1;r<6;r+=2){var a=parseInt(o.substr(r,2),16),c=parseInt(n.substr(r,2),16),l=Math.round((1-s)*a+s*c).toString(16);1===l.length&&(l="0"+l),h+=l}return h}(t,e,i,r(o),r(n))}var c=function(t){function e(e){t.call(this,e);var i=e.height,o=e.width,n=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(o-i,o-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:n?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,o=e.h,n=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,n));s!==o&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,o=e.N,n=e.B,s=this.props.checked,h=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-n;(!o||r<250||s&&i<=h||!s&&i>=h)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,h=t.offColor,r=t.onColor,c=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,p=t.uncheckedIcon,d=t.checkedHandleIcon,f=t.uncheckedHandleIcon,b=t.boxShadow,y=t.activeBoxShadow,m=t.height,v=t.width,k=t.borderRadius,g=function(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(i[o]=t[o]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,x=w.h,M=w.N,C=w.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},T={height:m,width:v,margin:Math.max(0,(this.t-m)/2),position:"relative",background:a(x,this.i,this.o,h,r),borderRadius:"number"==typeof k?k:m/2,cursor:i?"default":"pointer",WebkitTransition:M?null:"background 0.25s",MozTransition:M?null:"background 0.25s",transition:M?null:"background 0.25s"},E={height:m,width:Math.min(1.5*m,v-(this.t+m)/2+1),position:"relative",opacity:(x-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:M?null:"opacity 0.25s",MozTransition:M?null:"opacity 0.25s",transition:M?null:"opacity 0.25s"},D={height:m,width:Math.min(1.5*m,v-(this.t+m)/2+1),position:"absolute",opacity:1-(x-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:M?null:"opacity 0.25s",MozTransition:M?null:"opacity 0.25s",transition:M?null:"opacity 0.25s"},I={height:this.t,width:this.t,background:a(x,this.i,this.o,c,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof k?k-1:"50%",position:"absolute",transform:"translateX("+x+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:C?y:b,border:0,WebkitTransition:M?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:M?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:M?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},j={height:this.t,width:this.t,opacity:Math.max(2*(1-(x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:M?null:"opacity 0.25s",MozTransition:M?null:"opacity 0.25s",transition:M?null:"opacity 0.25s"},W={height:this.t,width:this.t,opacity:Math.max(2*((x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:M?null:"opacity 0.25s",MozTransition:M?null:"opacity 0.25s",transition:M?null:"opacity 0.25s"};return o.createElement("div",{className:s,style:S},o.createElement("div",{className:"react-switch-bg",style:T,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&o.createElement("div",{style:E},u),p&&o.createElement("div",{style:D},p)),o.createElement("div",{className:"react-switch-handle",style:I,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},f&&o.createElement("div",{style:j},f),d&&o.createElement("div",{style:W},d)),o.createElement("input",n({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:h,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=c},9936:function(t,e,i){t.exports=i(3231)}}]);