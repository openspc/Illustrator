﻿// 選択されたテキストフレームの最初の段落の禁則処理名を表示するif (activeDocument.selection.length > 0){    try{        var kName = activeDocument.selection[0].paragraphs[0].kinsoku;    }catch(e){        var kName = "なし";   // エラーの場合は禁則処理が設定されていない    }    alert("段落の禁則処理："+kName);}