"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4908],{26789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(74848),o=n(28453);const a={title:"AWS Marketplace Billing",taxonomy:{category:"docs"},slug:"/deploying/awsmarketplace"},i=void 0,s={id:"deploying/awsmarketplace/awsmarketplace",title:"AWS Marketplace Billing",description:"Deploy NeuVector from AWS Marketplace Pay-As-You-Go Listing",source:"@site/versioned_docs/version-5.3/02.deploying/06.awsmarketplace/06.awsmarketplace.md",sourceDirName:"02.deploying/06.awsmarketplace",slug:"/deploying/awsmarketplace",permalink:"/deploying/awsmarketplace",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/02.deploying/06.awsmarketplace/06.awsmarketplace.md",tags:[],version:"5.3",sidebarPosition:6,frontMatter:{title:"AWS Marketplace Billing",taxonomy:{category:"docs"},slug:"/deploying/awsmarketplace"},sidebar:"tutorialSidebar",previous:{title:"Docker & Mirantis Kubernetes Engine",permalink:"/deploying/docker"},next:{title:"Azure Marketplace Billing",permalink:"/deploying/azuremarketplace"}},l={},c=[{value:"Deploy NeuVector from AWS Marketplace Pay-As-You-Go Listing",id:"deploy-neuvector-from-aws-marketplace-pay-as-you-go-listing",level:3},{value:"Supported Configurations",id:"supported-configurations",level:3},{value:"Single Cluster Usage Billing",id:"single-cluster-usage-billing",level:4},{value:"Multi-cluster Usage Billing",id:"multi-cluster-usage-billing",level:4},{value:"Enabling PAYG NeuVector Prime Billing for Existing NeuVector Clusters",id:"enabling-payg-neuvector-prime-billing-for-existing-neuvector-clusters",level:4},{value:"Enabling PAYG NeuVector Prime Billing for Rancher, OpenShift, Tanzu, or other NeuVector supported clusters",id:"enabling-payg-neuvector-prime-billing-for-rancher-openshift-tanzu-or-other-neuvector-supported-clusters",level:4},{value:"Deploying NeuVector Prime through the AWS Marketplace",id:"deploying-neuvector-prime-through-the-aws-marketplace",level:3},{value:"Setting the Admin Username and Password",id:"setting-the-admin-username-and-password",level:4},{value:"Console Login through Load Balancer",id:"console-login-through-load-balancer",level:4},{value:"Obtaining Support",id:"obtaining-support",level:3},{value:"Upgrading a NeuVector PAYG Cluster",id:"upgrading-a-neuvector-payg-cluster",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"deploy-neuvector-from-aws-marketplace-pay-as-you-go-listing",children:"Deploy NeuVector from AWS Marketplace Pay-As-You-Go Listing"}),"\n",(0,r.jsx)(t.p,{children:"NeuVector Prime supports monthly billing through your AWS account in a Pay-As-You-Go (PAYG) billing subscription for SUSE support of NeuVector."}),"\n",(0,r.jsx)(t.p,{children:"Usage is billed monthly based on the average number of nodes protected by NeuVector during the month. Please see the NeuVector marketplace listing for your region for specific pricing tiers and other information."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-u2ciiono2w3h2?sr=0-3&ref_=beagle&applicationId=AWSMPContessa",children:"NeuVector Prime with 24x7 Support (non-EU and non-UK only)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://aws.amazon.com/marketplace/pp/prodview-xkfyjdvvkuohs",children:"NeuVector Prime with 24x7 Support (EU and UK only)"})}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"AWS Private Offers are available for NeuVector for special pricing situations in lieu of standard PAYG pricing."})}),"\n",(0,r.jsx)(t.h3,{id:"supported-configurations",children:"Supported Configurations"}),"\n",(0,r.jsx)(t.p,{children:"The marketplace PAYG listing supports deployment on supported target environments only. As of the July release, only EKS is supported for the billing adapter (see below options for other environments such as Rancher, Kubernetes, OpenShift etc). Each cluster can report its usage (nodes) independently, or an aggregated node count for a multi-cluster deployment can be reported. An aggregated, multi-cluster deployment can take advantage of the volume discount tiers offered by pooling all nodes across clusters into a single usage billing calculation."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"All clusters in PAYG billing (single, primary, remotes) must be running NeuVector version 5.2.0 or later."})}),"\n",(0,r.jsx)(t.h4,{id:"single-cluster-usage-billing",children:"Single Cluster Usage Billing"}),"\n",(0,r.jsx)(t.p,{children:"Each cluster onto which you have deployed the PAYG billing adapter through the marketplace will report usage information for your AWS account."}),"\n",(0,r.jsx)(t.h4,{id:"multi-cluster-usage-billing",children:"Multi-cluster Usage Billing"}),"\n",(0,r.jsxs)(t.p,{children:["To be able to aggregate the node counts from multiple clusters in order to take advantage of volume discounts, the clusters must have been configured for Multi-cluster federation as described in the NeuVector ",(0,r.jsx)(t.a,{href:"https://open-docs.neuvector.com/navigation/multicluster",children:"docs"}),". NeuVector on the Primary cluster MUST have been deployed through the AWS Marketplace, with the billing adapter installed in the primary cluster, in order to be able to report the primary and all downstream remote cluster node counts. Do not deploy NeuVector through the marketplace on downstream remote clusters. Use standard deployment methods (Helm, Operator, kubectl etc) described in the NeuVector ",(0,r.jsx)(t.a,{href:"https://open-docs.neuvector.com/deploying",children:"docs"})," on remote clusters."]}),"\n",(0,r.jsx)(t.h4,{id:"enabling-payg-neuvector-prime-billing-for-existing-neuvector-clusters",children:"Enabling PAYG NeuVector Prime Billing for Existing NeuVector Clusters"}),"\n",(0,r.jsx)(t.p,{children:"There are several options to enable NeuVector Prime billing on existing NeuVector clusters."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Option 1: The existing cluster must be on a supported PAYG platform. Backup the NeuVector configuration of the existing cluster, remove the NeuVector deployment, then deploy NeuVector through the AWS marketplace. After successful deployment, import the backup configuration. Note: It is recommended that the existing cluster be running version NeuVector 5.2.0 or later before the backup and removal. For Helm based deployments, this is a sample Helm upgrade command (replacing account ID, IAM role name, previous helm version values file etc):"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"helm upgrade -n neuvector neuvector  oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/neuvector-csp-billing-adapter-llc/core --version 2.4.30002023052201 --create-namespace \\\n--set awsbilling.accountNumber=$AWS_ACCT_ID,awsbilling.roleName=$IAM_ROLE_NAME \\\n--set awsbilling.enabled=true,containerd.enabled=true \n-f values-x.y.z.yaml\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Option 2: Add the existing cluster as a federated remote cluster to a (existing or newly deployed) primary cluster which already has PAYG billing deployed on it. In this case, the existing cluster can be on any platform supported by NeuVector."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"enabling-payg-neuvector-prime-billing-for-rancher-openshift-tanzu-or-other-neuvector-supported-clusters",children:"Enabling PAYG NeuVector Prime Billing for Rancher, OpenShift, Tanzu, or other NeuVector supported clusters"}),"\n",(0,r.jsx)(t.p,{children:"Although PAYG billing deployment is supported on a limited set of AWS platforms (only EKS at initial July release), billing for other supported NeuVector platforms can be accomplished using the multi-cluster federation configuration. As long as the primary cluster has the PAYG billing deployment of NeuVector, downstream clusters can be any supported NeuVector clusters such as Rancher, Kubernetes, OpenShift, or Tanzu. Downstream clusters can even be on-premise, or on other clouds as long as the remote cluster can be federated to the primary (with appropriate network access)."}),"\n",(0,r.jsx)(t.p,{children:"For Rancher managed downstream clusters with SSO to NeuVector, these clusters can be federated to a non-Rancher primary cluster which is deployed through the AWS marketplace in order to benefit from consolidated multi-cluster billing."}),"\n",(0,r.jsx)(t.h3,{id:"deploying-neuvector-prime-through-the-aws-marketplace",children:"Deploying NeuVector Prime through the AWS Marketplace"}),"\n",(0,r.jsx)(t.p,{children:"A special billing interface is required to enable PAYG to your AWS account. This must be deployed, together with NeuVector from the AWS Marketplace listing for NeuVector. To deploy the billing adapter and NeuVector see the Usage instructions for your region in the marketplace listing above."}),"\n",(0,r.jsx)(t.p,{children:"The helm install command uses defaults in the values.yaml file. Important defaults to check are the manager service type (LoadBalancer) and container run-time (containerd - which is the typical default for EKS clusters). The default admin username is disabled, and users are required to set a username and password through a secret prior to deployment."}),"\n",(0,r.jsx)(t.h4,{id:"setting-the-admin-username-and-password",children:"Setting the Admin Username and Password"}),"\n",(0,r.jsx)(t.p,{children:"It is required to set the admin username and password as a Kubernetes secret prior to deployment."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"kubectl create secret generic neuvector-init --from-file=userinitcfg.yaml -n neuvector\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The above step is mandatory, otherwise an admin user will not be created upon NeuVector deployment, making the NeuVector deployment unmanageable."})}),"\n",(0,r.jsx)(t.p,{children:"Sample userinitcfg.yaml content:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"users:\n- Fullname: admin\n  Password: (ValidPassword)\n  Role: admin\n# 8 character(s) minimum,1 uppercase character(s),1 lowercase character(s), 1 number(s).\n"})}),"\n",(0,r.jsx)(t.p,{children:"Sample helm install command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"helm install -n neuvector neuvector --create-namespace \\\noci://709825985650.dkr.ecr.us-east-1.amazonaws.com/suse/neuvector-csp-billing-adapter-llc/core --version 2.6.1 \\\n--set awsbilling.accountNumber=$AWS_ACCOUNT_ID \\\n--set awsbilling.roleName=$ROLE_NAME \\\n--set manager.svc.type=LoadBalancer\n"})}),"\n",(0,r.jsx)(t.p,{children:"See the Usage instructions on the AWS marketplace listing for detailed NeuVector instructions."}),"\n",(0,r.jsx)(t.h4,{id:"console-login-through-load-balancer",children:"Console Login through Load Balancer"}),"\n",(0,r.jsx)(t.p,{children:"If the manager service type was set to Load Balancer during install, an external IP (URL) has been assigned for logging into the NeuVector console. Typically, this URL is accessible from the internet, but your organization may have placed additional restrictions on external access to your cluster. To see the load balancer, type:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"kubectl get svc -n neuvector neuvector-service-webui\n"})}),"\n",(0,r.jsx)(t.p,{children:"To get the full login url, type:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'SERVICE_IP=$(kubectl get svc --namespace neuvector neuvector-service-webui -o jsonpath="{.status.loadBalancer.ingress[0].hostname}")\necho https://$SERVICE_IP:8443\n'})}),"\n",(0,r.jsx)(t.p,{children:"And you will see something like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"https://a2647ecdxx33498948a70eea84c5-18386345695.us-west-2.elb.amazonaws.com:8443\n"})}),"\n",(0,r.jsx)(t.p,{children:"This is how you can access the NeuVector console from your browser on the default port 8443."}),"\n",(0,r.jsxs)(t.p,{children:["Once logged in, you can begin to ",(0,r.jsx)(t.a,{href:"https://open-docs.neuvector.com/navigation/navigation",children:"navigate and configure NeuVector"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"The NeuVector scanner image is updated daily with a new CVE database on the NeuVector docker hub registry. It is recommended that the image path be changed to allow for automated daily updates by modifying the scanner and updater image paths AFTER successful initial deployment. For example:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"kubectl set image  deploy/neuvector-scanner-pod neuvector-scanner-pod=docker.io/neuvector/scanner:latest\nkubectl set image  cronjob/neuvector-updater-pod neuvector-updater-pod=docker.io/neuvector/updater:latest\n"})})]}),"\n",(0,r.jsx)(t.h3,{id:"obtaining-support",children:"Obtaining Support"}),"\n",(0,r.jsxs)(t.p,{children:["Once PAYG billing is enabled for a cluster or multiple clusters, customers are eligible for support through the ",(0,r.jsx)(t.a,{href:"https://scc.suse.com/",children:"SUSE Support Center"})," (SCC) service. This is a web-based service for creating, viewing, and managing support requests. The actual link for submitting your support bundle as described below can be found ",(0,r.jsx)(t.a,{href:"https://scc.suse.com/cloudsupport",children:"here"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The SCC portal will require you to upload a Support Configuration bundle in order to verify your eligibility as well as provide cluster information required to start investigations. To download the support config, please go to Settings -> Configuration at the bottom of the page for the cluster in question. For multi-cluster configurations, only the Primary cluster's support config is required, even if the support inquiry is for a downstream remote cluster. If you do not have access to the Primary cluster, the remote cluster's support config is acceptable."}),"\n",(0,r.jsx)(t.h3,{id:"upgrading-a-neuvector-payg-cluster",children:"Upgrading a NeuVector PAYG Cluster"}),"\n",(0,r.jsx)(t.p,{children:"The AWS marketplace PAYG listing helm chart is tied to a specific billing adapter AND NeuVector version. These are updated periodically as new versions of the billing adapter or NeuVector are released. To update the NeuVector version to the latest version supported by the marketplace listing, use the Helm update command as normal. To update the NeuVector version to a more recent version than is specified in the marketplace listing, manually change the helm values for the images (registry, paths, version tags) to point to the desired version (e.g. docker.io, neuvector/controller:5.2.5)."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);