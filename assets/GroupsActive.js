var f=Object.defineProperty;var w=(o,i,e)=>i in o?f(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e;var p=(o,i,e)=>w(o,typeof i!="symbol"?i+"":i,e);import{j as _}from"./index.js";import{A as v}from"./AbstractMethod.js";import{I}from"./ItemsList.js";import"./UserAvatar.js";import"./Header.js";import"./List.js";import"./constants.js";import"./Cell.js";import"./Removable.js";import"./useGlobalEventListener.js";import"./check_box_on_24.js";import"./CellButton.js";import"./SubnavigationButton.js";import"./users_3_outline_24.js";import"./verified_12.js";class F extends v{constructor(){super(...arguments);p(this,"pageLang",this.lang("methods.GroupsActive"));p(this,"beforeLogic",async()=>{let a=0,n=!0;this.initProgress(this.pageLang.get);const s=[];do{const{count:d,items:l}=await this.VK("groups.get",{fields:"deactivated,photo_100",extended:1,offset:a},{cacheTime:15});a+=1e3,n=a<d,this.setProgressTotal(d),this.addProgressCount(l.length),s.push(...l)}while(n);if(this.endProgress(),s.length){const d=s.filter(t=>t.deactivated),l=d.map(t=>({id:t.id,banned:!0})),m=s.filter(t=>!t.deactivated),h=m.map(t=>t.id),u=[...d,...m].reduce((t,r)=>(t[r.id]=r,t),{}),g=[];this.initProgress(this.pageLang.get_wall,h.length);do{const t=h.splice(0,25),r=await this.VK("execute",{code:`
                            var group_ids = Args.group_ids.split(",");
                            var res = [];

                            var i = 0;
                            while (i < group_ids.length) {
                                var group_id = parseInt(group_ids[i]);
                                var wall = API.wall.get({owner_id: -group_id, filter: "owner"});
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
                                    id: group_id,
                                    date: date
                                });

                                i = i + 1;
                            }

                            return res;
                        `,group_ids:t.join(",")},{withoutError:!0,cacheTime:10});this.addProgressCount(t.length),g.push(...r)}while(h.length);g.sort((t,r)=>t.date-r.date);const c=[...l,...g].map(t=>this.getRowInfo(t,u));this.setState({items:c}),this.endProgress()}else this.showMethodFinish(this.pageLang.get_groups_error,!1)});p(this,"getRowInfo",(e,a)=>{const n=a[e.id];let s="";return e.banned?s=this.pageLang.banned:e.date===0?s=this.pageLang.no_posts:s=this.dayjs(e.date*1e3).fromNow(),{id:e.id,name:n.name,photo_100:n.photo_100,info:s}});p(this,"content",()=>this.state.items?_.jsx(I,{items:this.state.items,scrollLimit:1,scrollY:1,type:"groups",info:e=>e.info,state:this.state,setParentState:this.setState.bind(this)}):null)}}export{F as default};
