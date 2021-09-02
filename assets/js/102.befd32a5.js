(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{510:function(t,e,a){"use strict";a.r(e);var s=a(28),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"뷰-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-cli"}},[t._v("#")]),t._v(" 뷰 CLI")]),t._v(" "),a("p",[t._v("뷰 CLI는 뷰로 빠르게 프로젝트를 구성하고 프로토 타이핑을 하고 싶을 때 사용하는 CLI 도구입니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("최신 버전은 3.x이며 책에서는 2.9 버전을 기준으로 설명하였습니다.")])]),t._v(" "),a("h2",{attrs:{id:"뷰-cli-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-cli-설치"}},[t._v("#")]),t._v(" 뷰 CLI 설치")]),t._v(" "),a("p",[t._v("뷰 CLI를 설치하기 위해서는 기본적으로 Node.js를 시스템에 설치해놔야 합니다. Node.js를 설치하고 나면 사용할 수 있는 NPM(Node Package Manager)을 이용하여 뷰 CLI를 설치합니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("버전 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".x\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @vue/cli\n\n버전 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.9")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-cli\n")])])]),a("h2",{attrs:{id:"뷰-cli로-프로젝트-생성하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-cli로-프로젝트-생성하기"}},[t._v("#")]),t._v(" 뷰 CLI로 프로젝트 생성하기")]),t._v(" "),a("p",[t._v("프로젝트를 생성하는 명령어는 아래와 같습니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("버전 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".x\nvue create helloworld\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("버전 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.9")]),t._v("\nvue init webpack-simple 파일 경로\n")])])]),a("h2",{attrs:{id:"뷰-cli-3-0과-cli-2-9와-차이점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#뷰-cli-3-0과-cli-2-9와-차이점"}},[t._v("#")]),t._v(" 뷰 CLI 3.0과 CLI 2.9와 차이점")]),t._v(" "),a("p",[t._v("기존 뷰 CLI 2.9의 프로젝트 생성 방식은 깃헙 리포지토리에 등록된 폴더와 파일을 그대로 다운로드 받는 것이었습니다. 그에 반해 뷰 CLI 3.0은 뷰 플러그인을 이용하여 필요한 기능들을 추가해 나가는 형식입니다.")]),t._v(" "),a("p",[t._v("그리고 차이점은 크게 아래와 같이 정리됩니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",[t._v("Vue CLI 3.0")]),t._v(" "),a("th",[t._v("Vue CLI 2.9")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("언어")])]),t._v(" "),a("td",[t._v("ES6 기준")]),t._v(" "),a("td",[t._v("ES5 기준 (ES6 선택 가능)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("웹팩")])]),t._v(" "),a("td",[t._v("웹팩 설정 파일이 숨겨져 있음 "),a("a",{attrs:{href:"https://cli.vuejs.org/guide/webpack.html#working-with-webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("(필요한 설정은 추가하는 형식)"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("웹팩 설정 파일에서 바로 수정 가능")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("GUI")])]),t._v(" "),a("td",[t._v("GUI 툴 제공 (vue ui)")]),t._v(" "),a("td",[t._v("X")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("구성")])]),t._v(" "),a("td",[t._v("뷰 플러그인 형식")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/vuejs-templates/webpack-simple",target:"_blank",rel:"noopener noreferrer"}},[t._v("프로젝트 템플릿"),a("OutboundLink")],1),t._v("을 깃헙에서 다운로드")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("명령어")])]),t._v(" "),a("td",[t._v("vue create '프로젝트 이름'")]),t._v(" "),a("td",[t._v("vue init '프로젝트 템플릿 이름' '프로젝트 폴더 경로'")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);