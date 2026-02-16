export const sayGoodbye = (req, res) => {
    const name = req.query.name;
    res.status(200).json({ goodbyeMessage: `farewell: "Goodbye, ${name}"` });
};
//# sourceMappingURL=goodbye.controller.js.map