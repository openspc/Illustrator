﻿// 選択されたテキストフレームだけを複製するvar selObj = activeDocument.selection;for(var i=0; i<selObj.length; i++){    if (selObj[i].typename == "TextFrame"){        var txtObj = selObj[i].duplicate();        txtObj.translate(20, -20);    }}