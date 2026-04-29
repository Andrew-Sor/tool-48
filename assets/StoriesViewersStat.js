var A=Object.defineProperty;var T=(p,d,r)=>d in p?A(p,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):p[d]=r;var j=(p,d,r)=>T(p,typeof d!="symbol"?d+"":d,r);import{j as t,G as _,m as I}from"./index.js";import{A as q}from"./AbstractMethod.js";import{H as v}from"./Header.js";import{L as b}from"./List.js";import{C as l}from"./Cell.js";import{F as M}from"./Footer.js";import{U as P}from"./UserAvatar.js";import"./constants.js";import"./Removable.js";import"./useGlobalEventListener.js";import"./check_box_on_24.js";class Q extends q{constructor(){super(...arguments);j(this,"pageLang",this.lang("methods.StoriesViewersStat"));j(this,"beforeLogic",()=>{this.getViews(this.user.id,this.user.photo_200)});j(this,"getViews",async(r,h)=>{this.setState({ownerId:r,ownerPhoto:h}),this.initProgress(this.pageLang.loader);const n={ownerId:r,code:`
                var res = {};
                var lastStoryId = parseInt(Args.lastStoryId);
                var ownerId = Args.ownerId;
                var storyIds = [];
                var validStories = [];

                if (!lastStoryId) {
                    lastStoryId = 456239017;
                }

                var i = 0;
                while (i < 100) {
                    storyIds.push(ownerId + "_" + (lastStoryId + i));

                    i = i + 1;
                }

                var stories = API.stories.getById({
                    stories: storyIds
                });

                i = 0;
                while (i < stories.items.length) {
                    var story = stories.items[i];

                    if (story.type) {
                        validStories.push({
                            id: story.id,
                            date: story.date,
                            type: story.type,
                            views: story.views,
                            replies: story.replies.count,
                            questions: story.questions.count,
                            likes: story.likes_count,
                            object: story.type == "photo" ? story.photo : story.video,
                            raw: story
                        });
                    }

                    i = i + 1;
                }


                if (stories.items.length) {
                    res.nextStoryId = stories.items[stories.items.length - 1].id + 1;
                }

                res.count = validStories.length;
                res.stories = validStories;

                return res;
            `};let a=[],i=0;do{const o=await this.VK("execute",n,{cacheTime:15});n.lastStoryId=o.nextStoryId,o.stories.length?(this.addProgressCount(o.count),a.push(...o.stories),i=0):i++,i===3&&this.endProgress()}while(i<3);if(a=a.filter(o=>o.views>1),!a.length){this.showMethodFinish(this.pageLang.no_stories,!1);return}const L=a.reduce((o,f)=>o+f.views,0);this.initProgress(this.pageLang.loader_views,L);let g=0,m=0;const u={},k=24*60*60*1e3,x=new Date().getTime(),S=Math.floor((x-k)/1e3);do try{const o=a[g],f=S<o.date?15:60*24*365,{count:c,items:y}=await this.VK("stories.getViewers",{owner_id:n.ownerId,story_id:o.id,count:100,offset:m},{cacheTime:f});m+=100,this.addProgressCount(y.length),u[o.id]||(u[o.id]=[]),u[o.id].push(...y),m>c&&(m=0,g++)}catch(o){this.log(`getViewers error: ${o.toString()}`)}while(g<a.length);const V=(await this.VKHelpers.getFriends()).map(o=>o.id);this.calculateStats(a,u,V)});j(this,"calculateStats",async(r,h,n)=>{this.initProgress(this.pageLang.loader_stat);const a=n.length,i=Object.keys(h).reduce((e,s)=>(e.push(...h[s]),e),[]),L=i.length,g=i.filter(e=>n.includes(e.user_id)).reduce(e=>e+1,0),m=i.filter(e=>n.includes(e.user_id)).map(e=>e.user_id).reduce((e,s)=>(e[s]||(e[s]=0),e[s]++,e),{}),u=Object.keys(m).length,k=i.filter(e=>e.is_liked).map(e=>e.user_id).reduce((e,s)=>(e[s]||(e[s]=0),e[s]++,e),{}),x=i.filter(e=>e.is_liked).filter(e=>n.includes(e.user_id)).length,S=i.filter(e=>e.is_liked).filter(e=>n.includes(e.user_id)).map(e=>e.user_id).reduce((e,s)=>(e[s]||(e[s]=0),e[s]++,e),{}),V=Object.keys(S).length,o=Object.keys(k).length,f=i.filter(e=>e.is_liked).length;let c=Object.keys(k).map(e=>({userId:Number(e),count:k[e]}));c.sort((e,s)=>s.count-e.count),c=c.slice(0,10);const y=i.map(e=>e.user_id).reduce((e,s)=>(e[s]||(e[s]=0),e[s]++,e),{}),F=Object.keys(y).length;let w=Object.keys(y).map(e=>({userId:Number(e),count:y[e]}));w.sort((e,s)=>s.count-e.count),w=w.slice(0,10);const U=r.reduce((e,s)=>s.date<e.date?s:e).date*1e3;this.log({countLikes:f,countLikedUsers:o,countUniqUsers:F,countTotalViews:L,countTotalFriendsViews:g,totalFriendsViews:u,countTotalFriends:a,allFriendsLikes:x,topLikedUsers:c,topViewsUsers:w,firstStoryDate:U});const N=[...w.map(e=>e.userId),...c.map(e=>e.userId)],O=(await this.VK("users.get",{user_ids:N.join(","),fields:"photo_100"})).reduce((e,s)=>(e[s.id]=s,e),{});this.setState({info:O,stat:{countLikes:f,countLikedUsers:o,countUniqUsers:F,countTotalViews:L,countTotalFriendsViews:g,totalFriendsViews:u,countTotalFriends:a,allFriendsLikes:x,totalUniqLikesFriends:V,topLikedUsers:c,topViewsUsers:w,firstStoryDate:U}}),this.endProgress()});j(this,"content",()=>{const{stat:r,info:h}=this.state;return r?t.jsxs(t.Fragment,{children:[t.jsx(_,{header:t.jsx(v,{size:"s",children:this.pageLang.view}),children:t.jsxs(b,{children:[t.jsx(l,{indicator:this.helpers.formatNumber(r.countTotalViews),children:this.pageLang.views.total_views}),t.jsx(l,{indicator:this.helpers.formatNumber(r.countUniqUsers),children:this.pageLang.views.total_users}),t.jsx(I,{}),t.jsx(l,{indicator:this.helpers.formatNumber(r.countTotalFriendsViews),children:this.pageLang.views.friends_views}),t.jsx(l,{indicator:this.helpers.formatNumber(r.totalFriendsViews),children:this.pageLang.views.friends_users})]})}),t.jsx(_,{header:t.jsx(v,{size:"s",children:this.pageLang.like}),children:t.jsxs(b,{children:[t.jsx(l,{indicator:this.helpers.formatNumber(r.countLikes),children:this.pageLang.likes.total_likes}),t.jsx(l,{indicator:this.helpers.formatNumber(r.countLikedUsers),children:this.pageLang.likes.total_users}),t.jsx(I,{}),t.jsx(l,{indicator:this.helpers.formatNumber(r.allFriendsLikes),children:this.pageLang.likes.friends_likes}),t.jsx(l,{indicator:this.helpers.formatNumber(r.totalUniqLikesFriends),children:this.pageLang.likes.friends_users})]})}),t.jsx(_,{header:t.jsx(v,{size:"s",children:this.pageLang.views.title}),children:t.jsx(b,{children:r.topViewsUsers.map((n,a)=>{const i=h[n.userId];return t.jsxs(l,{before:t.jsx(P,{...i}),subtitle:this.helpers.declineAndFormat(n.count,this.pageLang.declines.views),...this.helpers.linkProps(`https://vk.ru/id${i.id}`),children:[i.first_name," ",i.last_name]},a)})})}),t.jsx(_,{header:t.jsx(v,{size:"s",children:this.pageLang.likes.title}),children:t.jsx(b,{children:r.topLikedUsers.map((n,a)=>{const i=h[n.userId];return t.jsxs(l,{before:t.jsx(P,{...i}),subtitle:this.helpers.declineAndFormat(n.count,this.pageLang.declines.likes),...this.helpers.linkProps(`https://vk.ru/id${i.id}`),children:[i.first_name," ",i.last_name]},a)})})}),t.jsx(M,{children:this.pageLang.start.replace("{date}",this.dayjs(r.firstStoryDate).format("D MMMM YYYY"))})]}):null})}}export{Q as default};
