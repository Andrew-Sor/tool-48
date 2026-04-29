var m=Object.defineProperty;var f=(r,a,s)=>a in r?m(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s;var c=(r,a,s)=>f(r,typeof a!="symbol"?a+"":a,s);import{j as o,G as y,o as K,B as k}from"./index.js";import{A as v}from"./AbstractMethod.js";import{H as x}from"./Header.js";import{F as C}from"./FormItem.js";import{C as g}from"./Checkbox.js";import"./UserAvatar.js";import"./Removable.js";import"./useGlobalEventListener.js";import"./SelectionControl.js";import"./check_box_on_24.js";class D extends v{constructor(){super(...arguments);c(this,"langKeys",this.lang("methods.messages-clean"));c(this,"componentDidMount",async()=>{this.initProgress(this.langKeys.loading);const s=[];let e=!0,i=0;do{const{count:h,items:d}=await this.API.send("messages.getConversations",{offset:i,count:200});s.push(...d),i===0&&this.setProgressTotal(h),this.addProgressCount(d.length),i+=200,i>h&&(e=!1)}while(e);if(this.endProgress(),!s.length)return this.showMethodFinish(this.langKeys.noDialogs,!1);const n=await this.VKHelpers.getFriends({onlyIds:!0}),t={friends:[],users:[],groups:[],chats:{in:[],kicked:[],left:[]}};s.forEach(({conversation:h})=>{const d=h.peer.type,l=h.peer.id;if(d==="chat"){const u=h.chat_settings.state;t.chats[u]||(this.helpers.dd("Unknown state",u),t.chats[u]=[]),t.chats[u].push(l)}else d==="user"?n.includes(l)?t.friends.push(l):t.users.push(l):d==="group"&&t.groups.push(l)});const p=[{id:"friends",name:this.langKeys.friends,count:t.friends.length},{id:"users",name:this.langKeys.users,count:t.users.length},{id:"groups",name:this.langKeys.groups,count:t.groups.length},{id:"chatsIn",name:this.langKeys.chats.in,count:t.chats.in.length},{id:"chatsKicked",name:this.langKeys.chats.kicked,count:t.chats.kicked.length},{id:"chatsLeft",name:this.langKeys.chats.left,count:t.chats.left.length}];return this.setState({data:t,options:p,activeButton:!1,needRemove:[]}),null});c(this,"updateState",()=>{const s=["friends","users","groups","chatsIn","chatsKicked","chatsLeft","confirm"].reduce((n,t)=>(n[t]=document.getElementById(t).checked,n),{}),e=[],i=this.state.data;s.friends&&e.push(...i.friends),s.users&&e.push(...i.users),s.groups&&e.push(...i.groups),s.chatsIn&&e.push(...i.chats.in),s.chatsKicked&&e.push(...i.chats.kicked),s.chatsLeft&&e.push(...i.chats.left),this.helpers.dd("needRemove",e),this.setState({activeButton:s.confirm&&e.length>0,needRemove:e})});c(this,"confirm",async()=>{const s=this.state.needRemove;for(this.setState({options:null}),this.initProgress(this.langKeys.loadingRemove,s.length),this.initProgress(this.langKeys.loadingMessages,0,2);s.length;){const e=s.pop(),i=await this.API.send("execute",{peer_id:e,code:`
                    var peer_id = Args.peer_id;
                    var i = 0;
                    var lastCount = 0;
                    
                    while (i < 5) {
                      var history = API.messages.getHistory({
                        peer_id: peer_id,
                        count: 200
                      });
                      
                      if (history.count == 0) {
                        return 0;
                      }
                      
                      lastCount = history.count - history.items.length;
                      
                      API.messages.delete({ 
                        message_ids: history.items@.id
                      });
                    
                      i = i + 1;
                    }
                    
                    return lastCount;
                `});this.helpers.dd({peerId:e,count:i}),i>0?(s.push(e),this.setProgressCount(i,2)):(this.addProgressCount(1),this.setProgressCount(0,2))}this.endProgress(),this.showMethodFinish()});c(this,"html",()=>{const{options:s,activeButton:e,needRemove:i}=this.state;return s?o.jsxs(y,{header:o.jsx(x,{size:"s",children:this.langKeys.settings}),children:[o.jsxs(C,{children:[s.map((n,t)=>o.jsxs(g,{id:n.id,disabled:n.count===0,onChange:this.updateState,children:[n.name," (",this.helpers.formatNumber(n.count),")"]},t)),o.jsx(g,{className:"DangerousAction",id:"confirm",onChange:this.updateState,children:this.langKeys.checkbox})]}),o.jsx(K,{children:o.jsxs(k,{disabled:!e,stretched:!0,size:"l",onClick:this.confirm,children:[this.langKeys.start," (",i.length,")"]})})]}):null})}}export{D as default};
