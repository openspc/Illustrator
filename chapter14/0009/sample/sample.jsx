﻿// 一番上のレイヤー内にある特定の名前のサブレイヤーを削除するvar parentLayerObj = app.activeDocument.layers[0];	// 一番上のレイヤーtry{    var subLayObj = parentLayerObj.layers["Mask"];    subLayObj.remove();}catch(e){}