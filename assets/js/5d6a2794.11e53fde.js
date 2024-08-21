"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6137],{46289:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var n=t(74848),r=t(28453);const i={title:"CVE Database Sources & Version",taxonomy:{category:"docs"},slug:"/scanning/cve_sources"},c=void 0,a={id:"scanning/cve_sources/cve_sources",title:"CVE Database Sources & Version",description:"NeuVector Vulnerability (CVE) Database",source:"@site/versioned_docs/version-5.3/06.scanning/04.cve_sources/04.cve_sources.md",sourceDirName:"06.scanning/04.cve_sources",slug:"/scanning/cve_sources",permalink:"/scanning/cve_sources",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/06.scanning/04.cve_sources/04.cve_sources.md",tags:[],version:"5.3",sidebarPosition:4,frontMatter:{title:"CVE Database Sources & Version",taxonomy:{category:"docs"},slug:"/scanning/cve_sources"},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/scanning/build/github"},next:{title:"Updating the CVE Database",permalink:"/scanning/updating"}},d={},o=[{value:"NeuVector Vulnerability (CVE) Database",id:"neuvector-vulnerability-cve-database",level:3},{value:"CVE Database Version",id:"cve-database-version",level:3},{value:"Querying the CVE Database for Specific CVE Existence",id:"querying-the-cve-database-for-specific-cve-existence",level:3},{value:"CVE Database Sources",id:"cve-database-sources",level:3},{value:"General CVE Feeds",id:"general-cve-feeds",level:4},{value:"OS CVE Feeds",id:"os-cve-feeds",level:4},{value:"Application Based Feeds",id:"application-based-feeds",level:4},{value:"Scanner Accuracy",id:"scanner-accuracy",level:3},{value:"Scanner Performance",id:"scanner-performance",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h3,{id:"neuvector-vulnerability-cve-database",children:"NeuVector Vulnerability (CVE) Database"}),"\n",(0,n.jsx)(s.p,{children:"The NeuVector vulnerability database is updated nightly with sources from popular container base images and package providers. These updates are automatically built into the updater container and published to the NeuVector private docker hub registry. The list of sources included is evaluated frequently to ensure the accuracy of scan results."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"You control when to update the CVE database in your deployment. Please see the section Updating the CVE Database for details on how to update."})}),"\n",(0,n.jsx)(s.admonition,{title:"important",type:"warning",children:(0,n.jsx)(s.p,{children:"NeuVector is able to scan distroless and PhotonOS based images."})}),"\n",(0,n.jsx)(s.h3,{id:"cve-database-version",children:"CVE Database Version"}),"\n",(0,n.jsx)(s.p,{children:"The CVE database version and date can be seen in the console in the Platforms, Registries, Vulnerabilities tab in Containers/Nodes in Assets, and Risk Reports Scan Events."}),"\n",(0,n.jsx)(s.p,{children:"To use the REST API to query the version:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'curl -k -H "Content-Type: application/json" -H "X-Auth-Token: $_TOKEN_" "https://127.0.0.1:10443/v1/scan/scanner"\n'})}),"\n",(0,n.jsx)(s.p,{children:"Output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n\t"scanners": [\n\t\t{\n\t\t\t"cvedb_create_time": "2020-07-07T10:34:04Z",\n\t\t\t"cvedb_version": "1.950",\n\t\t\t"id": "0f043705948557828ac1831ee596588a0d050950113117ddd19ecd604982f4d9",\n\t\t\t"port": 18402,\n\t\t\t"server": "127.0.0.1"\n\t\t},\n\t\t{\n\t\t\t"cvedb_create_time": "2020-07-07T10:34:04Z",\n\t\t\t"cvedb_version": "1.950",\n\t\t\t"id": "9fa02c644d603f59331c95735158d137002d32a75ed1014326f5039f38d4d717",\n\t\t\t"port": 18402,\n\t\t\t"server": "192.168.9.95"\n\t\t}\n\t]\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"To query the NeuVector scanner for the database version:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kubectl exec <scanner pod> -n neuvector -- scanner -v -d /etc/neuvector/db/\n"})}),"\n",(0,n.jsx)(s.p,{children:"To use docker commands:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"docker exec scanner scanner -v -d /etc/neuvector/db/\n"})}),"\n",(0,n.jsx)(s.h3,{id:"querying-the-cve-database-for-specific-cve-existence",children:"Querying the CVE Database for Specific CVE Existence"}),"\n",(0,n.jsx)(s.p,{children:"An online service is provided for NeuVector Prime (paid subscription) customers to be able to query the CVE database to determine if a specific CVE exists in the current database version. Other CVE database queries are also available from this service. Please request access through your SUSE Support portal (SCC), SUSE Collective link, or contact your SUSE account representative to access this service."}),"\n",(0,n.jsx)(s.h3,{id:"cve-database-sources",children:"CVE Database Sources"}),"\n",(0,n.jsxs)(s.p,{children:["The most up-to-date list of CVE database sources can be found ",(0,n.jsx)(s.a,{href:"https://github.com/neuvector/vul-dbgen",children:"here"})]}),"\n",(0,n.jsx)(s.p,{children:"Sources include:"}),"\n",(0,n.jsx)(s.h4,{id:"general-cve-feeds",children:"General CVE Feeds"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Source"}),(0,n.jsx)(s.th,{children:"URL"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nvd and Mitre"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://nvd.nist.gov/feeds/json/cve/1.1",children:"https://nvd.nist.gov/feeds/json/cve/1.1"})})]})})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["NVD is a superset of CVE ",(0,n.jsx)(s.a,{href:"https://cve.mitre.org/about/cve_and_nvd_relationship.html",children:"https://cve.mitre.org/about/cve_and_nvd_relationship.html"})]})}),"\n",(0,n.jsx)(s.h4,{id:"os-cve-feeds",children:"OS CVE Feeds"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Source"}),(0,n.jsx)(s.th,{children:"URL"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"alpine"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://secdb.alpinelinux.org/",children:"https://secdb.alpinelinux.org/"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"amazon"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://alas.aws.amazon.com/",children:"https://alas.aws.amazon.com/"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"debian"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://security-tracker.debian.org/tracker/data/json",children:"https://security-tracker.debian.org/tracker/data/json"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Microsoft mariner"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/microsoft/CBL-MarinerVulnerabilityData",children:"https://github.com/microsoft/CBL-MarinerVulnerabilityData"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Oracle"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://linux.oracle.com/oval/",children:"https://linux.oracle.com/oval/"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Rancher OS"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://rancher.com/docs/os/v1.x/en/about/security/",children:"https://rancher.com/docs/os/v1.x/en/about/security/"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"redhat"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.redhat.com/security/data/oval/v2/",children:"https://www.redhat.com/security/data/oval/v2/"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SUSE linux"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://ftp.suse.com/pub/projects/security/oval/",children:"https://ftp.suse.com/pub/projects/security/oval/"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ubuntu"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://launchpad.net/ubuntu-cve-tracker",children:"https://launchpad.net/ubuntu-cve-tracker"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"application-based-feeds",children:"Application Based Feeds"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Source"}),(0,n.jsx)(s.th,{children:"URL"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:".NET"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"https://github.com/advisories",children:"https://github.com/advisories"}),", ",(0,n.jsx)(s.a,{href:"https://www.cvedetails.com/vulnerability-list/vendor_id-26/",children:"https://www.cvedetails.com/vulnerability-list/vendor_id-26/"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"apache"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.cvedetails.com/vendor/45/Apache.html",children:"https://www.cvedetails.com/vendor/45/Apache.html"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"busybox"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.cvedetails.com/vulnerability-list/vendor_id-4282/Busybox.html",children:"https://www.cvedetails.com/vulnerability-list/vendor_id-4282/Busybox.html"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"golang"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/advisories",children:"https://github.com/advisories"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"java"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openjdk.java.net/groups/vulnerability/advisories/",children:"https://openjdk.java.net/groups/vulnerability/advisories/"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"github maven"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/advisories?query=maven",children:"https://github.com/advisories?query=maven"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"kubernetes"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/issues-security/official-cve-feed/",children:"https://kubernetes.io/docs/reference/issues-security/official-cve-feed/"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nginx"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"http://nginx.org/en/security_advisories.html",children:"http://nginx.org/en/security_advisories.html"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"npm/nodejs"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/advisories?query=ecosystem%3Anpm",children:"https://github.com/advisories?query=ecosystem%3Anpm"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"python"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/pyupio/safety-db",children:"https://github.com/pyupio/safety-db"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"openssl"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://www.openssl.org/news/vulnerabilities.html",children:"https://www.openssl.org/news/vulnerabilities.html"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ruby"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://github.com/rubysec/ruby-advisory-db",children:"https://github.com/rubysec/ruby-advisory-db"})})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"scanner-accuracy",children:"Scanner Accuracy"}),"\n",(0,n.jsx)(s.p,{children:"NeuVector evaluates each source to determine how to most accurately scan for vulnerabilities. It is common for scan results from different vendors' scanners to return different results. This is because each vendor processes the sources differently."}),"\n",(0,n.jsx)(s.p,{children:"A higher number of vulnerabilities detected by one scanner is not necessarily better than another. This is because there can be false positives which return inaccurate vulnerability results."}),"\n",(0,n.jsx)(s.p,{children:"NeuVector supports both layered and non-layered (compacted) scan results for images. The layered scan shows vulnerabilities in each layer, while the non-layered shows only vulnerabilities at the surface."}),"\n",(0,n.jsx)(s.h3,{id:"scanner-performance",children:"Scanner Performance"}),"\n",(0,n.jsx)(s.p,{children:"A number of factors determine scanner performance. For registry scanning, the number and size of images as well as if a layered scan is being performed will determine performance. For run-time scans, the collection of container data is distributed across all Enforcers, then scheduled by the Controller for database comparison."}),"\n",(0,n.jsx)(s.p,{children:"Multiple parallel scanners can be deployed to increase scan performance for a large number of images. The controller will schedule scan tasks across all scanners. Each scanner is a container which is deployed by a Kubernetes deployment/replicaset."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>a});var n=t(96540);const r={},i=n.createContext(r);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);