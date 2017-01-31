google-drive-public-uploader-gas
================================

Google Apps Script (以下 GAS) の Webアプリケーションを利用した、ファイルアップローダです。

スクリプトプロジェクトを 「ウェブ アプリケーションとして導入」 したアカウントの Google Drive のフォルダに対して、 ファイルをアップロードする機能を提供します。  
アップロードするユーザは、 Google アカウントのログインなしでファイルをアップロードできます。


## Getting started

1. 任意の Google Drive のフォルダーを 「リンクを知っている全員が閲覧可」 などの共有に設定し、 フォルダのIDをコピーします
    * フォルダのIDは、開いている Google Drive フォルダの URL から取得できます: `drive.google.com/drive/folders/`***`YOUR_DRIVE_FOLDER_ID`***
1. スクリプトプロジェクトに、 `/src/Code.js`, `/src/index.html` を追加します
    * このとき、 `Code.js` の スクリプトプロジェクト上でのファイル名は、 `Code.gs` とします
1. Code.js を開き、 `*YOUR_DRIVE_FOLDER_ID*` をコピーしたフォルダIDに置き換えます
1. 新しい [Google Apps Script](https://script.google.com/) スタンドアローンプロジェクトを作成します
1. スクリプトプロジェクトの [公開] メニューから、 [ウェブ アプリケーションとして導入] を選択し、 以下のような設定でアクセスします
    * 次のユーザとしてアプリケーションを実行: 自分
    * アプリケーションにアクセスできるユーザ: 全員 (匿名ユーザを含む)
1. スクリプトプロジェクトの [実行] メニューから `doGet` 関数を一度実行し、 Google Drive へのアクセス許可リクエストを承認します
1. ウェブアプリケーションの URL にアクセスし、 ファイルをアップロードしましょう


## Advanced

[gapps CLI](https://github.com/danthareja/node-google-apps-script) を使用した、 モダンなデプロイ方法を記載します。

以下に説明するすべてのコマンドは、 [node.js](https://nodejs.org/ja/) がインストールされ、 PATH が通っていることが前提です。  
あらかじめ、 node.js をインストールし PATH への追加を行ってください。

参考: [Google Developers Japan: Apps Script による高度な開発プロセス](https://developers-jp.googleblog.com/2016/01/apps-script.html), [GoogleAppsScriptローカル開発用の公式CLI(node-google-apps-script)がついに登場したので試してみる - Qiita](http://qiita.com/zaki-yama/items/9a301542137febd8876c)

### gapps の導入

1. `npm install -g node-google-apps-script` を実行し、グローバルに gapps コマンドをインストールします
1. [Google Drive 資格情報の登録と、 gapps の認証](https://www.npmjs.com/package/node-google-apps-script) を行います

### プロジェクトの初期化

1. 次のコマンドを実行し、ソースコードをダウンロードします
    ```
    git clone https://github.com/advanceboy/google-drive-public-uploader-gas.git
    ```
1. 次のコマンドを実行し、プロジェクトの依存関係を解決します。
    ```
    cd google-drive-public-uploader-gas
    npm install
    ```
1. `/src/Code.js` を開き、 `*YOUR_DRIVE_FOLDER_ID*` を、アップロード先の Google Drive のフォルダIDに置き換えます
1. 新しい [Google Apps Script](https://script.google.com/) スタンドアローンプロジェクトを作成し、スクリプトのIDをコピーします。
    * スクリプトのID は、スクリプトプロジェクトの URL から取得できます: `script.google.com/a/macros/google.com/d/`***`DRIVE_FILE_ID`***`/edit`
1. 次のコマンドを実行し、プロジェクトを初期化します
    ```
    gapps init *DRIVE_FILE_ID*
    ```
    * このとき、 ローカルに `/src/コード.js` が作成される場合がありますが、削除してかまいません。

### プロジェクトのデプロイ

1. 次のコマンドを実行し、コードをデプロイします
    ```
    gapps push
    ```
    * このコマンドを リポジトリのルートディレクトリをカレントディレクトリにして 実行することで、 スクリプトプロジェクト のソースコードが `./src/` ディレクトリ以下のファイルに上書きされます。


## License

MIT License
