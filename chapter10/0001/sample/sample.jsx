﻿// 四角形を描くvar rectObj = activeDocument.pathItems.rectangle(-10, 30, 150, 100);rectObj.fillColor = setCMYKColor(60, 0, 60, 0);rectObj.stroked = true;	// 線を表示するrectObj.strokeWidth = 4;   // 線の幅を指定するrectObj.strokeColor = setCMYKColor(0, 0, 0, 100);// CMYKカラーを設定し、CMYKカラーオブジェクトを返すfunction setCMYKColor(c,m,y,k){    var CMYK = new CMYKColor();    CMYK.cyan = c;    CMYK.magenta = m;    CMYK.yellow = y;    CMYK.black = k;    return CMYK;}