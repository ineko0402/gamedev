// 評価記号 → 数値化（あなたの指定順）
const ratingMap = {
    "☆": 1, // 傑作
    "◯": 2, // まあ良い
    "◎": 3, // 独創的
    "◇": 4, // 何もない
    "△": 5, // 微妙
    "✕": 6  // 悪い
};

const data = [ { content:“スポーツ”, genre:“RPG”, rating:“◇” }, {
content:“スポーツ”, genre:“シミュレーション”, rating:“◎” }, {
content:“スポーツ”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“スポーツ”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“スポーツ”, genre:“アクションゲーム”, rating:“◯” }, {
content:“スポーツ”, genre:“アドベンチャー”, rating:“◇” }, {
content:“スポーツ”, genre:“シューティング”, rating:“△” }, {
content:“スポーツ”, genre:“アクションRPG”, rating:“✕” }, {
content:“スポーツ”, genre:“レースゲーム”, rating:“◯” }, {
content:“スポーツ”, genre:“ネットRPG”, rating:“◇” }, {
content:“スポーツ”, genre:“ネットSLG”, rating:“◇” }, {
content:“スポーツ”, genre:“素材集”, rating:“◇” }, { content:“スポーツ”,
genre:“育成”, rating:“◯” }, { content:“スポーツ”, genre:“ボードゲーム”,
rating:“◇” }, { content:“スポーツ”, genre:“パズル”, rating:“◎” }, {
content:“スポーツ”, genre:“音楽ゲーム”, rating:“✕” }, {
content:“スポーツ”, genre:“サウンドノベル”, rating:“△” }, {
content:“スポーツ”, genre:“体感ゲーム”, rating:“◎” }, {
content:“スポーツ”, genre:“教育”, rating:“◇” }, { content:“スポーツ”,
genre:“カードゲーム”, rating:“◇” }, { content:“冒険物”, genre:“RPG”,
rating:“◯” }, { content:“冒険物”, genre:“シミュレーション”, rating:“◇”
}, { content:“冒険物”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“冒険物”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“冒険物”, genre:“アクションゲーム”, rating:“◯” }, {
content:“冒険物”, genre:“アドベンチャー”, rating:“◇” }, {
content:“冒険物”, genre:“シューティング”, rating:“△” }, {
content:“冒険物”, genre:“アクションRPG”, rating:“◯” }, {
content:“冒険物”, genre:“レースゲーム”, rating:“◇” }, {
content:“冒険物”, genre:“ネットRPG”, rating:“◎” }, { content:“冒険物”,
genre:“ネットSLG”, rating:“◇” }, { content:“冒険物”, genre:“素材集”,
rating:“◇” }, { content:“冒険物”, genre:“育成”, rating:“◇” }, {
content:“冒険物”, genre:“ボードゲーム”, rating:“◇” }, {
content:“冒険物”, genre:“パズル”, rating:“△” }, { content:“冒険物”,
genre:“音楽ゲーム”, rating:“✕” }, { content:“冒険物”,
genre:“サウンドノベル”, rating:“◇” }, { content:“冒険物”,
genre:“体感ゲーム”, rating:“◇” }, { content:“冒険物”, genre:“教育”,
rating:“◇” }, { content:“冒険物”, genre:“カードゲーム”, rating:“◇” }, {
content:“拳法”, genre:“RPG”, rating:“◇” }, { content:“拳法”,
genre:“シミュレーション”, rating:“△” }, { content:“拳法”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“拳法”,
genre:“テーブルゲーム”, rating:“◎” }, { content:“拳法”,
genre:“アクションゲーム”, rating:“◯” }, { content:“拳法”,
genre:“アドベンチャー”, rating:“◎” }, { content:“拳法”,
genre:“シューティング”, rating:“◎” }, { content:“拳法”,
genre:“アクションRPG”, rating:“◇” }, { content:“拳法”,
genre:“レースゲーム”, rating:“✕” }, { content:“拳法”, genre:“ネットRPG”,
rating:“◇” }, { content:“拳法”, genre:“ネットSLG”, rating:“✕” }, {
content:“拳法”, genre:“素材集”, rating:“◎” }, { content:“拳法”,
genre:“育成”, rating:“◇” }, { content:“拳法”, genre:“ボードゲーム”,
rating:“◇” }, { content:“拳法”, genre:“パズル”, rating:“△” }, {
content:“拳法”, genre:“音楽ゲーム”, rating:“◇” }, { content:“拳法”,
genre:“サウンドノベル”, rating:“◎” }, { content:“拳法”,
genre:“体感ゲーム”, rating:“◇” }, { content:“拳法”, genre:“教育”,
rating:“◇” }, { content:“拳法”, genre:“カードゲーム”, rating:“◇” }, {
content:“ﾌｧﾝﾀｼﾞｰ”, genre:“RPG”, rating:“☆” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“シミュレーション”, rating:“◇” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“テーブルゲーム”, rating:“◯” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“アクションゲーム”, rating:“◇” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“アドベンチャー”, rating:“◯” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“シューティング”, rating:“◎” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“アクションRPG”, rating:“◯” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“レースゲーム”, rating:“✕” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“ネットRPG”, rating:“◯” }, { content:“ﾌｧﾝﾀｼﾞｰ”, genre:“ネットSLG”,
rating:“◇” }, { content:“ﾌｧﾝﾀｼﾞｰ”, genre:“素材集”, rating:“◇” }, {
content:“ﾌｧﾝﾀｼﾞｰ”, genre:“育成”, rating:“◎” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“ボードゲーム”, rating:“◇” }, { content:“ﾌｧﾝﾀｼﾞｰ”, genre:“パズル”,
rating:“◎” }, { content:“ﾌｧﾝﾀｼﾞｰ”, genre:“音楽ゲーム”, rating:“△” }, {
content:“ﾌｧﾝﾀｼﾞｰ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“ﾌｧﾝﾀｼﾞｰ”, genre:“体感ゲーム”, rating:“✕” }, {
content:“ﾌｧﾝﾀｼﾞｰ”, genre:“教育”, rating:“◇” }, { content:“ﾌｧﾝﾀｼﾞｰ”,
genre:“カードゲーム”, rating:“◇” }, { content:“競馬”, genre:“RPG”,
rating:“✕” }, { content:“競馬”, genre:“シミュレーション”, rating:“☆” },
{ content:“競馬”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“競馬”, genre:“テーブルゲーム”, rating:“◇” }, { content:“競馬”,
genre:“アクションゲーム”, rating:“◯” }, { content:“競馬”,
genre:“アドベンチャー”, rating:“◇” }, { content:“競馬”,
genre:“シューティング”, rating:“◎” }, { content:“競馬”,
genre:“アクションRPG”, rating:“◇” }, { content:“競馬”,
genre:“レースゲーム”, rating:“◯” }, { content:“競馬”, genre:“ネットRPG”,
rating:“◇” }, { content:“競馬”, genre:“ネットSLG”, rating:“☆” }, {
content:“競馬”, genre:“素材集”, rating:“◇” }, { content:“競馬”,
genre:“育成”, rating:“◇” }, { content:“競馬”, genre:“ボードゲーム”,
rating:“△” }, { content:“競馬”, genre:“パズル”, rating:“◇” }, {
content:“競馬”, genre:“音楽ゲーム”, rating:“△” }, { content:“競馬”,
genre:“サウンドノベル”, rating:“◇” }, { content:“競馬”,
genre:“体感ゲーム”, rating:“◎” }, { content:“競馬”, genre:“教育”,
rating:“◇” }, { content:“競馬”, genre:“カードゲーム”, rating:“◇” }, {
content:“戦国”, genre:“RPG”, rating:“◇” }, { content:“戦国”,
genre:“シミュレーション”, rating:“◯” }, { content:“戦国”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“戦国”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“戦国”,
genre:“アクションゲーム”, rating:“◯” }, { content:“戦国”,
genre:“アドベンチャー”, rating:“◇” }, { content:“戦国”,
genre:“シューティング”, rating:“△” }, { content:“戦国”,
genre:“アクションRPG”, rating:“◇” }, { content:“戦国”,
genre:“レースゲーム”, rating:“◎” }, { content:“戦国”, genre:“ネットRPG”,
rating:“△” }, { content:“戦国”, genre:“ネットSLG”, rating:“◯” }, {
content:“戦国”, genre:“素材集”, rating:“◇” }, { content:“戦国”,
genre:“育成”, rating:“◇” }, { content:“戦国”, genre:“ボードゲーム”,
rating:“◯” }, { content:“戦国”, genre:“パズル”, rating:“◇” }, {
content:“戦国”, genre:“音楽ゲーム”, rating:“✕” }, { content:“戦国”,
genre:“サウンドノベル”, rating:“◇” }, { content:“戦国”,
genre:“体感ゲーム”, rating:“◇” }, { content:“戦国”, genre:“教育”,
rating:“◇” }, { content:“戦国”, genre:“カードゲーム”, rating:“◇” }, {
content:“ダンジョン”, genre:“RPG”, rating:“◯” }, { content:“ダンジョン”,
genre:“シミュレーション”, rating:“◇” }, { content:“ダンジョン”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ダンジョン”,
genre:“テーブルゲーム”, rating:“◯” }, { content:“ダンジョン”,
genre:“アクションゲーム”, rating:“◯” }, { content:“ダンジョン”,
genre:“アドベンチャー”, rating:“◇” }, { content:“ダンジョン”,
genre:“シューティング”, rating:“◯” }, { content:“ダンジョン”,
genre:“アクションRPG”, rating:“◇” }, { content:“ダンジョン”,
genre:“レースゲーム”, rating:“◎” }, { content:“ダンジョン”,
genre:“ネットRPG”, rating:“◯” }, { content:“ダンジョン”,
genre:“ネットSLG”, rating:“◇” }, { content:“ダンジョン”, genre:“素材集”,
rating:“✕” }, { content:“ダンジョン”, genre:“育成”, rating:“△” }, {
content:“ダンジョン”, genre:“ボードゲーム”, rating:“◯” }, {
content:“ダンジョン”, genre:“パズル”, rating:“△” }, {
content:“ダンジョン”, genre:“音楽ゲーム”, rating:“△” }, {
content:“ダンジョン”, genre:“サウンドノベル”, rating:“◇” }, {
content:“ダンジョン”, genre:“体感ゲーム”, rating:“✕” }, {
content:“ダンジョン”, genre:“教育”, rating:“◇” }, {
content:“ダンジョン”, genre:“カードゲーム”, rating:“◇” }, {
content:“恋愛”, genre:“RPG”, rating:“△” }, { content:“恋愛”,
genre:“シミュレーション”, rating:“☆” }, { content:“恋愛”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“恋愛”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“恋愛”,
genre:“アクションゲーム”, rating:“✕” }, { content:“恋愛”,
genre:“アドベンチャー”, rating:“◯” }, { content:“恋愛”,
genre:“シューティング”, rating:“◇” }, { content:“恋愛”,
genre:“アクションRPG”, rating:“△” }, { content:“恋愛”,
genre:“レースゲーム”, rating:“✕” }, { content:“恋愛”, genre:“ネットRPG”,
rating:“◇” }, { content:“恋愛”, genre:“ネットSLG”, rating:“◇” }, {
content:“恋愛”, genre:“素材集”, rating:“◎” }, { content:“恋愛”,
genre:“育成”, rating:“◇” }, { content:“恋愛”, genre:“ボードゲーム”,
rating:“◇” }, { content:“恋愛”, genre:“パズル”, rating:“△” }, {
content:“恋愛”, genre:“音楽ゲーム”, rating:“◇” }, { content:“恋愛”,
genre:“サウンドノベル”, rating:“☆” }, { content:“恋愛”,
genre:“体感ゲーム”, rating:“◎” }, { content:“恋愛”, genre:“教育”,
rating:“◇” }, { content:“恋愛”, genre:“カードゲーム”, rating:“◇” }, {
content:“埋蔵金”, genre:“RPG”, rating:“◇” }, { content:“埋蔵金”,
genre:“シミュレーション”, rating:“◯” }, { content:“埋蔵金”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“埋蔵金”,
genre:“テーブルゲーム”, rating:“✕” }, { content:“埋蔵金”,
genre:“アクションゲーム”, rating:“◇” }, { content:“埋蔵金”,
genre:“アドベンチャー”, rating:“◇” }, { content:“埋蔵金”,
genre:“シューティング”, rating:“✕” }, { content:“埋蔵金”,
genre:“アクションRPG”, rating:“◇” }, { content:“埋蔵金”,
genre:“レースゲーム”, rating:“✕” }, { content:“埋蔵金”,
genre:“ネットRPG”, rating:“◇” }, { content:“埋蔵金”, genre:“ネットSLG”,
rating:“✕” }, { content:“埋蔵金”, genre:“素材集”, rating:“◎” }, {
content:“埋蔵金”, genre:“育成”, rating:“◇” }, { content:“埋蔵金”,
genre:“ボードゲーム”, rating:“◇” }, { content:“埋蔵金”, genre:“パズル”,
rating:“△” }, { content:“埋蔵金”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“埋蔵金”, genre:“サウンドノベル”, rating:“△” }, {
content:“埋蔵金”, genre:“体感ゲーム”, rating:“◇” }, { content:“埋蔵金”,
genre:“教育”, rating:“◇” }, { content:“埋蔵金”, genre:“カードゲーム”,
rating:“◇” }, { content:“お笑い”, genre:“RPG”, rating:“✕” }, {
content:“お笑い”, genre:“シミュレーション”, rating:“◯” }, {
content:“お笑い”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“お笑い”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“お笑い”, genre:“アクションゲーム”, rating:“◎” }, {
content:“お笑い”, genre:“アドベンチャー”, rating:“◎” }, {
content:“お笑い”, genre:“シューティング”, rating:“◇” }, {
content:“お笑い”, genre:“アクションRPG”, rating:“◇” }, {
content:“お笑い”, genre:“レースゲーム”, rating:“◇” }, {
content:“お笑い”, genre:“ネットRPG”, rating:“◇” }, { content:“お笑い”,
genre:“ネットSLG”, rating:“◇” }, { content:“お笑い”, genre:“素材集”,
rating:“☆” }, { content:“お笑い”, genre:“育成”, rating:“◯” }, {
content:“お笑い”, genre:“ボードゲーム”, rating:“◇” }, {
content:“お笑い”, genre:“パズル”, rating:“◇” }, { content:“お笑い”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“お笑い”,
genre:“サウンドノベル”, rating:“◇” }, { content:“お笑い”,
genre:“体感ゲーム”, rating:“◎” }, { content:“お笑い”, genre:“教育”,
rating:“◇” }, { content:“お笑い”, genre:“カードゲーム”, rating:“◇” }, {
content:“ホラー”, genre:“RPG”, rating:“◎” }, { content:“ホラー”,
genre:“シミュレーション”, rating:“◇” }, { content:“ホラー”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ホラー”,
genre:“テーブルゲーム”, rating:“△” }, { content:“ホラー”,
genre:“アクションゲーム”, rating:“☆” }, { content:“ホラー”,
genre:“アドベンチャー”, rating:“◯” }, { content:“ホラー”,
genre:“シューティング”, rating:“◇” }, { content:“ホラー”,
genre:“アクションRPG”, rating:“◇” }, { content:“ホラー”,
genre:“レースゲーム”, rating:“✕” }, { content:“ホラー”,
genre:“ネットRPG”, rating:“◇” }, { content:“ホラー”, genre:“ネットSLG”,
rating:“◇” }, { content:“ホラー”, genre:“素材集”, rating:“◇” }, {
content:“ホラー”, genre:“育成”, rating:“△” }, { content:“ホラー”,
genre:“ボードゲーム”, rating:“◇” }, { content:“ホラー”, genre:“パズル”,
rating:“△” }, { content:“ホラー”, genre:“音楽ゲーム”, rating:“✕” }, {
content:“ホラー”, genre:“サウンドノベル”, rating:“☆” }, {
content:“ホラー”, genre:“体感ゲーム”, rating:“◯” }, { content:“ホラー”,
genre:“教育”, rating:“◇” }, { content:“ホラー”, genre:“カードゲーム”,
rating:“◇” }, { content:“脳トレ”, genre:“RPG”, rating:“◇” }, {
content:“脳トレ”, genre:“シミュレーション”, rating:“◯” }, {
content:“脳トレ”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“脳トレ”, genre:“テーブルゲーム”, rating:“◯” }, {
content:“脳トレ”, genre:“アクションゲーム”, rating:“◇” }, {
content:“脳トレ”, genre:“アドベンチャー”, rating:“◇” }, {
content:“脳トレ”, genre:“シューティング”, rating:“◇” }, {
content:“脳トレ”, genre:“アクションRPG”, rating:“✕” }, {
content:“脳トレ”, genre:“レースゲーム”, rating:“✕” }, {
content:“脳トレ”, genre:“ネットRPG”, rating:“✕” }, { content:“脳トレ”,
genre:“ネットSLG”, rating:“△” }, { content:“脳トレ”, genre:“素材集”,
rating:“◇” }, { content:“脳トレ”, genre:“育成”, rating:“☆” }, {
content:“脳トレ”, genre:“ボードゲーム”, rating:“◇” }, {
content:“脳トレ”, genre:“パズル”, rating:“◯” }, { content:“脳トレ”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“脳トレ”,
genre:“サウンドノベル”, rating:“◇” }, { content:“脳トレ”,
genre:“体感ゲーム”, rating:“◎” }, { content:“脳トレ”, genre:“教育”,
rating:“◇” }, { content:“脳トレ”, genre:“カードゲーム”, rating:“◇” }, {
content:“電車”, genre:“RPG”, rating:“◎” }, { content:“電車”,
genre:“シミュレーション”, rating:“☆” }, { content:“電車”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“電車”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“電車”,
genre:“アクションゲーム”, rating:“◎” }, { content:“電車”,
genre:“アドベンチャー”, rating:“◎” }, { content:“電車”,
genre:“シューティング”, rating:“◇” }, { content:“電車”,
genre:“アクションRPG”, rating:“◇” }, { content:“電車”,
genre:“レースゲーム”, rating:“◎” }, { content:“電車”, genre:“ネットRPG”,
rating:“◇” }, { content:“電車”, genre:“ネットSLG”, rating:“◇” }, {
content:“電車”, genre:“素材集”, rating:“◯” }, { content:“電車”,
genre:“育成”, rating:“◇” }, { content:“電車”, genre:“ボードゲーム”,
rating:“◯” }, { content:“電車”, genre:“パズル”, rating:“◇” }, {
content:“電車”, genre:“音楽ゲーム”, rating:“◇” }, { content:“電車”,
genre:“サウンドノベル”, rating:“◇” }, { content:“電車”,
genre:“体感ゲーム”, rating:“◇” }, { content:“電車”, genre:“教育”,
rating:“◇” }, { content:“電車”, genre:“カードゲーム”, rating:“◇” }, {
content:“動物”, genre:“RPG”, rating:“◇” }, { content:“動物”,
genre:“シミュレーション”, rating:“◯” }, { content:“動物”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“動物”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“動物”,
genre:“アクションゲーム”, rating:“◇” }, { content:“動物”,
genre:“アドベンチャー”, rating:“◇” }, { content:“動物”,
genre:“シューティング”, rating:“△” }, { content:“動物”,
genre:“アクションRPG”, rating:“◇” }, { content:“動物”,
genre:“レースゲーム”, rating:“◇” }, { content:“動物”, genre:“ネットRPG”,
rating:“△” }, { content:“動物”, genre:“ネットSLG”, rating:“△” }, {
content:“動物”, genre:“素材集”, rating:“◯” }, { content:“動物”,
genre:“育成”, rating:“☆” }, { content:“動物”, genre:“ボードゲーム”,
rating:“◇” }, { content:“動物”, genre:“パズル”, rating:“◇” }, {
content:“動物”, genre:“音楽ゲーム”, rating:“◇” }, { content:“動物”,
genre:“サウンドノベル”, rating:“◎” }, { content:“動物”,
genre:“体感ゲーム”, rating:“◇” }, { content:“動物”, genre:“教育”,
rating:“◇” }, { content:“動物”, genre:“カードゲーム”, rating:“◇” }, {
content:“ロボット”, genre:“RPG”, rating:“◇” }, { content:“ロボット”,
genre:“シミュレーション”, rating:“◇” }, { content:“ロボット”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ロボット”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“ロボット”,
genre:“アクションゲーム”, rating:“◯” }, { content:“ロボット”,
genre:“アドベンチャー”, rating:“◇” }, { content:“ロボット”,
genre:“シューティング”, rating:“☆” }, { content:“ロボット”,
genre:“アクションRPG”, rating:“◇” }, { content:“ロボット”,
genre:“レースゲーム”, rating:“◇” }, { content:“ロボット”,
genre:“ネットRPG”, rating:“◇” }, { content:“ロボット”,
genre:“ネットSLG”, rating:“◇” }, { content:“ロボット”, genre:“素材集”,
rating:“◯” }, { content:“ロボット”, genre:“育成”, rating:“◇” }, {
content:“ロボット”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ロボット”, genre:“パズル”, rating:“△” }, { content:“ロボット”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“ロボット”,
genre:“サウンドノベル”, rating:“◇” }, { content:“ロボット”,
genre:“体感ゲーム”, rating:“◇” }, { content:“ロボット”, genre:“教育”,
rating:“◇” }, { content:“ロボット”, genre:“カードゲーム”, rating:“◇” },
{ content:“飛行機”, genre:“RPG”, rating:“✕” }, { content:“飛行機”,
genre:“シミュレーション”, rating:“◯” }, { content:“飛行機”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“飛行機”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“飛行機”,
genre:“アクションゲーム”, rating:“◯” }, { content:“飛行機”,
genre:“アドベンチャー”, rating:“✕” }, { content:“飛行機”,
genre:“シューティング”, rating:“◯” }, { content:“飛行機”,
genre:“アクションRPG”, rating:“◇” }, { content:“飛行機”,
genre:“レースゲーム”, rating:“◯” }, { content:“飛行機”,
genre:“ネットRPG”, rating:“◇” }, { content:“飛行機”, genre:“ネットSLG”,
rating:“◇” }, { content:“飛行機”, genre:“素材集”, rating:“◇” }, {
content:“飛行機”, genre:“育成”, rating:“△” }, { content:“飛行機”,
genre:“ボードゲーム”, rating:“✕” }, { content:“飛行機”, genre:“パズル”,
rating:“◇” }, { content:“飛行機”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“飛行機”, genre:“サウンドノベル”, rating:“✕” }, {
content:“飛行機”, genre:“体感ゲーム”, rating:“◇” }, { content:“飛行機”,
genre:“教育”, rating:“◇” }, { content:“飛行機”, genre:“カードゲーム”,
rating:“◇” }, { content:“コンビニ”, genre:“RPG”, rating:“△” }, {
content:“コンビニ”, genre:“シミュレーション”, rating:“◯” }, {
content:“コンビニ”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“コンビニ”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“コンビニ”, genre:“アクションゲーム”, rating:“△” }, {
content:“コンビニ”, genre:“アドベンチャー”, rating:“◇” }, {
content:“コンビニ”, genre:“シューティング”, rating:“✕” }, {
content:“コンビニ”, genre:“アクションRPG”, rating:“◇” }, {
content:“コンビニ”, genre:“レースゲーム”, rating:“◇” }, {
content:“コンビニ”, genre:“ネットRPG”, rating:“◇” }, {
content:“コンビニ”, genre:“ネットSLG”, rating:“☆” }, {
content:“コンビニ”, genre:“素材集”, rating:“◇” }, { content:“コンビニ”,
genre:“育成”, rating:“◯” }, { content:“コンビニ”, genre:“ボードゲーム”,
rating:“◇” }, { content:“コンビニ”, genre:“パズル”, rating:“◇” }, {
content:“コンビニ”, genre:“音楽ゲーム”, rating:“◎” }, {
content:“コンビニ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“コンビニ”, genre:“体感ゲーム”, rating:“◇” }, {
content:“コンビニ”, genre:“教育”, rating:“◇” }, { content:“コンビニ”,
genre:“カードゲーム”, rating:“◇” }, { content:“時代劇”, genre:“RPG”,
rating:“◇” }, { content:“時代劇”, genre:“シミュレーション”, rating:“◯”
}, { content:“時代劇”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“時代劇”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“時代劇”, genre:“アクションゲーム”, rating:“☆” }, {
content:“時代劇”, genre:“アドベンチャー”, rating:“◇” }, {
content:“時代劇”, genre:“シューティング”, rating:“◎” }, {
content:“時代劇”, genre:“アクションRPG”, rating:“◇” }, {
content:“時代劇”, genre:“レースゲーム”, rating:“✕” }, {
content:“時代劇”, genre:“ネットRPG”, rating:“◯” }, { content:“時代劇”,
genre:“ネットSLG”, rating:“◯” }, { content:“時代劇”, genre:“素材集”,
rating:“◇” }, { content:“時代劇”, genre:“育成”, rating:“◇” }, {
content:“時代劇”, genre:“ボードゲーム”, rating:“△” }, {
content:“時代劇”, genre:“パズル”, rating:“△” }, { content:“時代劇”,
genre:“音楽ゲーム”, rating:“✕” }, { content:“時代劇”,
genre:“サウンドノベル”, rating:“◯” }, { content:“時代劇”,
genre:“体感ゲーム”, rating:“◇” }, { content:“時代劇”, genre:“教育”,
rating:“◇” }, { content:“時代劇”, genre:“カードゲーム”, rating:“◇” }, {
content:“古本屋”, genre:“RPG”, rating:“◇” }, { content:“古本屋”,
genre:“シミュレーション”, rating:“☆” }, { content:“古本屋”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“古本屋”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“古本屋”,
genre:“アクションゲーム”, rating:“◇” }, { content:“古本屋”,
genre:“アドベンチャー”, rating:“◇” }, { content:“古本屋”,
genre:“シューティング”, rating:“△” }, { content:“古本屋”,
genre:“アクションRPG”, rating:“◇” }, { content:“古本屋”,
genre:“レースゲーム”, rating:“△” }, { content:“古本屋”,
genre:“ネットRPG”, rating:“◇” }, { content:“古本屋”, genre:“ネットSLG”,
rating:“◯” }, { content:“古本屋”, genre:“素材集”, rating:“◇” }, {
content:“古本屋”, genre:“育成”, rating:“◇” }, { content:“古本屋”,
genre:“ボードゲーム”, rating:“◇” }, { content:“古本屋”, genre:“パズル”,
rating:“◇” }, { content:“古本屋”, genre:“音楽ゲーム”, rating:“△” }, {
content:“古本屋”, genre:“サウンドノベル”, rating:“◇” }, {
content:“古本屋”, genre:“体感ゲーム”, rating:“◎” }, { content:“古本屋”,
genre:“教育”, rating:“◇” }, { content:“古本屋”, genre:“カードゲーム”,
rating:“◇” }, { content:“漫画家”, genre:“RPG”, rating:“✕” }, {
content:“漫画家”, genre:“シミュレーション”, rating:“☆” }, {
content:“漫画家”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“漫画家”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“漫画家”, genre:“アクションゲーム”, rating:“△” }, {
content:“漫画家”, genre:“アドベンチャー”, rating:“◇” }, {
content:“漫画家”, genre:“シューティング”, rating:“✕” }, {
content:“漫画家”, genre:“アクションRPG”, rating:“◇” }, {
content:“漫画家”, genre:“レースゲーム”, rating:“△” }, {
content:“漫画家”, genre:“ネットRPG”, rating:“◇” }, { content:“漫画家”,
genre:“ネットSLG”, rating:“◇” }, { content:“漫画家”, genre:“素材集”,
rating:“◯” }, { content:“漫画家”, genre:“育成”, rating:“☆” }, {
content:“漫画家”, genre:“ボードゲーム”, rating:“◇” }, {
content:“漫画家”, genre:“パズル”, rating:“◇” }, { content:“漫画家”,
genre:“音楽ゲーム”, rating:“✕” }, { content:“漫画家”,
genre:“サウンドノベル”, rating:“◇” }, { content:“漫画家”,
genre:“体感ゲーム”, rating:“◇” }, { content:“漫画家”, genre:“教育”,
rating:“◇” }, { content:“漫画家”, genre:“カードゲーム”, rating:“◇” }, {
content:“美術”, genre:“RPG”, rating:“◎” }, { content:“美術”,
genre:“シミュレーション”, rating:“◇” }, { content:“美術”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“美術”,
genre:“テーブルゲーム”, rating:“△” }, { content:“美術”,
genre:“アクションゲーム”, rating:“◇” }, { content:“美術”,
genre:“アドベンチャー”, rating:“◯” }, { content:“美術”,
genre:“シューティング”, rating:“◇” }, { content:“美術”,
genre:“アクションRPG”, rating:“✕” }, { content:“美術”,
genre:“レースゲーム”, rating:“△” }, { content:“美術”, genre:“ネットRPG”,
rating:“◇” }, { content:“美術”, genre:“ネットSLG”, rating:“◇” }, {
content:“美術”, genre:“素材集”, rating:“◇” }, { content:“美術”,
genre:“育成”, rating:“◎” }, { content:“美術”, genre:“ボードゲーム”,
rating:“◇” }, { content:“美術”, genre:“パズル”, rating:“◎” }, {
content:“美術”, genre:“音楽ゲーム”, rating:“△” }, { content:“美術”,
genre:“サウンドノベル”, rating:“◇” }, { content:“美術”,
genre:“体感ゲーム”, rating:“△” }, { content:“美術”, genre:“教育”,
rating:“◇” }, { content:“美術”, genre:“カードゲーム”, rating:“◇” }, {
content:“映画”, genre:“RPG”, rating:“◇” }, { content:“映画”,
genre:“シミュレーション”, rating:“☆” }, { content:“映画”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“映画”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“映画”,
genre:“アクションゲーム”, rating:“◇” }, { content:“映画”,
genre:“アドベンチャー”, rating:“◇” }, { content:“映画”,
genre:“シューティング”, rating:“✕” }, { content:“映画”,
genre:“アクションRPG”, rating:“◇” }, { content:“映画”,
genre:“レースゲーム”, rating:“△” }, { content:“映画”, genre:“ネットRPG”,
rating:“◇” }, { content:“映画”, genre:“ネットSLG”, rating:“◇” }, {
content:“映画”, genre:“素材集”, rating:“◯” }, { content:“映画”,
genre:“育成”, rating:“◯” }, { content:“映画”, genre:“ボードゲーム”,
rating:“◇” }, { content:“映画”, genre:“パズル”, rating:“◇” }, {
content:“映画”, genre:“音楽ゲーム”, rating:“◯” }, { content:“映画”,
genre:“サウンドノベル”, rating:“☆” }, { content:“映画”,
genre:“体感ゲーム”, rating:“◇” }, { content:“映画”, genre:“教育”,
rating:“◇” }, { content:“映画”, genre:“カードゲーム”, rating:“◇” }, {
content:“ゲーム会社”, genre:“RPG”, rating:“◇” }, { content:“ゲーム会社”,
genre:“シミュレーション”, rating:“☆” }, { content:“ゲーム会社”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ゲーム会社”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“ゲーム会社”,
genre:“アクションゲーム”, rating:“◇” }, { content:“ゲーム会社”,
genre:“アドベンチャー”, rating:“△” }, { content:“ゲーム会社”,
genre:“シューティング”, rating:“◇” }, { content:“ゲーム会社”,
genre:“アクションRPG”, rating:“◇” }, { content:“ゲーム会社”,
genre:“レースゲーム”, rating:“◎” }, { content:“ゲーム会社”,
genre:“ネットRPG”, rating:“◇” }, { content:“ゲーム会社”,
genre:“ネットSLG”, rating:“☆” }, { content:“ゲーム会社”, genre:“素材集”,
rating:“◇” }, { content:“ゲーム会社”, genre:“育成”, rating:“☆” }, {
content:“ゲーム会社”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ゲーム会社”, genre:“パズル”, rating:“◇” }, {
content:“ゲーム会社”, genre:“音楽ゲーム”, rating:“△” }, {
content:“ゲーム会社”, genre:“サウンドノベル”, rating:“◇” }, {
content:“ゲーム会社”, genre:“体感ゲーム”, rating:“✕” }, {
content:“ゲーム会社”, genre:“教育”, rating:“◇” }, {
content:“ゲーム会社”, genre:“カードゲーム”, rating:“◇” }, {
content:“エジプト”, genre:“RPG”, rating:“◯” }, { content:“エジプト”,
genre:“シミュレーション”, rating:“◯” }, { content:“エジプト”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“エジプト”,
genre:“テーブルゲーム”, rating:“△” }, { content:“エジプト”,
genre:“アクションゲーム”, rating:“◇” }, { content:“エジプト”,
genre:“アドベンチャー”, rating:“◯” }, { content:“エジプト”,
genre:“シューティング”, rating:“◇” }, { content:“エジプト”,
genre:“アクションRPG”, rating:“◇” }, { content:“エジプト”,
genre:“レースゲーム”, rating:“◇” }, { content:“エジプト”,
genre:“ネットRPG”, rating:“◇” }, { content:“エジプト”,
genre:“ネットSLG”, rating:“◇” }, { content:“エジプト”, genre:“素材集”,
rating:“◯” }, { content:“エジプト”, genre:“育成”, rating:“◇” }, {
content:“エジプト”, genre:“ボードゲーム”, rating:“◇” }, {
content:“エジプト”, genre:“パズル”, rating:“◎” }, { content:“エジプト”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“エジプト”,
genre:“サウンドノベル”, rating:“◇” }, { content:“エジプト”,
genre:“体感ゲーム”, rating:“◇” }, { content:“エジプト”, genre:“教育”,
rating:“◇” }, { content:“エジプト”, genre:“カードゲーム”, rating:“◇” },
{ content:“街開発”, genre:“RPG”, rating:“◇” }, { content:“街開発”,
genre:“シミュレーション”, rating:“☆” }, { content:“街開発”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“街開発”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“街開発”,
genre:“アクションゲーム”, rating:“△” }, { content:“街開発”,
genre:“アドベンチャー”, rating:“◇” }, { content:“街開発”,
genre:“シューティング”, rating:“✕” }, { content:“街開発”,
genre:“アクションRPG”, rating:“◇” }, { content:“街開発”,
genre:“レースゲーム”, rating:“◇” }, { content:“街開発”,
genre:“ネットRPG”, rating:“△” }, { content:“街開発”, genre:“ネットSLG”,
rating:“◇” }, { content:“街開発”, genre:“素材集”, rating:“◇” }, {
content:“街開発”, genre:“育成”, rating:“☆” }, { content:“街開発”,
genre:“ボードゲーム”, rating:“◇” }, { content:“街開発”, genre:“パズル”,
rating:“✕” }, { content:“街開発”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“街開発”, genre:“サウンドノベル”, rating:“◎” }, {
content:“街開発”, genre:“体感ゲーム”, rating:“◇” }, { content:“街開発”,
genre:“教育”, rating:“◇” }, { content:“街開発”, genre:“カードゲーム”,
rating:“◇” }, { content:“ビル建築”, genre:“RPG”, rating:“◎” }, {
content:“ビル建築”, genre:“シミュレーション”, rating:“☆” }, {
content:“ビル建築”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“ビル建築”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“ビル建築”, genre:“アクションゲーム”, rating:“△” }, {
content:“ビル建築”, genre:“アドベンチャー”, rating:“✕” }, {
content:“ビル建築”, genre:“シューティング”, rating:“◇” }, {
content:“ビル建築”, genre:“アクションRPG”, rating:“◇” }, {
content:“ビル建築”, genre:“レースゲーム”, rating:“✕” }, {
content:“ビル建築”, genre:“ネットRPG”, rating:“◇” }, {
content:“ビル建築”, genre:“ネットSLG”, rating:“☆” }, {
content:“ビル建築”, genre:“素材集”, rating:“◇” }, { content:“ビル建築”,
genre:“育成”, rating:“◇” }, { content:“ビル建築”, genre:“ボードゲーム”,
rating:“△” }, { content:“ビル建築”, genre:“パズル”, rating:“◇” }, {
content:“ビル建築”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“ビル建築”, genre:“サウンドノベル”, rating:“◇” }, {
content:“ビル建築”, genre:“体感ゲーム”, rating:“◎” }, {
content:“ビル建築”, genre:“教育”, rating:“◇” }, { content:“ビル建築”,
genre:“カードゲーム”, rating:“◇” }, { content:“裁判”, genre:“RPG”,
rating:“◇” }, { content:“裁判”, genre:“シミュレーション”, rating:“◯” },
{ content:“裁判”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“裁判”, genre:“テーブルゲーム”, rating:“◇” }, { content:“裁判”,
genre:“アクションゲーム”, rating:“◎” }, { content:“裁判”,
genre:“アドベンチャー”, rating:“◇” }, { content:“裁判”,
genre:“シューティング”, rating:“◎” }, { content:“裁判”,
genre:“アクションRPG”, rating:“◇” }, { content:“裁判”,
genre:“レースゲーム”, rating:“✕” }, { content:“裁判”, genre:“ネットRPG”,
rating:“◇” }, { content:“裁判”, genre:“ネットSLG”, rating:“◇” }, {
content:“裁判”, genre:“素材集”, rating:“◯” }, { content:“裁判”,
genre:“育成”, rating:“◇” }, { content:“裁判”, genre:“ボードゲーム”,
rating:“◇” }, { content:“裁判”, genre:“パズル”, rating:“◇” }, {
content:“裁判”, genre:“音楽ゲーム”, rating:“△” }, { content:“裁判”,
genre:“サウンドノベル”, rating:“△” }, { content:“裁判”,
genre:“体感ゲーム”, rating:“◇” }, { content:“裁判”, genre:“教育”,
rating:“◇” }, { content:“裁判”, genre:“カードゲーム”, rating:“◇” }, {
content:“中世欧州”, genre:“RPG”, rating:“◯” }, { content:“中世欧州”,
genre:“シミュレーション”, rating:“◇” }, { content:“中世欧州”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“中世欧州”,
genre:“テーブルゲーム”, rating:“◯” }, { content:“中世欧州”,
genre:“アクションゲーム”, rating:“◇” }, { content:“中世欧州”,
genre:“アドベンチャー”, rating:“◯” }, { content:“中世欧州”,
genre:“シューティング”, rating:“◇” }, { content:“中世欧州”,
genre:“アクションRPG”, rating:“◯” }, { content:“中世欧州”,
genre:“レースゲーム”, rating:“◇” }, { content:“中世欧州”,
genre:“ネットRPG”, rating:“☆” }, { content:“中世欧州”,
genre:“ネットSLG”, rating:“◇” }, { content:“中世欧州”, genre:“素材集”,
rating:“◇” }, { content:“中世欧州”, genre:“育成”, rating:“◇” }, {
content:“中世欧州”, genre:“ボードゲーム”, rating:“◯” }, {
content:“中世欧州”, genre:“パズル”, rating:“◇” }, { content:“中世欧州”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“中世欧州”,
genre:“サウンドノベル”, rating:“◇” }, { content:“中世欧州”,
genre:“体感ゲーム”, rating:“◇” }, { content:“中世欧州”, genre:“教育”,
rating:“◇” }, { content:“中世欧州”, genre:“カードゲーム”, rating:“◇” },
{ content:“妖怪”, genre:“RPG”, rating:“◇” }, { content:“妖怪”,
genre:“シミュレーション”, rating:“◇” }, { content:“妖怪”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“妖怪”,
genre:“テーブルゲーム”, rating:“△” }, { content:“妖怪”,
genre:“アクションゲーム”, rating:“◇” }, { content:“妖怪”,
genre:“アドベンチャー”, rating:“◇” }, { content:“妖怪”,
genre:“シューティング”, rating:“◯” }, { content:“妖怪”,
genre:“アクションRPG”, rating:“◇” }, { content:“妖怪”,
genre:“レースゲーム”, rating:“◎” }, { content:“妖怪”, genre:“ネットRPG”,
rating:“◇” }, { content:“妖怪”, genre:“ネットSLG”, rating:“◇” }, {
content:“妖怪”, genre:“素材集”, rating:“◯” }, { content:“妖怪”,
genre:“育成”, rating:“◇” }, { content:“妖怪”, genre:“ボードゲーム”,
rating:“◇” }, { content:“妖怪”, genre:“パズル”, rating:“△” }, {
content:“妖怪”, genre:“音楽ゲーム”, rating:“◇” }, { content:“妖怪”,
genre:“サウンドノベル”, rating:“◇” }, { content:“妖怪”,
genre:“体感ゲーム”, rating:“◎” }, { content:“妖怪”, genre:“教育”,
rating:“◇” }, { content:“妖怪”, genre:“カードゲーム”, rating:“◇” }, {
content:“狩り”, genre:“RPG”, rating:“△” }, { content:“狩り”,
genre:“シミュレーション”, rating:“◯” }, { content:“狩り”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“狩り”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“狩り”,
genre:“アクションゲーム”, rating:“◇” }, { content:“狩り”,
genre:“アドベンチャー”, rating:“◇” }, { content:“狩り”,
genre:“シューティング”, rating:“◎” }, { content:“狩り”,
genre:“アクションRPG”, rating:“☆” }, { content:“狩り”,
genre:“レースゲーム”, rating:“◇” }, { content:“狩り”, genre:“ネットRPG”,
rating:“◯” }, { content:“狩り”, genre:“ネットSLG”, rating:“◇” }, {
content:“狩り”, genre:“素材集”, rating:“◇” }, { content:“狩り”,
genre:“育成”, rating:“◇” }, { content:“狩り”, genre:“ボードゲーム”,
rating:“△” }, { content:“狩り”, genre:“パズル”, rating:“◇” }, {
content:“狩り”, genre:“音楽ゲーム”, rating:“△” }, { content:“狩り”,
genre:“サウンドノベル”, rating:“◇” }, { content:“狩り”,
genre:“体感ゲーム”, rating:“◇” }, { content:“狩り”, genre:“教育”,
rating:“◇” }, { content:“狩り”, genre:“カードゲーム”, rating:“◇” }, {
content:“高校”, genre:“RPG”, rating:“◇” }, { content:“高校”,
genre:“シミュレーション”, rating:“◯” }, { content:“高校”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“高校”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“高校”,
genre:“アクションゲーム”, rating:“◯” }, { content:“高校”,
genre:“アドベンチャー”, rating:“◇” }, { content:“高校”,
genre:“シューティング”, rating:“△” }, { content:“高校”,
genre:“アクションRPG”, rating:“◇” }, { content:“高校”,
genre:“レースゲーム”, rating:“✕” }, { content:“高校”, genre:“ネットRPG”,
rating:“◇” }, { content:“高校”, genre:“ネットSLG”, rating:“◇” }, {
content:“高校”, genre:“素材集”, rating:“◇” }, { content:“高校”,
genre:“育成”, rating:“◇” }, { content:“高校”, genre:“ボードゲーム”,
rating:“△” }, { content:“高校”, genre:“パズル”, rating:“◇” }, {
content:“高校”, genre:“音楽ゲーム”, rating:“◇” }, { content:“高校”,
genre:“サウンドノベル”, rating:“◯” }, { content:“高校”,
genre:“体感ゲーム”, rating:“◇” }, { content:“高校”, genre:“教育”,
rating:“◇” }, { content:“高校”, genre:“カードゲーム”, rating:“◇” }, {
content:“中学校”, genre:“RPG”, rating:“◇” }, { content:“中学校”,
genre:“シミュレーション”, rating:“◯” }, { content:“中学校”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“中学校”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“中学校”,
genre:“アクションゲーム”, rating:“◯” }, { content:“中学校”,
genre:“アドベンチャー”, rating:“◇” }, { content:“中学校”,
genre:“シューティング”, rating:“△” }, { content:“中学校”,
genre:“アクションRPG”, rating:“◇” }, { content:“中学校”,
genre:“レースゲーム”, rating:“✕” }, { content:“中学校”,
genre:“ネットRPG”, rating:“◇” }, { content:“中学校”, genre:“ネットSLG”,
rating:“◇” }, { content:“中学校”, genre:“素材集”, rating:“◇” }, {
content:“中学校”, genre:“育成”, rating:“◇” }, { content:“中学校”,
genre:“ボードゲーム”, rating:“△” }, { content:“中学校”, genre:“パズル”,
rating:“◇” }, { content:“中学校”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“中学校”, genre:“サウンドノベル”, rating:“◯” }, {
content:“中学校”, genre:“体感ゲーム”, rating:“◇” }, { content:“中学校”,
genre:“教育”, rating:“◇” }, { content:“中学校”, genre:“カードゲーム”,
rating:“◇” }, { content:“戦争”, genre:“RPG”, rating:“◇” }, {
content:“戦争”, genre:“シミュレーション”, rating:“◇” }, {
content:“戦争”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“戦争”, genre:“テーブルゲーム”, rating:“◯” }, { content:“戦争”,
genre:“アクションゲーム”, rating:“◇” }, { content:“戦争”,
genre:“アドベンチャー”, rating:“✕” }, { content:“戦争”,
genre:“シューティング”, rating:“◯” }, { content:“戦争”,
genre:“アクションRPG”, rating:“◇” }, { content:“戦争”,
genre:“レースゲーム”, rating:“△” }, { content:“戦争”, genre:“ネットRPG”,
rating:“◇” }, { content:“戦争”, genre:“ネットSLG”, rating:“◯” }, {
content:“戦争”, genre:“素材集”, rating:“◇” }, { content:“戦争”,
genre:“育成”, rating:“◇” }, { content:“戦争”, genre:“ボードゲーム”,
rating:“◇” }, { content:“戦争”, genre:“パズル”, rating:“△” }, {
content:“戦争”, genre:“音楽ゲーム”, rating:“◇” }, { content:“戦争”,
genre:“サウンドノベル”, rating:“◯” }, { content:“戦争”,
genre:“体感ゲーム”, rating:“◇” }, { content:“戦争”, genre:“教育”,
rating:“◇” }, { content:“戦争”, genre:“カードゲーム”, rating:“◇” }, {
content:“忍者”, genre:“RPG”, rating:“◇” }, { content:“忍者”,
genre:“シミュレーション”, rating:“◇” }, { content:“忍者”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“忍者”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“忍者”,
genre:“アクションゲーム”, rating:“☆” }, { content:“忍者”,
genre:“アドベンチャー”, rating:“◎” }, { content:“忍者”,
genre:“シューティング”, rating:“◯” }, { content:“忍者”,
genre:“アクションRPG”, rating:“◇” }, { content:“忍者”,
genre:“レースゲーム”, rating:“△” }, { content:“忍者”, genre:“ネットRPG”,
rating:“◇” }, { content:“忍者”, genre:“ネットSLG”, rating:“◇” }, {
content:“忍者”, genre:“素材集”, rating:“◯” }, { content:“忍者”,
genre:“育成”, rating:“◇” }, { content:“忍者”, genre:“ボードゲーム”,
rating:“◇” }, { content:“忍者”, genre:“パズル”, rating:“✕” }, {
content:“忍者”, genre:“音楽ゲーム”, rating:“◇” }, { content:“忍者”,
genre:“サウンドノベル”, rating:“◇” }, { content:“忍者”,
genre:“体感ゲーム”, rating:“◇” }, { content:“忍者”, genre:“教育”,
rating:“◇” }, { content:“忍者”, genre:“カードゲーム”, rating:“◇” }, {
content:“美少女”, genre:“RPG”, rating:“◇” }, { content:“美少女”,
genre:“シミュレーション”, rating:“☆” }, { content:“美少女”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“美少女”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“美少女”,
genre:“アクションゲーム”, rating:“◇” }, { content:“美少女”,
genre:“アドベンチャー”, rating:“◯” }, { content:“美少女”,
genre:“シューティング”, rating:“△” }, { content:“美少女”,
genre:“アクションRPG”, rating:“◇” }, { content:“美少女”,
genre:“レースゲーム”, rating:“◎” }, { content:“美少女”,
genre:“ネットRPG”, rating:“◇” }, { content:“美少女”, genre:“ネットSLG”,
rating:“◇” }, { content:“美少女”, genre:“素材集”, rating:“◯” }, {
content:“美少女”, genre:“育成”, rating:“◯” }, { content:“美少女”,
genre:“ボードゲーム”, rating:“◇” }, { content:“美少女”, genre:“パズル”,
rating:“◇” }, { content:“美少女”, genre:“音楽ゲーム”, rating:“◎” }, {
content:“美少女”, genre:“サウンドノベル”, rating:“☆” }, {
content:“美少女”, genre:“体感ゲーム”, rating:“◎” }, { content:“美少女”,
genre:“教育”, rating:“◇” }, { content:“美少女”, genre:“カードゲーム”,
rating:“◇” }, { content:“ぶ少女”, genre:“RPG”, rating:“☆” }, {
content:“ぶ少女”, genre:“シミュレーション”, rating:“◇” }, {
content:“ぶ少女”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“ぶ少女”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“ぶ少女”, genre:“アクションゲーム”, rating:“☆” }, {
content:“ぶ少女”, genre:“アドベンチャー”, rating:“◇” }, {
content:“ぶ少女”, genre:“シューティング”, rating:“△” }, {
content:“ぶ少女”, genre:“アクションRPG”, rating:“◇” }, {
content:“ぶ少女”, genre:“レースゲーム”, rating:“◎” }, {
content:“ぶ少女”, genre:“ネットRPG”, rating:“◇” }, { content:“ぶ少女”,
genre:“ネットSLG”, rating:“◇” }, { content:“ぶ少女”, genre:“素材集”,
rating:“✕” }, { content:“ぶ少女”, genre:“育成”, rating:“△” }, {
content:“ぶ少女”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ぶ少女”, genre:“パズル”, rating:“◇” }, { content:“ぶ少女”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“ぶ少女”,
genre:“サウンドノベル”, rating:“△” }, { content:“ぶ少女”,
genre:“体感ゲーム”, rating:“◎” }, { content:“ぶ少女”, genre:“教育”,
rating:“◇” }, { content:“ぶ少女”, genre:“カードゲーム”, rating:“◇” }, {
content:“美男子”, genre:“RPG”, rating:“◇” }, { content:“美男子”,
genre:“シミュレーション”, rating:“◇” }, { content:“美男子”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“美男子”,
genre:“テーブルゲーム”, rating:“◎” }, { content:“美男子”,
genre:“アクションゲーム”, rating:“◇” }, { content:“美男子”,
genre:“アドベンチャー”, rating:“◇” }, { content:“美男子”,
genre:“シューティング”, rating:“◯” }, { content:“美男子”,
genre:“アクションRPG”, rating:“◇” }, { content:“美男子”,
genre:“レースゲーム”, rating:“◇” }, { content:“美男子”,
genre:“ネットRPG”, rating:“◇” }, { content:“美男子”, genre:“ネットSLG”,
rating:“◇” }, { content:“美男子”, genre:“素材集”, rating:“◇” }, {
content:“美男子”, genre:“育成”, rating:“◇” }, { content:“美男子”,
genre:“ボードゲーム”, rating:“◇” }, { content:“美男子”, genre:“パズル”,
rating:“◎” }, { content:“美男子”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“美男子”, genre:“サウンドノベル”, rating:“◯” }, {
content:“美男子”, genre:“体感ゲーム”, rating:“◇” }, { content:“美男子”,
genre:“教育”, rating:“◇” }, { content:“美男子”, genre:“カードゲーム”,
rating:“◇” }, { content:“探偵”, genre:“RPG”, rating:“◇” }, {
content:“探偵”, genre:“シミュレーション”, rating:“◇” }, {
content:“探偵”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“探偵”, genre:“テーブルゲーム”, rating:“✕” }, { content:“探偵”,
genre:“アクションゲーム”, rating:“◎” }, { content:“探偵”,
genre:“アドベンチャー”, rating:“☆” }, { content:“探偵”,
genre:“シューティング”, rating:“✕” }, { content:“探偵”,
genre:“アクションRPG”, rating:“◇” }, { content:“探偵”,
genre:“レースゲーム”, rating:“✕” }, { content:“探偵”, genre:“ネットRPG”,
rating:“◇” }, { content:“探偵”, genre:“ネットSLG”, rating:“◇” }, {
content:“探偵”, genre:“素材集”, rating:“◇” }, { content:“探偵”,
genre:“育成”, rating:“◯” }, { content:“探偵”, genre:“ボードゲーム”,
rating:“◇” }, { content:“探偵”, genre:“パズル”, rating:“◇” }, {
content:“探偵”, genre:“音楽ゲーム”, rating:“◎” }, { content:“探偵”,
genre:“サウンドノベル”, rating:“☆” }, { content:“探偵”,
genre:“体感ゲーム”, rating:“◇” }, { content:“探偵”, genre:“教育”,
rating:“◇” }, { content:“探偵”, genre:“カードゲーム”, rating:“◇” }, {
content:“ミステリー”, genre:“RPG”, rating:“◯” }, { content:“ミステリー”,
genre:“シミュレーション”, rating:“△” }, { content:“ミステリー”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ミステリー”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“ミステリー”,
genre:“アクションゲーム”, rating:“◇” }, { content:“ミステリー”,
genre:“アドベンチャー”, rating:“☆” }, { content:“ミステリー”,
genre:“シューティング”, rating:“◇” }, { content:“ミステリー”,
genre:“アクションRPG”, rating:“◇” }, { content:“ミステリー”,
genre:“レースゲーム”, rating:“✕” }, { content:“ミステリー”,
genre:“ネットRPG”, rating:“◇” }, { content:“ミステリー”,
genre:“ネットSLG”, rating:“◇” }, { content:“ミステリー”, genre:“素材集”,
rating:“◇” }, { content:“ミステリー”, genre:“育成”, rating:“◇” }, {
content:“ミステリー”, genre:“ボードゲーム”, rating:“△” }, {
content:“ミステリー”, genre:“パズル”, rating:“△” }, {
content:“ミステリー”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“ミステリー”, genre:“サウンドノベル”, rating:“◯” }, {
content:“ミステリー”, genre:“体感ゲーム”, rating:“◎” }, {
content:“ミステリー”, genre:“教育”, rating:“◇” }, {
content:“ミステリー”, genre:“カードゲーム”, rating:“◇” }, {
content:“幕末”, genre:“RPG”, rating:“◯” }, { content:“幕末”,
genre:“シミュレーション”, rating:“◯” }, { content:“幕末”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“幕末”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“幕末”,
genre:“アクションゲーム”, rating:“◯” }, { content:“幕末”,
genre:“アドベンチャー”, rating:“☆” }, { content:“幕末”,
genre:“シューティング”, rating:“◇” }, { content:“幕末”,
genre:“アクションRPG”, rating:“◯” }, { content:“幕末”,
genre:“レースゲーム”, rating:“◎” }, { content:“幕末”, genre:“ネットRPG”,
rating:“◇” }, { content:“幕末”, genre:“ネットSLG”, rating:“◇” }, {
content:“幕末”, genre:“素材集”, rating:“◯” }, { content:“幕末”,
genre:“育成”, rating:“◇” }, { content:“幕末”, genre:“ボードゲーム”,
rating:“◇” }, { content:“幕末”, genre:“パズル”, rating:“◇” }, {
content:“幕末”, genre:“音楽ゲーム”, rating:“◎” }, { content:“幕末”,
genre:“サウンドノベル”, rating:“☆” }, { content:“幕末”,
genre:“体感ゲーム”, rating:“◇” }, { content:“幕末”, genre:“教育”,
rating:“◇” }, { content:“幕末”, genre:“カードゲーム”, rating:“◇” }, {
content:“輪投げ”, genre:“RPG”, rating:“◇” }, { content:“輪投げ”,
genre:“シミュレーション”, rating:“◇” }, { content:“輪投げ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“輪投げ”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“輪投げ”,
genre:“アクションゲーム”, rating:“◇” }, { content:“輪投げ”,
genre:“アドベンチャー”, rating:“◎” }, { content:“輪投げ”,
genre:“シューティング”, rating:“☆” }, { content:“輪投げ”,
genre:“アクションRPG”, rating:“◇” }, { content:“輪投げ”,
genre:“レースゲーム”, rating:“◇” }, { content:“輪投げ”,
genre:“ネットRPG”, rating:“◇” }, { content:“輪投げ”, genre:“ネットSLG”,
rating:“◇” }, { content:“輪投げ”, genre:“素材集”, rating:“◇” }, {
content:“輪投げ”, genre:“育成”, rating:“◇” }, { content:“輪投げ”,
genre:“ボードゲーム”, rating:“◎” }, { content:“輪投げ”, genre:“パズル”,
rating:“◇” }, { content:“輪投げ”, genre:“音楽ゲーム”, rating:“◎” }, {
content:“輪投げ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“輪投げ”, genre:“体感ゲーム”, rating:“◎” }, { content:“輪投げ”,
genre:“教育”, rating:“◇” }, { content:“輪投げ”, genre:“カードゲーム”,
rating:“◇” }, { content:“総理大臣”, genre:“RPG”, rating:“◇” }, {
content:“総理大臣”, genre:“シミュレーション”, rating:“◯” }, {
content:“総理大臣”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“総理大臣”, genre:“テーブルゲーム”, rating:“△” }, {
content:“総理大臣”, genre:“アクションゲーム”, rating:“◇” }, {
content:“総理大臣”, genre:“アドベンチャー”, rating:“◇” }, {
content:“総理大臣”, genre:“シューティング”, rating:“✕” }, {
content:“総理大臣”, genre:“アクションRPG”, rating:“◇” }, {
content:“総理大臣”, genre:“レースゲーム”, rating:“◎” }, {
content:“総理大臣”, genre:“ネットRPG”, rating:“△” }, {
content:“総理大臣”, genre:“ネットSLG”, rating:“△” }, {
content:“総理大臣”, genre:“素材集”, rating:“◇” }, { content:“総理大臣”,
genre:“育成”, rating:“◯” }, { content:“総理大臣”, genre:“ボードゲーム”,
rating:“◇” }, { content:“総理大臣”, genre:“パズル”, rating:“◇” }, {
content:“総理大臣”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“総理大臣”, genre:“サウンドノベル”, rating:“◇” }, {
content:“総理大臣”, genre:“体感ゲーム”, rating:“◯” }, {
content:“総理大臣”, genre:“教育”, rating:“◇” }, { content:“総理大臣”,
genre:“カードゲーム”, rating:“◇” }, { content:“株式”, genre:“RPG”,
rating:“✕” }, { content:“株式”, genre:“シミュレーション”, rating:“◯” },
{ content:“株式”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“株式”, genre:“テーブルゲーム”, rating:“◇” }, { content:“株式”,
genre:“アクションゲーム”, rating:“△” }, { content:“株式”,
genre:“アドベンチャー”, rating:“✕” }, { content:“株式”,
genre:“シューティング”, rating:“△” }, { content:“株式”,
genre:“アクションRPG”, rating:“◇” }, { content:“株式”,
genre:“レースゲーム”, rating:“✕” }, { content:“株式”, genre:“ネットRPG”,
rating:“◇” }, { content:“株式”, genre:“ネットSLG”, rating:“☆” }, {
content:“株式”, genre:“素材集”, rating:“◇” }, { content:“株式”,
genre:“育成”, rating:“△” }, { content:“株式”, genre:“ボードゲーム”,
rating:“◇” }, { content:“株式”, genre:“パズル”, rating:“✕” }, {
content:“株式”, genre:“音楽ゲーム”, rating:“✕” }, { content:“株式”,
genre:“サウンドノベル”, rating:“✕” }, { content:“株式”,
genre:“体感ゲーム”, rating:“◎” }, { content:“株式”, genre:“教育”,
rating:“◇” }, { content:“株式”, genre:“カードゲーム”, rating:“◇” }, {
content:“アニメ”, genre:“RPG”, rating:“◯” }, { content:“アニメ”,
genre:“シミュレーション”, rating:“☆” }, { content:“アニメ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“アニメ”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“アニメ”,
genre:“アクションゲーム”, rating:“◯” }, { content:“アニメ”,
genre:“アドベンチャー”, rating:“☆” }, { content:“アニメ”,
genre:“シューティング”, rating:“◇” }, { content:“アニメ”,
genre:“アクションRPG”, rating:“◯” }, { content:“アニメ”,
genre:“レースゲーム”, rating:“✕” }, { content:“アニメ”,
genre:“ネットRPG”, rating:“◇” }, { content:“アニメ”, genre:“ネットSLG”,
rating:“◇” }, { content:“アニメ”, genre:“素材集”, rating:“◯” }, {
content:“アニメ”, genre:“育成”, rating:“◇” }, { content:“アニメ”,
genre:“ボードゲーム”, rating:“◯” }, { content:“アニメ”, genre:“パズル”,
rating:“◇” }, { content:“アニメ”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“アニメ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“アニメ”, genre:“体感ゲーム”, rating:“◎” }, { content:“アニメ”,
genre:“教育”, rating:“◇” }, { content:“アニメ”, genre:“カードゲーム”,
rating:“◇” }, { content:“コスプレ”, genre:“RPG”, rating:“◎” }, {
content:“コスプレ”, genre:“シミュレーション”, rating:“◇” }, {
content:“コスプレ”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“コスプレ”, genre:“テーブルゲーム”, rating:“✕” }, {
content:“コスプレ”, genre:“アクションゲーム”, rating:“△” }, {
content:“コスプレ”, genre:“アドベンチャー”, rating:“◎” }, {
content:“コスプレ”, genre:“シューティング”, rating:“◇” }, {
content:“コスプレ”, genre:“アクションRPG”, rating:“◇” }, {
content:“コスプレ”, genre:“レースゲーム”, rating:“◎” }, {
content:“コスプレ”, genre:“ネットRPG”, rating:“◇” }, {
content:“コスプレ”, genre:“ネットSLG”, rating:“◇” }, {
content:“コスプレ”, genre:“素材集”, rating:“☆” }, { content:“コスプレ”,
genre:“育成”, rating:“◯” }, { content:“コスプレ”, genre:“ボードゲーム”,
rating:“◇” }, { content:“コスプレ”, genre:“パズル”, rating:“◇” }, {
content:“コスプレ”, genre:“音楽ゲーム”, rating:“✕” }, {
content:“コスプレ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“コスプレ”, genre:“体感ゲーム”, rating:“◎” }, {
content:“コスプレ”, genre:“教育”, rating:“◇” }, { content:“コスプレ”,
genre:“カードゲーム”, rating:“◇” }, { content:“アイドル”, genre:“RPG”,
rating:“◇” }, { content:“アイドル”, genre:“シミュレーション”, rating:“☆”
}, { content:“アイドル”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“アイドル”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“アイドル”, genre:“アクションゲーム”, rating:“△” }, {
content:“アイドル”, genre:“アドベンチャー”, rating:“◇” }, {
content:“アイドル”, genre:“シューティング”, rating:“✕” }, {
content:“アイドル”, genre:“アクションRPG”, rating:“◇” }, {
content:“アイドル”, genre:“レースゲーム”, rating:“✕” }, {
content:“アイドル”, genre:“ネットRPG”, rating:“◇” }, {
content:“アイドル”, genre:“ネットSLG”, rating:“☆” }, {
content:“アイドル”, genre:“素材集”, rating:“◯” }, { content:“アイドル”,
genre:“育成”, rating:“☆” }, { content:“アイドル”, genre:“ボードゲーム”,
rating:“◇” }, { content:“アイドル”, genre:“パズル”, rating:“◇” }, {
content:“アイドル”, genre:“音楽ゲーム”, rating:“◯” }, {
content:“アイドル”, genre:“サウンドノベル”, rating:“◯” }, {
content:“アイドル”, genre:“体感ゲーム”, rating:“☆” }, {
content:“アイドル”, genre:“教育”, rating:“◇” }, { content:“アイドル”,
genre:“カードゲーム”, rating:“◇” }, { content:“パンチラ”, genre:“RPG”,
rating:“◇” }, { content:“パンチラ”, genre:“シミュレーション”, rating:“◇”
}, { content:“パンチラ”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“パンチラ”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“パンチラ”, genre:“アクションゲーム”, rating:“◇” }, {
content:“パンチラ”, genre:“アドベンチャー”, rating:“◇” }, {
content:“パンチラ”, genre:“シューティング”, rating:“◇” }, {
content:“パンチラ”, genre:“アクションRPG”, rating:“◇” }, {
content:“パンチラ”, genre:“レースゲーム”, rating:“◇” }, {
content:“パンチラ”, genre:“ネットRPG”, rating:“◎” }, {
content:“パンチラ”, genre:“ネットSLG”, rating:“◇” }, {
content:“パンチラ”, genre:“素材集”, rating:“◎” }, { content:“パンチラ”,
genre:“育成”, rating:“◇” }, { content:“パンチラ”, genre:“ボードゲーム”,
rating:“◇” }, { content:“パンチラ”, genre:“パズル”, rating:“◇” }, {
content:“パンチラ”, genre:“音楽ゲーム”, rating:“◎” }, {
content:“パンチラ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“パンチラ”, genre:“体感ゲーム”, rating:“◎” }, {
content:“パンチラ”, genre:“教育”, rating:“◇” }, { content:“パンチラ”,
genre:“カードゲーム”, rating:“◇” }, { content:“ブラジャー”, genre:“RPG”,
rating:“◇” }, { content:“ブラジャー”, genre:“シミュレーション”,
rating:“◎” }, { content:“ブラジャー”, genre:“シミュレーションRPG”,
rating:“◇” }, { content:“ブラジャー”, genre:“テーブルゲーム”, rating:“◇”
}, { content:“ブラジャー”, genre:“アクションゲーム”, rating:“◇” }, {
content:“ブラジャー”, genre:“アドベンチャー”, rating:“◎” }, {
content:“ブラジャー”, genre:“シューティング”, rating:“◇” }, {
content:“ブラジャー”, genre:“アクションRPG”, rating:“◇” }, {
content:“ブラジャー”, genre:“レースゲーム”, rating:“◎” }, {
content:“ブラジャー”, genre:“ネットRPG”, rating:“◇” }, {
content:“ブラジャー”, genre:“ネットSLG”, rating:“◇” }, {
content:“ブラジャー”, genre:“素材集”, rating:“☆” }, {
content:“ブラジャー”, genre:“育成”, rating:“◇” }, {
content:“ブラジャー”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ブラジャー”, genre:“パズル”, rating:“◇” }, {
content:“ブラジャー”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“ブラジャー”, genre:“サウンドノベル”, rating:“◎” }, {
content:“ブラジャー”, genre:“体感ゲーム”, rating:“◇” }, {
content:“ブラジャー”, genre:“教育”, rating:“◇” }, {
content:“ブラジャー”, genre:“カードゲーム”, rating:“◇” }, {
content:“マツタケ”, genre:“RPG”, rating:“☆” }, { content:“マツタケ”,
genre:“シミュレーション”, rating:“☆” }, { content:“マツタケ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“マツタケ”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“マツタケ”,
genre:“アクションゲーム”, rating:“◇” }, { content:“マツタケ”,
genre:“アドベンチャー”, rating:“◇” }, { content:“マツタケ”,
genre:“シューティング”, rating:“◎” }, { content:“マツタケ”,
genre:“アクションRPG”, rating:“◇” }, { content:“マツタケ”,
genre:“レースゲーム”, rating:“◎” }, { content:“マツタケ”,
genre:“ネットRPG”, rating:“◇” }, { content:“マツタケ”,
genre:“ネットSLG”, rating:“☆” }, { content:“マツタケ”, genre:“素材集”,
rating:“◯” }, { content:“マツタケ”, genre:“育成”, rating:“☆” }, {
content:“マツタケ”, genre:“ボードゲーム”, rating:“✕” }, {
content:“マツタケ”, genre:“パズル”, rating:“◇” }, { content:“マツタケ”,
genre:“音楽ゲーム”, rating:“✕” }, { content:“マツタケ”,
genre:“サウンドノベル”, rating:“◇” }, { content:“マツタケ”,
genre:“体感ゲーム”, rating:“△” }, { content:“マツタケ”, genre:“教育”,
rating:“◇” }, { content:“マツタケ”, genre:“カードゲーム”, rating:“◇” },
{ content:“ポンチョ”, genre:“RPG”, rating:“◇” }, { content:“ポンチョ”,
genre:“シミュレーション”, rating:“◇” }, { content:“ポンチョ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ポンチョ”,
genre:“テーブルゲーム”, rating:“☆” }, { content:“ポンチョ”,
genre:“アクションゲーム”, rating:“◇” }, { content:“ポンチョ”,
genre:“アドベンチャー”, rating:“◇” }, { content:“ポンチョ”,
genre:“シューティング”, rating:“◇” }, { content:“ポンチョ”,
genre:“アクションRPG”, rating:“☆” }, { content:“ポンチョ”,
genre:“レースゲーム”, rating:“◇” }, { content:“ポンチョ”,
genre:“ネットRPG”, rating:“◇” }, { content:“ポンチョ”,
genre:“ネットSLG”, rating:“◎” }, { content:“ポンチョ”, genre:“素材集”,
rating:“◇” }, { content:“ポンチョ”, genre:“育成”, rating:“◇” }, {
content:“ポンチョ”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ポンチョ”, genre:“パズル”, rating:“◇” }, { content:“ポンチョ”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“ポンチョ”,
genre:“サウンドノベル”, rating:“◇” }, { content:“ポンチョ”,
genre:“体感ゲーム”, rating:“◇” }, { content:“ポンチョ”, genre:“教育”,
rating:“◇” }, { content:“ポンチョ”, genre:“カードゲーム”, rating:“◇” },
{ content:“将棋”, genre:“RPG”, rating:“✕” }, { content:“将棋”,
genre:“シミュレーション”, rating:“◇” }, { content:“将棋”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“将棋”,
genre:“テーブルゲーム”, rating:“◯” }, { content:“将棋”,
genre:“アクションゲーム”, rating:“◇” }, { content:“将棋”,
genre:“アドベンチャー”, rating:“◇” }, { content:“将棋”,
genre:“シューティング”, rating:“△” }, { content:“将棋”,
genre:“アクションRPG”, rating:“◇” }, { content:“将棋”,
genre:“レースゲーム”, rating:“◇” }, { content:“将棋”, genre:“ネットRPG”,
rating:“◇” }, { content:“将棋”, genre:“ネットSLG”, rating:“◇” }, {
content:“将棋”, genre:“素材集”, rating:“◯” }, { content:“将棋”,
genre:“育成”, rating:“◇” }, { content:“将棋”, genre:“ボードゲーム”,
rating:“☆” }, { content:“将棋”, genre:“パズル”, rating:“◯” }, {
content:“将棋”, genre:“音楽ゲーム”, rating:“✕” }, { content:“将棋”,
genre:“サウンドノベル”, rating:“△” }, { content:“将棋”,
genre:“体感ゲーム”, rating:“◇” }, { content:“将棋”, genre:“教育”,
rating:“◇” }, { content:“将棋”, genre:“カードゲーム”, rating:“◇” }, {
content:“囲碁”, genre:“RPG”, rating:“✕” }, { content:“囲碁”,
genre:“シミュレーション”, rating:“◇” }, { content:“囲碁”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“囲碁”,
genre:“テーブルゲーム”, rating:“◯” }, { content:“囲碁”,
genre:“アクションゲーム”, rating:“△” }, { content:“囲碁”,
genre:“アドベンチャー”, rating:“◇” }, { content:“囲碁”,
genre:“シューティング”, rating:“✕” }, { content:“囲碁”,
genre:“アクションRPG”, rating:“◇” }, { content:“囲碁”,
genre:“レースゲーム”, rating:“◎” }, { content:“囲碁”, genre:“ネットRPG”,
rating:“◇” }, { content:“囲碁”, genre:“ネットSLG”, rating:“◇” }, {
content:“囲碁”, genre:“素材集”, rating:“◇” }, { content:“囲碁”,
genre:“育成”, rating:“◇” }, { content:“囲碁”, genre:“ボードゲーム”,
rating:“◯” }, { content:“囲碁”, genre:“パズル”, rating:“☆” }, {
content:“囲碁”, genre:“音楽ゲーム”, rating:“◎” }, { content:“囲碁”,
genre:“サウンドノベル”, rating:“◇” }, { content:“囲碁”,
genre:“体感ゲーム”, rating:“◇” }, { content:“囲碁”, genre:“教育”,
rating:“◇” }, { content:“囲碁”, genre:“カードゲーム”, rating:“◇” }, {
content:“麻雀”, genre:“RPG”, rating:“◇” }, { content:“麻雀”,
genre:“シミュレーション”, rating:“◯” }, { content:“麻雀”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“麻雀”,
genre:“テーブルゲーム”, rating:“☆” }, { content:“麻雀”,
genre:“アクションゲーム”, rating:“◇” }, { content:“麻雀”,
genre:“アドベンチャー”, rating:“◇” }, { content:“麻雀”,
genre:“シューティング”, rating:“◎” }, { content:“麻雀”,
genre:“アクションRPG”, rating:“◇” }, { content:“麻雀”,
genre:“レースゲーム”, rating:“✕” }, { content:“麻雀”, genre:“ネットRPG”,
rating:“◇” }, { content:“麻雀”, genre:“ネットSLG”, rating:“◇” }, {
content:“麻雀”, genre:“素材集”, rating:“◇” }, { content:“麻雀”,
genre:“育成”, rating:“◇” }, { content:“麻雀”, genre:“ボードゲーム”,
rating:“◯” }, { content:“麻雀”, genre:“パズル”, rating:“◯” }, {
content:“麻雀”, genre:“音楽ゲーム”, rating:“◎” }, { content:“麻雀”,
genre:“サウンドノベル”, rating:“◇” }, { content:“麻雀”,
genre:“体感ゲーム”, rating:“◇” }, { content:“麻雀”, genre:“教育”,
rating:“◇” }, { content:“麻雀”, genre:“カードゲーム”, rating:“◇” }, {
content:“リバーシ”, genre:“RPG”, rating:“◇” }, { content:“リバーシ”,
genre:“シミュレーション”, rating:“◇” }, { content:“リバーシ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“リバーシ”,
genre:“テーブルゲーム”, rating:“◯” }, { content:“リバーシ”,
genre:“アクションゲーム”, rating:“◇” }, { content:“リバーシ”,
genre:“アドベンチャー”, rating:“◇” }, { content:“リバーシ”,
genre:“シューティング”, rating:“◇” }, { content:“リバーシ”,
genre:“アクションRPG”, rating:“◇” }, { content:“リバーシ”,
genre:“レースゲーム”, rating:“✕” }, { content:“リバーシ”,
genre:“ネットRPG”, rating:“◇” }, { content:“リバーシ”,
genre:“ネットSLG”, rating:“◎” }, { content:“リバーシ”, genre:“素材集”,
rating:“◇” }, { content:“リバーシ”, genre:“育成”, rating:“◇” }, {
content:“リバーシ”, genre:“ボードゲーム”, rating:“◯” }, {
content:“リバーシ”, genre:“パズル”, rating:“☆” }, { content:“リバーシ”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“リバーシ”,
genre:“サウンドノベル”, rating:“✕” }, { content:“リバーシ”,
genre:“体感ゲーム”, rating:“◇” }, { content:“リバーシ”, genre:“教育”,
rating:“◇” }, { content:“リバーシ”, genre:“カードゲーム”, rating:“◇” },
{ content:“ダンス”, genre:“RPG”, rating:“◎” }, { content:“ダンス”,
genre:“シミュレーション”, rating:“◇” }, { content:“ダンス”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ダンス”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“ダンス”,
genre:“アクションゲーム”, rating:“◎” }, { content:“ダンス”,
genre:“アドベンチャー”, rating:“◇” }, { content:“ダンス”,
genre:“シューティング”, rating:“△” }, { content:“ダンス”,
genre:“アクションRPG”, rating:“◎” }, { content:“ダンス”,
genre:“レースゲーム”, rating:“◇” }, { content:“ダンス”,
genre:“ネットRPG”, rating:“◇” }, { content:“ダンス”, genre:“ネットSLG”,
rating:“◇” }, { content:“ダンス”, genre:“素材集”, rating:“◇” }, {
content:“ダンス”, genre:“育成”, rating:“◯” }, { content:“ダンス”,
genre:“ボードゲーム”, rating:“◇” }, { content:“ダンス”, genre:“パズル”,
rating:“◇” }, { content:“ダンス”, genre:“音楽ゲーム”, rating:“☆” }, {
content:“ダンス”, genre:“サウンドノベル”, rating:“◇” }, {
content:“ダンス”, genre:“体感ゲーム”, rating:“☆” }, { content:“ダンス”,
genre:“教育”, rating:“◇” }, { content:“ダンス”, genre:“カードゲーム”,
rating:“◇” }, { content:“ドラム”, genre:“RPG”, rating:“◇” }, {
content:“ドラム”, genre:“シミュレーション”, rating:“◇” }, {
content:“ドラム”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“ドラム”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“ドラム”, genre:“アクションゲーム”, rating:“◯” }, {
content:“ドラム”, genre:“アドベンチャー”, rating:“◇” }, {
content:“ドラム”, genre:“シューティング”, rating:“◇” }, {
content:“ドラム”, genre:“アクションRPG”, rating:“◇” }, {
content:“ドラム”, genre:“レースゲーム”, rating:“◇” }, {
content:“ドラム”, genre:“ネットRPG”, rating:“◇” }, { content:“ドラム”,
genre:“ネットSLG”, rating:“◇” }, { content:“ドラム”, genre:“素材集”,
rating:“◇” }, { content:“ドラム”, genre:“育成”, rating:“◇” }, {
content:“ドラム”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ドラム”, genre:“パズル”, rating:“◇” }, { content:“ドラム”,
genre:“音楽ゲーム”, rating:“☆” }, { content:“ドラム”,
genre:“サウンドノベル”, rating:“◇” }, { content:“ドラム”,
genre:“体感ゲーム”, rating:“☆” }, { content:“ドラム”, genre:“教育”,
rating:“◇” }, { content:“ドラム”, genre:“カードゲーム”, rating:“◇” }, {
content:“ﾌｨｯﾄﾈｽ”, genre:“RPG”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“シミュレーション”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“アクションゲーム”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“アドベンチャー”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“シューティング”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“アクションRPG”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“レースゲーム”, rating:“◎” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“ネットRPG”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”, genre:“ネットSLG”,
rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”, genre:“素材集”, rating:“◯” }, {
content:“ﾌｨｯﾄﾈｽ”, genre:“育成”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“ボードゲーム”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”, genre:“パズル”,
rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“ﾌｨｯﾄﾈｽ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“ﾌｨｯﾄﾈｽ”, genre:“体感ゲーム”, rating:“☆” }, { content:“ﾌｨｯﾄﾈｽ”,
genre:“教育”, rating:“◇” }, { content:“ﾌｨｯﾄﾈｽ”, genre:“カードゲーム”,
rating:“◇” }, { content:“プロレス”, genre:“RPG”, rating:“△” }, {
content:“プロレス”, genre:“シミュレーション”, rating:“◇” }, {
content:“プロレス”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“プロレス”, genre:“テーブルゲーム”, rating:“△” }, {
content:“プロレス”, genre:“アクションゲーム”, rating:“◇” }, {
content:“プロレス”, genre:“アドベンチャー”, rating:“◇” }, {
content:“プロレス”, genre:“シューティング”, rating:“◎” }, {
content:“プロレス”, genre:“アクションRPG”, rating:“◇” }, {
content:“プロレス”, genre:“レースゲーム”, rating:“✕” }, {
content:“プロレス”, genre:“ネットRPG”, rating:“◇” }, {
content:“プロレス”, genre:“ネットSLG”, rating:“◇” }, {
content:“プロレス”, genre:“素材集”, rating:“◇” }, { content:“プロレス”,
genre:“育成”, rating:“☆” }, { content:“プロレス”, genre:“ボードゲーム”,
rating:“◇” }, { content:“プロレス”, genre:“パズル”, rating:“◇” }, {
content:“プロレス”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“プロレス”, genre:“サウンドノベル”, rating:“◇” }, {
content:“プロレス”, genre:“体感ゲーム”, rating:“◎” }, {
content:“プロレス”, genre:“教育”, rating:“◇” }, { content:“プロレス”,
genre:“カードゲーム”, rating:“◇” }, { content:“バスケット”, genre:“RPG”,
rating:“△” }, { content:“バスケット”, genre:“シミュレーション”,
rating:“◇” }, { content:“バスケット”, genre:“シミュレーションRPG”,
rating:“◇” }, { content:“バスケット”, genre:“テーブルゲーム”, rating:“✕”
}, { content:“バスケット”, genre:“アクションゲーム”, rating:“☆” }, {
content:“バスケット”, genre:“アドベンチャー”, rating:“◇” }, {
content:“バスケット”, genre:“シューティング”, rating:“◇” }, {
content:“バスケット”, genre:“アクションRPG”, rating:“◎” }, {
content:“バスケット”, genre:“レースゲーム”, rating:“◇” }, {
content:“バスケット”, genre:“ネットRPG”, rating:“◇” }, {
content:“バスケット”, genre:“ネットSLG”, rating:“◇” }, {
content:“バスケット”, genre:“素材集”, rating:“◇” }, {
content:“バスケット”, genre:“育成”, rating:“◯” }, {
content:“バスケット”, genre:“ボードゲーム”, rating:“◇” }, {
content:“バスケット”, genre:“パズル”, rating:“△” }, {
content:“バスケット”, genre:“音楽ゲーム”, rating:“◎” }, {
content:“バスケット”, genre:“サウンドノベル”, rating:“◇” }, {
content:“バスケット”, genre:“体感ゲーム”, rating:“◯” }, {
content:“バスケット”, genre:“教育”, rating:“◇” }, {
content:“バスケット”, genre:“カードゲーム”, rating:“◇” }, {
content:“スキー”, genre:“RPG”, rating:“◇” }, { content:“スキー”,
genre:“シミュレーション”, rating:“◇” }, { content:“スキー”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“スキー”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“スキー”,
genre:“アクションゲーム”, rating:“◯” }, { content:“スキー”,
genre:“アドベンチャー”, rating:“◇” }, { content:“スキー”,
genre:“シューティング”, rating:“◇” }, { content:“スキー”,
genre:“アクションRPG”, rating:“◇” }, { content:“スキー”,
genre:“レースゲーム”, rating:“◯” }, { content:“スキー”,
genre:“ネットRPG”, rating:“◇” }, { content:“スキー”, genre:“ネットSLG”,
rating:“◇” }, { content:“スキー”, genre:“素材集”, rating:“◇” }, {
content:“スキー”, genre:“育成”, rating:“◇” }, { content:“スキー”,
genre:“ボードゲーム”, rating:“◇” }, { content:“スキー”, genre:“パズル”,
rating:“✕” }, { content:“スキー”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“スキー”, genre:“サウンドノベル”, rating:“◇” }, {
content:“スキー”, genre:“体感ゲーム”, rating:“☆” }, { content:“スキー”,
genre:“教育”, rating:“◇” }, { content:“スキー”, genre:“カードゲーム”,
rating:“◇” }, { content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“RPG”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“シミュレーション”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“テーブルゲーム”, rating:“△” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“アクションゲーム”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“アドベンチャー”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“シューティング”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“アクションRPG”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“レースゲーム”, rating:“☆” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“ネットRPG”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“ネットSLG”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“素材集”, rating:“◯” }, { content:“ｽﾉｰﾎﾞｰﾄﾞ”,
genre:“育成”, rating:“◇” }, { content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“ボードゲーム”,
rating:“◎” }, { content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“パズル”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“音楽ゲーム”, rating:“◯” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“体感ゲーム”, rating:“☆” }, {
content:“ｽﾉｰﾎﾞｰﾄﾞ”, genre:“教育”, rating:“◇” }, { content:“ｽﾉｰﾎﾞｰﾄﾞ”,
genre:“カードゲーム”, rating:“◇” }, { content:“ゴルフ”, genre:“RPG”,
rating:“◎” }, { content:“ゴルフ”, genre:“シミュレーション”, rating:“◇”
}, { content:“ゴルフ”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“ゴルフ”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“ゴルフ”, genre:“アクションゲーム”, rating:“◎” }, {
content:“ゴルフ”, genre:“アドベンチャー”, rating:“◇” }, {
content:“ゴルフ”, genre:“シューティング”, rating:“◯” }, {
content:“ゴルフ”, genre:“アクションRPG”, rating:“◇” }, {
content:“ゴルフ”, genre:“レースゲーム”, rating:“◇” }, {
content:“ゴルフ”, genre:“ネットRPG”, rating:“◇” }, { content:“ゴルフ”,
genre:“ネットSLG”, rating:“◇” }, { content:“ゴルフ”, genre:“素材集”,
rating:“◯” }, { content:“ゴルフ”, genre:“育成”, rating:“◇” }, {
content:“ゴルフ”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ゴルフ”, genre:“パズル”, rating:“◇” }, { content:“ゴルフ”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“ゴルフ”,
genre:“サウンドノベル”, rating:“◇” }, { content:“ゴルフ”,
genre:“体感ゲーム”, rating:“◇” }, { content:“ゴルフ”, genre:“教育”,
rating:“◇” }, { content:“ゴルフ”, genre:“カードゲーム”, rating:“◇” }, {
content:“水泳”, genre:“RPG”, rating:“◇” }, { content:“水泳”,
genre:“シミュレーション”, rating:“◎” }, { content:“水泳”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“水泳”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“水泳”,
genre:“アクションゲーム”, rating:“◯” }, { content:“水泳”,
genre:“アドベンチャー”, rating:“◇” }, { content:“水泳”,
genre:“シューティング”, rating:“◇” }, { content:“水泳”,
genre:“アクションRPG”, rating:“✕” }, { content:“水泳”,
genre:“レースゲーム”, rating:“◯” }, { content:“水泳”, genre:“ネットRPG”,
rating:“◇” }, { content:“水泳”, genre:“ネットSLG”, rating:“☆” }, {
content:“水泳”, genre:“素材集”, rating:“◇” }, { content:“水泳”,
genre:“育成”, rating:“◯” }, { content:“水泳”, genre:“ボードゲーム”,
rating:“◇” }, { content:“水泳”, genre:“パズル”, rating:“◇” }, {
content:“水泳”, genre:“音楽ゲーム”, rating:“△” }, { content:“水泳”,
genre:“サウンドノベル”, rating:“◎” }, { content:“水泳”,
genre:“体感ゲーム”, rating:“◇” }, { content:“水泳”, genre:“教育”,
rating:“◇” }, { content:“水泳”, genre:“カードゲーム”, rating:“◇” }, {
content:“ﾊﾞﾚｰﾎﾞｰﾙ”, genre:“RPG”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“シミュレーション”, rating:“◯” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“テーブルゲーム”, rating:“△” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“アクションゲーム”, rating:“◯” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“アドベンチャー”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“シューティング”, rating:“◎” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“アクションRPG”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“レースゲーム”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“ネットRPG”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“ネットSLG”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”, genre:“素材集”,
rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”, genre:“育成”, rating:“◇” }, {
content:“ﾊﾞﾚｰﾎﾞｰﾙ”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ﾊﾞﾚｰﾎﾞｰﾙ”, genre:“パズル”, rating:“△” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“サウンドノベル”, rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”,
genre:“体感ゲーム”, rating:“☆” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”, genre:“教育”,
rating:“◇” }, { content:“ﾊﾞﾚｰﾎﾞｰﾙ”, genre:“カードゲーム”, rating:“◇” },
{ content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“RPG”, rating:“◇” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“シミュレーション”, rating:“☆” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“アクションゲーム”, rating:“◯” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“アドベンチャー”, rating:“△” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“シューティング”, rating:“◇” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“アクションRPG”, rating:“◇” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“レースゲーム”, rating:“☆” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“ネットRPG”, rating:“✕” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“ネットSLG”, rating:“◯” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“素材集”,
rating:“◇” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“育成”, rating:“◯” }, {
content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“パズル”, rating:“✕” }, {
content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“体感ゲーム”, rating:“◯” }, {
content:“ﾓｰﾀｰｽﾎﾟｰﾂ”, genre:“教育”, rating:“◇” }, { content:“ﾓｰﾀｰｽﾎﾟｰﾂ”,
genre:“カードゲーム”, rating:“◇” }, { content:“サッカー”, genre:“RPG”,
rating:“◇” }, { content:“サッカー”, genre:“シミュレーション”, rating:“☆”
}, { content:“サッカー”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“サッカー”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“サッカー”, genre:“アクションゲーム”, rating:“◯” }, {
content:“サッカー”, genre:“アドベンチャー”, rating:“◇” }, {
content:“サッカー”, genre:“シューティング”, rating:“△” }, {
content:“サッカー”, genre:“アクションRPG”, rating:“◇” }, {
content:“サッカー”, genre:“レースゲーム”, rating:“✕” }, {
content:“サッカー”, genre:“ネットRPG”, rating:“◇” }, {
content:“サッカー”, genre:“ネットSLG”, rating:“◇” }, {
content:“サッカー”, genre:“素材集”, rating:“◯” }, { content:“サッカー”,
genre:“育成”, rating:“☆” }, { content:“サッカー”, genre:“ボードゲーム”,
rating:“◇” }, { content:“サッカー”, genre:“パズル”, rating:“◇” }, {
content:“サッカー”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“サッカー”, genre:“サウンドノベル”, rating:“◇” }, {
content:“サッカー”, genre:“体感ゲーム”, rating:“◇” }, {
content:“サッカー”, genre:“教育”, rating:“◇” }, { content:“サッカー”,
genre:“カードゲーム”, rating:“◇” }, { content:“卓球”, genre:“RPG”,
rating:“◇” }, { content:“卓球”, genre:“シミュレーション”, rating:“◇” },
{ content:“卓球”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“卓球”, genre:“テーブルゲーム”, rating:“◇” }, { content:“卓球”,
genre:“アクションゲーム”, rating:“◯” }, { content:“卓球”,
genre:“アドベンチャー”, rating:“◎” }, { content:“卓球”,
genre:“シューティング”, rating:“△” }, { content:“卓球”,
genre:“アクションRPG”, rating:“◇” }, { content:“卓球”,
genre:“レースゲーム”, rating:“✕” }, { content:“卓球”, genre:“ネットRPG”,
rating:“◇” }, { content:“卓球”, genre:“ネットSLG”, rating:“◇” }, {
content:“卓球”, genre:“素材集”, rating:“◇” }, { content:“卓球”,
genre:“育成”, rating:“☆” }, { content:“卓球”, genre:“ボードゲーム”,
rating:“◯” }, { content:“卓球”, genre:“パズル”, rating:“◇” }, {
content:“卓球”, genre:“音楽ゲーム”, rating:“◎” }, { content:“卓球”,
genre:“サウンドノベル”, rating:“◇” }, { content:“卓球”,
genre:“体感ゲーム”, rating:“◇” }, { content:“卓球”, genre:“教育”,
rating:“◇” }, { content:“卓球”, genre:“カードゲーム”, rating:“◇” }, {
content:“相撲”, genre:“RPG”, rating:“◎” }, { content:“相撲”,
genre:“シミュレーション”, rating:“◇” }, { content:“相撲”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“相撲”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“相撲”,
genre:“アクションゲーム”, rating:“☆” }, { content:“相撲”,
genre:“アドベンチャー”, rating:“◯” }, { content:“相撲”,
genre:“シューティング”, rating:“△” }, { content:“相撲”,
genre:“アクションRPG”, rating:“◇” }, { content:“相撲”,
genre:“レースゲーム”, rating:“✕” }, { content:“相撲”, genre:“ネットRPG”,
rating:“◇” }, { content:“相撲”, genre:“ネットSLG”, rating:“◇” }, {
content:“相撲”, genre:“素材集”, rating:“☆” }, { content:“相撲”,
genre:“育成”, rating:“◯” }, { content:“相撲”, genre:“ボードゲーム”,
rating:“◇” }, { content:“相撲”, genre:“パズル”, rating:“◇” }, {
content:“相撲”, genre:“音楽ゲーム”, rating:“◇” }, { content:“相撲”,
genre:“サウンドノベル”, rating:“◯” }, { content:“相撲”,
genre:“体感ゲーム”, rating:“◇” }, { content:“相撲”, genre:“教育”,
rating:“◇” }, { content:“相撲”, genre:“カードゲーム”, rating:“◇” }, {
content:“野球”, genre:“RPG”, rating:“◇” }, { content:“野球”,
genre:“シミュレーション”, rating:“◯” }, { content:“野球”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“野球”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“野球”,
genre:“アクションゲーム”, rating:“◯” }, { content:“野球”,
genre:“アドベンチャー”, rating:“◇” }, { content:“野球”,
genre:“シューティング”, rating:“✕” }, { content:“野球”,
genre:“アクションRPG”, rating:“△” }, { content:“野球”,
genre:“レースゲーム”, rating:“◎” }, { content:“野球”, genre:“ネットRPG”,
rating:“◇” }, { content:“野球”, genre:“ネットSLG”, rating:“◇” }, {
content:“野球”, genre:“素材集”, rating:“◇” }, { content:“野球”,
genre:“育成”, rating:“◯” }, { content:“野球”, genre:“ボードゲーム”,
rating:“◯” }, { content:“野球”, genre:“パズル”, rating:“◇” }, {
content:“野球”, genre:“音楽ゲーム”, rating:“◇” }, { content:“野球”,
genre:“サウンドノベル”, rating:“◎” }, { content:“野球”,
genre:“体感ゲーム”, rating:“◇” }, { content:“野球”, genre:“教育”,
rating:“◇” }, { content:“野球”, genre:“カードゲーム”, rating:“◇” }, {
content:“レスリング”, genre:“RPG”, rating:“△” }, { content:“レスリング”,
genre:“シミュレーション”, rating:“◇” }, { content:“レスリング”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“レスリング”,
genre:“テーブルゲーム”, rating:“◎” }, { content:“レスリング”,
genre:“アクションゲーム”, rating:“◯” }, { content:“レスリング”,
genre:“アドベンチャー”, rating:“◇” }, { content:“レスリング”,
genre:“シューティング”, rating:“◇” }, { content:“レスリング”,
genre:“アクションRPG”, rating:“◇” }, { content:“レスリング”,
genre:“レースゲーム”, rating:“◇” }, { content:“レスリング”,
genre:“ネットRPG”, rating:“◇” }, { content:“レスリング”,
genre:“ネットSLG”, rating:“◯” }, { content:“レスリング”, genre:“素材集”,
rating:“◇” }, { content:“レスリング”, genre:“育成”, rating:“◯” }, {
content:“レスリング”, genre:“ボードゲーム”, rating:“◇” }, {
content:“レスリング”, genre:“パズル”, rating:“◇” }, {
content:“レスリング”, genre:“音楽ゲーム”, rating:“◎” }, {
content:“レスリング”, genre:“サウンドノベル”, rating:“◇” }, {
content:“レスリング”, genre:“体感ゲーム”, rating:“◎” }, {
content:“レスリング”, genre:“教育”, rating:“◇” }, {
content:“レスリング”, genre:“カードゲーム”, rating:“◇” }, {
content:“マラソン”, genre:“RPG”, rating:“◯” }, { content:“マラソン”,
genre:“シミュレーション”, rating:“◇” }, { content:“マラソン”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“マラソン”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“マラソン”,
genre:“アクションゲーム”, rating:“◯” }, { content:“マラソン”,
genre:“アドベンチャー”, rating:“✕” }, { content:“マラソン”,
genre:“シューティング”, rating:“✕” }, { content:“マラソン”,
genre:“アクションRPG”, rating:“◇” }, { content:“マラソン”,
genre:“レースゲーム”, rating:“◯” }, { content:“マラソン”,
genre:“ネットRPG”, rating:“◇” }, { content:“マラソン”,
genre:“ネットSLG”, rating:“◇” }, { content:“マラソン”, genre:“素材集”,
rating:“◇” }, { content:“マラソン”, genre:“育成”, rating:“◇” }, {
content:“マラソン”, genre:“ボードゲーム”, rating:“◇” }, {
content:“マラソン”, genre:“パズル”, rating:“△” }, { content:“マラソン”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“マラソン”,
genre:“サウンドノベル”, rating:“◇” }, { content:“マラソン”,
genre:“体感ゲーム”, rating:“◇” }, { content:“マラソン”, genre:“教育”,
rating:“◇” }, { content:“マラソン”, genre:“カードゲーム”, rating:“◇” },
{ content:“F1”, genre:“RPG”, rating:“◎” }, { content:“F1”,
genre:“シミュレーション”, rating:“☆” }, { content:“F1”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“F1”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“F1”,
genre:“アクションゲーム”, rating:“◯” }, { content:“F1”,
genre:“アドベンチャー”, rating:“◇” }, { content:“F1”,
genre:“シューティング”, rating:“◎” }, { content:“F1”,
genre:“アクションRPG”, rating:“◇” }, { content:“F1”,
genre:“レースゲーム”, rating:“◯” }, { content:“F1”, genre:“ネットRPG”,
rating:“◇” }, { content:“F1”, genre:“ネットSLG”, rating:“◇” }, {
content:“F1”, genre:“素材集”, rating:“◯” }, { content:“F1”,
genre:“育成”, rating:“☆” }, { content:“F1”, genre:“ボードゲーム”,
rating:“◇” }, { content:“F1”, genre:“パズル”, rating:“✕” }, {
content:“F1”, genre:“音楽ゲーム”, rating:“◎” }, { content:“F1”,
genre:“サウンドノベル”, rating:“◇” }, { content:“F1”,
genre:“体感ゲーム”, rating:“◯” }, { content:“F1”, genre:“教育”,
rating:“◇” }, { content:“F1”, genre:“カードゲーム”, rating:“◇” }, {
content:“パチンコ”, genre:“RPG”, rating:“◇” }, { content:“パチンコ”,
genre:“シミュレーション”, rating:“◯” }, { content:“パチンコ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“パチンコ”,
genre:“テーブルゲーム”, rating:“◯” }, { content:“パチンコ”,
genre:“アクションゲーム”, rating:“◎” }, { content:“パチンコ”,
genre:“アドベンチャー”, rating:“◇” }, { content:“パチンコ”,
genre:“シューティング”, rating:“◇” }, { content:“パチンコ”,
genre:“アクションRPG”, rating:“◇” }, { content:“パチンコ”,
genre:“レースゲーム”, rating:“✕” }, { content:“パチンコ”,
genre:“ネットRPG”, rating:“◇” }, { content:“パチンコ”,
genre:“ネットSLG”, rating:“◇” }, { content:“パチンコ”, genre:“素材集”,
rating:“◇” }, { content:“パチンコ”, genre:“育成”, rating:“◇” }, {
content:“パチンコ”, genre:“ボードゲーム”, rating:“◇” }, {
content:“パチンコ”, genre:“パズル”, rating:“◇” }, { content:“パチンコ”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“パチンコ”,
genre:“サウンドノベル”, rating:“◇” }, { content:“パチンコ”,
genre:“体感ゲーム”, rating:“☆” }, { content:“パチンコ”, genre:“教育”,
rating:“◇” }, { content:“パチンコ”, genre:“カードゲーム”, rating:“◇” },
{ content:“スロット”, genre:“RPG”, rating:“◇” }, { content:“スロット”,
genre:“シミュレーション”, rating:“◯” }, { content:“スロット”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“スロット”,
genre:“テーブルゲーム”, rating:“◯” }, { content:“スロット”,
genre:“アクションゲーム”, rating:“◇” }, { content:“スロット”,
genre:“アドベンチャー”, rating:“◇” }, { content:“スロット”,
genre:“シューティング”, rating:“✕” }, { content:“スロット”,
genre:“アクションRPG”, rating:“◇” }, { content:“スロット”,
genre:“レースゲーム”, rating:“◇” }, { content:“スロット”,
genre:“ネットRPG”, rating:“△” }, { content:“スロット”,
genre:“ネットSLG”, rating:“◇” }, { content:“スロット”, genre:“素材集”,
rating:“◇” }, { content:“スロット”, genre:“育成”, rating:“◇” }, {
content:“スロット”, genre:“ボードゲーム”, rating:“◯” }, {
content:“スロット”, genre:“パズル”, rating:“◯” }, { content:“スロット”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“スロット”,
genre:“サウンドノベル”, rating:“◇” }, { content:“スロット”,
genre:“体感ゲーム”, rating:“☆” }, { content:“スロット”, genre:“教育”,
rating:“◇” }, { content:“スロット”, genre:“カードゲーム”, rating:“◇” },
{ content:“萌え”, genre:“RPG”, rating:“◇” }, { content:“萌え”,
genre:“シミュレーション”, rating:“◯” }, { content:“萌え”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“萌え”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“萌え”,
genre:“アクションゲーム”, rating:“◎” }, { content:“萌え”,
genre:“アドベンチャー”, rating:“◯” }, { content:“萌え”,
genre:“シューティング”, rating:“◇” }, { content:“萌え”,
genre:“アクションRPG”, rating:“◇” }, { content:“萌え”,
genre:“レースゲーム”, rating:“◎” }, { content:“萌え”, genre:“ネットRPG”,
rating:“◇” }, { content:“萌え”, genre:“ネットSLG”, rating:“◇” }, {
content:“萌え”, genre:“素材集”, rating:“◯” }, { content:“萌え”,
genre:“育成”, rating:“☆” }, { content:“萌え”, genre:“ボードゲーム”,
rating:“◇” }, { content:“萌え”, genre:“パズル”, rating:“◇” }, {
content:“萌え”, genre:“音楽ゲーム”, rating:“◎” }, { content:“萌え”,
genre:“サウンドノベル”, rating:“☆” }, { content:“萌え”,
genre:“体感ゲーム”, rating:“◎” }, { content:“萌え”, genre:“教育”,
rating:“◇” }, { content:“萌え”, genre:“カードゲーム”, rating:“◇” }, {
content:“港湾”, genre:“RPG”, rating:“◇” }, { content:“港湾”,
genre:“シミュレーション”, rating:“◇” }, { content:“港湾”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“港湾”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“港湾”,
genre:“アクションゲーム”, rating:“◇” }, { content:“港湾”,
genre:“アドベンチャー”, rating:“◇” }, { content:“港湾”,
genre:“シューティング”, rating:“◇” }, { content:“港湾”,
genre:“アクションRPG”, rating:“◇” }, { content:“港湾”,
genre:“レースゲーム”, rating:“◇” }, { content:“港湾”, genre:“ネットRPG”,
rating:“◇” }, { content:“港湾”, genre:“ネットSLG”, rating:“◇” }, {
content:“港湾”, genre:“素材集”, rating:“◇” }, { content:“港湾”,
genre:“育成”, rating:“◇” }, { content:“港湾”, genre:“ボードゲーム”,
rating:“◇” }, { content:“港湾”, genre:“パズル”, rating:“◇” }, {
content:“港湾”, genre:“音楽ゲーム”, rating:“◇” }, { content:“港湾”,
genre:“サウンドノベル”, rating:“◇” }, { content:“港湾”,
genre:“体感ゲーム”, rating:“◇” }, { content:“港湾”, genre:“教育”,
rating:“◇” }, { content:“港湾”, genre:“カードゲーム”, rating:“◇” }, {
content:“ﾀｲﾑｽﾘｯﾌﾟ”, genre:“RPG”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“シミュレーション”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“アクションゲーム”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“アドベンチャー”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“シューティング”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“アクションRPG”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“レースゲーム”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“ネットRPG”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“ネットSLG”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”, genre:“素材集”,
rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”, genre:“育成”, rating:“◇” }, {
content:“ﾀｲﾑｽﾘｯﾌﾟ”, genre:“ボードゲーム”, rating:“◇” }, {
content:“ﾀｲﾑｽﾘｯﾌﾟ”, genre:“パズル”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“サウンドノベル”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”,
genre:“体感ゲーム”, rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”, genre:“教育”,
rating:“◇” }, { content:“ﾀｲﾑｽﾘｯﾌﾟ”, genre:“カードゲーム”, rating:“◇” },
{ content:“スパイ”, genre:“RPG”, rating:“◇” }, { content:“スパイ”,
genre:“シミュレーション”, rating:“◇” }, { content:“スパイ”,
genre:“シミュレーションRPG”, rating:“◇” }, { content:“スパイ”,
genre:“テーブルゲーム”, rating:“◇” }, { content:“スパイ”,
genre:“アクションゲーム”, rating:“◇” }, { content:“スパイ”,
genre:“アドベンチャー”, rating:“◇” }, { content:“スパイ”,
genre:“シューティング”, rating:“◇” }, { content:“スパイ”,
genre:“アクションRPG”, rating:“◇” }, { content:“スパイ”,
genre:“レースゲーム”, rating:“◇” }, { content:“スパイ”,
genre:“ネットRPG”, rating:“◇” }, { content:“スパイ”, genre:“ネットSLG”,
rating:“◇” }, { content:“スパイ”, genre:“素材集”, rating:“◇” }, {
content:“スパイ”, genre:“育成”, rating:“◇” }, { content:“スパイ”,
genre:“ボードゲーム”, rating:“◇” }, { content:“スパイ”, genre:“パズル”,
rating:“◇” }, { content:“スパイ”, genre:“音楽ゲーム”, rating:“◇” }, {
content:“スパイ”, genre:“サウンドノベル”, rating:“◇” }, {
content:“スパイ”, genre:“体感ゲーム”, rating:“◇” }, { content:“スパイ”,
genre:“教育”, rating:“◇” }, { content:“スパイ”, genre:“カードゲーム”,
rating:“◇” }, { content:“芸能人”, genre:“RPG”, rating:“◇” }, {
content:“芸能人”, genre:“シミュレーション”, rating:“◇” }, {
content:“芸能人”, genre:“シミュレーションRPG”, rating:“◇” }, {
content:“芸能人”, genre:“テーブルゲーム”, rating:“◇” }, {
content:“芸能人”, genre:“アクションゲーム”, rating:“◇” }, {
content:“芸能人”, genre:“アドベンチャー”, rating:“◇” }, {
content:“芸能人”, genre:“シューティング”, rating:“◇” }, {
content:“芸能人”, genre:“アクションRPG”, rating:“◇” }, {
content:“芸能人”, genre:“レースゲーム”, rating:“◇” }, {
content:“芸能人”, genre:“ネットRPG”, rating:“◇” }, { content:“芸能人”,
genre:“ネットSLG”, rating:“◇” }, { content:“芸能人”, genre:“素材集”,
rating:“◇” }, { content:“芸能人”, genre:“育成”, rating:“◇” }, {
content:“芸能人”, genre:“ボードゲーム”, rating:“◇” }, {
content:“芸能人”, genre:“パズル”, rating:“◇” }, { content:“芸能人”,
genre:“音楽ゲーム”, rating:“◇” }, { content:“芸能人”,
genre:“サウンドノベル”, rating:“◇” }, { content:“芸能人”,
genre:“体感ゲーム”, rating:“◇” }, { content:“芸能人”, genre:“教育”,
rating:“◇” }, { content:“芸能人”, genre:“カードゲーム”, rating:“◇” }];


