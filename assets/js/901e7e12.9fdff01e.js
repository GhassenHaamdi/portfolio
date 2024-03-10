"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[4308],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],u={slug:"docusaurus-gh-action",title:"GitHub Action for Docusaurus",author:"Evan Tay",author_url:"https://github.com/DigiPie",author_title:"Software Engineer at Padlet",author_image_url:"https://avatars2.githubusercontent.com/u/13582874",tags:["docusaurus","github-action","ci"]},s=void 0,l={permalink:"/portfolio/blog/docusaurus-gh-action",editUrl:"https://github.com/GhassenHaamdi/portfolio/blog/2021-01-17-docusaurus-gh-action.md",source:"@site/blog/2021-01-17-docusaurus-gh-action.md",title:"GitHub Action for Docusaurus",description:"I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action.",date:"2021-01-17T00:00:00.000Z",formattedDate:"January 17, 2021",tags:[{label:"docusaurus",permalink:"/portfolio/blog/tags/docusaurus"},{label:"github-action",permalink:"/portfolio/blog/tags/github-action"},{label:"ci",permalink:"/portfolio/blog/tags/ci"}],readingTime:1.54,hasTruncateMarker:!0,authors:[{name:"Evan Tay",title:"Software Engineer at Padlet",url:"https://github.com/DigiPie",imageURL:"https://avatars2.githubusercontent.com/u/13582874"}],frontMatter:{slug:"docusaurus-gh-action",title:"GitHub Action for Docusaurus",author:"Evan Tay",author_url:"https://github.com/DigiPie",author_title:"Software Engineer at Padlet",author_image_url:"https://avatars2.githubusercontent.com/u/13582874",tags:["docusaurus","github-action","ci"]},prevItem:{title:"Top 3 reasons why you should start investing with StashAway today!",permalink:"/portfolio/blog/stashaway"},nextItem:{title:"Welcome to Our Course Website!",permalink:"/portfolio/blog/2020/12/21/history"}},c={authorsImageUrls:[void 0]},p=[{value:"deploy-docusaurus.yml",id:"deploy-docusaurusyml",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I got tired of deploying my Docusaurus website to GitHub Pages manually, and decided to do something about it using GitHub Action."),(0,a.kt)("p",null,"Initially, I was planning to follow the ",(0,a.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/deployment#triggering-deployment-with-github-actions"},"official guide")," on doing so. However, it was actually much more complicated than I liked. I did not really want to generate and store a SSH key on GitHub. Too much effort man."),(0,a.kt)("p",null,"I decided it was better off for me to write my own script. Here it is:"),(0,a.kt)("h2",{id:"deploy-docusaurusyml"},"deploy-docusaurus.yml"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The script below assumes that your Docusaurus website resides at ",(0,a.kt)("inlineCode",{parentName:"p"},"/website")," of your repo. If that is not the case for you, you will need to:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"cd website")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"cd <docu_site_root>"),", or delete the entire line if your Docusaurus website is at the root of your repo ",(0,a.kt)("inlineCode",{parentName:"li"},"/")),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"build_dir"),"'s value from ",(0,a.kt)("inlineCode",{parentName:"li"},"website/build")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"<docu_site_root>/build"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," if your Docusaurus website is at the root of your repo ",(0,a.kt)("inlineCode",{parentName:"li"},"/")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: deploy-docusaurus\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  publish:\n    runs-on: ubuntu-latest\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - name: Check out repo\n        uses: actions/checkout@v2\n      # Node is required for npm\n      - name: Set up Node\n        uses: actions/setup-node@v2\n        with:\n          node-version: "12"\n      # Install and build Docusaurus website\n      - name: Build Docusaurus website\n        run: |\n          cd website\n          npm install \n          npm run build\n      - name: Deploy to GitHub Pages\n        if: success()\n        uses: crazy-max/ghaction-github-pages@v2\n        with:\n          target_branch: gh-pages\n          build_dir: website/build\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"GitHub will automatically add ",(0,a.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," to Secrets. You need not do so. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/reference/authentication-in-a-workflow"},"this")," for more information.")),(0,a.kt)("p",null,"To see this script in action, visit my ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DigiPie/kaya-folio/actions"},"personal website repo"),"."))}m.isMDXComponent=!0}}]);