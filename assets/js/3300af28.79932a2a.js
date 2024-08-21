"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8806],{42684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(74848),s=n(28453);const r={title:"LDAP",taxonomy:{category:"docs"},slug:"/integration/ldap"},i=void 0,a={id:"integration/ldap/ldap",title:"LDAP",description:"LDAP",source:"@site/versioned_docs/version-5.3/08.integration/02.ldap/02.ldap.md",sourceDirName:"08.integration/02.ldap",slug:"/integration/ldap",permalink:"/integration/ldap",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/08.integration/02.ldap/02.ldap.md",tags:[],version:"5.3",sidebarPosition:2,frontMatter:{title:"LDAP",taxonomy:{category:"docs"},slug:"/integration/ldap"},sidebar:"tutorialSidebar",previous:{title:"Enterprise Integration",permalink:"/integration/integration"},next:{title:"Microsoft AD",permalink:"/integration/msad"}},l={},d=[{value:"LDAP",id:"ldap",level:3},{value:"Mapping Groups to Roles and Namespaces",id:"mapping-groups-to-roles-and-namespaces",level:4}];function p(e){const t={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"ldap",children:"LDAP"}),"\n",(0,o.jsx)(t.p,{children:"Configure the required fields to connect to your LDAP server."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"LDAPAD",src:n(86504).A+"",width:"1374",height:"693"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Port. The default port is 389 for SSL disabled and 636 for SSL enabled."}),"\n",(0,o.jsx)(t.li,{children:"User name (optional). We use this admin user name to bind the ldap server for each query."}),"\n",(0,o.jsx)(t.li,{children:"Base dn. This should be a root node in ldap server to search for the ldap user and group."}),"\n",(0,o.jsx)(t.li,{children:"Default role. This is the role that a user will take if role group mapping (below) fails. If the user\u2019s group attribute is found that can be mapped to a role, then the default role will not be used. If no matching group attribute is found, the default role will be taken. If the default role is None in this case, the user login will fail. The \u2018test connection\u2019 button will check if a username/password can be authenticated by the configured LDAP server."}),"\n",(0,o.jsx)(t.li,{children:"Admin and Reader role map. This defines how to map a user\u2019s LDAP group membership to the user role in NeuVector. Add the LDAP group list to the corresponding roles. When looking up a user\u2019s group membership in LDAP schema, we assume the group\u2019s member attribute is named as \u201cmemberUid\u201d."}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"mapping-groups-to-roles-and-namespaces",children:"Mapping Groups to Roles and Namespaces"}),"\n",(0,o.jsxs)(t.p,{children:["Please see the ",(0,o.jsx)(t.a,{href:"/configuration/users#mapping-groups-to-roles-and-namespaces",children:"Users and Roles"})," section for how to map groups to preset and custom roles as well as namespaces in NeuVector."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},86504:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ldap-ad-006655630d34ef1a52f4aeafee814084.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);