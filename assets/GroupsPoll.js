var I=Object.defineProperty;var w=(a,l,o)=>l in a?I(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;var h=(a,l,o)=>w(a,typeof l!="symbol"?l+"":l,o);import{j as s,G as f,o as k,B as q,A as U}from"./index.js";import{A as V,I as A,a as L,P as y}from"./AbstractMethod.js";import{H as C}from"./Header.js";import{L as P}from"./List.js";import{C as G}from"./Cell.js";import{F as S}from"./FormItem.js";import{F}from"./FormLayoutGroup.js";import{I as N}from"./ItemsList.js";import"./UserAvatar.js";import"./constants.js";import"./Removable.js";import"./useGlobalEventListener.js";import"./check_box_on_24.js";import"./CellButton.js";import"./SubnavigationButton.js";import"./users_3_outline_24.js";import"./verified_12.js";class se extends V{constructor(){super(...arguments);h(this,"pageLang",this.lang("methods.GroupsPoll"));h(this,"pollCheck",async()=>{this.setState({error:null,poll:null,process:!0});const o=document.getElementById("url").value;let i=null,n=null;const c=o.match(/wall([\d-]+)_(\d+)/);if(c){const{items:[e]}=await this.VK("wall.getById",{posts:`${c[1]}_${c[2]}`});if(e){const r=e.attachments.find(p=>p.type==="poll");r&&(i=r.poll.owner_id,n=r.poll.id)}}const d=o.match(/poll([\d-]+)_(\d+)/);if(d&&(i=Number(d[1]),n=Number(d[2])),!i&&!n){this.setState({error:this.pageLang.errors.incorrect_link,process:!1});return}if(i>=0){this.setState({error:this.pageLang.errors.user_poll,process:!1});return}const t=await this.VK("execute",{group_id:Math.abs(i),poll_id:n,code:`
                var group_id = parseInt(Args.group_id);
                var poll_id = parseInt(Args.poll_id);
                var poll_vk = API.polls.getById({
                    owner_id: -group_id,
                    poll_id: poll_id
                });

                var poll = null;
                var group = null;

                if (poll_vk) {
                    poll = {
                        question: poll_vk.question,
                        votes: poll_vk.votes,
                        anonymous: poll_vk.anonymous,
                        answers: poll_vk.answers,
                        answered: poll_vk.answer_ids.length > 0
                    };

                    group = API.groups.getById({
                        group_id: group_id,
                        fields: "photo_100,members_count"
                    }).groups[0];
                }

                return {
                    group_id: group_id,
                    poll_id: poll_id,
                    poll: poll,
                    group: group
                };
            `});if(!t.poll){this.setState({error:this.pageLang.errors.incorrect_link,process:!1});return}if(t.poll.anonymous){this.setState({error:this.pageLang.errors.private_poll,process:!1});return}if(!t.poll.answered){this.setState({error:this.pageLang.errors.no_answered,process:!1});return}let v=0,g=!0;const j=[];this.initProgress(this.pageLang.get,t.poll.votes);const m={};for(t.poll.answers.forEach(e=>m[e.id]=[]);g;){const e=await this.VK("polls.getVoters",{owner_id:i,poll_id:n,count:1e3,offset:v,answer_ids:t.poll.answers.map(r=>r.id).join(",")});g=e.some(r=>r.users.items.length>0),g&&e.forEach(r=>{r.users.items.length>0&&(m[r.answer_id].push(...r.users.items),j.push(...r.users.items),this.addProgressCount(r.users.items.length))}),v+=1e3}const _={};j.forEach(e=>{_[e]=!0});const b=Object.keys(_),x=this.helpers.getChunks(b,300);this.endProgress(),this.initProgress(this.pageLang.check,b.length);const u={};for(;x.length;){const e=x.shift();(await this.VK("groups.isMember",{group_id:Math.abs(i),user_ids:e.join(",")})).forEach(p=>{p.member&&(u[p.user_id]=!0)}),this.addProgressCount(e.length)}t.poll.answers.forEach(e=>{const r=m[e.id].filter(p=>u[p]).length;e.uniqVotes=r,e.uniqVotesRate=Number((100/t.poll.votes*r).toFixed(2)),e.line=this.pageLang.line.replace("{total}",this.helpers.formatNumber(e.votes)).replace("{decline}",this.helpers.decline(e.votes,this.pageLang.votes)).replace("{perc}",e.rate),e.lineGroup=this.pageLang.line_group.replace("{total}",this.helpers.formatNumber(e.uniqVotes)).replace("{decline}",this.helpers.decline(e.uniqVotes,this.pageLang.votes)).replace("{perc}",e.uniqVotesRate)}),this.setState({process:!1,uniqUsersObj:_,poll:t.poll,answers:t.poll.answers,author:{id:t.group.id,photo:t.group.photo_100,name:t.group.name,admin_level:t.group.admin_level,membersCount:t.group.members_count,description:this.pageLang.description.replace("{total_count}",this.helpers.formatNumber(t.poll.votes)).replace("{total_decline}",this.helpers.decline(t.poll.votes,this.pageLang.votes)).replace("{group_count}",this.helpers.formatNumber(Object.keys(u).length)).replace("{group_decline}",this.helpers.decline(Object.keys(u).length,this.pageLang.votes))}}),this.endProgress()});h(this,"removeUsers",async()=>{this.initProgress(this.pageLang.remove_users_progress,this.state.unvotedUsers.length);const o=this.state.unvotedUsers.map(i=>i.id);await this.VKHelpers.deleteGroupFollowers(this.state.author.id,o),this.showMethodFinish()});h(this,"content",()=>this.state.unvotedUsers?s.jsx(N,{state:this.state,setParentState:this.setState.bind(this),items:this.state.unvotedUsers,selectable:!0,actionName:this.pageLang.remove_users_button,callbackAction:this.removeUsers}):s.jsxs(s.Fragment,{children:[!this.state.author&&s.jsxs(f,{children:[s.jsx(F,{children:s.jsx(S,{status:this.state.error?"error":null,bottom:this.state.error||null,children:s.jsx(A,{type:"text",id:"url",placeholder:"vk.ru/poll-173151748_338117070"})})}),s.jsx(k,{children:s.jsx(q,{size:"l",stretched:!0,disabled:this.state.process,onClick:this.pollCheck,children:this.pageLang.check_poll})})]}),this.state.author&&s.jsx(f,{children:s.jsx(P,{children:s.jsx(G,{before:s.jsx(U,{type:"app",src:this.state.author.photo}),multiline:!0,subtitle:this.state.author.description,children:this.state.author.name})})}),this.state.answers&&s.jsx(f,{header:s.jsx(C,{size:"s",children:this.state.poll.question}),children:s.jsx(P,{children:this.state.answers.map((o,i)=>s.jsxs(k,{children:[o.text,s.jsx(L,{header:o.line,children:s.jsx(y,{value:o.rate})}),s.jsx(L,{header:o.lineGroup,style:{paddingTop:3},children:s.jsx(y,{value:o.uniqVotesRate})})]},i))})})]}))}}export{se as default};
