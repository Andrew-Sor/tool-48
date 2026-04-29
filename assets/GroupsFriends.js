var u=Object.defineProperty;var l=(o,i,s)=>i in o?u(o,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[i]=s;var a=(o,i,s)=>l(o,typeof i!="symbol"?i+"":i,s);import{j as d,G as g,y as m}from"./index.js";import{A as f}from"./AbstractMethod.js";import{U as _}from"./UsersStack.js";import{U as v}from"./UserAvatar.js";class A extends f{constructor(){super(...arguments);a(this,"pageLang",this.lang("methods.GroupsFriends"));a(this,"beforeLogic",async()=>{const s=await this.VKHelpers.getGroups("deactivated,photo_100");if(!s.length){this.showMethodFinish(this.pageLang.empty,!1);return}const r=s.map(e=>e.id),n=s.reduce((e,t)=>(e[t.id]={name:t.name,photo:t.photo_100},e),{});this.initProgress(this.pageLang.loading,s.length);const p=[];for(;r.length;){const e=r.splice(0,25),t=await this.VK("execute",{group_ids:e.join(","),code:`
                        var group_ids = Args.group_ids.split(",");
                        var res = [];

                        var i = 0;
                        while (i < group_ids.length) {
                            var group_id = group_ids[i];
                            var data = API.groups.getMembers({
                                group_id: group_id,
                                filter: "friends",
                                fields: "photo_50",
                                count: 3
                            });

                            res.push({
                                id: group_id,
                                count: data.count,
                                avatars: data.items@.photo_50
                        });

                            i = i + 1;
                        }

                        return res;
                    `},{cacheTime:5});p.push(...t.filter(c=>typeof c.count=="number")),this.addProgressCount(t.length)}this.endProgress();const h=p.reduce((e,t)=>(t.count>0&&e.push({id:Number(t.id),count:t.count,friends:t.avatars,name:n[t.id].name,photo:n[t.id].photo}),e),[]);if(!h.length){this.showMethodFinish(this.pageLang.empty_friends,!1);return}h.sort((e,t)=>t.count-e.count),this.setState({list:h}),this.endProgress()});a(this,"content",()=>{const{list:s}=this.state;return!!s&&d.jsx(g,{children:s.map((r,n)=>d.jsx(m,{size:"l",before:d.jsx(v,{size:56,...r}),...this.helpers.linkProps(`https://vk.ru/club${r.id}`),bottom:d.jsx(_,{style:{padding:0},visibleCount:3,photos:r.friends,children:this.helpers.declineAndFormat(r.count,this.pageLang.friends)}),children:r.name},n))})})}}export{A as default};
