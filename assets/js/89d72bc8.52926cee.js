"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4116],{68053:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(74848),t=o(28453);const i={title:"Docker & Mirantis Kubernetes Engine",taxonomy:{category:"docs"},slug:"/deploying/docker"},l=void 0,s={id:"deploying/docker/docker",title:"Docker & Mirantis Kubernetes Engine",description:"Kubernetes Deployment on Mirantis Kubernetes Engine",source:"@site/docs/02.deploying/05.docker/05.docker.md",sourceDirName:"02.deploying/05.docker",slug:"/deploying/docker",permalink:"/next/deploying/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/02.deploying/05.docker/05.docker.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Docker & Mirantis Kubernetes Engine",taxonomy:{category:"docs"},slug:"/deploying/docker"},sidebar:"tutorialSidebar",previous:{title:"RedHat OpenShift",permalink:"/next/deploying/openshift"},next:{title:"AWS Marketplace Billing",permalink:"/next/deploying/awsmarketplace"}},c={},d=[{value:"Kubernetes Deployment on Mirantis Kubernetes Engine",id:"kubernetes-deployment-on-mirantis-kubernetes-engine",level:3},{value:"Deploy NeuVector Containers Using Docker Native or UCP/Swarm",id:"deploy-neuvector-containers-using-docker-native-or-ucpswarm",level:3},{value:"Deploy Allinone for High Availability",id:"deploy-allinone-for-high-availability",level:4},{value:"Deploy Allinone using docker-compose (privileged mode)",id:"deploy-allinone-using-docker-compose-privileged-mode",level:4},{value:"Add an enforcer container using docker-compose (privileged mode)",id:"add-an-enforcer-container-using-docker-compose-privileged-mode",level:4},{value:"Deploy the NeuVector Scanner Container",id:"deploy-the-neuvector-scanner-container",level:4},{value:"Deployment Without Using Privileged Mode",id:"deployment-without-using-privileged-mode",level:4},{value:"Deploy allinone (NO privileged mode) with docker-compose",id:"deploy-allinone-no-privileged-mode-with-docker-compose",level:4},{value:"Deploy enforcer (NO privileged mode) with docker-compose",id:"deploy-enforcer-no-privileged-mode-with-docker-compose",level:4},{value:"Deploy allinone (privileged mode) with docker run",id:"deploy-allinone-privileged-mode-with-docker-run",level:4},{value:"Deploy enforcer (privileged mode) with docker run",id:"deploy-enforcer-privileged-mode-with-docker-run",level:4},{value:"Deploy allinone (NO privileged mode) with docker run",id:"deploy-allinone-no-privileged-mode-with-docker-run",level:4},{value:"Deploy enforcer (NO privileged mode) with docker run",id:"deploy-enforcer-no-privileged-mode-with-docker-run",level:4},{value:"Deploy Separate NeuVector Components on Different Hosts",id:"deploy-separate-neuvector-components-on-different-hosts",level:3},{value:"Monitoring and Restarting NeuVector",id:"monitoring-and-restarting-neuvector",level:3},{value:"Deploying Without Privileged Mode",id:"deploying-without-privileged-mode",level:3},{value:"Docker Native Updates",id:"docker-native-updates",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"kubernetes-deployment-on-mirantis-kubernetes-engine",children:"Kubernetes Deployment on Mirantis Kubernetes Engine"}),"\n",(0,r.jsxs)(n.p,{children:["Follow the instructions in the ",(0,r.jsx)(n.a,{href:"/deploying/kubernetes",children:"Kubernetes section"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"NeuVector does not support mixed Kubernetes / Swarm clusters."})}),"\n",(0,r.jsx)(n.h3,{id:"deploy-neuvector-containers-using-docker-native-or-ucpswarm",children:"Deploy NeuVector Containers Using Docker Native or UCP/Swarm"}),"\n",(0,r.jsx)(n.p,{children:"Note that native Docker deployment on Mirantis Kubernetes Engine using Swarm DOES NOT support deployment of services with containers in privileged mode, or with seccomp capabilities added. To deploy in this environment, you must use Docker Compose or Run to deploy the NeuVector containers. You can use the remote host deployment (docker-compose -H HOST) to make this task easier."}),"\n",(0,r.jsx)(n.p,{children:"Here are the sample docker compose configuration files. Note that using docker native does not support deploying the enforcer on the same node as the controller, requiring the use of the Allinone container if controller and enforcer functions are desired on a node."}),"\n",(0,r.jsx)(n.p,{children:"Note: The environment variable NV_PLATFORM_INFO=platform=Docker is used to notify NeuVector that the platform is Docker/Swarm, even though there may be unused Kubernetes containers detected by NeuVector on a Docker EE deployment. Also to be able to see these in Network Activity -> View -> Show System, add the environment variable for the Enforcer NV_SYSTEM_GROUPS."}),"\n",(0,r.jsx)(n.h4,{id:"deploy-allinone-for-high-availability",children:"Deploy Allinone for High Availability"}),"\n",(0,r.jsx)(n.p,{children:"For HA in production Docker native or EE environments, deploy the Allinone container on the first three production hosts. Each Allinone should point to the IP addresses of all Allinone hosts. For example, three Allinone containers is the minimum for HA, and the CLUSTER_JOIN_ADDR should list the three IP addresses separated by comma's. Additional HA Allinone's can be deployed in odd numbers, e.g. 5, 7. The deploy the Enforcer on the remaining hosts in the cluster, in any."}),"\n",(0,r.jsx)(n.h4,{id:"deploy-allinone-using-docker-compose-privileged-mode",children:"Deploy Allinone using docker-compose (privileged mode)"}),"\n",(0,r.jsx)(n.p,{children:"The following is an example of the docker-compose file to deploy the allinone container on the first node. Because the allinone container has an enforcer module inside, application containers on the same node can be secured. Both greenfield and brownfield deployment are supported."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"allinone:\n    pid: host\n    image: neuvector/allinone:<version>\n    container_name: allinone\n    privileged: true\n    environment:\n        - CLUSTER_JOIN_ADDR=node_ip\n        - NV_PLATFORM_INFO=platform=Docker\n    ports:\n        - 18300:18300\n        - 18301:18301\n        - 18400:18400\n        - 18401:18401\n        - 18301:18301/udp\n        - 8443:8443\n    volumes:\n        - /lib/modules:/lib/modules:ro\n        - /var/neuvector:/var/neuvector\n        - /var/run/docker.sock:/var/run/docker.sock:ro\n        - /proc:/host/proc:ro\n        - /sys/fs/cgroup:/host/cgroup:ro\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The most important environment variable is the ",(0,r.jsx)(n.strong,{children:"CLUSTER_JOIN_ADDR"}),". It is the IP address that other enforcers connect to. Normally, it should be set to the IP address of the node where all-in-one container is running."]}),"\n",(0,r.jsxs)(n.p,{children:["Port 18300 and 18301 are default ports for cluster communication. They must be identical for all controllers and enforcers in the cluster. Please refer to ",(0,r.jsx)(n.em,{children:'"Docker-compose Details"'})," section for how to change the default ports."]}),"\n",(0,r.jsx)(n.p,{children:"Note: To expose the REST API in the Allinone, add the port map for 10443, for example - 10443:10443."}),"\n",(0,r.jsx)(n.h4,{id:"add-an-enforcer-container-using-docker-compose-privileged-mode",children:"Add an enforcer container using docker-compose (privileged mode)"}),"\n",(0,r.jsx)(n.p,{children:"This is an example of docker-compose file to join an enforcer into the cluster. Both greenfield and brownfield deployment are supported."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"enforcer:\n    pid: host\n    image: neuvector/enforcer:<version>\n    container_name: enforcer\n    privileged: true\n    environment:\n        - CLUSTER_JOIN_ADDR=controller_node_ip\n        - NV_PLATFORM_INFO=platform=Docker\n    ports:\n        - 18301:18301\n        - 18401:18401\n        - 18301:18301/udp\n    volumes:\n        - /lib/modules:/lib/modules:ro\n        - /var/run/docker.sock:/var/run/docker.sock:ro\n        - /proc:/host/proc:ro\n        - /sys/fs/cgroup/:/host/cgroup/:ro\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The most important environment variable is ",(0,r.jsx)(n.strong,{children:"CLUSTER_JOIN_ADDR"}),". For enforcers, replace ",(0,r.jsx)(n.code,{children:"<controller_node_ip>"})," with the controller's node IP address. Typically, ",(0,r.jsx)(n.strong,{children:"CLUSTER_JOIN_ADDR"})," in the controller/all-in-one's docker-compose file and enforcer's docker-compose file have the same value."]}),"\n",(0,r.jsx)(n.h4,{id:"deploy-the-neuvector-scanner-container",children:"Deploy the NeuVector Scanner Container"}),"\n",(0,r.jsxs)(n.p,{children:["From NeuVector 4.0+, a separate scanner container must be deployed to perform vulnerability scanning. Important: Always use the ",":latest"," tag when pulling and running the scanner image to ensure the latest CVE database is deployed."]}),"\n",(0,r.jsx)(n.p,{children:"Sample docker run to deploy the scanner on the same host as the controller"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -td --name scanner -e CLUSTER_JOIN_ADDR=controller_node_ip -p 18402:18402 -v /var/run/docker.sock:/var/run/docker.sock:ro neuvector/scanner:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"And sample docker-compose"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Scanner:\n   image: neuvector/scanner:latest\n   container_name: scanner\n   environment:\n     - CLUSTER_JOIN_ADDR=controller_node_ip\n   ports:\n     - 18402:18402\n   volumes:\n     - /var/run/docker.sock:/var/run/docker.sock:ro\n"})}),"\n",(0,r.jsx)(n.p,{children:"To deploy the scanner on a different host than the controller, add the environment variable CLUSTER_ADVERTISED_ADDR so the controller can reach the scanner."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -td --name scanner -e CLUSTER_JOIN_ADDR=controller_node_ip -e CLUSTER_ADVERTISED_ADDR=scanner_host_ip -p 18402:18402 -v /var/run/docker.sock:/var/run/docker.sock:ro neuvector/scanner:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"To deploy multiple scanners on the same host as the controller, remove the port mapping and CLUSTER_ADVERTISED_ADDR environment variable."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -itd --name s1  -e CLUSTER_JOIN_ADDR=controller_node_ip neuvector/scanner:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where s1 is scanner 1 (use s2, s3 etc for each additional scanner)."}),"\n",(0,r.jsxs)(n.p,{children:["To deploy a stand alone scanner (no controller/allinone), please see the section ",(0,r.jsx)(n.a,{href:"/scanning/scanners",children:"Parallel and Standalone Scanners"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To update the Scanner in order to get the latest CVE database updates from NeuVector, create a cron job to stop and restart the scanner, pulling the latest. See ",(0,r.jsx)(n.a,{href:"/scanning/updating#docker-native-updates",children:"this section"})," for details."]}),"\n",(0,r.jsx)(n.h4,{id:"deployment-without-using-privileged-mode",children:"Deployment Without Using Privileged Mode"}),"\n",(0,r.jsx)(n.p,{children:"For some platform configurations it is possible to deploy the NeuVector containers without requiring them to run in privileged mode. The configuration must support the ability to add capabilities and set the apparmor profile. Note that Docker DataCenter/UCP and Swarm currently do not support this, but it is still possible to deploy NeuVector manually using Compose or Run."}),"\n",(0,r.jsx)(n.h4,{id:"deploy-allinone-no-privileged-mode-with-docker-compose",children:"Deploy allinone (NO privileged mode) with docker-compose"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"allinone:\n    pid: host\n    image: neuvector/allinone:<version>\n    container_name: neuvector.allinone\n    cap_add:\n        - SYS_ADMIN\n        - NET_ADMIN\n        - SYS_PTRACE\n        - IPC_LOCK\n    security_opt:\n        - apparmor=unconfined\n        - seccomp=unconfined\n        - label=disable\n    environment:\n        - CLUSTER_JOIN_ADDR=[AllInOne Node IP Address]\n        - NV_PLATFORM_INFO=platform=Docker\n    ports:\n        - 18300:18300\n        - 18301:18301\n        - 18400:18400\n        - 18401:18401\n        - 18301:18301/udp\n        - 8443:8443\n    volumes:\n        - /lib/modules:/lib/modules:ro\n        - /var/run/docker.sock:/var/run/docker.sock:ro\n        - /proc:/host/proc:ro\n        - /sys/fs/cgroup:/host/cgroup:ro\n        - /var/neuvector:/var/neuvector\n"})}),"\n",(0,r.jsx)(n.h4,{id:"deploy-enforcer-no-privileged-mode-with-docker-compose",children:"Deploy enforcer (NO privileged mode) with docker-compose"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"enforcer:\n    pid: host\n    image: neuvector/enforcer:<version>\n    container_name: neuvector.enforcer\n    cap_add:\n        - SYS_ADMIN\n        - NET_ADMIN\n        - SYS_PTRACE\n        - IPC_LOCK\n    security_opt:\n        - apparmor=unconfined\n        - seccomp=unconfined\n        - label=disable\n    environment:\n        - CLUSTER_JOIN_ADDR=[AllInOne Node IP Address]\n        - NV_PLATFORM_INFO=platform=Docker\n    ports:\n        - 18301:18301\n        - 18401:18401\n        - 18301:18301/udp\n    volumes:\n        - /lib/modules:/lib/modules:ro\n        - /var/run/docker.sock:/var/run/docker.sock:ro\n        - /proc:/host/proc:ro\n        - /sys/fs/cgroup/:/host/cgroup/:ro\n"})}),"\n",(0,r.jsx)(n.h4,{id:"deploy-allinone-privileged-mode-with-docker-run",children:"Deploy allinone (privileged mode) with docker run"}),"\n",(0,r.jsx)(n.p,{children:"You can use docker run instead of compose to deploy. Here are samples."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -d --name allinone \\\n--pid=host \\\n--privileged \\\n    -e CLUSTER_JOIN_ADDR=[AllInOne Node IP Address] \\\n    -e NV_PLATFORM_INFO=platform=Docker \\\n    -p 18300:18300 \\\n    -p 18301:18301 \\\n    -p 18400:18400 \\\n    -p 18401:18401 \\\n    -p 18301:18301/udp \\\n    -p 8443:8443 \\\n    -v /lib/modules:/lib/modules:ro \\\n    -v /var/neuvector:/var/neuvector \\\n    -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n    -v /sys/fs/cgroup:/host/cgroup:ro \\\n    -v /proc:/host/proc:ro \\\nneuvector/allinone:<version>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"deploy-enforcer-privileged-mode-with-docker-run",children:"Deploy enforcer (privileged mode) with docker run"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -d --name enforcer \\\n--pid=host \\\n--privileged \\\n    -e CLUSTER_JOIN_ADDR=[AllInOne Node IP Address] \\\n    -e NV_PLATFORM_INFO=platform=Docker \\\n    -p 18301:18301 \\\n    -p 18401:18401 \\\n    -p 18301:18301/udp \\\n    -v /lib/modules:/lib/modules:ro \\\n    -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n    -v /sys/fs/cgroup:/host/cgroup:ro \\\n    -v /proc:/host/proc:ro \\\nneuvector/enforcer:<version>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"deploy-allinone-no-privileged-mode-with-docker-run",children:"Deploy allinone (NO privileged mode) with docker run"}),"\n",(0,r.jsx)(n.p,{children:"You can use docker run instead of compose to deploy. Here are samples."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -d --name allinone \\\n--pid=host \\\n--cap-add=SYS_ADMIN \\\n--cap-add=NET_ADMIN \\\n--cap-add=SYS_PTRACE \\\n--cap-add=IPC_LOCK \\\n--security-opt label=disable \\\n--security-opt apparmor=unconfined \\\n--security-opt seccomp=unconfined \\\n    -e CLUSTER_JOIN_ADDR=[AllInOne Node IP Address] \\\n    -e NV_PLATFORM_INFO=platform=Docker \\\n    -p 18300:18300 \\\n    -p 18301:18301 \\\n    -p 18400:18400 \\\n    -p 18401:18401 \\\n    -p 18301:18301/udp \\\n    -p 8443:8443 \\\n    -v /lib/modules:/lib/modules:ro \\\n    -v /var/neuvector:/var/neuvector \\\n    -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n    -v /sys/fs/cgroup:/host/cgroup:ro \\\n    -v /proc:/host/proc:ro \\\nneuvector/allinone:<version>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"deploy-enforcer-no-privileged-mode-with-docker-run",children:"Deploy enforcer (NO privileged mode) with docker run"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -d --name enforcer \\\n--pid=host \\\n--cap-add=SYS_ADMIN \\\n--cap-add=NET_ADMIN \\\n--cap-add=SYS_PTRACE \\\n--cap-add=IPC_LOCK \\\n--security-opt label=disable \\\n--security-opt apparmor=unconfined \\\n--security-opt seccomp=unconfined \\\n    -e CLUSTER_JOIN_ADDR=[AllInOne Node IP Address]  \\\n    -e NV_PLATFORM_INFO=platform=Docker \\\n    -p 18301:18301 \\\n    -p 18401:18401 \\\n    -p 18301:18301/udp \\\n    -v /lib/modules:/lib/modules:ro \\\n    -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n    -v /sys/fs/cgroup:/host/cgroup:ro \\\n    -v /proc:/host/proc:ro \\\nneuvector/enforcer:<version>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deploy-separate-neuvector-components-on-different-hosts",children:"Deploy Separate NeuVector Components on Different Hosts"}),"\n",(0,r.jsx)(n.p,{children:"If planning to dedicate a docker host to a Controller and/or Manager (no Enforcer) these containers can be deployed individually instead of the Allinone. Note that docker does not support deploying the enforcer on the same node as the controller as separate components, requiring the use of the Allinone container if controller and enforcer functions are desired on a node."}),"\n",(0,r.jsx)(n.p,{children:"Controller compose file (replace [controller IP] with IP of the first controller node)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"controller:\n    image: neuvector/controller:<version>\n    container_name: controller\n    pid: host\n    privileged: true\n    environment:\n      - CLUSTER_JOIN_ADDR=[controller IP]\n      - NV_PLATFORM_INFO=platform=Docker\n    ports:\n        - 18300:18300\n        - 18301:18301\n        - 18400:18400\n        - 18401:18401\n        - 18301:18301/udp\n        - 10443:10443\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n      - /proc:/host/proc:ro\n      - /sys/fs/cgroup:/host/cgroup:ro\n      - /var/neuvector:/var/neuvector\n"})}),"\n",(0,r.jsx)(n.p,{children:"Docker run can also be used, for example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -itd --privileged --name neuvector.controller -e CLUSTER_JOIN_ADDR=controller_ip -p 18301:18301 -p 18301:18301/udp -p 18300:18300 -p 18400:18400 -p 10443:10443 -v /var/neuvector:/var/neuvector -v /var/run/docker.sock:/var/run/docker.sock:ro -v /proc:/host/proc:ro -v /sys/fs/cgroup/:/host/cgroup/:ro neuvector/controller:<version>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Manager compose file (replace [controller IP] with IP of controller node to connect to). The Docker UCP HRM service uses the default port 8443 which conflicts with the NeuVector console port. If using the default HRM port, then change the NeuVector port mapping in the example below to another port, for example 9443:8443 for the manager container as shown below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"manager:\n    image: neuvector/manager:<version>\n    container_name: nvmanager\n    environment:\n      - CTRL_SERVER_IP=[controller IP]\n    ports:\n      - 9443:8443\n"})}),"\n",(0,r.jsx)(n.p,{children:"The compose file for the Enforcer:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"enforcer:\n    image: neuvector/enforcer:<version>\n    pid: host\n    container_name: enforcer\n    privileged: true\n    environment:\n        - CLUSTER_JOIN_ADDR=controller_node_ip\n        - NV_PLATFORM_INFO=platform=Docker\n    ports:\n        - 18301:18301\n        - 18401:18401\n        - 18301:18301/udp\n    volumes:\n        - /lib/modules:/lib/modules:ro\n        - /var/run/docker.sock:/var/run/docker.sock:ro\n        - /proc:/host/proc:ro\n        - /sys/fs/cgroup/:/host/cgroup/:ro\n"})}),"\n",(0,r.jsx)(n.h3,{id:"monitoring-and-restarting-neuvector",children:"Monitoring and Restarting NeuVector"}),"\n",(0,r.jsx)(n.p,{children:"Since the NeuVector containers are not deployed as a UCP/Swarm service, they are not automatically started/restarted on nodes. You should set up alerting through your SIEM system for NeuVector SYSLOG events or through DataCenter to detect if a NeuVector container is not running."}),"\n",(0,r.jsx)(n.h3,{id:"deploying-without-privileged-mode",children:"Deploying Without Privileged Mode"}),"\n",(0,r.jsx)(n.p,{children:"In general you\u2019ll need to replace the privileged setting with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"    cap_add:\n        - SYS_ADMIN\n        - NET_ADMIN\n        - SYS_PTRACE\n        - IPC_LOCK\n    security_opt:\n        - apparmor=unconfined\n        - seccomp=unconfined\n        - label=disable\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above syntax is for Docker EE v17.06.0+. Versions prior to this use the : instead of =, for example apparmor",":unconfined","."]}),"\n",(0,r.jsx)(n.h3,{id:"docker-native-updates",children:"Docker Native Updates"}),"\n",(0,r.jsx)(n.admonition,{title:"important",type:"warning",children:(0,r.jsxs)(n.p,{children:["Always use the ",(0,r.jsx)(n.code,{children:":latest"})," tag when pulling and running the scanner image to ensure the latest CVE database is deployed."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker stop scanner\ndocker rm <scanner id>\ndocker pull neuvector/scanner:latest\n<docker run command from below>\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"docker rm -f <scanner id>"})," can also be used to force stop and removal of the running scanner."]}),(0,r.jsx)(n.p,{children:"For docker-compose"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker-compose -f file.yaml down\ndocker-compose -f file.yaml pull\t\t// pre-pull the image before starting the scanner\ndocker-compose -f file.yaml up -d\n"})}),(0,r.jsx)(n.p,{children:"Sample docker run"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -td --name scanner -e CLUSTER_JOIN_ADDR=controller_node_ip -e CLUSTER_ADVERTISED_ADDR=node_ip -e SCANNER_DOCKER_URL=tcp://192.168.1.10:2376 -p 18402:18402 -v /var/run/docker.sock:/var/run/docker.sock:ro neuvector/scanner:latest\n"})}),(0,r.jsx)(n.p,{children:"And sample docker-compose"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"Scanner:\n   image: neuvector/scanner:latest\n   container_name: scanner\n   environment:\n     - SCANNER_DOCKER_URL=tcp://192.168.1.10:2376\n     - CLUSTER_JOIN_ADDR=controller_node_ip\n     - CLUSTER_ADVERTISED_ADDR=node_ip\n   ports:\n     - 18402:18402\n   volumes:\n     - /var/run/docker.sock:/var/run/docker.sock:ro\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>s});var r=o(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);