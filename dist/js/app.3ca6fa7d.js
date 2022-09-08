(function(){"use strict";var e={461:function(e,a,l){var s=l(963),t=l(252),i=l(262),n=l(577);const u=e=>((0,t.dD)("data-v-5b0eeffb"),e=e(),(0,t.Cn)(),e),o={class:"container"},r=u((()=>(0,t._)("label",{for:"login"},"Login:",-1))),c=u((()=>(0,t._)("label",{for:"password"},"Password:",-1))),v={key:0,for:"repeatPassword"},d={key:2,class:"wrongMessage"},p=u((()=>(0,t._)("button",{type:"submit"},"Submit",-1))),w={key:0,class:"toast"};var m={__name:"Login",props:{users:Array},setup(e){const a=e,l=(0,i.iH)(!1),u=(0,i.iH)("Login to weather"),m=(0,i.iH)("Don't have an account?"),g=(0,i.iH)(""),y=(0,i.iH)(!1),f=(0,i.iH)(""),h=(0,i.iH)(""),k=(0,i.iH)(""),D=(0,i.iH)(""),C=(0,i.iH)(!1),S=a.users,H=()=>{l.value=!l.value,u.value="Login to weather"===u.value?"Create an account":"Login to weather",m.value="Don't have an account?"===m.value?"Already registered? ":"Don't have an account?",g.value="",f.value="",h.value="",k.value=""},z=()=>{window.localStorage.setItem("users",JSON.stringify(S))},P=()=>{if(l.value){for(const e of S)if(e.login==f.value)return g.value="User already exists!",!1;g.value="",h.value==k.value?(S.push({login:f.value,pass:h.value,savedCities:[],celsius:!1,mph:!0}),y.value=!0,setTimeout((()=>{y.value=!1}),1500),g.value="",z()):g.value="Passwords don't match!"}else for(const e of S)if(e.login==f.value){if(e.pass==h.value)return D.value=e.login,C.value=!0,!0}else g.value="Wrong login or password!"};return(e,a)=>((0,t.wg)(),(0,t.iD)("main",null,[(0,t._)("div",o,[(0,t._)("h1",null,(0,n.zw)(u.value),1),(0,t._)("form",{onSubmit:a[3]||(a[3]=(0,s.iM)((a=>(P(),e.$emit("openWeather",D.value,C.value))),["prevent"])),class:"loginForm"},[r,(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e)},null,512),[[s.nr,f.value]]),c,(0,t.wy)((0,t._)("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=e=>h.value=e)},null,512),[[s.nr,h.value]]),l.value?((0,t.wg)(),(0,t.iD)("label",v,"Repeat password")):(0,t.kq)("",!0),l.value?(0,t.wy)(((0,t.wg)(),(0,t.iD)("input",{key:1,type:"password","onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e)},null,512)),[[s.nr,k.value]]):(0,t.kq)("",!0),g.value.length>0?((0,t.wg)(),(0,t.iD)("p",d,(0,n.zw)(g.value),1)):(0,t.kq)("",!0),p],32),(0,t._)("p",{onClick:a[4]||(a[4]=e=>H()),class:"toggleForm"},(0,n.zw)(m.value),1),(0,t.Wm)(s.uT,{name:"fade"},{default:(0,t.w5)((()=>[y.value?((0,t.wg)(),(0,t.iD)("p",w,"Account created!")):(0,t.kq)("",!0)])),_:1})])]))}},g=l(744);const y=(0,g.Z)(m,[["__scopeId","data-v-5b0eeffb"]]);var f=y,h="data:image/webp;base64,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";const k=e=>((0,t.dD)("data-v-67f8c698"),e=e(),(0,t.Cn)(),e),D={class:"container"},C={key:0,class:"menu"},S={class:"leftSection"},H={class:"row"},z={class:"welcome"},P={key:0,class:"savedCitiesWrapper"},b=k((()=>(0,t._)("p",null,"Your saved places",-1))),_={class:"savedCities"},L=["onClick"],x={class:"options"},F={key:0,class:"value"},T={key:1,class:"value"},W={key:0,class:"value"},I={key:1,class:"value"},Y={class:"wrapper"},A={key:0,class:"row"},O={class:"welcome"},Q={key:1,class:"leftSection"},j={class:"row"},U={class:"welcome"},q={class:"options desktopOptions"},B={key:0,class:"value"},K={key:1,class:"value"},V={key:0,class:"value"},R={key:1,class:"value"},X={key:0,class:"savedCitiesWrapper"},J=k((()=>(0,t._)("p",null,"Your saved places",-1))),M={class:"savedCities"},N=["onClick"],Z={class:"upcomingDays"},E=["onClick"],G={key:0,class:"mainData"},$={style:{width:"5.5em"}},ee=["src","alt"],ae={style:{width:"9em","margin-left":"1em"}},le=k((()=>(0,t._)("img",{src:h,alt:"wind:",class:"forecastIcon wind"},null,-1))),se={key:0,style:{"font-size":".8rem",color:"gray"}},te={key:1,style:{"font-size":".8rem",color:"gray"}},ie={key:1,class:"secondaryData"},ne=k((()=>(0,t._)("span",{style:{"font-size":".8rem",color:"gray"}}," hPa",-1))),ue={class:"weather"},oe={class:"localization"},re={class:"temperature"},ce=["src"],ve={class:"desc"},de={class:"maxMin"},pe={key:2,class:"upcomingDays"},we=["onClick"],me={key:0,class:"mainData"},ge={style:{width:"5.5em"}},ye=["src","alt"],fe={style:{width:"9em","margin-left":"1em"}},he=k((()=>(0,t._)("img",{src:h,alt:"wind:",class:"forecastIcon wind"},null,-1))),ke={key:0,style:{"font-size":".8rem",color:"gray"}},De={key:1,style:{"font-size":".8rem",color:"gray"}},Ce={key:1,class:"secondaryData"},Se=k((()=>(0,t._)("span",{style:{"font-size":".8rem",color:"gray"}}," hPa",-1))),He={class:"rainForecast"},ze=k((()=>(0,t._)("p",null,"Todays probability of rain:",-1))),Pe={class:"columnContainer"},be=k((()=>(0,t._)("div",{class:"columnWrapper mm"},[(0,t._)("p",{style:{color:"gray"}},"%"),(0,t._)("div",{class:"columnScale"},[(0,t._)("p",null,"100"),(0,t._)("p",null,"50"),(0,t._)("p",null,"0")])],-1))),_e={class:"columnWrapper"},Le=k((()=>(0,t._)("div",{class:"columnWrapper"},[(0,t._)("div",{class:"columnScale"}),(0,t._)("p",{style:{color:"gray"}},"hour")],-1)));var xe={__name:"Weather",props:{username:String,users:Array},setup(e){const a=e,l=(0,i.iH)({}),u=(0,i.iH)(""),o=(0,i.iH)(),r=(0,i.iH)(!1),c=(0,i.iH)([]),v=(0,i.iH)("Rzeszów"),d=(0,i.iH)([]),p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];for(let s=0;s<a.users.length;s++)a.users[s].login==a.username&&(o.value=a.users[s]);const w=()=>{if(document.documentElement.clientWidth>800)return!0},m=async e=>{v.value=e;const a="1d1192606d965909ab4f45aa700295af";u.value="";let s=await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+e+"&appid="+a+"&units=metric");const t=await s.json();if(!s.ok)return;c.value=[];for(const l of t.list)if(l.dt_txt.includes("15:00:00")){const e=l.dt_txt.substring(0,10),a=new Date(e).getDay(),s=o.value.celsius?l.main.temp:1.8*l.main.temp+32,t=o.value.mph?3.6*l.wind.speed/1.609344:3.6*l.wind.speed;c.value.push({name:p[a],temp:Math.round(s)+"°",weather:l.weather[0].description,iconUrl:"https://openweathermap.org/img/wn/"+l.weather[0].icon+"@2x.png",windSpeed:Math.round(t),showSecondary:!1,pressure:l.main.pressure,humidity:l.main.humidity})}d.value=[];for(let l=0;l<5;l++){const e=t.list[l];d.value.push({pop:Math.round(100*e.pop),time:e.dt_txt.substring(11,13)})}s=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid="+a+"&units=metric");const i=await s.json(),n=o.value.celsius?i.main.temp:1.8*i.main.temp+32;l.value={country:i.sys.country,city:i.name,temp:Math.round(n)+"°",desc:i.weather[0].description,tempMin:Math.round(i.main.temp_min),tempMax:Math.round(i.main.temp_max),iconUrl:"http://openweathermap.org/img/wn/"+i.weather[0].icon+"@2x.png"}};return m("Prague"),setInterval((()=>{m(v.value)}),6e4),(e,i)=>{const p=(0,t.up)("ion-icon");return(0,t.wg)(),(0,t.iD)("div",D,[(0,t.Wm)(s.uT,{name:"slide"},{default:(0,t.w5)((()=>[!w()&&r.value?((0,t.wg)(),(0,t.iD)("div",C,[(0,t._)("div",S,[(0,t._)("div",H,[(0,t._)("p",z,"Hello "+(0,n.zw)(a.username)+"!",1),(0,t.Wm)(p,{name:"close-outline",onClick:i[0]||(i[0]=e=>r.value=!r.value),class:"icon"})]),(0,t._)("form",{onSubmit:i[3]||(i[3]=(0,s.iM)((e=>(m(u.value),r.value=!1)),["prevent"]))},[(0,t.wy)((0,t._)("input",{type:"search",placeholder:"Search for city","onUpdate:modelValue":i[1]||(i[1]=e=>u.value=e)},null,512),[[s.nr,u.value]]),(0,t.Wm)(p,{onClick:i[2]||(i[2]=e=>(m(u.value),r.value=!1)),style:{"font-size":"2rem",cursor:"pointer"},name:"search-outline"})],32),o.value.savedCities.length>0?((0,t.wg)(),(0,t.iD)("div",P,[b,(0,t._)("div",_,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.value.savedCities,(e=>((0,t.wg)(),(0,t.iD)("p",{onClick:a=>(m(e),r.value=!1)},(0,n.zw)(e),9,L)))),256))])])):(0,t.kq)("",!0),(0,t._)("div",x,[(0,t._)("div",{class:"row toggleRow",onClick:i[4]||(i[4]=l=>(e.$emit("toggleValue",a.username,"deg"),m(v.value)))},[(0,t.Wm)(s.uT,{name:"slide-up"},{default:(0,t.w5)((()=>[o.value.celsius?((0,t.wg)(),(0,t.iD)("div",T,"Celsius")):((0,t.wg)(),(0,t.iD)("div",F,"Fahrenheit"))])),_:1})]),(0,t._)("div",{class:"row toggleRow",onClick:i[5]||(i[5]=l=>(e.$emit("toggleValue",a.username,"speed"),m(v.value)))},[(0,t.Wm)(s.uT,{name:"slide-up"},{default:(0,t.w5)((()=>[o.value.mph?((0,t.wg)(),(0,t.iD)("div",I,"mph")):((0,t.wg)(),(0,t.iD)("div",W,"km/h"))])),_:1})])])])])):(0,t.kq)("",!0)])),_:1}),(0,t._)("div",Y,[w()?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",A,[(0,t._)("p",O,"Hello "+(0,n.zw)(a.username)+"!",1),(0,t.Wm)(p,{name:"menu-outline",onClick:i[6]||(i[6]=e=>r.value=!r.value),class:"icon"})])),w()?((0,t.wg)(),(0,t.iD)("div",Q,[(0,t._)("div",j,[(0,t._)("p",U,"Hello "+(0,n.zw)(a.username)+"!",1),(0,t._)("div",q,[(0,t._)("div",{class:"row toggleRow",onClick:i[7]||(i[7]=l=>(e.$emit("toggleValue",a.username,"deg"),m(v.value)))},[(0,t.Wm)(s.uT,{name:"slide-up"},{default:(0,t.w5)((()=>[o.value.celsius?((0,t.wg)(),(0,t.iD)("div",K,"Celsius")):((0,t.wg)(),(0,t.iD)("div",B,"Fahrenheit"))])),_:1})]),(0,t._)("div",{class:"row toggleRow",onClick:i[8]||(i[8]=l=>(e.$emit("toggleValue",a.username,"speed"),m(v.value)))},[(0,t.Wm)(s.uT,{name:"slide-up"},{default:(0,t.w5)((()=>[o.value.mph?((0,t.wg)(),(0,t.iD)("div",R,"mph")):((0,t.wg)(),(0,t.iD)("div",V,"km/h"))])),_:1})])])]),(0,t._)("form",{onSubmit:i[11]||(i[11]=(0,s.iM)((e=>m(u.value)),["prevent"]))},[(0,t.wy)((0,t._)("input",{type:"search",placeholder:"Search for city","onUpdate:modelValue":i[9]||(i[9]=e=>u.value=e)},null,512),[[s.nr,u.value]]),(0,t.Wm)(p,{onClick:i[10]||(i[10]=e=>(m(u.value),r.value=!1)),style:{"font-size":"2rem",cursor:"pointer"},name:"search-outline"})],32),o.value.savedCities.length>0?((0,t.wg)(),(0,t.iD)("div",X,[J,(0,t._)("div",M,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.value.savedCities,(e=>((0,t.wg)(),(0,t.iD)("p",{onClick:a=>m(e)},(0,n.zw)(e),9,N)))),256))])])):(0,t.kq)("",!0),(0,t._)("div",Z,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.value,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"day",onClick:a=>e.showSecondary=!e.showSecondary},[(0,t.Wm)(s.uT,{name:"slide-up"},{default:(0,t.w5)((()=>[e.showSecondary?((0,t.wg)(),(0,t.iD)("div",ie,[(0,t._)("p",null,[(0,t.Uk)("Pressure: "+(0,n.zw)(e.pressure),1),ne,(0,t.Uk)(" | Humidity: "+(0,n.zw)(e.humidity)+"%",1)])])):((0,t.wg)(),(0,t.iD)("div",G,[(0,t._)("p",null,(0,n.zw)(e.name),1),(0,t._)("div",$,[(0,t._)("img",{src:e.iconUrl,alt:e.weather,class:"forecastIcon"},null,8,ee),(0,t.Uk)(" "+(0,n.zw)(e.temp),1)]),(0,t._)("div",ae,[le,(0,t._)("p",null,[(0,t.Uk)((0,n.zw)(e.windSpeed)+" ",1),o.value.mph?((0,t.wg)(),(0,t.iD)("span",se,"mph")):((0,t.wg)(),(0,t.iD)("span",te,"km/h"))])])]))])),_:2},1024)],8,E)))),256))])])):(0,t.kq)("",!0),(0,t._)("div",ue,[o.value.savedCities.includes(l.value.city)?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(p,{key:0,name:"add-outline",class:"addCityIcon",onClick:i[12]||(i[12]=s=>e.$emit("addCity",a.username,l.value.city))})),o.value.savedCities.includes(l.value.city)?((0,t.wg)(),(0,t.j4)(p,{key:1,name:"remove-outline",class:"addCityIcon",onClick:i[13]||(i[13]=s=>e.$emit("removeCity",a.username,l.value.city))})):(0,t.kq)("",!0),(0,t._)("p",oe,(0,n.zw)(l.value.city)+", "+(0,n.zw)(l.value.country),1),(0,t._)("p",re,(0,n.zw)(l.value.temp),1),(0,t._)("img",{src:l.value.iconUrl,class:"weatherIcon"},null,8,ce),(0,t._)("p",ve,(0,n.zw)(l.value.desc),1),(0,t._)("p",de,"H:"+(0,n.zw)(l.value.tempMax)+"° L: "+(0,n.zw)(l.value.tempMin)+"°",1),w()?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",pe,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.value,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"day",onClick:a=>e.showSecondary=!e.showSecondary},[(0,t.Wm)(s.uT,{name:"slide-up"},{default:(0,t.w5)((()=>[e.showSecondary?((0,t.wg)(),(0,t.iD)("div",Ce,[(0,t._)("p",null,[(0,t.Uk)("Pressure: "+(0,n.zw)(e.pressure),1),Se,(0,t.Uk)(" | Humidity: "+(0,n.zw)(e.humidity)+"%",1)])])):((0,t.wg)(),(0,t.iD)("div",me,[(0,t._)("p",null,(0,n.zw)(e.name),1),(0,t._)("div",ge,[(0,t._)("img",{src:e.iconUrl,alt:e.weather,class:"forecastIcon"},null,8,ye),(0,t.Uk)(" "+(0,n.zw)(e.temp),1)]),(0,t._)("div",fe,[he,(0,t._)("p",null,[(0,t.Uk)((0,n.zw)(e.windSpeed)+" ",1),o.value.mph?((0,t.wg)(),(0,t.iD)("span",ke,"mph")):((0,t.wg)(),(0,t.iD)("span",De,"km/h"))])])]))])),_:2},1024)],8,we)))),256))])),(0,t._)("div",He,[ze,(0,t._)("div",Pe,[be,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(d.value,(e=>((0,t.wg)(),(0,t.iD)("div",_e,[(0,t._)("div",{class:"column",style:(0,n.j5)({height:1.6*e.pop+"px"})},null,4),(0,t._)("p",null,(0,n.zw)(e.time),1)])))),256)),Le])])])])])}}};const Fe=(0,g.Z)(xe,[["__scopeId","data-v-67f8c698"]]);var Te=Fe,We={__name:"App",setup(e){const a=(0,i.iH)(""),l=(0,i.iH)(!1),s=(0,i.iH)([{login:"admin",pass:"admin",savedCities:["Seville","Prague","Rio De Janeiro"],celsius:!0,mph:!1}]),n=()=>{null!=window.localStorage.getItem("users")&&(s.value=JSON.parse(window.localStorage.getItem("users")))};n();const u=()=>{window.localStorage.setItem("users",JSON.stringify(s.value))},o=(e,s)=>{s&&(a.value=e,l.value=!0)},r=(e,a)=>{const l=d(e);s.value[l].savedCities.length<10&&!s.value[l].savedCities.includes(a)&&s.value[l].savedCities.push(a),u()},c=(e,a)=>{const l=d(e);s.value[l].savedCities=s.value[l].savedCities.filter((e=>e!=a))},v=(e,a,l)=>{const t=d(e);"deg"===a&&(s.value[t].celsius=!s.value[t].celsius),"speed"===a&&(s.value[t].mph=!s.value[t].mph),u()},d=e=>{let a=0;for(const l of s.value){if(l.login===e)return a;a++}};return(e,n)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[l.value?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)((0,i.SU)(f),{key:0,users:s.value,onOpenWeather:o},null,8,["users"])),l.value?((0,t.wg)(),(0,t.j4)((0,i.SU)(Te),{key:1,username:a.value,users:s.value,onAddCity:r,onRemoveCity:c,onToggleValue:v},null,8,["username","users"])):(0,t.kq)("",!0)],64))}};const Ie=We;var Ye=Ie;(0,s.ri)(Ye).mount("#app")}},a={};function l(s){var t=a[s];if(void 0!==t)return t.exports;var i=a[s]={exports:{}};return e[s](i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(a,s,t,i){if(!s){var n=1/0;for(c=0;c<e.length;c++){s=e[c][0],t=e[c][1],i=e[c][2];for(var u=!0,o=0;o<s.length;o++)(!1&i||n>=i)&&Object.keys(l.O).every((function(e){return l.O[e](s[o])}))?s.splice(o--,1):(u=!1,i<n&&(n=i));if(u){e.splice(c--,1);var r=t();void 0!==r&&(a=r)}}return a}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,t,i]}}(),function(){l.d=function(e,a){for(var s in a)l.o(a,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};l.O.j=function(a){return 0===e[a]};var a=function(a,s){var t,i,n=s[0],u=s[1],o=s[2],r=0;if(n.some((function(a){return 0!==e[a]}))){for(t in u)l.o(u,t)&&(l.m[t]=u[t]);if(o)var c=o(l)}for(a&&a(s);r<n.length;r++)i=n[r],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(c)},s=self["webpackChunkvue_weather"]=self["webpackChunkvue_weather"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=l.O(void 0,[998],(function(){return l(461)}));s=l.O(s)})();
//# sourceMappingURL=app.3ca6fa7d.js.map