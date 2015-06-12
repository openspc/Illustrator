﻿// 1年分のカレンダーを生成するvar baseX = 10; // カレンダーの最初の表示位置（X座標）var baseY = 0; // カレンダーの最初の表示位置（Y座標）var calDX = 30; // カレンダーの１日あたりの横幅var calDY = 30; // カレンダーの１日あたりの縦幅var blockX = 250; // 一ヶ月分のカレンダーの横の差var blockY = 250; // 一ヶ月分のカレンダーの縦の差var blackColor = new CMYKColor(); blackColor.cyan = blackColor.magenta= blackColor.yellow = blackColor.black = 100; // 色の初期化（黒色に設定）var docObj = activeDocument;// 一ヶ月分のカレンダーを描画する関数function calendar(theYear_,theMonth_){    var wrtMonth= new Array(0,31,28,31,30,31,30,31,31,30,31,30,31); // 月末の最終日    var wrtDate = new Array("日","月","火","水","木","金","土");    var theDate = new Date(); //　日付オブジェクトを生成    theDate.setFullYear(theYear_); //　指定された年を設定    theDate.setMonth(theMonth_-1); //　指定された月を設定    if (((theYear_ % 4 == 0) && (theYear_ % 100 != 0)) || (theYear_ % 400 == 0)){        wrtMonth[2] = 29; //　閏年だったら2月を29日にする    }    theDate.setDate(1); //　日付を１日にし曜日を次の行で取得    var count = theDate.getDay();    var day = 0; //　曜日カウンタを0にする    var date = 1; //　日付を1日にする    var week = 0;    var calX = 0; //■カレンダーを表示する相対座標(X)    var calY = 60; //■カレンダーを表示する相対座標(Y)    write(theYear_+"年"+theMonth_+"月", 95, 0); // 相対座標(95pt,0pt)に描画    for(var i=0;i<7;i++) { write(wrtDate[i], 0+i*calDX, 30); } //　曜日書き出し    for(var i=1;i<=wrtMonth[theMonth_]+count;i++){        if (day>=count){            var dayText = ""+date;            date = date + 1;            if ((day % 7) == 1) { week++; } //　月曜日の場合は週の数を増やす        }else{            var dayText = "　";        }        drawBox(calX, calY); //枠を表示する。しない場合は行ごと削除する。        write(dayText, calX, calY); // 日にちを表示する        calX = calX + calDX;        if (day % 7 == 6) { calX = 0; calY += calDY; }        day = day + 1; //　1日増やす    }}// 指定された座標に枠を描くfunction drawBox(x, y){    var pObj = docObj.pathItems.rectangle(0,0,calDX,calDY);    pObj.translate(baseX + x - 15,baseY-y+calDY-9); //ここで位置を微調整    pObj.filled = false; //　塗りなし    pObj.stroked = true; //　線あり    pObj.strokeWidth = 0.2; //　線幅0.2ポイント    pObj.strokeColor = blackColor; //　線の色を指定（黒色）}// カレンダーの日にちの文字を生成するfunction write(txt, x,y){    var textObj = docObj.textFrames.add();    textObj.contents = txt;    textObj.translate(baseX + x, baseY - y);    textObj.paragraphs[0].justification = Justification.CENTER;}// カレンダーを生成するメイン処理部分var calYear = prompt("作成する年を入れてください",2014);if (calYear){    var storeX = baseX;    var cal = 1;    for (var cy=0; cy<4; cy++){ //縦に4つ        for (var cx=0; cx<3; cx++){ //横に3つ            calendar(calYear, cal); // 一ヶ月分のカレンダーを描画する            baseX = baseX + blockX;            cal = cal + 1;        }        baseX = storeX;        baseY = baseY - blockY;    }}