module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "++", //Default prefix, Server Admins can change the prefix
  Port: 80, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/wdyu6TmybR", //Support Server Link
  Token: process.env.Token || "ODYzNDg0MzA3ODYzMTA5NjQy.YOnkbQ.siBeoXqXAzOCB3YyWfWm6S2XDx4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "863484307863109642", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "nO46WLCDQaRLY2RyfuIPVsxG5lg9FXiN", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://e213-160-202-37-225.ngrok.io", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "++help | ++play", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lavalinkonreplit-2.xanegaming1.repl.co",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "youshallnotpass",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "06aefcda1db24180a0e3ed2a72f1f87b", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "28020766088f44dd8b189d24718de9bf", //Spotify Client Secret
  },
};
