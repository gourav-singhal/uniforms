(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(10),c=(n(0),n(203)),b={id:"api-helpers",title:"Helpers"},i={id:"api-helpers",title:"Helpers",description:"## `connectField(component[, options])`",source:"@site/../docs/api-helpers.md",permalink:"/docs/api-helpers",sidebar:"docs",previous:{title:"Context data",permalink:"/docs/api-context-data"},next:{title:"Autofield algorithm",permalink:"/docs/uth-autofield-algorithm"}},o=[{value:"<code>connectField(component[, options])</code>",id:"connectfieldcomponent-options",children:[]},{value:"<code>changedKeys(root, valueA, valueB)</code>",id:"changedkeysroot-valuea-valueb",children:[]},{value:"<code>createSchemaBridge(schemaOrBridge)</code>",id:"createschemabridgeschemaorbridge",children:[]},{value:"<code>createSchemaBridge.register(bridge)</code>",id:"createschemabridgeregisterbridge",children:[]},{value:"<code>filterDOMProps(props)</code>",id:"filterdompropsprops",children:[]},{value:"<code>filterDOMProps.register(propA, propB, propC ...)</code>",id:"filterdompropsregisterpropa-propb-propc-",children:[]},{value:"<code>filterDOMProps.registered</code>",id:"filterdompropsregistered",children:[]},{value:"<code>injectName(name, component)</code>",id:"injectnamename-component",children:[]},{value:"<code>joinName([null, ] nameA, nameB, nameC, ...)</code>",id:"joinnamenull--namea-nameb-namec-",children:[]},{value:"<code>nothing</code>",id:"nothing",children:[]},{value:"<code>randomIds([prefix])</code>",id:"randomidsprefix",children:[]}],p={rightToc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"connectfieldcomponent-options"},Object(c.b)("inlineCode",{parentName:"h2"},"connectField(component[, options])")),Object(c.b)("p",null,"Provides form management related props."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"connectField")," helper is a component wrapper, that provides various props related to the form management.\nIt also adds the 'Field' suffix to the name of the wrapped component."),Object(c.b)("p",null,"The table below lists all of the ",Object(c.b)("strong",{parentName:"p"},"guaranteed")," props that will be passed to the wrapped component:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"changed")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"bool")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Has field changed?")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"disabled")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"bool")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Is field disabled?")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"error")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"object")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field scoped part of validation error.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"errorMessage")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field scoped validation error message.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"field")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"object")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field definition from schema.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"fields")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"arrayOf(string)")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Subfields names.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"fieldType")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"func")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field type.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"findError")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"func(name)")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Request another field error.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"findField")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"func(name)")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Request another field.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"findValue")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"func(name)")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Request another field value.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field id - given or random.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"label")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field label.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field name.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"onChange")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"func(value, [name])")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Change field value.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"parent")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"object")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Parent field props.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"placeholder")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field placeholder.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"value")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"any")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field value.")))),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"connectField")," function accepts two arguments: the first one is a component and the second one is an options object."),Object(c.b)("p",null,"The table below lists all available options:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"mapProps")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"func(props)")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Props mapper. Useful for integration with third-party components. For example, you can rename specific props instead of doing mapping by hand in the component.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"baseField")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"element")," (React compponent)"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Base field class. It's reserved for the future - right now there's no useful usecase.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"ensureValue")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"bool")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"<input>")," helper. In React, ",Object(c.b)("inlineCode",{parentName:"td"},"<input>")," can't have undefined or null value and any onChange at once - this option passes 'undefined' as en empty string.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"initialValue")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"bool")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Initial value check. If truthy, then after the first render defaultValue is set as value if no value is provided (undefined).")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"includeParent")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"bool")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Additional parent prop. If truthy, additional parent prop is provided (if any). Useful for nested or complex fields.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"includeInChain")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"bool")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Field name chain visibility. If truthy, then every nested field name will be prefixed with parent name.")))),Object(c.b)("h2",{id:"changedkeysroot-valuea-valueb"},Object(c.b)("inlineCode",{parentName:"h2"},"changedKeys(root, valueA, valueB)")),Object(c.b)("p",null,"Returns an array of changed keys between ",Object(c.b)("inlineCode",{parentName:"p"},"valueA")," and ",Object(c.b)("inlineCode",{parentName:"p"},"valueB"),", where ",Object(c.b)("inlineCode",{parentName:"p"},"root")," is the root key."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { changedKeys } from 'uniforms';\n\nconst arrayOfChangedKeys = changedKeys(root, valueA, valueB);\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," For more examples, see ",Object(c.b)("inlineCode",{parentName:"p"},"changedKeys")," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/vazco/uniforms/blob/master/packages/uniforms/__tests__/changedKeys.js"}),"tests"),"."),Object(c.b)("h2",{id:"createschemabridgeschemaorbridge"},Object(c.b)("inlineCode",{parentName:"h2"},"createSchemaBridge(schemaOrBridge)")),Object(c.b)("p",null,"Retuns a bridge. (",Object(c.b)("em",{parentName:"p"},"It's rather an internal helper, but it's still exported."),")"),Object(c.b)("p",null,"Use it, if you want to manually create a schema bridge or to test your bridge.\nIt will throw on an unrecognised schema."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createSchemaBridge } from 'uniforms';\n\nconst bridge = createSchemaBridge(schemaOrBridge);\n")),Object(c.b)("h2",{id:"createschemabridgeregisterbridge"},Object(c.b)("inlineCode",{parentName:"h2"},"createSchemaBridge.register(bridge)")),Object(c.b)("p",null,"Registers a custom bridge."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createSchemaBridge } from 'uniforms';\n\ncreateSchemaBridge.register(propA, propB, propC /* ... */);\n")),Object(c.b)("h2",{id:"filterdompropsprops"},Object(c.b)("inlineCode",{parentName:"h2"},"filterDOMProps(props)")),Object(c.b)("p",null,"Removes all uniforms-related props."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nconst nonUniformsProps = filterDOMProps(props);\n")),Object(c.b)("h2",{id:"filterdompropsregisterpropa-propb-propc-"},Object(c.b)("inlineCode",{parentName:"h2"},"filterDOMProps.register(propA, propB, propC ...)")),Object(c.b)("p",null,"Registers additional props to be filtered."),Object(c.b)("p",null,"If you want to filter additional props, then you have to register it."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nfilterDOMProps.register(propA, propB, propC /* ... */);\n")),Object(c.b)("h2",{id:"filterdompropsregistered"},Object(c.b)("inlineCode",{parentName:"h2"},"filterDOMProps.registered")),Object(c.b)("p",null,"Returns an array containing already registered props."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { filterDOMProps } from 'uniforms';\n\nfilterDOMProps.register(propA, propB, propC /* ... */);\nfilterDOMProps.registered; // ['propA', 'propB', ...]\n")),Object(c.b)("h2",{id:"injectnamename-component"},Object(c.b)("inlineCode",{parentName:"h2"},"injectName(name, component)")),Object(c.b)("p",null,"Injects name to all already rendered fields. (",Object(c.b)("em",{parentName:"p"},"It's rather an internal helper, but it's still exported."),")"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { injectName } from 'uniforms';\n\nconst componentWithInjectedName = injectName(name, component);\n")),Object(c.b)("h2",{id:"joinnamenull--namea-nameb-namec-"},Object(c.b)("inlineCode",{parentName:"h2"},"joinName([null, ] nameA, nameB, nameC, ...)")),Object(c.b)("p",null,"Safely joins partial field names. When the first param is null, returns an array. Otherwise, returns a string."),Object(c.b)("p",null,"If you create a custom field with subfields, then it's better to use this helper."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { joinName } from 'uniforms';\n\nconst joinedNameArray = joinName(null, nameA, nameB, nameC /* ... */);\nconst joinedNameString = joinName(nameA, nameB, nameC /* ... */);\n")),Object(c.b)("h2",{id:"nothing"},Object(c.b)("inlineCode",{parentName:"h2"},"nothing")),Object(c.b)("p",null,"A safe ",Object(c.b)("inlineCode",{parentName:"p"},"null")," or ",Object(c.b)("inlineCode",{parentName:"p"},"<noscript/>")," tag."),Object(c.b)("p",null,"In React@0.14 you can't return null from functional component, but in React@15 you should use null."),Object(c.b)("p",null,"Basically it's a ",Object(c.b)("inlineCode",{parentName:"p"},"<noscript />")," in @0.14 and null in @15."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { nothing } from 'uniforms';\n\nconst emptyJSX = () => nothing;\n")),Object(c.b)("h2",{id:"randomidsprefix"},Object(c.b)("inlineCode",{parentName:"h2"},"randomIds([prefix])")),Object(c.b)("p",null,"Generates random ID, based on given prefix. (",Object(c.b)("em",{parentName:"p"},"It's rather an internal helper, but it's still exported."),")"),Object(c.b)("p",null,"Use it, if you want to have some random but deterministic strings. If no prefix is provided, the 'uniforms' prefix will be applied."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { randomIds } from 'uniforms';\n\nconst predictableRandomIdGenerator = randomIds(prefix);\n\nconst predictableRandomIdA = predictableRandomIdGenerator();\nconst predictableRandomIdB = predictableRandomIdGenerator();\n")))}l.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),j=a,O=d["".concat(b,".").concat(j)]||d[j]||m[j]||c;return n?r.a.createElement(O,i({ref:t},p,{components:n})):r.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=j;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<c;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);