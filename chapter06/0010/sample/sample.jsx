﻿// 選択されたテキストフレームの種類を調べるvar selObj = activeDocument.selection;for(var i=0; i<selObj.length; i++){    alert(selObj[i].kind);}