﻿// 画像だけ選択する// リンク画像の選択処理var images = activeDocument.placedItems;for (var i=0; i<images.length; i++){    try {    images[i].selected = true;  // 選択状態にする    }catch(e){}}// 埋め込み画像の選択処理images = activeDocument.rasterItems;for (var i=0; i<images.length; i++){    try {    images[i].selected = true;  // 選択状態にする    }catch(e){}}