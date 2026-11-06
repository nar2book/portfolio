# Pages CMS setup

このサイトは [Pages CMS](https://app.pagescms.org/) で管理します。ポートフォリオの
見出しとタイルは `data/portfolio.json` に保存され、Pages CMSで保存するとGitHubへ
直接コミットされます。GitHub Pages側にCMSやOAuthプロキシを設置する必要はありません。

## 初回設定

1. GitHubへ `.pages.yml` とこのサイトの変更をpushします。
2. [Pages CMS](https://app.pagescms.org/) を開き、「Sign in with GitHub」を選択します。
3. `nar2book/portfolio` を開きます。GitHubの認可画面では、このリポジトリを操作できる
   権限をPages CMSへ付与してください。
4. 「ポートフォリオ」を開き、見出しまたはタイルを編集して保存します。

## 使い方

タイルの追加、並び替え、画像アップロード、リンク先の変更はPages CMS上で行えます。
アップロード画像は `img/uploads/` に保存され、GitHub Pagesの公開パス
`/img/uploads/` としてJSONへ記録されます。
