module.exports = {
    get: (req, res) => {
        res.status(200);
        res.send({ success: true, params: req.params.name });
    },
    post: (req, res) => {
        res.status(200).send({ success: true, body: req.body });
    },
};
