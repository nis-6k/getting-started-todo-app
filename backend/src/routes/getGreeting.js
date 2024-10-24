const GREETING = [
    "Wassup!",
    "How are you!",
    "How are you doing today!"
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[Math.floor(Math.random()*GREETINGS.length)],
    });
};
