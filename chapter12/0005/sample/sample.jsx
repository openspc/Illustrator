﻿// 選択された中で画像を削除するvar selObj = activeDocument.selection;for(var i=0; i<selObj.length; i++){    var selType = selObj[i].typename;    if ((selType == "RasterItem") || (selType == "PlacedItem")){        selObj[i].remove();    }}