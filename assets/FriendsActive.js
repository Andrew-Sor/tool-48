var c=Object.defineProperty;var g=(a,s,t)=>s in a?c(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;var r=(a,s,t)=>g(a,typeof s!="symbol"?s+"":s,t);import{j as f}from"./index.js";import{A as u}from"./AbstractMethod.js";import{I as w}from"./ItemsList.js";import"./UserAvatar.js";import"./Header.js";import"./List.js";import"./constants.js";import"./Cell.js";import"./Removable.js";import"./useGlobalEventListener.js";import"./check_box_on_24.js";import"./CellButton.js";import"./SubnavigationButton.js";import"./users_3_outline_24.js";import"./verified_12.js";class C extends u{constructor(){super(...arguments);r(this,"pageLang",this.lang("methods.FriendsActive"));r(this,"beforeLogic",async()=>{const t=await this.VKHelpers.getFriends();if(t.length){const o=t.filter(e=>e.deactivated),n=o.map(e=>({id:e.id,banned:e.deactivated==="banned",deleted:e.deactivated==="deleted"})),i=t.filter(e=>!e.deactivated),l=i.map(e=>e.id),h=[...i,...o].reduce((e,d)=>(e[d.id]=d,e),{}),m=[];this.initProgress(this.pageLang.get_wall,l.length);do{const e=l.splice(0,25),d=await this.VK("execute",{code:`
                            var users_ids = Args.users_ids.split(",");
                            var res = [];

                            var i = 0;
                            while (i < users_ids.length) {
                                var user_id = parseInt(users_ids[i]);
                                var wall = API.wall.get({owner_id: user_id, filter: "owner"});
                                var date = 0;

                                if (wall.items.length > 1) {
                                    if (wall.items[0].date > wall.items[1].date) {
                                        date = wall.items[0].date;
                                    } else {
                                        date = wall.items[1].date;
                                    }
                                } else if (wall.items.length == 1) {
                                    date = wall.items[0].date;
                                }

                                res.push({
                                    id: user_id,
                                    date: date
                                });

                                i = i + 1;
                            }

                            return res;
                        `,users_ids:e.join(",")},{cacheTime:30});this.addProgressCount(e.length),m.push(...d)}while(l.length);m.sort((e,d)=>e.date-d.date);const p=[...n,...m].map(e=>this.getRowInfo(e,h));this.setState({items:p}),this.endProgress()}else this.showMethodFinish(this.pageLang.get_friends_error,!1)});r(this,"getRowInfo",(t,o)=>{const n=o[t.id];let i="";return t.banned?i=this.pageLang.banned:t.deleted?i=this.pageLang.deleted:t.date===0?i=this.pageLang.no_posts:i=this.dayjs(t.date*1e3).fromNow(),{id:t.id,name:`${n.first_name} ${n.last_name}`,photo_100:n.photo_100,info:i}});r(this,"content",()=>this.state.items?f.jsx(w,{items:this.state.items,scrollLimit:1,scrollY:1,info:t=>t.info,state:this.state,setParentState:this.setState.bind(this)}):null)}}export{C as default};
