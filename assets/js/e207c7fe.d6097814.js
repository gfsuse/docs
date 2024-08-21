"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1080],{33088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=t(74848),i=t(28453);const l={title:"Splunk",taxonomy:{category:"docs"},slug:"/integration/splunk"},r=void 0,o={id:"integration/splunk/splunk",title:"Splunk",description:"Integrating with Splunk with the NeuVector Splunk App",source:"@site/docs/08.integration/11.splunk/11.splunk.md",sourceDirName:"08.integration/11.splunk",slug:"/integration/splunk",permalink:"/next/integration/splunk",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/08.integration/11.splunk/11.splunk.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Splunk",taxonomy:{category:"docs"},slug:"/integration/splunk"},sidebar:"tutorialSidebar",previous:{title:"IBM QRadar",permalink:"/next/integration/ibmqr"},next:{title:"9. Testing NeuVector",permalink:"/next/testing"}},a={},c=[{value:"Integrating with Splunk with the NeuVector Splunk App",id:"integrating-with-splunk-with-the-neuvector-splunk-app",level:3},{value:"Image Vulnerabilities",id:"image-vulnerabilities",level:4},{value:"Admission Control and Security Events",id:"admission-control-and-security-events",level:4},{value:"Network Violations by Pod/Service (Deployments)",id:"network-violations-by-podservice-deployments",level:4},{value:"Egress Connection Summary",id:"egress-connection-summary",level:4},{value:"NeuVector Login Activity Dashboard",id:"neuvector-login-activity-dashboard",level:4},{value:"Setup and Configuration",id:"setup-and-configuration",level:3},{value:"Getting the app",id:"getting-the-app",level:4},{value:"GitHub",id:"github",level:5},{value:"Splunkbase",id:"splunkbase",level:5},{value:"Splunk Apps Browser",id:"splunk-apps-browser",level:5},{value:"Installation and Setup",id:"installation-and-setup",level:4},{value:"FAQs",id:"faqs",level:4},{value:"What user role is required?",id:"what-user-role-is-required",level:5}];function p(e){const n={a:"a",br:"br",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"integrating-with-splunk-with-the-neuvector-splunk-app",children:"Integrating with Splunk with the NeuVector Splunk App"}),"\n",(0,s.jsxs)(n.p,{children:["The NeuVector Splunk App can be found in the splunkbase catalog ",(0,s.jsx)(n.a,{href:"https://splunkbase.splunk.com/app/6205/",children:"here"})," or by searching for NeuVector."]}),"\n",(0,s.jsx)(n.p,{children:"The NeuVector Security dashboard helps to identify security events such as suspicious login attempts, network violations and vulnerable images."}),"\n",(0,s.jsx)(n.p,{children:"Below are sample screens displayed in the Splunk app."}),"\n",(0,s.jsx)(n.h4,{id:"image-vulnerabilities",children:"Image Vulnerabilities"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vulnerabilities",src:t(61708).A+"",width:"3264",height:"1446"})}),"\n",(0,s.jsx)(n.h4,{id:"admission-control-and-security-events",children:"Admission Control and Security Events"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"admission_security",src:t(96349).A+"",width:"3274",height:"1168"})}),"\n",(0,s.jsx)(n.h4,{id:"network-violations-by-podservice-deployments",children:"Network Violations by Pod/Service (Deployments)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"network",src:t(59364).A+"",width:"3282",height:"1268"})}),"\n",(0,s.jsx)(n.h4,{id:"egress-connection-summary",children:"Egress Connection Summary"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"egress",src:t(55562).A+"",width:"3268",height:"1120"})}),"\n",(0,s.jsx)(n.h4,{id:"neuvector-login-activity-dashboard",children:"NeuVector Login Activity Dashboard"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"logins",src:t(27935).A+"",width:"3250",height:"1670"})}),"\n",(0,s.jsx)(n.h3,{id:"setup-and-configuration",children:"Setup and Configuration"}),"\n",(0,s.jsx)(n.h4,{id:"getting-the-app",children:"Getting the app"}),"\n",(0,s.jsx)(n.h5,{id:"github",children:"GitHub"}),"\n",(0,s.jsxs)(n.p,{children:["Download the latest app tarball (",(0,s.jsx)(n.code,{children:"neuvector_app.tar.gz"}),") from the ",(0,s.jsx)(n.a,{href:"https://github.com/neuvector/neuvector-splunk-app",children:"neuvector/neuvector-splunk-app repository"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"splunkbase",children:"Splunkbase"}),"\n",(0,s.jsxs)(n.p,{children:["Download the latest app tarball from ",(0,s.jsx)(n.a,{href:"https://splunkbase.splunk.com/app/",children:"Splunkbase"}),"."]}),"\n",(0,s.jsx)(n.h5,{id:"splunk-apps-browser",children:"Splunk Apps Browser"}),"\n",(0,s.jsx)(n.p,{children:'In the Splunk UI, click on the Apps dropdown, click "Find More Apps", then search for NeuVector Splunk App.'}),"\n",(0,s.jsx)(n.h4,{id:"installation-and-setup",children:"Installation and Setup"}),"\n",(0,s.jsx)(n.p,{children:"Install the app by either uploading the tarball or following the Splunkbase prompts."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Configure syslog in NeuVector console"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Go to Settings -> Configuration -> Syslog"}),"\n",(0,s.jsxs)(n.p,{children:["a. set the server value as the IP address that Splunk is running",(0,s.jsx)(n.br,{}),"\n","b. choose TCP as the protocol;",(0,s.jsx)(n.br,{}),"\n","c. set port number as 10514;",(0,s.jsx)(n.br,{}),"\n","d. choose Info Level;",(0,s.jsx)(n.br,{}),"\n","e. click SUBMIT to save the setting."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"syslog",src:t(46935).A+"",width:"1221",height:"774"})}),"\n",(0,s.jsx)(n.p,{children:"You can configure multiple clusters to send syslog to your splunk instance and your splunk instance will receive these syslogs in real time."}),"\n",(0,s.jsx)(n.h4,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsx)(n.h5,{id:"what-user-role-is-required",children:"What user role is required?"}),"\n",(0,s.jsx)(n.p,{children:"Any user role."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},96349:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/admission_security_events-dd10c22bad0c82dbdc5b6ca14cd596b5.png"},55562:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/egress_destinations-bacbb0995beaa37643d5fdcb6b4550dd.png"},27935:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/login_summary-2dfa162b2b742e22947099c28a1fbe05.png"},59364:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/network_violations-3dc6f4c649e7ead0f92a0952e60d8661.png"},46935:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/syslog-config-4f758dc098b9215e12078d20c4e9c299.png"},61708:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/vulnerable_images-8bce8527b9b3c20500300302a928704b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);