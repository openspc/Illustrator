﻿// 選択されたテキストフレーム内の数値を3桁のカンマで区切るvar selObj = activeDocument.selection;for(var i=0; i<selObj.length; i++){    if (selObj[i].typename != "TextFrame"){ continue; } // テキストフレーム以外は処理しない    // 正規表現で数値を検索する    selObj[i].contents = selObj[i].contents.replace(/\d+/g, function (str, ptr){        return formatNum(str);    });}// 3桁ごとにカンマ(,)を入れるfunction formatNum(num){      var str = new String(num);      var n = "";      var sp = 3; // 3桁の場合。4桁で処理する場合は4にする    var spStr = ",";    // 区切る文字を指定する    var count = 0;      for (var i=str.length-1; i>=0; i--){          n = str.charAt(i) + n;          count++;          if (((count % sp) == 0) && (i != 0)) n = spStr + n;      }      return n;  }