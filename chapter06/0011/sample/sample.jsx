﻿// 選択されたテキストフレームのサイズを取得するvar selObj = activeDocument.selection;for(var i=0; i<selObj.length; i++){    var left = selObj[i].left;    var top = selObj[i].top;    var width = selObj[i].width;    var height = selObj[i].height;    // ジオメトリック座標    var gBox = selObj[i].geometricBounds;    var gLeft = gBox[0];    var gTop = gBox[1];    var gRight = gBox[2];    var gBottom = gBox[3];    // コントロール座標    var cBox = selObj[i].controlBounds;    var cLeft = cBox[0];    var cTop = cBox[1];    var cRight = cBox[2];    var cBottom = cBox[3];    // 結果を表示    var text = "●座標\rLeft : "+left+"\rTop : "+top+"\r\r●幅\rwidth : "+width+"\rheight : "+height;    text = text + "\r\r●Geometric Bounds\r";    text = text + "left : "+gLeft+"\rtop : "+gTop+"\rright : "+gRight+"\rbottom : "+gBottom;    text = text + "\r\r●Control Bounds\r";    text = text + "left : "+cLeft+"\rtop : "+cTop+"\rright : "+cRight+"\rbottom : "+cBottom;    alert(text);}