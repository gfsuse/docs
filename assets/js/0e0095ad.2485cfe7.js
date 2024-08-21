"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4751],{87061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(74848),i=n(28453);const o={title:"Network Threat Signatures",taxonomy:{category:"docs"},slug:"/policy/threats"},r=void 0,a={id:"policy/threats/threats",title:"Network Threat Signatures",description:"Detecting Network Threats",source:"@site/versioned_docs/version-5.3/05.policy/10.threats/10.threats.md",sourceDirName:"05.policy/10.threats",slug:"/policy/threats",permalink:"/policy/threats",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/05.policy/10.threats/10.threats.md",tags:[],version:"5.3",sidebarPosition:10,frontMatter:{title:"Network Threat Signatures",taxonomy:{category:"docs"},slug:"/policy/threats"},sidebar:"tutorialSidebar",previous:{title:"DLP & WAF Sensors",permalink:"/policy/dlp"},next:{title:"Custom Compliance Checks",permalink:"/policy/customcompliance"}},c={},l=[{value:"Detecting Network Threats",id:"detecting-network-threats",level:3},{value:"OWASP Signatures",id:"owasp-signatures",level:4},{value:"Built-In Threat Detection",id:"built-in-threat-detection",level:4}];function d(e){const t={code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"detecting-network-threats",children:"Detecting Network Threats"}),"\n",(0,s.jsx)(t.p,{children:"NeuVector deep packet inspection can be used to inspect the network packets and payload for attacks such as those in the OWASP Top 10 and those commonly used in Web Application Firewalls (WAFs)."}),"\n",(0,s.jsx)(t.h4,{id:"owasp-signatures",children:"OWASP Signatures"}),"\n",(0,s.jsx)(t.p,{children:"DLP Sensors can be created to detect OWASP attacks using the following pattern examples. As always, these may need to be tuned for your environment and applications."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"img src=javascript\n/servlet/.*/org.apache.\n/modules.php?.*name=Wiki.*<script\n/error/500error.jsp.*et=.*<script\n/mailman/.*?.*info=.*<script\n\\x0aReferer\\x3a res\\x3a/C\\x3a\n/cgi-bin/cgictl?action=setTaskSettings.*settings={\\x22.*taskId=\n/cgi-bin/cgictl.*scriptName=.*[?&]scriptName=[^&]*?([\\x22\\x27\\x3c\\x3e\\x28\\x29]|script|onload|src)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Here are other simple examples:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"owasp",src:n(56373).A+"",width:"1208",height:"484"})}),"\n",(0,s.jsx)(t.h4,{id:"built-in-threat-detection",children:"Built-In Threat Detection"}),"\n",(0,s.jsx)(t.p,{children:"NeuVector also has built-in detection of other network threats such as SQL Injection attacks, DDoS (e.g. Ping Death), and tunneling attacks. For SQL injection attacks, NeuVector inspects the network connection (SQL protocol) between the front end and the sql database pod, reducing false positives and increasing accuracy."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},56373:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/owasp_top10_dlp-fd0dfa1df063e1e73d0f0f860c0a6f0b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);