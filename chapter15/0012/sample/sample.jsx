﻿// アクティブになっているアートボード上の図形を選択するvar flag = activeDocument.selectObjectsOnActiveArtboard();if (flag == true){    alert("選択しました");}else{    alert("選択できませんでした");}