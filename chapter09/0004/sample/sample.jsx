﻿// 選択されたテキストフレーム内の全ての「2014」の文字を「2015」に置換するvar selObj = activeDocument.selection;for(var i=0; i<selObj.length; i++){    var text = selObj[i].contents;	// テキストフレーム内の文字を読み出す    selObj[i].contents = text.replace(/2014/g, "2015"); // 置換する}