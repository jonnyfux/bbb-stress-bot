const bigbluebot = require('bigbluebot');

const actions = async page => {
  await bigbluebot.video.join(page);
};

const options = {
  host: 'SERVER_PLACEHOLDER', // change to your server
  secret: 'SECRET_PLACEHOLDER', // change to your secret
  version: '2.3',
  room: 'MEETING_PLACEHOLDER', // change to your room
  userdata: {
    "userdata-bbb_override_default_locale": "ger",
  },
  BIGBLUEBOT_BOTS: 10
};

bigbluebot.run(actions, options);
