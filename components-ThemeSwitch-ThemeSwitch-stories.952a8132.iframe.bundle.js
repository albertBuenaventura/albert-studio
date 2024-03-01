/*! For license information please see components-ThemeSwitch-ThemeSwitch-stories.952a8132.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalbert_studio=self.webpackChunkalbert_studio||[]).push([[188],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./src/components/ThemeSwitch/ThemeSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ThemeSwitch_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Theme=function(Theme){return Theme.Light="light",Theme.Dark="dark",Theme}({});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l={},a=function(e,n,t){return l[e]||(l[e]={callbacks:[],value:t}),l[e].callbacks.push(n),{deregister:function(){var t=l[e].callbacks,o=t.indexOf(n);o>-1&&t.splice(o,1)},emit:function(t){l[e].value!==t&&(l[e].value=t,l[e].callbacks.forEach((function(e){n!==e&&e(t)})))}}};var useThemeState=function use_persisted_state_m(l,u){if(void 0===u&&(u=void 0!==__webpack_require__.g&&__webpack_require__.g.localStorage?__webpack_require__.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),u){var i=(e=u,{get:function(n,t){var o=e.getItem(n);return null==o?"function"==typeof t?t():t:JSON.parse(o)},set:function(n,t){e.setItem(n,JSON.stringify(t))}});return function(u){return function(l,u,i){var c=i.get,f=i.set,g=(0,react.useRef)(null),s=(0,react.useState)((function(){return c(u,l)})),d=s[0],p=s[1];(function event_listener_m(t,r,i,o){void 0===i&&(i=__webpack_require__.g),void 0===o&&(o={});var c=(0,react.useRef)(),u=o.capture,a=o.passive,v=o.once;(0,react.useEffect)((function(){c.current=r}),[r]),(0,react.useEffect)((function(){if(i&&i.addEventListener){var e=function(e){return c.current(e)},n={capture:u,passive:a,once:v};return i.addEventListener(t,e,n),function(){i.removeEventListener(t,e,n)}}}),[t,i,u,a,v])})("storage",(function(e){if(e.key===u){var n=JSON.parse(e.newValue);d!==n&&p(n)}})),(0,react.useEffect)((function(){return g.current=a(u,p,l),function(){g.current.deregister()}}),[l,u]);var v=(0,react.useCallback)((function(e){var n="function"==typeof e?e(d):e;f(u,n),p(n),g.current.emit(e)}),[d,f,u]);return[d,v]}(u,l,i)}}var e;return react.useState}("studio-theme");const use_theme=function useTheme(){var _useThemeState2=_slicedToArray(useThemeState(),2);return{theme:_useThemeState2[0],setTheme:_useThemeState2[1]}};var __jsx=react.createElement;function ThemeSwitch(_ref){var onSwitch=_ref.onSwitch,className=_ref.className,_useTheme=use_theme(),theme=_useTheme.theme,setTheme=_useTheme.setTheme,toggleTheme=(0,react.useCallback)((function(){theme===Theme.Dark?setTheme(Theme.Light):setTheme(Theme.Dark)}),[onSwitch,theme]);return(0,react.useEffect)((function(){theme&&(null==onSwitch||onSwitch(theme))}),[theme]),__jsx("div",{className:classnames_default()("flex w-12 p-1 h-fit bg-slate-800 dark:bg-white rounded-2xl",className),role:"button",onClick:toggleTheme},__jsx("div",{className:"w-5 h-3.5 bg-white rounded-lg dark:bg-slate-800 dark:ml-5 transition-[margin-left] duration-200"}))}ThemeSwitch.displayName="ThemeSwitch";try{ThemeSwitch.displayName="ThemeSwitch",ThemeSwitch.__docgenInfo={description:"",displayName:"ThemeSwitch",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSwitch:{defaultValue:null,description:"",name:"onSwitch",required:!1,type:{name:"((theme: Theme) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThemeSwitch/ThemeSwitch.tsx#ThemeSwitch"]={docgenInfo:ThemeSwitch.__docgenInfo,name:"ThemeSwitch",path:"src/components/ThemeSwitch/ThemeSwitch.tsx#ThemeSwitch"})}catch(__react_docgen_typescript_loader_error){}var ThemeSwitch_stories_jsx=react.createElement,Template=function Template(){var theme=use_theme().theme;return ThemeSwitch_stories_jsx("div",{className:classnames_default()("w-full h-screen",{dark:theme===Theme.Dark})},ThemeSwitch_stories_jsx("div",{className:"dark:bg-slate-800 w-full h-full p-10"},ThemeSwitch_stories_jsx(ThemeSwitch,null)))};Template.displayName="Template";var Default=Template.bind({});const ThemeSwitch_stories={title:"ThemeSwitch",component:ThemeSwitch,argTypes:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => {\n  const {\n    theme\n  } = useTheme();\n  return <div className={cx("w-full h-screen", {\n    dark: theme === Theme.Dark\n  })}>\n      <div className="dark:bg-slate-800 w-full h-full p-10">\n        <ThemeSwitch />\n      </div>\n    </div>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);