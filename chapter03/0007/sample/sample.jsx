﻿// ドキュメントをデスクトップフォルダに保存するtry{    activeDocument.save();}catch(e){    var fileObj = new File(Folder.desktop.fsName + "/sample.ai");    activeDocument.saveAs(fileObj);}