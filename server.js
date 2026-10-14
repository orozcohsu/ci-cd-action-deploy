const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 匯出 app 方便未來擴充測試，並啟動監聽
const server = app.listen(PORT, () => {
    console.log(`伺服器正運行於 http://localhost:${PORT}`);
});

module.exports = server;
