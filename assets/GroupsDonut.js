var c=Object.defineProperty;var l=(r,i,s)=>i in r?c(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s;var a=(r,i,s)=>l(r,typeof i!="symbol"?i+"":i,s);import{j as h,G as g,y as m}from"./index.js";import{A as f}from"./AbstractMethod.js";import{U as _}from"./UsersStack.js";import{U as v}from"./UserAvatar.js";class A extends f{constructor(){super(...arguments);a(this,"pageLang",this.lang("methods.GroupsDonut"));a(this,"beforeLogic",async()=>{const s=await this.VKHelpers.getGroups("deactivated,photo_100");if(!s.length){this.showMethodFinish(this.pageLang.empty,!1);return}const o=s.map(e=>e.id),n=s.reduce((e,t)=>(e[t.id]={name:t.name,photo:t.photo_100},e),{});this.initProgress(this.pageLang.loading,s.length);const p=[];for(;o.length;){const e=o.splice(0,25),t=await this.VK("execute",{group_ids:e.join(","),code:`
                        var group_ids = Args.group_ids.split(",");
                        var res = [];

                        var i = 0;
                        while (i < group_ids.length) {
                            var group_id = parseInt(group_ids[i]);
                            var data = API.donut.getFriends({
                                owner_id: -group_id,
                                count: 3,
                                fields: "photo_50",
                            });

                            res.push({
                                id: group_id,
                                count: data.count,
                                avatars: data.items@.photo_50
                        });

                            i = i + 1;
                        }

                        return res;
                    `},{withoutError:!0,cacheTime:5});p.push(...t.filter(u=>typeof u.count=="number")),this.addProgressCount(t.length)}this.endProgress();const d=p.reduce((e,t)=>(t.count>0&&e.push({id:Number(t.id),count:t.count,friends:t.avatars,name:n[t.id].name,photo:n[t.id].photo}),e),[]);if(!d.length){this.showMethodFinish(this.pageLang.empty_donut,!1);return}d.sort((e,t)=>t.count-e.count),this.setState({list:d}),this.endProgress()});a(this,"content",()=>{const{list:s}=this.state;return!!s&&h.jsx(g,{children:s.map((o,n)=>h.jsx(m,{size:"l",before:h.jsx(v,{size:56,...o}),...this.helpers.linkProps(`https://vk.ru/club${o.id}`),bottom:h.jsx(_,{style:{padding:0},visibleCount:3,photos:o.friends,children:this.helpers.declineAndFormat(o.count,this.pageLang.friends)}),children:o.name},n))})})}}export{A as default};
