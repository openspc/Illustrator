﻿// JPEG形式で保存するvar savefile = File.saveDialog ("保存ファイル名をいれてください", "*");if (savefile != null){    var opt = new ExportOptionsJPEG();    opt.antiAliasing = true;	// アンチエイリアス ON    opt.artBoardClipping = true;	// アートボード内だけを保存    opt.horizontalScale = 100;	// 水平の割合    opt.verticalScale = 100;	// 縦方向の割合    opt.matter = true;	// マットカラー（背景色）を付ける    opt.matteColor = setRGBColor(0, 0, 255);	// マットは青色    opt.optimization = true;	// Web用に最適化    opt.qualitySetting = 80;	// 画像品質    opt.saveAsHTML = false;	// HTMLファイルは同時に保存しない    app.activeDocument.exportFile(savefile, ExportType.JPEG, opt);}// RGBカラーを設定し、RGBカラーオブジェクトを返すfunction setRGBColor(r,g,b){    var RGB = new RGBColor();    RGB.red = r;    RGB.green = g;    RGB.blue = b;    return RGB;}