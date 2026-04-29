var O=Object.defineProperty;var P=(f,g,t)=>g in f?O(f,g,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[g]=t;var u=(f,g,t)=>P(f,typeof g!="symbol"?g+"":g,t);import{C as A,j as s,G as S,b as w,s as M,o as L,B as y}from"./index.js";import{A as N,I as T}from"./AbstractMethod.js";import{L as I}from"./List.js";import{F as _}from"./FormItem.js";import{F as C}from"./FormStatus.js";import{R as U}from"./Radio.js";import{C as j}from"./Checkbox.js";import{S as v}from"./SegmentedControl.js";import{F as G}from"./FilterClean.js";import{I as V}from"./ItemsList.js";import{T as D}from"./Textarea.js";import{U as k}from"./UserAvatar.js";import"./constants.js";import"./Removable.js";import"./useGlobalEventListener.js";import"./chevron_24.js";import"./SelectionControl.js";import"./check_box_on_24.js";import"./useEnsuredControl.js";import"./useTabsNavigation.js";import"./Header.js";import"./Cell.js";import"./CellButton.js";import"./SubnavigationButton.js";import"./users_3_outline_24.js";import"./verified_12.js";import"./Card.js";import"./Textarea2.js";class _e extends N{constructor(){super(...arguments);u(this,"pageLang",this.lang("methods.UsersClean"));u(this,"getFilterDescription",t=>{if(t==="time")return this.pageLang.time_description;if(t==="hidden_online")return this.pageLang.hidden_online_description});u(this,"beforeLogic",async()=>{this.initProgress(this.pageLang.get_groups);const{items:t}=await this.VK("groups.get",{fields:"photo_100,members_count",filter:"editor",extended:1,count:1e3}),i=t.filter(n=>n.members_count>0),h={list:!1,listText:"",sliceOffset:0};i.length?h.groups=i:this.showMethodFinish(this.pageLang.get_groups_error,!1),this.setState(h),this.endProgress()});u(this,"callbackAction",async t=>{this.setState({confirm:!1});const i=await this.VKHelpers.deleteGroupFollowers(this.state.group_id,t);await A.deleteByPattern("groups.getMembers"),i&&this.showMethodFinish()});u(this,"cleanStart",async t=>{this.initProgress(),this.donutMembers=await this.VKHelpers.getDonutMembers(t.id),this.endProgress(),this.state.list?this.state.listText?this.props.showConfirm(this.pageLang.delete_groups,null,()=>this.cleanCustomIds(t)):alert(this.pageLang.alert_error_list):t.members_count>1e5?this.setState({selectedGroup:t,groups:null,inlineProgress:!0,clearOptions:{},time:this.helpers.getTimeUsers([]),hiddenOnline:[],checkedTime:0}):await this.getGroupUsers(t)});u(this,"cleanCustomIds",async t=>{const i=[],h=this.state.listText.split(`
`),n=[];if(this.initProgress(this.pageLang.get_members,h.length),this.setState({groups:null,group_id:t.id}),h.forEach(o=>{const c=o.match(/([\w.]+)$/g),l=c&&c[0];l&&(l.search(/^[0-9]+$/g)!==-1?!i.includes(Number(l))&&i.push(Number(l)):l.search(/(^|\/)id([0-9]+)$/g)!==-1?!i.includes(Number(l.slice(2)))&&i.push(Number(l.slice(2))):n.push(l))}),n.length){this.initProgress(this.pageLang.get_members,n.length);do{const o=n.splice(0,500);(await this.VK("users.get",{user_ids:o.join(",")})).forEach(l=>!i.includes(Number(l.id))&&i.push(Number(l.id))),this.addProgressCount(o.length)}while(n.length)}setTimeout(()=>{this.callbackAction(i)})});u(this,"cleanStartLive",async()=>{const{selectedGroup:t,clearOptions:i,checkedTime:h,sliceOffset:n}=this.state;let o=t.members_count-n;this.setState({resultCount:0}),this.initProgress(this.pageLang.check_members,t.members_count);const c=[this.user.id];if(t.admin_level>=3){const{items:l}=await this.VK("groups.getMembers",{group_id:t.id,filter:"managers"});c.push(...l.map(p=>p.id))}for(n&&this.addProgressCount(n);o>=0;){o>1e3?o-=1e3:o=0;const p=(await this.VK("execute",{code:`
                    var members = API.groups.getMembers({
                        group_id: ${t.id},
                        offset: ${o},
                        count: 1000
                    }).items;

                    var offset = 0;
                    var tasks = [];
                    while (offset < members.length) {
                      var part = members.slice(offset, offset + 100);

                      tasks.push(
                        fork(
                          API.users.get({
                            user_ids: part,
                            fields: "photo_100,can_access_closed,deactivated,last_seen,online_info,sex,has_photo"
                          })
                        )
                      );

                      offset = offset + 100;
                    }

                    var results = [];
                    offset = 0;
                    while (offset < tasks.length) {
                      results.push(
                        wait(
                          tasks[offset]
                        )
                      );

                      offset = offset + 1;
                    }

                    return results;
                `})).reduce((r,m)=>(r.push(...m),r),[]),d=p.filter(r=>!c.includes(r.id)).filter(r=>this.state.filterBySex?r.sex===this.state.filterBySex:!0),a=[];for(d.forEach(r=>{i.needSkipDonut&&this.donutMembers.includes(r.id)||(i.all&&a.push(r.id),i.banned&&r.deactivated==="banned"&&!a.includes(r.id)&&a.push(r.id),i.deleted&&r.deactivated==="deleted"&&!a.includes(r.id)&&a.push(r.id),i.no_avatar&&!r.deactivated&&!r.has_photo&&!a.includes(r.id)&&a.push(r.id),i.time&&this.helpers.getTimeUsers([r])[h].users.length===1&&!a.includes(r.id)&&a.push(r.id),i.hidden_online&&this.helpers.getNotShowOnlineUsers([r]).length===1&&!a.includes(r.id)&&a.push(r.id))}),this.log("needDelete",a);a.length;){const r=a.splice(0,25);try{const m=r.map(x=>["groups.removeUser",{group_id:t.id,user_id:x}]);if((await this.VKHelpers.bulkAPISend({methods:m,withoutProgress:!0,fullResponse:!0,withoutError:!0})).find(x=>!!(x.execute_errors&&x.execute_errors.find(F=>F.error_msg==="Access denied: too many")))){this.showMethodFinish([this.pageLang.deleted_result_error,this.pageLang.deleted_result.replace("{count}",this.helpers.formatNumber(this.state.resultCount))].join(" "),!1);return}}catch(m){this.log("cleanStartLive error",m.toString())}this.setState({resultCount:this.state.resultCount+r.length})}if(this.addProgressCount(p.length),o===0)break}this.showMethodFinish(this.pageLang.deleted_result.replace("{count}",this.helpers.formatNumber(this.state.resultCount)))});u(this,"getGroupUsers",async t=>{const i=[];let h=0;this.initProgress(this.pageLang.get_members,t.members_count),this.setState({groups:null,group_id:t.id});const n=[this.user.id];if(t.admin_level>=3)try{const{items:o}=await this.VK("groups.getMembers",{group_id:t.id,filter:"managers"},{withoutError:!0});n.push(...o.map(c=>c.id))}catch(o){this.log("getGroupUsers admins error",o.toString())}for(;h<t.members_count;){const l=(await this.VK("execute",{code:`
                    var members = API.groups.getMembers({
                        group_id: ${t.id},
                        offset: ${h},
                        count: 1000
                    }).items;

                    var offset = 0;
                    var tasks = [];
                    while (offset < members.length) {
                      var part = members.slice(offset, offset + 100);

                      tasks.push(
                        fork(
                          API.users.get({
                            user_ids: part,
                            fields: "photo_100,can_access_closed,deactivated,last_seen,online_info,sex,has_photo"
                          })
                        )
                      );

                      offset = offset + 100;
                    }

                    var results = [];
                    offset = 0;
                    while (offset < tasks.length) {
                      results.push(
                        wait(
                          tasks[offset]
                        )
                      );

                      offset = offset + 1;
                    }

                    return results;
                `})).reduce((p,e)=>(p.push(...e),p),[]).filter(p=>!n.includes(p.id));i.push(...l),h+=1e3,this.addProgressCount(1e3)}this.setState({allFollowersWithoutAnyFilters:i}),this.setFilteredFollowers(i),this.endProgress()});u(this,"setFilteredFollowers",t=>{const i=t.filter(n=>!n.deactivated),h=this.helpers.getTimeUsers(i);this.setState({show:!0,checkedTime:0,needHiddenOnline:!1,all:t,banned:t.filter(n=>n.deactivated==="banned"),deleted:t.filter(n=>n.deactivated==="deleted"),noAvatar:i.filter(n=>!n.deactivated&&!n.has_photo),donutMembers:this.donutMembers,hiddenOnline:this.helpers.getNotShowOnlineUsers(i),time:h})});u(this,"content",()=>{const{groups:t,selectedGroup:i,resultCount:h,list:n,show:o,confirm:c,users:l,listText:p}=this.state;return typeof h=="number"?s.jsx(S,{children:s.jsx(w,{before:s.jsx(M,{}),indicator:this.helpers.formatNumber(h),children:this.pageLang.results_title})}):i?s.jsxs(S,{children:[s.jsx(w,{before:s.jsx(k,{...i}),description:this.helpers.declineAndFormat(i.members_count,this.pageLang.users),children:i.name}),s.jsx(L,{children:s.jsxs(C,{children:[this.pageLang.group_info_members,s.jsx("br",{}),s.jsx("br",{}),this.pageLang.group_info]})}),s.jsx(_,{top:this.pageLang.slice_description,children:s.jsx(T,{type:"number",defaultValue:0,onChange:e=>this.setState({sliceOffset:Number(e.target.value)})})}),s.jsx(_,{top:this.pageLang.sex_title,children:s.jsx(v,{size:"m",name:"sex",defaultValue:0,onChange:e=>{this.setState({filterBySex:e})},options:[0,1,2].map(e=>({label:this.pageLang.sex[e],value:e}))})}),s.jsxs(_,{top:this.pageLang.filters_title,children:[this.donutMembers.length>0&&s.jsxs(j,{defaultChecked:this.state.clearOptions.needSkipDonut||!1,onChange:e=>{const{clearOptions:d}=this.state;d.needSkipDonut=e.target.checked,this.setState({clearOptions:d})},children:[this.pageLang.skip_donut_members," (",this.donutMembers.length,")"]}),["all","banned","deleted","no_avatar","time","hidden_online"].map((e,d)=>{var a,r;return s.jsx(j,{defaultChecked:this.state.clearOptions[e],description:this.getFilterDescription(e),disabled:e!=="all"&&this.state.clearOptions.all||e==="hidden_online"&&!((a=this.state.hiddenOnline)!=null&&a.length),onChange:m=>{const{clearOptions:b}=this.state;b[e]=m.target.checked,this.setState({clearOptions:b})},children:s.jsxs("span",{style:{color:e==="all"?"red":null},children:[this.pageLang[e],e==="hidden_online"&&((r=this.state.hiddenOnline)!=null&&r.length)?` (${this.state.hiddenOnline.length})`:""]})},d)}),this.state.clearOptions.time&&s.jsx("div",{children:this.state.time.map((e,d)=>s.jsxs(U,{name:"radio",value:e.key,defaultChecked:this.state.checkedTime===d,onChange:()=>{this.setState({checkedTime:d})},description:e.key==="month"?this.pageLang.month_description:void 0,children:[this.pageLang.period," ",this.pageLang.times[e.key]]},e.key))})]}),s.jsx(L,{children:s.jsx(y,{size:"l",stretched:!0,disabled:!Object.keys(this.state.clearOptions).filter(e=>this.state.clearOptions[e]).length,onClick:this.cleanStartLive,children:this.pageLang.delete_groups})})]}):t?s.jsxs(S,{children:[s.jsx(j,{checked:n,onChange:e=>{this.setState({list:e.target.checked})},children:this.pageLang.custom_list}),n&&s.jsx(L,{children:s.jsx(D,{value:p,placeholder:this.pageLang.list_people_info,onChange:e=>{this.setState({listText:e.target.value})}})}),s.jsx(I,{children:t.map((e,d)=>s.jsx(w,{before:s.jsx(k,{...e}),onClick:()=>{this.cleanStart(e)},description:this.helpers.declineAndFormat(e.members_count,this.pageLang.users),children:e.name},d))})]}):s.jsxs(s.Fragment,{children:[o&&s.jsxs(S,{children:[s.jsx(L,{children:s.jsx(C,{children:this.pageLang.group_info})}),s.jsx(_,{top:this.pageLang.sex_title,children:s.jsx(v,{size:"m",name:"sex",defaultValue:0,onChange:e=>{const a=this.state.allFollowersWithoutAnyFilters.filter(r=>e?r.sex===e:!0);this.setFilteredFollowers(a)},options:[0,1,2].map(e=>({label:this.pageLang.sex[e],value:e}))})}),s.jsx(_,{top:this.pageLang.filters_title,children:s.jsx(G,{mode:"plain",state:this.state,setParentState:this.setState.bind(this),globalState:this.props.globalState,setGlobalState:this.props.setGlobalState,showConfirm:this.props.showConfirm,closeAlert:this.closeAlert,deleted:!0,deleteName:this.pageLang.delete_groups})})]}),c&&s.jsx(V,{state:this.state,setParentState:this.setState.bind(this),showFilters:!0,items:l,selectable:!0,actionName:this.pageLang.delete_groups,callbackAction:this.callbackAction})]})})}}export{_e as default};
