"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4437],{86329:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>p});var c=i(74848),n=i(28453);const t={title:"",sidebar_label:"1. Basics",taxonomy:{category:"docs"},slug:"/"},o=void 0,r={id:"basics/basics",title:"",description:"Welcome to the NeuVector Docs",source:"@site/versioned_docs/version-5.3/01.basics/01.basics.md",sourceDirName:"01.basics",slug:"/",permalink:"/",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/01.basics/01.basics.md",tags:[],version:"5.3",sidebarPosition:1,frontMatter:{title:"",sidebar_label:"1. Basics",taxonomy:{category:"docs"},slug:"/"},sidebar:"tutorialSidebar",next:{title:"5.x Overview",permalink:"/basics/overview"}},a={},p=[];function l(e){const s={a:"a",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{class:"titles",children:"Welcome to the NeuVector Docs"}),"\n",(0,c.jsx)("p",{class:"subtitles",children:"Here you can access the complete documentation for NeuVector, the only Kubernetes-native container security platform."}),"\n",(0,c.jsx)("p",{class:"subtitles",children:"NeuVector Images on Docker Hub"}),"\n",(0,c.jsx)(s.p,{children:"The images are on the NeuVector Docker Hub registry. Use the appropriate version tag for the manager, controller, enforcer, and leave the version as 'latest' for scanner and updater. For example:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"neuvector/manager:5.3.2"}),"\n",(0,c.jsx)(s.li,{children:"neuvector/controller:5.3.2"}),"\n",(0,c.jsx)(s.li,{children:"neuvector/enforcer:5.3.2"}),"\n",(0,c.jsxs)(s.li,{children:["neuvector/scanner",":latest"]}),"\n",(0,c.jsxs)(s.li,{children:["neuvector/updater",":latest"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Please be sure to update the image references in appropriate yaml files."}),"\n",(0,c.jsx)(s.p,{children:"If deploying with the current NeuVector Helm chart (v1.8.9+), the following changes should be made to values.yml:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Update the registry to docker.io"}),"\n",(0,c.jsx)(s.li,{children:"Update image names/tags to the appropriate version on Docker hub, as shown above"}),"\n",(0,c.jsx)(s.li,{children:"Leave the imagePullSecrets empty"}),"\n"]}),"\n",(0,c.jsx)("strong",{children:"NeuVector Images on Rancher Registry "}),"\n",(0,c.jsxs)(s.p,{children:["NeuVector images are also mirrored to the Rancher registry for deployment from Rancher. Please see the ",(0,c.jsx)(s.a,{href:"deploying/rancher",children:"Rancher Deployment"})," section for more information. Please allow a few days after every release for the images to be mirrored to the Rancher Registry."]}),"\n",(0,c.jsxs)(s.p,{children:["If upgrading from NeuVector 4.x, please see these ",(0,c.jsx)("a",{href:"releasenotes/5x#upgrading-from-neuvector-4x-to-5x",children:"instructions."})]}),"\n",(0,c.jsx)("table",{class:"htmltable",children:(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{class:"mainoptions",children:[(0,c.jsx)("div",{class:"mainoptionicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(74336).A+"",width:"563",height:"547"})})}),(0,c.jsx)("span",{class:"mainheadingcontainer",children:(0,c.jsxs)("div",{class:"mainheadingcenter",children:[(0,c.jsx)("p",{class:"mainheading",children:(0,c.jsx)("a",{href:"deploying/kubernetes",children:"Deploy on Kubernetes"})}),(0,c.jsx)("p",{class:"maintext",children:"Install NeuVector via kubectl commands"})]})})]}),(0,c.jsxs)("td",{class:"mainoptions",children:[(0,c.jsx)("div",{class:"mainoptionicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(7492).A+"",width:"1267",height:"1463"})})}),(0,c.jsx)("span",{class:"mainheadingcontainer",children:(0,c.jsxs)("div",{class:"mainheadingcenter",children:[(0,c.jsx)("p",{class:"mainheading",children:(0,c.jsx)("a",{href:"https://github.com/neuvector/neuvector-helm",children:"Deploy Using Helm Charts"})}),(0,c.jsx)("p",{class:"maintext",children:"Deploy NeuVector on Kubernetes or OpenShift"})]})})]}),(0,c.jsxs)("td",{class:"mainoptions",children:[(0,c.jsx)("div",{class:"mainoptionicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(82368).A+"",width:"1600",height:"1600"})})}),(0,c.jsx)("span",{class:"mainheadingcontainer",children:(0,c.jsxs)("div",{class:"mainheadingcenter",children:[(0,c.jsx)("p",{class:"mainheading",children:(0,c.jsx)("a",{href:"deploying/production/operators",children:"OpenShift Operator"})}),(0,c.jsx)("p",{class:"maintext",children:"Deploy NeuVector using Red Hat Certified or Community Operator"})]})})]})]})}),"\n",(0,c.jsx)("p",{class:"titles",children:"Popular Topics"}),"\n",(0,c.jsxs)("table",{style:{border:"none"},children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(35359).A+"",width:"512",height:"512"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"deploying/production",children:"Preparing for Deployment"})}),(0,c.jsx)("p",{class:"poptopictext",children:"Plan deployments including persistent data backups"})]})]})}),(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(85059).A+"",width:"1526",height:"1526"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"scanning/build",children:"CI/CD Automated Scanning"})}),(0,c.jsx)("p",{class:"poptopictext",children:"Scan images as part of a CI/CD pipeline"})]})]})}),(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(55121).A+"",width:"512",height:"512"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"policy/usingcrd",children:"Security Policy as Code"})}),(0,c.jsx)("p",{class:"poptopictext",children:"Create and manage security policy using CRDs"})]})]})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(82148).A+"",width:"512",height:"512"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"policy/modes",children:"Operationalize NeuVector"})}),(0,c.jsx)("p",{class:"poptopictext",children:"Move from Discovery Mode to Monitor & Protect Modes"})]})]})}),(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(57318).A+"",width:"512",height:"512"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"scanning/scanning",children:"Manage Vulnerabilities & Compliance"})}),(0,c.jsx)("p",{class:"poptopictext",children:"End-to-End scanning & compliance reporting"})]})]})}),(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(22070).A+"",width:"512",height:"512"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"configuration/users",children:"Users and Roles"})}),(0,c.jsx)("p",{class:"poptopictext",children:"Add users and customize role-based access control (RBAC)"})]})]})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(24733).A+"",width:"512",height:"512"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"policy/networkrules",children:"Network Segmentation and Threats"})}),(0,c.jsx)("p",{class:"poptopictext",children:"Using the container firewall network rules, egress controls, and threat detection"})]})]})}),(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(57318).A+"",width:"512",height:"512"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"integration/integration",children:"Enterprise Authentication & SSO"})}),(0,c.jsx)("p",{class:"poptopictext",children:"LDAP, Active Directory, SAML, OpenID, Okta integration"})]})]})}),(0,c.jsx)("td",{class:"poptopic",children:(0,c.jsxs)("span",{class:"poptopiccontainer",children:[(0,c.jsx)("div",{class:"poptopicicon",children:(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{src:i(35359).A+"",width:"512",height:"512"})})}),(0,c.jsxs)("div",{class:"poptopictextcenter",children:[(0,c.jsx)("p",{class:"poptopictitle",children:(0,c.jsx)("a",{href:"automation/automation",children:"NeuVector API Reference"})}),(0,c.jsx)("p",{class:"poptopictext",children:"Automate NeuVector using the REST API"})]})]})})]})]})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},82368:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/deploy-neuvector-icon-1629edf6b8242d4a4a74c0217c613a67.png"},7492:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/helm-chart-icon-97d0f3852204fa1a95b7d6928ba4b55f.png"},74336:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/install-neuvector-icon-c3785fcd691b72076cbd7a4109a0f794.png"},85059:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/poptopic-r1c1-03f4f8881b06233fbd70836d6d4706c5.png"},55121:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/poptopic-r1c3-71d9e35b12069867ea28d0ae03f88516.png"},82148:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/poptopic-r2c1-f3b13503e65c0a8ff305fe14b957bb1e.png"},35359:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/poptopic-r2c2-62b330c9aa9973f37b79b9ff6f637da9.png"},22070:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/poptopic-r2c3-5506ab8ce387056e3b6bae7f9469e536.png"},24733:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/poptopic-r3c1-62abcb32742ba18a9a8b7fdaf1abacb8.png"},57318:(e,s,i)=>{i.d(s,{A:()=>c});const c=i.p+"assets/images/poptopic-r3c2-9cf4cc010ea32973b7fe819d73e70481.png"},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>r});var c=i(96540);const n={},t=c.createContext(n);function o(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);