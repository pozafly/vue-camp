(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{480:function(a,s,t){"use strict";t.r(s);var e=t(30),c=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"워크박스-workbox-란"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#워크박스-workbox-란"}},[a._v("#")]),a._v(" 워크박스(Workbox)란?")]),a._v(" "),t("p",[a._v("PWA의 캐싱(caching) 기능을 편하게 구현할 수 있도록 지원되는 표준 PWA 라이브러리.\n[sw-precaching], [sw-toolbox] 라이브러리가 지원하던 기능들을 통합하여 제공한다.")]),a._v(" "),t("h2",{attrs:{id:"cli로-워크박스-시작하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli로-워크박스-시작하기"}},[a._v("#")]),a._v(" CLI로 워크박스 시작하기")]),a._v(" "),t("p",[a._v("워크박스 라이브러리의 사용 방법을 익히기 위해서 CLI로 간단하게 파일을 캐싱해보겠습니다.\n먼저 CLI를 아래 명령어로 설치합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" workbox-cli --global\n")])])]),t("p",[a._v("정상적으로 설치가 되었으면 "),t("code",[a._v("workbox --help")]),a._v(" 명령어가 인식될 것입니다.")]),a._v(" "),t("h2",{attrs:{id:"워크박스-cli로-서비스-워커-생성하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#워크박스-cli로-서비스-워커-생성하기"}},[a._v("#")]),a._v(" 워크박스 CLI로 서비스 워커 생성하기")]),a._v(" "),t("p",[a._v("PWA를 적용하고 싶은 웹 애플리케이션의 프로젝트에서 아래와 같이 워크박스 위저드 명령어를 입력합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("workbox wizard\n")])])]),t("p",[a._v("위 명령어를 입력하면 아래와 같이 몇 가지의 질문이 나옵니다. 그 질문엔 아래와 같이 대답합니다.")]),a._v(" "),t("ul",[t("li",[a._v("웹 애플리케이션의 루트가 어디인지? "),t("code",[a._v("app/")])]),a._v(" "),t("li",[a._v("어떤 파일 유형들을 프리캐싱(pre-caching)할 것인지? "),t("code",[a._v("html, css, js, jpg, png")])]),a._v(" "),t("li",[a._v("위 옵션들이 적용된 서비스 워커 파일이 생성될 위치? "),t("code",[a._v("dist/sw.js")])]),a._v(" "),t("li",[a._v("위 구성 정보들을 어디에 저장할 것인가? "),t("code",[a._v("workbox-config.js")])])]),a._v(" "),t("h2",{attrs:{id:"워크박스-cli의-generatesw-모드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#워크박스-cli의-generatesw-모드"}},[a._v("#")]),a._v(" 워크박스 CLI의 generateSW 모드")]),a._v(" "),t("p",[a._v("앞의 위저드로 생성한 워크 박스의 구성 정보는 "),t("code",[a._v("workbox-config.js")]),a._v("에 담기게 됩니다.\n이 때 다음 명령어를 입력하면 위 구성 정보가 담긴 서비스 워커 파일을 생성할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("workbox generateSW ./workbox-config.js\n")])])]),t("p",[a._v("이렇게 생성된 서비스 워커 파일에는 워크박스의 프리 캐싱과 런타임 캐싱 기능이 포함되어 있습니다.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("다만, 웹 푸시 기능이 필요한 경우에는 적합하지 않은 옵션입니다. 웹 푸시는 "),t("code",[a._v("injectManifest")]),a._v(" 옵션을 활용하세요.")])]),a._v(" "),t("h2",{attrs:{id:"워크박스-cli의-injectmanifest-모드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#워크박스-cli의-injectmanifest-모드"}},[a._v("#")]),a._v(" 워크박스 CLI의 injectManifest 모드")]),a._v(" "),t("p",[a._v("워크박스 injectManifest 모드는 generateSW 모드와는 다르게 개발자가 좀 더 서비스워커 파일을 직접 조작하거나 내용을 수정할 수 있습니다. 파일 캐싱 이외에 웹 푸시 API와 같은 네이티브 API 기능을 구현하고 싶을 때 적합한 모드입니다.")]),a._v(" "),t("p",[a._v("개발자가 구현해놓은 서비스 워커 파일을 읽어 설정 파일(workbox-config.js)에 설정된 캐싱 정보를 추가하고 새 서비스 워커 파일을 생성해줍니다. 명령어는 다음과 같습니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("workbox injectManifest ./workbox-config.js\n")])])])])}),[],!1,null,null,null);s.default=c.exports}}]);