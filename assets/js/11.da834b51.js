(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{409:function(a,s,n){"use strict";n.r(s);var t=n(2),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"自动检测弱密码py脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动检测弱密码py脚本"}},[a._v("#")]),a._v(" 自动检测弱密码py脚本")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("import re\n\n\ndef Langth(data):\n    datas = len(data)\n    if datas > 8:\n        Digit(data)\n    else:\n        WeakPassword(data + '长度不够', data)\n\n\ndef Digit(data):\n    data_datas = re.compile(r'[\\d]')  # 匹配数字\n    if data_datas.search(data) == None:\n        return WeakPassword(data + '没有数字', data)\n    else:\n        return Letter(data)\n\n\ndef Letter(data):\n    data_datass = re.compile(r'[\\w]')  # 匹配字母\n    if data_datass.search(data) == None:\n        WeakPassword(data + '没有字母', data)\n    else:\n        Symbol(data)\n\n\ndef Symbol(data):\n    data_datasss = re.compile(r'[\\W]')  # 匹配字符\n    if data_datasss.search(data) == None:\n        WeakPassword(data + '没有特殊符号', data)\n    else:\n        pass\n\n\ndef WeakPassword(datas, data):\n    print(f'发现弱口令！！！{datas}\\n')\n    file_handle = open('1.txt', mode='a')\n    file_handle.write(f'{data}')\n    file_handle.close()\n\n\nif __name__ == '__main__':\n    with open(\"test.txt\") as file:\n        for data in file:\n            Langth(data)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);