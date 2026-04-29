var d=Object.defineProperty;var l=(i,t,s)=>t in i?d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var a=(i,t,s)=>l(i,typeof t!="symbol"?t+"":t,s);import{j as e,G as n,o as r,B as h,x as c}from"./index.js";import{A as g}from"./AbstractMethod.js";import{H as u}from"./Header.js";import"./UserAvatar.js";class y extends g{constructor(){super(...arguments);a(this,"langKeys",this.lang("methods.messages-read"));a(this,"componentDidMount",async()=>{this.setState({count:!1}),this.initProgress(this.langKeys.loading);const{count:s}=await this.API.send("messages.getConversations",{filter:"unread"});this.setState({count:s,disabled:!1}),this.endProgress(),s===0&&this.showMethodFinish(this.langKeys["no-dialogs"],!1)});a(this,"readDialogs",async()=>{let s=this.state.count;this.setState({disabled:!0});do{const o=await this.API.send("execute",{code:`
                    var dialogs = API.messages.getConversations({ count: 24, filter: "unread" });
                    var i = 0;
                    while (i < dialogs.items.length) {
                        API.messages.markAsRead({
                            peer_id: dialogs.items[i].conversation.peer.id
                        });
                    
                        i = i + 1;
                    }
                    return i;
                `});s=s>24?s-o:0,this.setState({count:s})}while(s>0);this.setState({disabled:!1}),this.showMethodFinish()});a(this,"html",()=>this.state.count?e.jsxs(e.Fragment,{children:[e.jsx(n,{header:e.jsx(u,{size:"s",children:this.langKeys["unread-dialogs"]}),children:e.jsx(r,{style:{textAlign:"center",fontSize:"4em"},children:this.state.count})}),e.jsx(n,{children:e.jsx(r,{children:e.jsx(h,{disabled:this.state.disabled,stretched:!0,size:"l",onClick:this.readDialogs,children:this.state.disabled?e.jsx(c,{}):this.langKeys["read-all"]})})})]}):null)}}export{y as default};
