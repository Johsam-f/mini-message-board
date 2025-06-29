const express = require('express');
const router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

router.get('/', (req, res) => {
    res.render('index', {
      title: 'Mini Messageboard',
      messages: messages
    });
});

router.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' });
});
  
router.get('/message/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const message = messages[id];
  
    if (!message) {
      return res.status(404).send('Message not found');
    }
  
    res.render('message', {
      title: `Message from ${message.user}`,
      message: message
    });
});
  

router.post('/new', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
  
    messages.push({
      text: messageText,
      user: messageUser,
      added: new Date()
    });
  
    res.redirect('/');
});

module.exports = router;