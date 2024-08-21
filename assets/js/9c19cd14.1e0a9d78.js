"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2367],{52024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(74848),c=n(28453);const i={title:"Replacing Self-Signed Certificate",taxonomy:{category:"docs"},slug:"/configuration/console/replacecert"},s=void 0,a={id:"configuration/console/replacecert/replacecert",title:"Replacing Self-Signed Certificate",description:"Replacing the Self-Signed Certificate with PKCS Certificate for External Access",source:"@site/docs/03.configuration/01.console/01.replacecert/01.replacecert.md",sourceDirName:"03.configuration/01.console/01.replacecert",slug:"/configuration/console/replacecert",permalink:"/next/configuration/console/replacecert",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/03.configuration/01.console/01.replacecert/01.replacecert.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Replacing Self-Signed Certificate",taxonomy:{category:"docs"},slug:"/configuration/console/replacecert"},sidebar:"tutorialSidebar",previous:{title:"Connect to Manager, REST API server",permalink:"/next/configuration/console"},next:{title:"Chrome Certificate Upload - MacOS",permalink:"/next/configuration/console/chrome"}},o={},l=[{value:"Replacing the Self-Signed Certificate with PKCS Certificate for External Access",id:"replacing-the-self-signed-certificate-with-pkcs-certificate-for-external-access",level:3},{value:"Generate and Use Self-signed Certificate PKCS8 or PCKS1",id:"generate-and-use-self-signed-certificate-pkcs8-or-pcks1",level:4},{value:"PKCS8",id:"pkcs8",level:5},{value:"PKCS1",id:"pkcs1",level:5},{value:"Support chained certificates",id:"support-chained-certificates",level:4}];function d(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"replacing-the-self-signed-certificate-with-pkcs-certificate-for-external-access",children:"Replacing the Self-Signed Certificate with PKCS Certificate for External Access"}),"\n",(0,r.jsxs)(t.p,{children:["The built-in self-signed certificate used for external access from a browser to the Manager or for the REST API to the Controller can be replaced by a supported PKCS certificate. These should be replaced in both the Manager and Controller deployments. Note: To replace the included certificates for Internal communication between the Controller, Enforcer, and Scanner, please see ",(0,r.jsx)(t.a,{href:"/deploying/production/internal/",children:"this section"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The NeuVector web console supports 2 different self-signed certificate types, specifically, the PKCS8 (Private-Key Information Syntax Standard) and PKCS1 (RSA Cryptography Standard).  The self-signed certificate can be replaced with either of these PKCS types."}),"\n",(0,r.jsx)(t.p,{children:"The steps to generate the secret that will be consumed by NeuVector\u2019s web console originating from the key and certificate using either of the PKCS methods will be illustrated below.  The important note here is, with the use of the wildcard for the DNS as being part of the alternate-subject-name parameter during the key and certificate creation, this enables the name of your choosing to be mapped to the Management console IP-Address without restricting to a particular CN."}),"\n",(0,r.jsx)(t.h4,{id:"generate-and-use-self-signed-certificate-pkcs8-or-pcks1",children:"Generate and Use Self-signed Certificate PKCS8 or PCKS1"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Create a key and certificate"}),"\n"]}),"\n",(0,r.jsx)(t.h5,{id:"pkcs8",children:"PKCS8"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"openssl req -x509 -nodes -days 730 -newkey rsa:2048 -keyout tls.key -out tls.pem -config ca.cfg -extensions 'v3_req'\nSample ca.cfg\n[req]\ndistinguished_name = req_distinguished_name\nx509_extensions = v3_req\nprompt = no\n[req_distinguished_name]\nC = US\nST = California\nL = San Jose\nO = NeuVector Inc.\nOU = Neuvector\nCN = Neuvector\n[v3_req]\nkeyUsage = keyEncipherment, dataEncipherment\nextendedKeyUsage = serverAuth\nsubjectAltName = @alt_names\n[alt_names]\nDNS.1 = *\n"})}),"\n",(0,r.jsx)(t.h5,{id:"pkcs1",children:"PKCS1"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"openssl genrsa -out tls.key 2048\nopenssl req -x509 -nodes -days 730 -config openssl.cnf  -new -key tls.key -out tls.pem\nSample openssl.cnf\n[req]\ndistinguished_name = req_distinguished_name\nx509_extensions = v3_req\nprompt = no\n[req_distinguished_name]\nC = US\nST = California\nL = San Jose\nO = NeuVector Inc.\nOU = Neuvector\nCN = Neuvector(PKCS#1)\n[v3_req]\nkeyUsage = keyEncipherment, dataEncipherment\nextendedKeyUsage = serverAuth\nsubjectAltName = @alt_names\n[alt_names]\nDNS.1 = *\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Create the secret from the generated key and certificate files from above"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"kubectl create secret generic https-cert -n neuvector --from-file=tls.key --from-file=tls.pem\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Edit the yaml directly for the manager and controller deployments to add the mounts"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  template:\n    spec:\n      containers:\n        volumeMounts:\n        - mountPath: /etc/neuvector/certs/ssl-cert.key\n          name: cert\n          readOnly: true\n          subPath: tls.key\n        - mountPath: /etc/neuvector/certs/ssl-cert.pem\n          name: cert\n          readOnly: true\n          subPath: tls.pem\n      volumes:\n      - name: cert\n        secret:\n          defaultMode: 420\n          secretName: https-cert\n"})}),"\n",(0,r.jsx)(t.p,{children:"Or update with the helm chart with similar values.yaml"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'manager:\n  certificate:\n    secret: https-cert\n    keyFile: tls.key\n    pemFile: tls.pem\n  ingress:\n    enabled: true\n    host:  %CHANGE_HOST_NAME%\n    ingressClassName: ""\n    path: "/"  # or this could be "/api", but might need "rewrite-target" annotation\n    annotations:\n      ingress.kubernetes.io/protocol: https\n    tls: true\n    secretName: https-cert\ncontroller:\n  certificate:\n    secret: https-cert\n    keyFile: tls.key\n    pemFile: tls.pem\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Then update with ",(0,r.jsx)(t.code,{children:"helm upgrade -i neuvector ..."}),". For reference here are all the values ",(0,r.jsx)(t.a,{href:"https://github.com/neuvector/neuvector-helm/tree/master/charts/core",children:"https://github.com/neuvector/neuvector-helm/tree/master/charts/core"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"support-chained-certificates",children:"Support chained certificates"}),"\n",(0,r.jsx)(t.p,{children:"To support End-to-end TLS, some ingresses/Application Gateways will only support backend servers that can be trusted.  NeuVector added support for chained certificates in version 3.2.2.  Microsoft's Application Gateway is one example of an Application Gateway requiring a chained certificate when using a not well-known CA."}),"\n",(0,r.jsx)(t.p,{children:"To add a chained certificate, the example tls.pem file should be a concatenation of the certificates."})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const c={},i=r.createContext(c);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);