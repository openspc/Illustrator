﻿// 3段組のテキストフレームを作成するvar rect = activeDocument.pathItems.rectangle(-50, 10, 210, 60);   // Y,X,横幅,縦幅var txtObj = activeDocument.textFrames.areaText(rect);txtObj.columnCount = 3;txtObj.columnGutter = 10;txtObj.contents = "イラストレーターは簡単に段組を作成することができます。プログラムからも作成可能です。";