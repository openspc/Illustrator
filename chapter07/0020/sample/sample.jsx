﻿// 選択されたテキストフレームの空行を削除する（スタイル無視）var selObj = activeDocument.selection;for(var i=0; i<selObj.length; i++){    selObj[i].contents = selObj[i].contents.replace(/\r+/g, "\r");}