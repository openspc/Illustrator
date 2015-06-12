﻿// グラデーションカラーを指定する（円形）var gradObj = activeDocument.gradients.add();var gradColor = new GradientColor();	//　グラデーションカラーgradObj.name = "赤青グラデーション"; // 同じ名前は指定できないので注意gradObj.type = GradientType.RADIAL;gradObj.gradientStops[0].rampPoint = 0;	//　開始位置gradObj.gradientStops[0].midPoint = 80.0;	//　中間位置gradObj.gradientStops[0].color = setRGBColor(255,0,0);	//　開始色gradObj.gradientStops[1].rampPoint = 100.0;	//　終了位置gradObj.gradientStops[1].color = setRGBColor(0,0,255);	//　終了色gradColor.gradient = gradObj;// RGBカラーを設定し、RGBカラーオブジェクトを返すfunction setRGBColor(r,g,b){    var RGB = new RGBColor();    RGB.red = r;    RGB.green = g;    RGB.blue = b;    return RGB;}