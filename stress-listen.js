const bigbluebot = require('bigbluebot');

const actions = async page => {
  await bigbluebot.audio.modal.listen(page);
};

bigbluebot.run(actions);
