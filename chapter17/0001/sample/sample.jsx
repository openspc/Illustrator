﻿// グラフィックスタイルの登録数を表示するvar n = activeDocument.graphicStyles.length;var txt = "登録数：" + n +"\r";for(var i=0; i<n; i++){    txt = txt + activeDocument.graphicStyles[i].name + "\r";}alert(txt);