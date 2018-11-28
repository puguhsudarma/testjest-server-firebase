const express = require('express');
const app = express();
const port = 3000;

app.get('/:parameter', (req, res) => {
    const param = req.params.parameter;

    const ret = { success: true, data: [1], err: [] };

    if (Number(param) === 1) {
        return res.status(200).json({ ...ret, success: true });
    }

    if (Number(param) === 2) {
        return res.status(500).json({ ...ret, success: false });
    }

    return res.status(404).json({ ...ret, success: false });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
