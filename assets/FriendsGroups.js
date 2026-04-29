var _=Object.defineProperty;var x=(a,r,e)=>r in a?_(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var g=(a,r,e)=>x(a,typeof r!="symbol"?r+"":r,e);import{j as i,G as l,y as m}from"./index.js";import{A as j}from"./AbstractMethod.js";import{L as v}from"./List.js";import{U as b}from"./UsersStack.js";import{U as f}from"./UserAvatar.js";import"./constants.js";class F extends j{constructor(){super(...arguments);g(this,"pageLang",this.lang("methods.FriendsGroups"));g(this,"beforeLogic",async()=>{const e=await this.VKHelpers.getGroups("deactivated,photo_100");if(!e.length){this.showMethodFinish(this.pageLang.empty,!1);return}const d=e.map(s=>s.id),o=e.reduce((s,t)=>(s[t.id]={name:t.name,photo:t.photo_100},s),{});this.initProgress(this.pageLang.loading,e.length);const n={};for(;d.length;){const s=d.splice(0,25),t=await this.VK("execute",{group_ids:s.join(","),code:`
                        var group_ids = Args.group_ids.split(",");
                        var res = [];

                        var i = 0;
                        while (i < group_ids.length) {
                            var group_id = group_ids[i];
                            var data = API.groups.getMembers({
                                group_id: group_id,
                                filter: "friends",
                                fields: "photo_100",
                                count: 1000
                            });

                            res.push({
                                id: group_id,
                                count: data.count,
                                friends: data.items
                            });

                            i = i + 1;
                        }

                        return res;
                    `},{cacheTime:5});t.forEach(h=>{h.count&&h.friends.forEach(c=>{n[c.id]||(n[c.id]={...c,groups:[]}),n[c.id].groups.push(Number(h.id))})}),this.addProgressCount(t.length)}this.endProgress();const p=Object.keys(n).map(s=>n[s]).reduce((s,t)=>(s.push({id:t.id,name:`${t.first_name} ${t.last_name}`,photo:t.photo_100,count:t.groups.length,groups:t.groups,avatars:t.groups.slice(0,3).map(h=>o[h].photo)}),s),[]);if(!p.length){this.showMethodFinish(this.pageLang.empty_friends,!1);return}p.sort((s,t)=>t.count-s.count),this.setState({list:p,groupsInfo:o}),this.endProgress()});g(this,"content",()=>{const{list:e,groupsInfo:d}=this.state;return!!e&&i.jsx(l,{children:i.jsx(v,{children:e.map((o,n)=>i.jsx(m,{size:"l",before:i.jsx(f,{size:56,...o}),bottom:i.jsx(b,{style:{padding:0},visibleCount:3,photos:o.avatars,children:this.helpers.declineAndFormat(o.count,this.pageLang.groups)}),onClick:()=>{this.props.showModal("custom",{header:o.name,content:i.jsx(l,{children:o.groups.map((u,p)=>{const s=d[u];return i.jsx(m,{before:i.jsx(f,{size:48,...s}),...this.helpers.linkProps(`https://vk.ru/club${u}`),children:s.name},p)})})})},children:o.name},n))})})})}}export{F as default};
