﻿// スクリプトエンジンのバージョンを表示var ver = app.scriptingVersion;alert(ver);var verList = ver.split(".");alert("メジャーバージョン："+verList[0] + "\n" +    "マイナーバージョン："+verList[1]);