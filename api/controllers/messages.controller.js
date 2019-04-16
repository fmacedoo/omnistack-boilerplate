const Message = require('../models/message');

const validateMessageInput = require('../validation/message');

module.exports.new = async (req, res) => {
    try {

        const { errors, isValid } = validateMessageInput(req.body);

        // Check validator
        if (!isValid)
            return res.status(400).json(errors);

        const newMessage = new Message({
            user: req.user.id,
            content: req.body.content,
        });
        
        await newMessage.save();

        res.json(newMessage);

    } catch (error) {
        throw error;
    }
}

module.exports.messages = async (req, res) => {
    try {

        const messages = await Message.find({})
            .populate('user');

        res.json(messages);

    } catch (error) {
        throw error;
    }
}
