var b=Object.defineProperty;var I=(l,u,e)=>u in l?b(l,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[u]=e;var o=(l,u,e)=>I(l,typeof u!="symbol"?u+"":u,e);import{j as r,b as R,G as y,o as F,T as U,B as M}from"./index.js";import{A as V,I as K}from"./AbstractMethod.js";import{H as C}from"./Header.js";import{F as D}from"./FormItem.js";import{F as E}from"./FormLayoutGroup.js";import{S as N}from"./Share.js";import{U as T}from"./UserAvatar.js";import{I as $}from"./verified_12.js";import"./Removable.js";import"./useGlobalEventListener.js";import"./story_reply_outline_24.js";class ee extends V{constructor(){super(...arguments);o(this,"pageLang",this.lang("methods.FriendsHandshakes"));o(this,"beforeLogic",async()=>{const{items:e}=await this.VK("users.getSubscriptions",{count:200,extended:1,fields:"verified,photo_100"}),s=e.filter(t=>t.type==="profile").slice(0,10);s.length&&this.setState({users:s})});o(this,"getIds",e=>e.map(s=>s.id));o(this,"checkUser",async e=>{if(this.setState({error:null,finish:null}),!e){const i=document.getElementById("user_id").value;if(!i.length){this.setState({error:this.pageLang.errors.address});return}const h=i.match(/^[0-9]+$/),a=i.match(/id([0-9]+)/i),d=i.match(/vk\.com\/([\w.]+)/i)||i.match(/vk\.ru\/([\w.]+)/i),c=i.match(/([\w.]+)/i);if(h)e=Number(i);else if(a)e=Number(a[1]);else if(d||c){const m=d&&d[1]||c&&c[1];if(!m)this.setState({error:`${this.pageLang.errors.other_error} #0`});else{this.initProgress();const{type:A,object_id:P}=await this.VK("utils.resolveScreenName",{screen_name:m});if(this.endProgress(),A==="user")e=P;else{this.setState({error:this.pageLang.errors.not_user});return}}}else{this.setState({error:`${this.pageLang.errors.other_error} #1`});return}if(!e){this.setState({error:`${this.pageLang.errors.other_error} #2`});return}}this.initProgress();const{status:s,current_user_id:t,user_id:n,handshakes:j,current_friends:p,user_friends:w}=await this.VK("execute",{code:`
                    var user_id = Args.user_id;
                    var user = API.users.get({ user_id: user_id, fields: "counters,photo_100" })[0];

                    if (!user) {
                        return {
                            status: "error_not_found"
                        };
                    }

                    if (!user.can_access_closed) {
                        return {
                            status: "error_access_closed"
                        };
                    }

                    if (!user.counters.friends) {
                        return {
                            status: "error_no_friends"
                        };
                    }

                    var current_user = API.users.get({ fields: "counters,photo_100" })[0];

                    if (!current_user.counters.friends) {
                        return {
                            status: "error_no_current_friends"
                        };
                    }

                    if (user.id == current_user.id) {
                        return {
                            status: "error_myself"
                        };
                    }

                    var result = {
                        status: "result",
                        current_user_id: current_user.id,
                        user_id: user.id,
                        handshakes: []
                    };

                    var are_friends = API.friends.areFriends({ user_ids: user.id });
                    if (are_friends[0].friend_status == 3) {
                        return result;
                    }

                    var mutual_friends = API.friends.getMutual({
                        source_uid: current_user.id,
                        target_uid: user.id
                    });

                    if (mutual_friends.length) {
                        result.handshakes = [mutual_friends[0]];

                        return result;
                    }

                    return {
                        status: "loading",
                        current_user_id: current_user.id,
                        user_id: user.id,
                        current_friends: API.friends.get({
                            fields: "verified,deactivated"
                        }).items,
                        user_friends: API.friends.get({
                            user_id: user.id,
                            fields: "verified,deactivated"
                        }).items
                    };
                `,user_id:e}),g={error_not_found:this.pageLang.errors.not_found,error_access_closed:this.pageLang.errors.access_closed,error_no_friends:this.pageLang.errors.no_friends,error_no_current_friends:this.pageLang.errors.no_current_friends,error_myself:this.pageLang.errors.myself};if(g[s]){this.showMethodFinish(g[s],!1);return}if(s==="result"){this.showResult(t,n,j);return}const f=p.filter(i=>!i.deactivated),v=w.filter(i=>!i.deactivated),_=f.length<v.length,L=(_?f:v).slice(0),k=_?n:t;for(this.initProgress(this.pageLang.loadings.three_handshakes,L.length);L.length;){const i=L.splice(0,100),h=await this.VK("friends.getMutual",{source_uid:k,target_uids:this.getIds(i).join(",")},{withoutError:!0});if(!Array.isArray(h))continue;const a=h.find(({common_friends:d})=>d.length);if(a){this.showResult(t,n,[_?a.id:a.common_friends[0],_?a.common_friends[0]:a.id]);return}this.addProgressCount(i.length)}const x=v.slice(0),S=f.slice(0);for(this.initProgress(this.pageLang.loadings.four_handshakes,x.length);x.length;){const i=x.shift().id,h=S.slice(0);for(;h.length;){const a=h.splice(0,100),d=await this.VK("friends.getMutual",{source_uid:i,target_uids:this.getIds(a).join(",")},{withoutError:!0});if(!Array.isArray(d))continue;const c=d.find(({common_friends:m})=>m.length);if(c){this.showResult(t,n,[c.id,c.common_friends[0],i]);return}}this.addProgressCount(1)}this.showMethodFinish(this.pageLang.errors.more_handshakes,!1)});o(this,"showResult",async(e,s,t)=>{this.initProgress();const[n]=await this.VK("users.get",{user_ids:s,name_case:"ins"}),p=(await this.VK("users.get",{user_ids:[e,s,...t].join(","),fields:"verified,photo_100"})).reduce((g,f)=>(g[f.id]=f,g),{}),w=this.pageLang.title.replace("{name}",n.first_name+" "+n.last_name).replace("{number}",t.length+1).replace("{decline}",this.helpers.decline(t.length+1,this.pageLang.decline));this.setState({block:"result",lines:[e,...t,s],title:w,usersInfo:p,shareData:{hash:"friends_handshakes",image:{type:"handshakes",userIds:[e,...t,s]}}}),this.endProgress()});o(this,"UserRow",(e,s,t)=>{const n={before:r.jsx(T,{...e})};return t?n.onClick=t:(n.href=`https://vk.ru/id${e.id}`,n.target="_blank"),e.verified&&(n.badgeAfterTitle=r.jsx($,{})),r.jsxs(R,{...n,children:[e.first_name," ",e.last_name]},s)});o(this,"FollowingRows",()=>{const{users:e}=this.state;return e?r.jsxs(r.Fragment,{children:[r.jsx(C,{size:"s",children:this.pageLang.suggestions}),e.map((s,t)=>this.UserRow(s,t,()=>{this.checkUser(s.id)}))]}):null});o(this,"content",()=>this.state.block==="result"?r.jsx(r.Fragment,{children:r.jsxs(y,{children:[r.jsxs(F,{children:[r.jsx(U,{level:"1",style:{marginBottom:16},children:this.state.title}),this.state.lines.map((e,s)=>this.UserRow(this.state.usersInfo[e],s))]}),r.jsx(N,{shareData:this.state.shareData})]})}):r.jsxs(y,{children:[r.jsx(E,{children:r.jsx(D,{status:this.state.error?"error":null,bottom:this.state.error||null,children:r.jsx(K,{type:"text",id:"user_id",placeholder:"vk.ru/gro"})})}),r.jsx(F,{children:r.jsx(M,{size:"l",stretched:!0,onClick:()=>this.checkUser(),children:this.pageLang.button})}),this.FollowingRows()]}))}}export{ee as default};
