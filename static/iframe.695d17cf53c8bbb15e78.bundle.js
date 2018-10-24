(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{239:function(o,n,t){"use strict";var e=t(5),r=t.n(e),a=t(60),c=t.n(a),l=t(27),i=t.n(l),s=t(15),d=t.n(s),u=t(153),h=t(4),p=t.n(h),m=t(8),g=t.n(m),f=t(12),w=t.n(f),y=t(13),B=t.n(y),E=t(14),C=t.n(E),b=t(0),k=t.n(b),T=t(2),L=t.n(T),v=function(o){function n(o){var t;return p()(this,n),(t=w()(this,B()(n).call(this,o))).props.onMount(),t}return C()(n,o),g()(n,[{key:"componentWillUnmount",value:function(){this.props.onUnMount()}},{key:"render",value:function(){return this.props.story}}]),n}(k.a.Component);v.propTypes={story:L.a.node.isRequired,onMount:L.a.func.isRequired,onUnMount:L.a.func.isRequired};function O(o,n,t){return k.a.createElement(v,{story:o,onMount:n,onUnMount:t})}v.__docgenInfo={description:"",methods:[],displayName:"ReactDecorator",props:{story:{type:{name:"node"},required:!0,description:""},onMount:{type:{name:"func"},required:!0,description:""},onUnMount:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-decorator.js"]={name:"ReactDecorator",docgenInfo:v.__docgenInfo,path:"src/react-decorator.js"}),O.__docgenInfo={description:"",methods:[],displayName:"reactStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-decorator.js"]={name:"reactStory",docgenInfo:O.__docgenInfo,path:"src/react-decorator.js"}),t.d(n,"a",function(){return j}),t.d(n,"b",function(){return M});var R=console,D={log:R.log,warn:R.warn,error:R.error},S={panelExclude:[/\[HMR\]/],panelInclude:[],consoleExclude:[],consoleInclude:[],log:"console",warn:"warn",error:"error"},W=S,x=function(o){return{log:Object(u.action)(o.log),warn:Object(u.action)(o.warn),error:Object(u.action)(o.error)}},_=function(o,n,t){return t.length?o.filter(function(o){return"string"==typeof o&&t.find(function(n){return o.match(n)})}):n.length?o.filter(function(o){return"string"!=typeof o||!n.find(function(n){return o.match(n)})}):o};function A(o){var n=o.panelExclude,t=o.panelInclude,e=o.consoleExclude,r=o.consoleInclude,a=x(o);R.log=function(){for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];var s=_(c,n,t),d=_(c,e,r);s.length&&a.log.apply(a,i()(s)),d.length&&D.log.apply(D,i()(d))},R.warn=function(){for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];var s=_(c,n,t),d=_(c,e,r);s.length&&a.warn.apply(a,i()(s)),d.length&&D.warn.apply(D,i()(d))},R.error=function(){for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];var s=_(c,n,t),d=_(c,e,r);s.length&&a.error.apply(a,i()(s)),d.length&&D.error.apply(D,i()(d))},d.a.onerror=function(){var o=_([0>=arguments.length?void 0:arguments[0]],n,t),c=_([0>=arguments.length?void 0:arguments[0]],e,r);return o.length&&a.error.apply(a,arguments),!c.length}}A(S);var P=function(o){return o?"object"===c()(o)?r()({},o):r()({},o(W)):{}};function j(o){var n=P(o);return A(W=r()({},W,n)),W}function F(o,n,t){var e=r()({},W),a=n?{log:"".concat(n.kind,"/").concat(n.story),warn:"".concat(n.kind,"/").concat(n.story," warn"),error:"".concat(n.kind,"/").concat(n.story," error")}:{},c=r()({},W,a,t);A(c);var l=o(),i=function(){switch(d.a.STORYBOOK_ENV){case"react":return O;default:return R.warn("Warning! withConsole doesn't support @storybook/".concat(d.a.STORYBOOK_ENV,". Use setConsoleOptions instead")),function(o){return o}}}()(l,function(){return A(c)},function(){return A(W)});return A(W=e),i}function M(o){var n=P(o);return function(o){return function(t){return F(o,t,n)}}}},740:function(o,n,t){"use strict";var e=t(0),r=t.n(e);n.a=r.a.createElement("div",{style:{fontFamily:'-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", "Arial", sans-serif',color:"#585858"}},r.a.createElement("a",{href:"https://badge.fury.io/js/%40storybook%2Faddon-console"},r.a.createElement("img",{src:"https://badge.fury.io/js/%40storybook%2Faddon-console.svg",alt:"npm version"})),r.a.createElement("a",{href:"https://github.com/storybooks/storybook-addon-console"},r.a.createElement("img",{src:"https://img.shields.io/npm/dt/@storybook/addon-console.svg",alt:"addon-console"})),r.a.createElement("h1",null,"Storybook Addon Console"),r.a.createElement("big",null,"Redirects console output into Action Logger Panel"),r.a.createElement("h2",null,"Why"),r.a.createElement("p",null,"There're some cases when you can't / don't want / forgot to keep browser console opened. This addon helps you to get all console output in your storybook. In other cases, you might find it difficult to extract the desired information in the information noise issued by the console or to determine which component in what state gives the message. With this addon, you can control what you see and where you see."),r.a.createElement("h2",null,"Install"),r.a.createElement("code",null,"npm i @storybook/addon-console --save-dev"),r.a.createElement("h2",null,"Quick Start"),r.a.createElement("p",null,"Just import it in your storybook config.js:"),r.a.createElement("code",null,"import '@storybook/addon-console';"),r.a.createElement("p",null,"That's all. You'll start to receive all console messages, warnings, errors in your action logger panel. Everything except HMR logs."),r.a.createElement("p",null,"read ",r.a.createElement("a",{href:"https://github.com/storybooks/storybook-addon-console"},"full documentation")),r.a.createElement("h2",null,"Live demo"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://storybooks.github.io/storybook-addon-console"},r.a.createElement("svg",{width:"90",height:"20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("rect",{fill:"#F1618C",width:"90",height:"20",rx:"3"}),r.a.createElement("g",{fillRule:"nonzero"},r.a.createElement("path",{d:"M7.725 3.728L18 3v14l-9.704-.484v.016l-.843.093-.5-12.984.772.087z",fill:"white"}),r.a.createElement("path",{fill:"#F1618C",d:"M15.462 4.905l.135-1.73 1.275-.09v1.82l-.641-.552zM13.292 8.468l2.055-.05c.05-1.94-.983-2.898-2.783-2.898-1.8 0-2.808.995-2.808 2.488 0 2.6 3.446 2.65 3.446 4.068 0 .398-.191.634-.612.634-.549 0-.766-.348-.74-1.318H9.693c-.166 2.4 1.276 2.948 2.922 2.948 1.596 0 2.847-.722 2.847-2.289 0-2.787-3.498-2.712-3.498-4.093 0-.56.409-.634.651-.634.256 0 .715.1.677 1.144z"})),r.a.createElement("path",{d:"M27.324 14.108a6.59 6.59 0 0 1-1.848-.258c-.592-.172-1.084-.41-1.476-.714l.6-1.332a4.698 4.698 0 0 0 2.748.852c.528 0 .934-.086 1.218-.258.284-.172.426-.41.426-.714 0-.272-.13-.484-.39-.636-.26-.152-.722-.3-1.386-.444-.744-.152-1.338-.336-1.782-.552-.444-.216-.768-.482-.972-.798-.204-.316-.306-.706-.306-1.17 0-.512.142-.968.426-1.368.284-.4.682-.714 1.194-.942.512-.228 1.104-.342 1.776-.342.6 0 1.178.088 1.734.264.556.176.998.412 1.326.708l-.6 1.332c-.776-.568-1.592-.852-2.448-.852-.488 0-.872.094-1.152.282a.885.885 0 0 0-.42.774c0 .192.054.35.162.474.108.124.288.234.54.33.252.096.61.196 1.074.3 1.088.24 1.87.548 2.346.924s.714.896.714 1.56c0 .8-.308 1.43-.924 1.89-.616.46-1.476.69-2.58.69zm7.848-1.344c.184 0 .376-.012.576-.036l-.096 1.32a5.088 5.088 0 0 1-.696.048c-.896 0-1.55-.196-1.962-.588-.412-.392-.618-.988-.618-1.788V9.464H31.26V8.108h1.116V6.38h1.812v1.728h1.476v1.356h-1.476v2.244c0 .704.328 1.056.984 1.056zm4.212 1.332c-.624 0-1.172-.126-1.644-.378a2.65 2.65 0 0 1-1.092-1.068c-.256-.46-.384-1.002-.384-1.626 0-.624.128-1.166.384-1.626.256-.46.62-.814 1.092-1.062.472-.248 1.02-.372 1.644-.372.624 0 1.172.124 1.644.372s.836.602 1.092 1.062c.256.46.384 1.002.384 1.626 0 .624-.128 1.166-.384 1.626a2.65 2.65 0 0 1-1.092 1.068c-.472.252-1.02.378-1.644.378zm0-1.38c.88 0 1.32-.564 1.32-1.692 0-.568-.114-.992-.342-1.272-.228-.28-.554-.42-.978-.42-.88 0-1.32.564-1.32 1.692 0 1.128.44 1.692 1.32 1.692zm8.436-3.264l-1.02.108c-.504.048-.86.19-1.068.426-.208.236-.312.55-.312.942V14h-1.812V8.108h1.74v.996c.296-.68.908-1.052 1.836-1.116l.528-.036.108 1.5zm5.04-1.332h1.776l-3.552 8.04h-1.836l1.128-2.484-2.424-5.556h1.884l1.488 3.744L52.86 8.12zm5.976-.156c.512 0 .964.124 1.356.372.392.248.698.602.918 1.062.22.46.33.994.33 1.602 0 .608-.11 1.146-.33 1.614-.22.468-.528.832-.924 1.092-.396.26-.846.39-1.35.39a2.34 2.34 0 0 1-1.104-.258 1.836 1.836 0 0 1-.756-.714V14h-1.788V5.54H57V8.9a1.79 1.79 0 0 1 .75-.69 2.37 2.37 0 0 1 1.086-.246zm-.528 4.752c.424 0 .752-.15.984-.45.232-.3.348-.722.348-1.266 0-.536-.116-.946-.348-1.23-.232-.284-.56-.426-.984-.426-.424 0-.752.146-.984.438-.232.292-.348.706-.348 1.242 0 .544.116.962.348 1.254.232.292.56.438.984.438zm7.068 1.38c-.624 0-1.172-.126-1.644-.378a2.65 2.65 0 0 1-1.092-1.068c-.256-.46-.384-1.002-.384-1.626 0-.624.128-1.166.384-1.626.256-.46.62-.814 1.092-1.062.472-.248 1.02-.372 1.644-.372.624 0 1.172.124 1.644.372s.836.602 1.092 1.062c.256.46.384 1.002.384 1.626 0 .624-.128 1.166-.384 1.626a2.65 2.65 0 0 1-1.092 1.068c-.472.252-1.02.378-1.644.378zm0-1.38c.88 0 1.32-.564 1.32-1.692 0-.568-.114-.992-.342-1.272-.228-.28-.554-.42-.978-.42-.88 0-1.32.564-1.32 1.692 0 1.128.44 1.692 1.32 1.692zm7.056 1.38c-.624 0-1.172-.126-1.644-.378a2.65 2.65 0 0 1-1.092-1.068c-.256-.46-.384-1.002-.384-1.626 0-.624.128-1.166.384-1.626.256-.46.62-.814 1.092-1.062.472-.248 1.02-.372 1.644-.372.624 0 1.172.124 1.644.372s.836.602 1.092 1.062c.256.46.384 1.002.384 1.626 0 .624-.128 1.166-.384 1.626a2.65 2.65 0 0 1-1.092 1.068c-.472.252-1.02.378-1.644.378zm0-1.38c.88 0 1.32-.564 1.32-1.692 0-.568-.114-.992-.342-1.272-.228-.28-.554-.42-.978-.42-.88 0-1.32.564-1.32 1.692 0 1.128.44 1.692 1.32 1.692zM82.944 14h-2.22l-2.256-2.628V14h-1.812V5.54h1.812v5.088L80.64 8.12h2.16l-2.472 2.808L82.944 14z",fill:"#FFF"}))))),r.a.createElement("p",null,"Select stories and press button. See the output in ",r.a.createElement("code",null,"ACTION LOGGER")," panel. It's same as you can see in the devtools console."),r.a.createElement("p",null,r.a.createElement("b",null,"Note:")," You can find the source code of selected story in the ",r.a.createElement("code",null,"STORY")," panel."))},741:function(o,n,t){t(269),t(742),o.exports=t(743)},743:function(o,n,t){"use strict";t.r(n),function(o){var n=t(27),e=t.n(n),r=t(5),a=t.n(r),c=t(0),l=t.n(c),i=t(238),s=t(100),d=t(68),u=t(739),h=t(239),p=(t(768),a()({},d.themes.normal,{brand:{background:"#F1618C",color:"white"}}));Object(s.addDecorator)(Object(u.withOptions)({name:"Addon Console",url:"https://github.com/storybooks/storybook-addon-console",theme:p})),console.log("TCL: themes.dark",p),Object(s.addDecorator)(function(o,n){return"Core|Errors"===n.kind?o():l.a.createElement(i.default,{theme:d.themes.normal},o())});var m=Object(h.a)({}).panelExclude;Object(h.a)({panelExclude:e()(m).concat([/deprecated/])}),Object(s.configure)(function(){t(777)},o)}.call(this,t(368)(o))},777:function(o,n,t){"use strict";t.r(n),function(o){t.d(n,"withStorySource",function(){return C}),t.d(n,"__STORY__",function(){return b}),t.d(n,"__ADDS_MAP__",function(){return k});var e=t(4),r=t.n(e),a=t(8),c=t.n(a),l=t(12),i=t.n(l),s=t(13),d=t.n(s),u=t(14),h=t.n(u),p=t(0),m=t.n(p),g=t(2),f=t.n(g),w=t(100),y=t(101),B=t(740),E=t(239),C=t(632).withStorySource,b="import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport { storiesOf } from '@storybook/react';\n\nimport { Button } from '@storybook/react/demo';\nimport welcome from '../docs/welcome';\nimport { withConsole } from '../src';\n\nconst T = {\n  foo: 11,\n};\n\nclass Badge extends React.Component {\n  constructor(props) {\n    super(props);\n    console.log('Badge constructor');\n  }\n  render() {\n    console.log('Badge render');\n    return <div>{this.props.info}</div>;\n  }\n}\nBadge.propTypes = {\n  info: PropTypes.number.isRequired,\n};\n\nstoriesOf('Welcome', module).add('to Storybook Addon Console', () => welcome);\n\nstoriesOf('Button', module)\n  // simple console.log may be located anywhere deep in the child component\n  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)\n  // simple console.warn may be located anywhere deep in the child component\n  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)\n  // simple console.error may be located anywhere deep in the child component\n  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)\n  // any unhandled error from anywhere deep in the child component\n  .add('with Uncatched Error', () => <Button onClick={() => console.log('Data:', null.buu.foo)}>Throw Button</Button>)\n  // logs and warnings displayed as soon as a child component did Mount\n  .add('with wrong PropType', () => <Badge info=\"Component with React Warning\" />);\n\nconst addConsole = (storyFn, context) => withConsole()(storyFn)(context);\nstoriesOf('withConsole', module)\n  // all messages prefixed with story name\n  .addDecorator(addConsole)\n  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)\n  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)\n  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)\n  .add('with Uncatched Error', () => <Button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</Button>)\n  .add('with log in constructor', () => <Badge info={42} />)\n  .add('with wrong PropType', () => <Badge info=\"Component with React Warning\" />);\n",k={"Welcome@to Storybook Addon Console":{startLoc:{col:33,line:28},endLoc:{col:76,line:28}},"Button@with wrong PropType":{startLoc:{col:7,line:40},endLoc:{col:81,line:40}},"Button@with Uncatched Error":{startLoc:{col:7,line:38},endLoc:{col:117,line:38}},"Button@with Error":{startLoc:{col:7,line:36},endLoc:{col:100,line:36}},"Button@with Warning":{startLoc:{col:7,line:34},endLoc:{col:104,line:34}},"Button@with Log":{startLoc:{col:7,line:32},endLoc:{col:98,line:32}},"withConsole@with wrong PropType":{startLoc:{col:7,line:51},endLoc:{col:81,line:51}},"withConsole@with log in constructor":{startLoc:{col:7,line:50},endLoc:{col:59,line:50}},"withConsole@with Uncatched Error":{startLoc:{col:7,line:49},endLoc:{col:114,line:49}},"withConsole@with Error":{startLoc:{col:7,line:48},endLoc:{col:100,line:48}},"withConsole@with Warning":{startLoc:{col:7,line:47},endLoc:{col:104,line:47}},"withConsole@with Log":{startLoc:{col:7,line:46},endLoc:{col:98,line:46}}},T={foo:11},L=function(o){function n(o){var t;return r()(this,n),t=i()(this,d()(n).call(this,o)),console.log("Badge constructor"),t}return h()(n,o),c()(n,[{key:"render",value:function(){return console.log("Badge render"),m.a.createElement("div",null,this.props.info)}}]),n}(m.a.Component);L.propTypes={info:f.a.number.isRequired},Object(w.storiesOf)("Welcome",o).addDecorator(C("import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport { storiesOf } from '@storybook/react';\n\nimport { Button } from '@storybook/react/demo';\nimport welcome from '../docs/welcome';\nimport { withConsole } from '../src';\n\nconst T = {\n  foo: 11,\n};\n\nclass Badge extends React.Component {\n  constructor(props) {\n    super(props);\n    console.log('Badge constructor');\n  }\n  render() {\n    console.log('Badge render');\n    return <div>{this.props.info}</div>;\n  }\n}\nBadge.propTypes = {\n  info: PropTypes.number.isRequired,\n};\n\nstoriesOf('Welcome', module).add('to Storybook Addon Console', () => welcome);\n\nstoriesOf('Button', module)\n  // simple console.log may be located anywhere deep in the child component\n  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)\n  // simple console.warn may be located anywhere deep in the child component\n  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)\n  // simple console.error may be located anywhere deep in the child component\n  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)\n  // any unhandled error from anywhere deep in the child component\n  .add('with Uncatched Error', () => <Button onClick={() => console.log('Data:', null.buu.foo)}>Throw Button</Button>)\n  // logs and warnings displayed as soon as a child component did Mount\n  .add('with wrong PropType', () => <Badge info=\"Component with React Warning\" />);\n\nconst addConsole = (storyFn, context) => withConsole()(storyFn)(context);\nstoriesOf('withConsole', module)\n  // all messages prefixed with story name\n  .addDecorator(addConsole)\n  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)\n  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)\n  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)\n  .add('with Uncatched Error', () => <Button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</Button>)\n  .add('with log in constructor', () => <Badge info={42} />)\n  .add('with wrong PropType', () => <Badge info=\"Component with React Warning\" />);\n",k)).add("to Storybook Addon Console",function(){return B.a}),Object(w.storiesOf)("Button",o).addDecorator(C("import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport { storiesOf } from '@storybook/react';\n\nimport { Button } from '@storybook/react/demo';\nimport welcome from '../docs/welcome';\nimport { withConsole } from '../src';\n\nconst T = {\n  foo: 11,\n};\n\nclass Badge extends React.Component {\n  constructor(props) {\n    super(props);\n    console.log('Badge constructor');\n  }\n  render() {\n    console.log('Badge render');\n    return <div>{this.props.info}</div>;\n  }\n}\nBadge.propTypes = {\n  info: PropTypes.number.isRequired,\n};\n\nstoriesOf('Welcome', module).add('to Storybook Addon Console', () => welcome);\n\nstoriesOf('Button', module)\n  // simple console.log may be located anywhere deep in the child component\n  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)\n  // simple console.warn may be located anywhere deep in the child component\n  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)\n  // simple console.error may be located anywhere deep in the child component\n  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)\n  // any unhandled error from anywhere deep in the child component\n  .add('with Uncatched Error', () => <Button onClick={() => console.log('Data:', null.buu.foo)}>Throw Button</Button>)\n  // logs and warnings displayed as soon as a child component did Mount\n  .add('with wrong PropType', () => <Badge info=\"Component with React Warning\" />);\n\nconst addConsole = (storyFn, context) => withConsole()(storyFn)(context);\nstoriesOf('withConsole', module)\n  // all messages prefixed with story name\n  .addDecorator(addConsole)\n  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)\n  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)\n  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)\n  .add('with Uncatched Error', () => <Button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</Button>)\n  .add('with log in constructor', () => <Badge info={42} />)\n  .add('with wrong PropType', () => <Badge info=\"Component with React Warning\" />);\n",k)).add("with Log",function(){return m.a.createElement(y.Button,{onClick:function(){return console.log("Data:",1,3,4)}},"Log Button")}).add("with Warning",function(){return m.a.createElement(y.Button,{onClick:function(){return console.warn("Data:",1,3,4)}},"Warn Button")}).add("with Error",function(){return m.a.createElement(y.Button,{onClick:function(){return console.error("Test Error")}},"Error Button")}).add("with Uncatched Error",function(){return m.a.createElement(y.Button,{onClick:function(){return console.log("Data:",null.buu.foo)}},"Throw Button")}).add("with wrong PropType",function(){return m.a.createElement(L,{info:"Component with React Warning"})});Object(w.storiesOf)("withConsole",o).addDecorator(C("import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport { storiesOf } from '@storybook/react';\n\nimport { Button } from '@storybook/react/demo';\nimport welcome from '../docs/welcome';\nimport { withConsole } from '../src';\n\nconst T = {\n  foo: 11,\n};\n\nclass Badge extends React.Component {\n  constructor(props) {\n    super(props);\n    console.log('Badge constructor');\n  }\n  render() {\n    console.log('Badge render');\n    return <div>{this.props.info}</div>;\n  }\n}\nBadge.propTypes = {\n  info: PropTypes.number.isRequired,\n};\n\nstoriesOf('Welcome', module).add('to Storybook Addon Console', () => welcome);\n\nstoriesOf('Button', module)\n  // simple console.log may be located anywhere deep in the child component\n  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)\n  // simple console.warn may be located anywhere deep in the child component\n  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)\n  // simple console.error may be located anywhere deep in the child component\n  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)\n  // any unhandled error from anywhere deep in the child component\n  .add('with Uncatched Error', () => <Button onClick={() => console.log('Data:', null.buu.foo)}>Throw Button</Button>)\n  // logs and warnings displayed as soon as a child component did Mount\n  .add('with wrong PropType', () => <Badge info=\"Component with React Warning\" />);\n\nconst addConsole = (storyFn, context) => withConsole()(storyFn)(context);\nstoriesOf('withConsole', module)\n  // all messages prefixed with story name\n  .addDecorator(addConsole)\n  .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)\n  .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)\n  .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)\n  .add('with Uncatched Error', () => <Button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</Button>)\n  .add('with log in constructor', () => <Badge info={42} />)\n  .add('with wrong PropType', () => <Badge info=\"Component with React Warning\" />);\n",k)).addDecorator(function(o,n){return Object(E.b)()(o)(n)}).add("with Log",function(){return m.a.createElement(y.Button,{onClick:function(){return console.log("Data:",1,3,4)}},"Log Button")}).add("with Warning",function(){return m.a.createElement(y.Button,{onClick:function(){return console.warn("Data:",1,3,4)}},"Warn Button")}).add("with Error",function(){return m.a.createElement(y.Button,{onClick:function(){return console.error("Test Error")}},"Error Button")}).add("with Uncatched Error",function(){return m.a.createElement(y.Button,{onClick:function(){return console.log("Data:",T.buu.foo)}},"Throw Button")}).add("with log in constructor",function(){return m.a.createElement(L,{info:42})}).add("with wrong PropType",function(){return m.a.createElement(L,{info:"Component with React Warning"})})}.call(this,t(368)(o))}},[[741,2,4]]]);
//# sourceMappingURL=iframe.695d17cf53c8bbb15e78.bundle.js.map