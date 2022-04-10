(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{811:function(s,a,t){"use strict";t.r(a);var e=t(111),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"背景添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景添加"}},[s._v("#")]),s._v(" 背景添加")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("本页面仍在施工，故内容不完整。")]),s._v(" "),t("p",[t("strong",[s._v("旧版网站的内容已经严重失去时效性，请您转到全新的 Revolution 站点。")])])]),s._v(" "),t("p",[s._v("没有背景图片的 Mod，不是一个好 Mod，而 DDLC 的画师为游戏制作了这么多背景，为什么不好好利用一下呢？")]),s._v(" "),t("p",[s._v("接下来，将介绍如何添加一个背景图片。")]),s._v(" "),t("h2",{attrs:{id:"从梦开始的地方起步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从梦开始的地方起步"}},[s._v("#")]),s._v(" 从梦开始的地方起步")]),s._v(" "),t("p",[s._v("在 Mod 脚本里，请在对话之前，输入如下内容：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg residential_day "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("with")]),s._v(" dissolve_scene_full\n")])])]),t("p",[s._v("完整内容如下：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /game/meet_monika.rpy")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[s._v("label")]),s._v(" meet_monika"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg residential_day "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("with")]),s._v(" dissolve_scene_full\n    \n    mc "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DDLC 太好玩了！"')]),s._v("\n    y "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"就是啊，Monika 多可爱啊！"')]),s._v("\n   \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n")])])]),t("p",[s._v("此时运行代码，你应该可以看到完整的转场效果和自家门口的背景了。")]),s._v(" "),t("h2",{attrs:{id:"那么刚刚加的代码啥意思"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#那么刚刚加的代码啥意思"}},[s._v("#")]),s._v(" 那么刚刚加的代码啥意思？")]),s._v(" "),t("p",[t("code",[s._v("scene")]),s._v(" 是 Ren'Py 中显示背景图片的命令。")]),s._v(" "),t("p",[t("code",[s._v("bg residential_day")]),s._v(" 则是所需要显示的图片。实际上这是经过定义的语句，您可以在 "),t("code",[s._v("game/advanced_scripts/definitions.rpy")]),s._v(" 里查看所有定义过的背景，但这还是很复杂。文档下方会附带 "),t("a",{attrs:{href:"#%E5%85%A8%E9%83%A8%E8%83%8C%E6%99%AF%E9%A2%84%E8%A7%88"}},[s._v("全部背景预览")]),s._v("，帮助你选择背景。")]),s._v(" "),t("p",[t("code",[s._v("with dissolve_scene_full")]),s._v(" 是转场效果。（解释待补充）")]),s._v(" "),t("p",[s._v("一些对于新人来说没什么用的拓展：相较于 "),t("code",[s._v("show")]),s._v(" 命令，"),t("code",[s._v("scene")]),s._v(" 可以清空目前所有显示的背景、立绘，并直接显示新的背景。如果使用 "),t("code",[s._v("show")]),s._v(" 命令，那么切换背景时会有许多问题，但使用 "),t("code",[s._v("scene")]),s._v(" 就解决了这个问题。")]),s._v(" "),t("h2",{attrs:{id:"全部背景预览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全部背景预览"}},[s._v("#")]),s._v(" 全部背景预览")]),s._v(" "),t("p",[s._v("感谢背景画师 Velinquent 的爆肝。")]),s._v(" "),t("h3",{attrs:{id:"bg-residential-day-家门口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-residential-day-家门口"}},[s._v("#")]),s._v(" bg residential_day（家门口）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_residential.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式（不带转场，下同）：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg residential_day\n")])])]),t("h3",{attrs:{id:"bg-corridor-走廊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-corridor-走廊"}},[s._v("#")]),s._v(" bg corridor（走廊）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_corridor.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg corridor\n")])])]),t("h3",{attrs:{id:"bg-club-day-文学部活动室"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-club-day-文学部活动室"}},[s._v("#")]),s._v(" bg club_day（文学部活动室）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_club.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg club_day\n")])])]),t("h3",{attrs:{id:"bg-club-day2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-club-day2"}},[s._v("#")]),s._v(" bg club_day2")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("使用本背景前请务必注意增加内容警告，且照顾 Sayori 厨的感受（（（")])]),s._v(" "),t("p",[s._v("文学部活动室，但有 1/6 概率出现某个恶心的东西（恶心的东西见下方 club_day_skill）")]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg club_day2\n")])])]),t("h3",{attrs:{id:"bg-club-day-skill-出现某个恶心的东西的文学部活动室"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-club-day-skill-出现某个恶心的东西的文学部活动室"}},[s._v("#")]),s._v(" bg club_day_skill（出现某个恶心的东西的文学部活动室）")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("使用本背景前请务必注意增加内容警告，且照顾 Sayori 厨的感受（（（")])]),s._v(" "),t("p",[s._v("文学部活动室，但会 100% 出现某个恶心的东西（中文模板赠送）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_club-skill.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg club_day_skill\n")])])]),t("h3",{attrs:{id:"bg-closet-储物间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-closet-储物间"}},[s._v("#")]),s._v(" bg closet（储物间）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_closet.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg closet\n")])])]),t("h3",{attrs:{id:"bg-bedroom-mc-家的卧室"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-bedroom-mc-家的卧室"}},[s._v("#")]),s._v(" bg bedroom（MC 家的卧室）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_bedroom.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg bedroom\n")])])]),t("h3",{attrs:{id:"bg-sayori-bedroom-sayori-家的卧室"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-sayori-bedroom-sayori-家的卧室"}},[s._v("#")]),s._v(" bg sayori_bedroom（Sayori 家的卧室）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_sayori_bedroom.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg sayori_bedroom\n")])])]),t("h3",{attrs:{id:"bg-house-sayori-家的门口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-house-sayori-家的门口"}},[s._v("#")]),s._v(" bg house（Sayori 家的门口）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_house.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg house\n")])])]),t("h3",{attrs:{id:"bg-kitchen-mc-家的厨房"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bg-kitchen-mc-家的厨房"}},[s._v("#")]),s._v(" bg kitchen（MC 家的厨房）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/DokiMod/dokimodcn-assets@master/bg_kitchen.png",alt:""}})]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" bg kitchen\n")])])]),t("h2",{attrs:{id:"纯色背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纯色背景"}},[s._v("#")]),s._v(" 纯色背景")]),s._v(" "),t("h3",{attrs:{id:"black-纯黑色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#black-纯黑色"}},[s._v("#")]),s._v(" black（纯黑色）")]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" black\n")])])]),t("h3",{attrs:{id:"dark-暗色遮罩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dark-暗色遮罩"}},[s._v("#")]),s._v(" dark（暗色遮罩）")]),s._v(" "),t("p",[s._v("调用方式（使用 show 获得最佳效果）：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" dark\n")])])]),t("h3",{attrs:{id:"darkred-血色遮罩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#darkred-血色遮罩"}},[s._v("#")]),s._v(" darkred（血色遮罩）")]),s._v(" "),t("p",[s._v("调用方式（使用 show 获得最佳效果）：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" darkred\n")])])]),t("h3",{attrs:{id:"white-纯白"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#white-纯白"}},[s._v("#")]),s._v(" white（纯白）")]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" white\n")])])]),t("h3",{attrs:{id:"end-end-字幕"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#end-end-字幕"}},[s._v("#")]),s._v(" end（END 字幕）")]),s._v(" "),t("p",[s._v("调用方式：")]),s._v(" "),t("div",{staticClass:"language-renpy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-renpy"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scene")]),s._v(" end\n")])])]),t("h2",{attrs:{id:"转场方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转场方式"}},[s._v("#")]),s._v(" 转场方式")]),s._v(" "),t("p",[s._v("（待补充）")])])}),[],!1,null,null,null);a.default=r.exports}}]);