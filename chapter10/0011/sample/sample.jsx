﻿// 円弧を描くvar ellipseObj = activeDocument.pathItems.ellipse(-20, 40, 100, 100, false, true);ellipseObj.fillColor = new NoColor();ellipseObj.stroked = true;	// 先にtrueを設定した後で線幅を指定しないとダメellipseObj.strokeWidth = 2;ellipseObj.strokeColor = setCMYKColor(0, 0, 0, 100);ellipseObj.pathPoints[2].remove();  // 3番目を削除するellipseObj.pathPoints[2].remove();  // 1つずれるので、これが最後のポイントになる。これを削除するellipseObj.closed = false;	// パスを閉じない// CMYKカラーを設定し、CMYKカラーオブジェクトを返すfunction setCMYKColor(c,m,y,k){    var CMYK = new CMYKColor();    CMYK.cyan = c;    CMYK.magenta = m;    CMYK.yellow = y;    CMYK.black = k;    return CMYK;}