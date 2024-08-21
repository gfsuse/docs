"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6867],{77024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(74848),s=n(28453);const o={title:"SAML (Okta)",taxonomy:{category:"docs"},slug:"/integration/saml"},r=void 0,a={id:"integration/saml/saml",title:"SAML (Okta)",description:"SAML IDP Configuration",source:"@site/docs/08.integration/04.saml/04.saml.md",sourceDirName:"08.integration/04.saml",slug:"/integration/saml",permalink:"/next/integration/saml",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/08.integration/04.saml/04.saml.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"SAML (Okta)",taxonomy:{category:"docs"},slug:"/integration/saml"},sidebar:"tutorialSidebar",previous:{title:"Microsoft AD",permalink:"/next/integration/msad"},next:{title:"SAML (Azure AD)",permalink:"/next/integration/msazure"}},l={},c=[{value:"SAML IDP Configuration",id:"saml-idp-configuration",level:3},{value:"Mapping Groups to Roles and Namespaces",id:"mapping-groups-to-roles-and-namespaces",level:4}];function d(e){const t={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"saml-idp-configuration",children:"SAML IDP Configuration"}),"\n",(0,i.jsx)(t.p,{children:"To configure NeuVector to use Okta SAML IDP server, first, configure the SAML IDP server on the Okta site."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Okta",src:n(20902).A+"",width:"740",height:"2499"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Copy "SAML Redirect URI" from NeuVector SAML Setting page, paste it to Okta\'s single sign on url, recipient url and destination url fields.'}),"\n",(0,i.jsxs)(t.li,{children:["Assertion encryption: This field must be ",(0,i.jsx)("strong",{children:"unencrypted."})]}),"\n",(0,i.jsx)(t.li,{children:"Attribute statements: Enter the email and username attributes."}),"\n",(0,i.jsx)(t.li,{children:"Group attribute statements: Enable this if group-based role mapping is required. The default attribute name that NeuVector looks for is NVRoleGroup. If other attribute name is used for the user's group membership, it can be customized in NeuVector's SAML Setting page."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Configure SAML settings in NeuVector UI console."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SAML",src:n(63209).A+"",width:"1230",height:"774"})}),"\n",(0,i.jsx)(t.p,{children:'Use "View Setup Instructions" button as shown in the following screenshot to locate following information, and copy them into NeuVector\'s SAML page.'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Identity Provider Single Sign-On URL"}),"\n",(0,i.jsx)(t.li,{children:"Identity Provider Issuer"}),"\n",(0,i.jsx)(t.li,{children:"X.509 Certificate"}),"\n",(0,i.jsx)(t.li,{children:"Specify group attribute name if non-default value is used."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Setting",src:n(12085).A+"",width:"770",height:"632"})}),"\n",(0,i.jsx)(t.p,{children:"After the user is authenticated, the proper role can be derived with group-based role mapping configuration. To setup group-based role mapping,"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"If group-based role mapping is not configured or the matched groups cannot be located, the authenticated user will be assigned with the Default role. If the Default role is set to None, when group-based role mapping fails, the user is not able to login."}),"\n",(0,i.jsx)(t.li,{children:"Specify a list of groups respectively in Admin and Reader role map. The user's group attribute is piggybacked in the response after the user is authenticated. If the matched group is located, the corresponding role will be assigned to the user."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"mapping-groups-to-roles-and-namespaces",children:"Mapping Groups to Roles and Namespaces"}),"\n",(0,i.jsxs)(t.p,{children:["Please see the ",(0,i.jsx)(t.a,{href:"/configuration/users#mapping-groups-to-roles-and-namespaces",children:"Users and Roles"})," section for how to map groups to preset and custom roles as well as namespaces in NeuVector."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},20902:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/okta-15c8a0f920e04cd5efc204a30e6d6298.png"},63209:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/saml1-64c77c2783376a7da17001fc747a32fb.png"},12085:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/setting-a391851f576c029c602403d8ca0abef2.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);