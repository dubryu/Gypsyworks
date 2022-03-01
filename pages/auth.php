<?php

  define("OAUTH2_SITE", 'https://api.shop-pro.jp');
  define("OAUTH2_CLIENT_ID",'0126ddc5a03b7e0d9de14934e26012ae0132a56e976225e7221f7af07be9e313'); // xxxにクライアントIDを入力
  define("OAUTH2_CLIENT_SECRET", '846055ac700f3d7c98d87a42e1875d4580b117d7e1ec35cd1f7e9822b1d45f20'); // yyyにクライアントシークレットを入力
  define("OAUTH2_REDIRECT_URI", 'http://example.com/auth.php'); // リダイレクトURLを入力

  $code = $_GET['code'];

  $params = array(
    'client_id' => OAUTH2_CLIENT_ID,
    'client_secret' => OAUTH2_CLIENT_SECRET,
    'code' => $code,
    'grant_type' => 'authorization_code',
    'redirect_uri' => OAUTH2_REDIRECT_URI
  );
  $request_options = array(
    'http' => array(
    'method' => 'POST',
    'content' => http_build_query($params)
    )
  );
  $context = stream_context_create($request_options);

  $token_url = 'https://api.shop-pro.jp/oauth/token';
  $response_body = file_get_contents($token_url, false, $context);

  echo $response_body; // 追加した行
