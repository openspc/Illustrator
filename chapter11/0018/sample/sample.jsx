﻿// 孤立点を削除するvar pObj = activeDocument.pathItems;var count = 0;for(var i=pObj.length-1; i>=0; i--){    if(pObj[i].pathPoints.length == 1){        count = count + 1;  // 孤立点の数をカウントする        pObj[i].layer.locked = false;   // レイヤーのロックを解除        pObj[i].layer.visible = true;   // レイヤーを表示する        pObj[i].locked = false; // ロックを解除する        pObj[i].remove();   // 孤立点を削除する    }}if (count > 0){    alert("孤立点が"+count+"個あったので削除しました");}else{    alert("孤立点はありませんでした");}