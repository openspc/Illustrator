﻿// マトリクスオブジェクトを連結するvar selObj = app.activeDocument.selection;for(var i=0; i<selObj.length; i++){    var mtx1 = app.getRotationMatrix(45);    var mtx2 = app.getScaleMatrix(50, 50);    var mtx = concatenateMatrix(mtx1, mtx2);    selObj[i].transform(mtx);}