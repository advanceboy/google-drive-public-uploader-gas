/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.base.d.ts" />
/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.html.d.ts" />
/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.content.d.ts" />
/// <reference path="../node_modules/@types/google-apps-script/google-apps-script.drive.d.ts" />
/***************************************************************
デバッグではうまく動くのに、実際に動かすとうまくいかない場合
(「その操作を実行するには承認が必要です。」 と表示される場合)、

1. ウェブアプリケーションを実行するユーザ でログイン
2. このプロジェクトで、 "doGet" 関数を実行
3. 「許可のリクエスト」の承認がダイアログ上で求められるので、それを承認 → http://ascii.jp/elem/000/000/871/871501/index-2.html
***************************************************************/

// 定数テーブル
function getResource_() {
  var res = {
    keyfolder: "*YOUR_DRIVE_FOLDER_ID*",
  };
  return res;
}

// return index.html
function doGet(e) {
  return HtmlService.createTemplateFromFile('index')
    .evaluate() // HTML 内に、 getResource_() の変数の値を埋め込む
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('Google Drive Public Uploader GAS');;
}

// DataURL で受け取ったデータを、Google Drive に保存
function saveFile(dataURL, fileName) {
  var contentType = dataURL.substring(5, dataURL.indexOf(';'));
  var file = Utilities.newBlob(Utilities.base64Decode(dataURL.substr(dataURL.indexOf('base64,') + 7)), contentType, fileName);
  DriveApp.getFolderById(getResource_().keyfolder).createFile(file);
}
