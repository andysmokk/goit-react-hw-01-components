(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={Profile:"Profile_Profile__1fZMM",box:"Profile_box__qqVTb",description:"Profile_description__dhRR6",avatar:"Profile_avatar__3HWeV",name:"Profile_name__3LzYC",tag:"Profile_tag__RSu-5",location:"Profile_location__2q5Tc",stats:"Profile_stats__3J5Vc",stats__item:"Profile_stats__item__2HU3W",stats__label:"Profile_stats__label__2ioXt",stats__quantity:"Profile_stats__quantity__3BwXJ"}},,function(e,t,a){e.exports={FriendList:"FriendList_FriendList__3yAZX",FriendListItem:"FriendList_FriendListItem__2GrXZ",isOnline:"FriendList_isOnline__15VQ7",isOffline:"FriendList_isOffline__1pSfz",avatar:"FriendList_avatar__2wIdd",name:"FriendList_name__2y6G-"}},function(e,t,a){e.exports={Statistics:"Statistics_Statistics__1eXjy",title:"Statistics_title__kC27j",list:"Statistics_list__ecrvS",list__item:"Statistics_list__item__ilVsB",list__label:"Statistics_list__label__2fSI0",list__percentage:"Statistics_list__percentage__1Zy5-"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(e,t,a){e.exports={TransactionHistory:"TransactionHistory_TransactionHistory__1uba8"}},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var i=a(6),s=a.n(i),n=a(9),c=a.n(n),r=(a(17),a(1)),d=a.n(r),l=a(0);function o(e){var t=e.userAvatarUrl,a=e.userName,i=e.userTag,s=e.userLocation,n=e.userStats;return Object(l.jsx)("section",{className:d.a.Profile,children:Object(l.jsxs)("div",{className:d.a.box,children:[Object(l.jsxs)("div",{className:d.a.description,children:[Object(l.jsx)("img",{src:t,alt:a,className:d.a.avatar}),Object(l.jsx)("p",{className:d.a.name,children:a}),Object(l.jsxs)("p",{className:d.a.tag,children:["@",i]}),Object(l.jsx)("p",{className:d.a.location,children:s})]}),Object(l.jsxs)("ul",{className:d.a.stats,children:[Object(l.jsxs)("li",{className:d.a.stats__item,children:[Object(l.jsx)("span",{className:d.a.stats__label,children:"Followers"}),Object(l.jsx)("span",{className:d.a.stats__quantity,children:n.followers})]}),Object(l.jsxs)("li",{className:d.a.stats__item,children:[Object(l.jsx)("span",{className:d.a.stats__label,children:"Views"}),Object(l.jsx)("span",{className:d.a.stats__quantity,children:n.views})]}),Object(l.jsxs)("li",{className:d.a.stats__item,children:[Object(l.jsx)("span",{className:d.a.stats__label,children:"Likes"}),Object(l.jsx)("span",{className:d.a.stats__quantity,children:n.likes})]})]})]})})}o.defaultProps={userLocation:"Planet Earth"};var b=o,u=a(4),m=a.n(u);var _=function(e){var t=e.title,a=e.stats;return Object(l.jsxs)("section",{className:m.a.Statistics,children:[t&&Object(l.jsx)("h2",{className:m.a.title,children:t}),Object(l.jsx)("ul",{className:m.a.list,children:a.map((function(e){return Object(l.jsxs)("li",{className:m.a.list__item,style:{backgroundColor:"".concat("rgb(".concat(255*Math.random()<<0,", ").concat(255*Math.random()<<0,", ").concat(255*Math.random()<<0,")"))},children:[Object(l.jsx)("span",{className:m.a.list__label,children:e.label}),Object(l.jsxs)("span",{className:m.a.list__percentage,children:[e.percentage,"%"]})]},e.id)}))})]})},p=a(2),j=a.n(p),f=a(3),y=a.n(f);var O=function(e){var t=e.friend,a=t.name,i=t.avatar,s=t.isOnline;return Object(l.jsxs)("li",{className:y.a.FriendListItem,children:[Object(l.jsx)("span",{className:s?y.a.isOnline:y.a.isOffline}),Object(l.jsx)("img",{className:y.a.avatar,src:i,alt:a,width:"48"}),Object(l.jsx)("p",{className:y.a.name,children:a})]})};O.propTypes={friendName:j.a.string.isRequired,friendAvatar:j.a.string.isRequired,friendStatus:j.a.bool.isRequired,friendId:j.a.number.isRequired};var h=function(e){var t=e.friends;return Object(l.jsx)("section",{className:y.a.FriendList,children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)(O,{friend:e,friendName:e.name,friendAvatar:e.avatar,friendStatus:e.isOnline,friendId:e.id},e.id)}))})})};var x=function(e){var t=e.item,a=t.type,i=t.amount,s=t.currency;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:i}),Object(l.jsx)("td",{children:s})]})},v=a(10),g=a.n(v);x.propTypes={typeItem:j.a.string.isRequired,amountItem:j.a.string.isRequired,currencyItem:j.a.string.isRequired,idItem:j.a.string.isRequired};var N=function(e){var t=e.items;return Object(l.jsx)("section",{className:g.a.TransactionHistory,children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type"}),Object(l.jsx)("th",{children:"Amount"}),Object(l.jsx)("th",{children:"Currency"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(x,{item:e,typeItem:e.type,amountItem:e.amount,currencyItem:e.currency,idItem:e.id},e.id)}))})]})})},w=a(5),S=a(8),L=a(11),P=a(12);var q=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{userAvatarUrl:w.avatar,userName:w.name,userTag:w.tag,userLocation:w.location,userStats:w.stats}),Object(l.jsx)(_,{title:"Upload stats",stats:S}),Object(l.jsx)(_,{stats:S}),Object(l.jsx)(h,{friends:L}),Object(l.jsx)(N,{items:P})]})};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.c245d877.chunk.js.map