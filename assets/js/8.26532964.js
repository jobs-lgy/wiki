(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{188:function(t,e,r){"use strict";r.r(e);var a=r(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"docker介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker介绍")]),t._v(" "),r("h2",{attrs:{id:"什么是docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是docker","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是Docker")]),t._v(" "),r("p",[t._v("Docker 最初是 dotCloud 公司创始人 Solomon Hykes 在法国期间发起的一个公司内部项目，它是基于 dotCloud 公司多年云服务技术的一次革新，并于 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Docker_(software)",target:"_blank",rel:"noopener noreferrer"}},[t._v("2013 年 3 月以 Apache 2.0 授权协议开源"),r("OutboundLink")],1),t._v("，主要项目代码在 "),r("a",{attrs:{href:"https://github.com/moby/moby",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),r("OutboundLink")],1),t._v(" 上进行维护。Docker 项目后来还加入了 Linux 基金会，并成立推动 "),r("a",{attrs:{href:"https://www.opencontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("开放容器联盟（OCI）"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("Docker 自开源后受到广泛的关注和讨论，至今其 GitHub 项目已经超过 4 万 6 千个星标和一万多个 fork。甚至由于 Docker 项目的火爆，在 2013 年底，"),r("a",{attrs:{href:"https://blog.docker.com/2013/10/dotcloud-is-becoming-docker-inc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dotCloud 公司决定改名为 Docker"),r("OutboundLink")],1),t._v("。Docker 最初是在 Ubuntu 12.04 上开发实现的；Red Hat 则从 RHEL 6.5 开始对 Docker 进行支持；Google 也在其 PaaS 产品中广泛应用 Docker。")]),t._v(" "),r("p",[t._v("Docker 使用 Google 公司推出的 "),r("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go 语言"),r("OutboundLink")],1),t._v(" 进行开发实现，基于 Linux 内核的 "),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Cgroups",target:"_blank",rel:"noopener noreferrer"}},[t._v("cgroup"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("namespace"),r("OutboundLink")],1),t._v("，以及 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Aufs",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUFS"),r("OutboundLink")],1),t._v(" 类的 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"}},[t._v("Union FS"),r("OutboundLink")],1),t._v(" 等技术，对进程进行封装隔离，属于 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Operating-system-level_virtualization",target:"_blank",rel:"noopener noreferrer"}},[t._v("操作系统层面的虚拟化技术"),r("OutboundLink")],1),t._v("。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。最初实现是基于 "),r("a",{attrs:{href:"https://linuxcontainers.org/lxc/introduction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LXC"),r("OutboundLink")],1),t._v("，从 0.7 版本以后开始去除 LXC，转而使用自行开发的 "),r("a",{attrs:{href:"https://github.com/docker/libcontainer",target:"_blank",rel:"noopener noreferrer"}},[t._v("libcontainer"),r("OutboundLink")],1),t._v("，从 1.11 开始，则进一步演进为使用 "),r("a",{attrs:{href:"https://github.com/opencontainers/runc",target:"_blank",rel:"noopener noreferrer"}},[t._v("runC"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://github.com/containerd/containerd",target:"_blank",rel:"noopener noreferrer"}},[t._v("containerd"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。")]),t._v(" "),r("p",[t._v("下面的图片比较了 Docker 和传统虚拟化方式的不同之处。传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://ww4.sinaimg.cn/large/006tNc79gy1g5673df470j30j8079q33.jpg",alt:"传统虚拟化"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"http://ww4.sinaimg.cn/large/006tNc79gy1g5673ea1voj30j505ft8t.jpg",alt:"Docker"}})]),t._v(" "),r("h2",{attrs:{id:"docker-的应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-的应用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 的应用场景")]),t._v(" "),r("ul",[r("li",[t._v("Web 应用的自动化打包和发布")]),t._v(" "),r("li",[t._v("自动化测试和持续集成、发布")]),t._v(" "),r("li",[t._v("在服务型环境中部署和调整数据库或其他的后台应用")]),t._v(" "),r("li",[t._v("从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS (Platform-as-a-Service) 环境")])]),t._v(" "),r("h2",{attrs:{id:"为什么要使用-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么要使用 Docker")]),t._v(" "),r("h3",{attrs:{id:"更高效的利用系统资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更高效的利用系统资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 更高效的利用系统资源")]),t._v(" "),r("p",[t._v("由于容器不需要进行硬件虚拟以及运行完整操作系统等额外开销，Docker 对系统资源的利用率更高。无论是应用执行速度、内存损耗或者文件存储速度，都要比传统虚拟机技术更高效。因此，相比虚拟机技术，一个相同配置的主机，往往可以运行更多数量的应用。")]),t._v(" "),r("h3",{attrs:{id:"更快速的启动时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更快速的启动时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 更快速的启动时间")]),t._v(" "),r("p",[t._v("传统的虚拟机技术启动应用服务往往需要数分钟，而 Docker 容器应用，由于直接运行于宿主内核，无需启动完整的操作系统，因此可以做到秒级、甚至毫秒级的启动时间。大大的节约了开发、测试、部署的时间。")]),t._v(" "),r("h3",{attrs:{id:"一致的运行环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一致的运行环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 一致的运行环境")]),t._v(" "),r("p",[t._v("开发过程中一个常见的问题是环境一致性问题。由于开发环境、测试环境、生产环境不一致，导致有些 bug 并未在开发过程中被发现。而 Docker 的镜像提供了除内核外完整的运行时环境，确保了应用运行环境一致性。")]),t._v(" "),r("h3",{attrs:{id:"持续交付和部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#持续交付和部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 持续交付和部署")]),t._v(" "),r("p",[t._v("对开发和运维（"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/DevOps",target:"_blank",rel:"noopener noreferrer"}},[t._v("DevOps"),r("OutboundLink")],1),t._v("）人员来说，最希望的就是一次创建或配置，可以在任意地方正常运行。")]),t._v(" "),r("p",[t._v("使用 Docker 可以通过定制应用镜像来实现持续集成、持续交付、部署。开发人员可以通过 "),r("code",[t._v("Dockerfile")]),t._v("来进行镜像构建，并结合 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"}},[t._v("持续集成(Continuous Integration)"),r("OutboundLink")],1),t._v(" 系统进行集成测试，而运维人员则可以直接在生产环境中快速部署该镜像，甚至结合 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_delivery",target:"_blank",rel:"noopener noreferrer"}},[t._v("持续部署(Continuous Delivery/Deployment)"),r("OutboundLink")],1),t._v(" 系统进行自动部署。")]),t._v(" "),r("p",[t._v("而且使用 "),r("code",[t._v("Dockerfile")]),t._v(" 使镜像构建透明化，不仅仅开发团队可以理解应用运行环境，也方便运维团队理解应用运行所需条件，帮助更好的生产环境中部署该镜像。")]),t._v(" "),r("h3",{attrs:{id:"更轻松的迁移"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更轻松的迁移","aria-hidden":"true"}},[t._v("#")]),t._v(" 更轻松的迁移")]),t._v(" "),r("p",[t._v("由于 Docker 确保了执行环境的一致性，使得应用的迁移更加容易。Docker 可以在很多平台上运行，无论是物理机、虚拟机、公有云、私有云，甚至是笔记本，其运行结果是一致的。因此用户可以很轻易的将在一个平台上运行的应用，迁移到另一个平台上，而不用担心运行环境的变化导致应用无法正常运行的情况。")]),t._v(" "),r("h3",{attrs:{id:"更轻松的维护和扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更轻松的维护和扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 更轻松的维护和扩展")]),t._v(" "),r("p",[t._v("Docker 使用的分层存储以及镜像的技术，使得应用重复部分的复用更为容易，也使得应用的维护更新更加简单，基于基础镜像进一步扩展镜像也变得非常简单。此外，Docker 团队同各个开源项目团队一起维护了一大批高质量的 "),r("a",{attrs:{href:"https://store.docker.com/search?q=&source=verified&type=image",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方镜像"),r("OutboundLink")],1),t._v("，既可以直接在生产环境使用，又可以作为基础进一步定制，大大的降低了应用服务的镜像制作成本。")]),t._v(" "),r("h3",{attrs:{id:"对比传统虚拟机总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对比传统虚拟机总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 对比传统虚拟机总结")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("特性")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("容器")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("虚拟机")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("启动")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("秒级")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("分钟级")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("硬盘使用")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("一般为 "),r("code",[t._v("MB")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("一般为 "),r("code",[t._v("GB")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("性能")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("接近原生")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("弱于")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("系统支持量")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("单机支持上千个容器")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("一般几十个")])])])]),t._v(" "),r("h2",{attrs:{id:"术语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#术语","aria-hidden":"true"}},[t._v("#")]),t._v(" 术语")]),t._v(" "),r("p",[t._v("1、镜像")]),t._v(" "),r("ul",[r("li",[t._v("镜像是 用于创建容器的只读模板")]),t._v(" "),r("li",[t._v("通过docker build构建")]),t._v(" "),r("li",[t._v("由镜像层构成")]),t._v(" "),r("li",[t._v("镜像存储于Docker Registry")])]),t._v(" "),r("p",[t._v("2、容器")]),t._v(" "),r("ul",[r("li",[t._v("是镜像运行的实例")]),t._v(" "),r("li",[t._v("容器是应用运行环境的封装，具有轻量级、移植性高等特点")]),t._v(" "),r("li",[t._v("容器由镜像创建，内部封装所有运行应用所需依赖及可执行文件")])]),t._v(" "),r("p",[t._v("3、Registry和Repositories")]),t._v(" "),r("ul",[r("li",[t._v("Registry是存储docker镜像的地方")]),t._v(" "),r("li",[t._v("可自建私有Registry和使用共用Registry如Docker Hub")]),t._v(" "),r("li",[t._v("在Registry中，镜像存储在Repositories")]),t._v(" "),r("li",[t._v("Repositories是具有相同名字、不同标签的镜像集合")])]),t._v(" "),r("p",[t._v("4、Docker Hub")]),t._v(" "),r("ul",[r("li",[t._v("公共Docker Registry")]),t._v(" "),r("li",[t._v("私有Docker Registry")])])])},[],!1,null,null,null);e.default=i.exports}}]);