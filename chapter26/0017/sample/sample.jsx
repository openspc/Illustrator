﻿// 親フォルダを求めるvar fileObj = File.openDialog("ファイルを選択してください", "*", false);if (fileObj) {    var folderObj = fileObj.parent; // 親フォルダのオブジェクトを読み出す    alert("親フォルダ名："+File.decode(folderObj.name));}