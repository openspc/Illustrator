﻿// プリンタの種類を調べるvar msg = [];msg[PrinterTypeEnum.NONPOSTSCRIPTPRINTER] = "非PostScriptプリンタ";msg[PrinterTypeEnum.POSTSCRIPTPRINTER] = "PostScriptプリンタ";msg[PrinterTypeEnum.Unknown] = "PostScriptプリンタ";var txt = "■結果\r";var pList = app.printerList;for(var i=0; i<pList.length; i++){    var pName = pList[i].name;  // プリンタ名    var pType = pList[i].printerInfo.printerType;   // 種類    txt = txt + pName + "：" + msg[pType] + "\r";}alert(txt);