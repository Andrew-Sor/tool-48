var c=Object.defineProperty;var h=(i,s,t)=>s in i?c(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var a=(i,s,t)=>h(i,typeof s!="symbol"?s+"":s,t);import{j as e,G as r,o,B as l,x as d}from"./index.js";import{A as u}from"./AbstractMethod.js";import{H as g}from"./Header.js";import"./UserAvatar.js";class j extends u{constructor(){super(...arguments);a(this,"pageLang",this.lang("methods.AccountBlacklistClean"));a(this,"beforeLogic",async()=>{this.initProgress();const{count:t}=await this.VK("account.getBanned");this.setState({count:t}),this.endProgress(),t===0&&this.showMethodFinish(this.pageLang.blacklist_empty,!1)});a(this,"confirm",()=>{this.props.showConfirm(this.pageLang.alert_title,this.pageLang.alert_approve,this.start.bind(this))});a(this,"start",async()=>{let t=!0;this.setState({disabled:!0});do{const{count:n}=await this.VK("execute",{code:`
                    var users = API.account.getBanned({ count: 1 });
                    var owner_id = users.items[0];
                    var count = users.count - 1;

                    API.account.unban({owner_id:owner_id});

                    return { count: count };
                `});t=n>0,this.setState({count:n})}while(t);this.setState({disabled:!1}),this.showMethodFinish()});a(this,"content",()=>{const{count:t}=this.state;return t?e.jsxs(e.Fragment,{children:[e.jsx(r,{header:e.jsx(g,{size:"s",children:this.pageLang.blacklist_title}),children:e.jsx(o,{style:{textAlign:"center",fontSize:"4em"},children:this.helpers.formatNumber(t)})}),e.jsx(r,{children:e.jsx(o,{children:e.jsx(l,{disabled:this.state.disabled,stretched:!0,size:"l",onClick:this.confirm,children:this.state.disabled?e.jsx(d,{}):this.pageLang.list_clean})})})]}):null})}}export{j as default};