// DOM
const tableBody = document.getElementById("tableBody");
const filterContent = document.getElementById("filterContent");
const filterGenre = document.getElementById("filterGenre");
const sortOrder = document.getElementById("sortOrder");

// 初期化
function init() {
    populateFilters();
    renderTable();
}

// フィルタの選択肢を生成
function populateFilters() {
    const contents = [...new Set(data.map(d => d.content))];
    const genres = [...new Set(data.map(d => d.genre))];

    contents.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        filterContent.appendChild(opt);
    });

    genres.forEach(g => {
        const opt = document.createElement("option");
        opt.value = g;
        opt.textContent = g;
        filterGenre.appendChild(opt);
    });
}

// 表の描画
function renderTable() {
    tableBody.innerHTML = "";

    let filtered = data.filter(row => {
        return (filterContent.value === "all" || row.content === filterContent.value) &&
               (filterGenre.value === "all" || row.genre === filterGenre.value);
    });

    if (sortOrder.value === "rating") {
        filtered.sort((a, b) => ratingMap[a.rating] - ratingMap[b.rating]);
    }

    filtered.forEach(row => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${row.content}</td>
            <td>${row.genre}</td>
            <td class="rating" data-rate="${ratingMap[row.rating]}">${row.rating}</td>
        `;

        tableBody.appendChild(tr);
    });
}

// イベント
filterContent.addEventListener("change", renderTable);
filterGenre.addEventListener("change", renderTable);
sortOrder.addEventListener("change", renderTable);

// 実行
init();