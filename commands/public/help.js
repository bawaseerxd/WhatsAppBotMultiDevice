const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const handler = async (sock, msg, from, args, msgInfoObj) => {
    let { prefix, isGroup, groupMetadata, sendMessageWTyping, senderJid } = msgInfoObj;
    // *User Name:- ${msg.pushName}*
    // *Group Name:- ${groupMetadata.subject}*

    const help = `
---------------------------------------------------------------
    𝙎𝘼𝘿𝙄𝙌 🤖 𝘽𝙊𝙏
---------------------------------------------------------------
${readMore}

*${prefix}alive / a* ( BOT STATUS )
    
*${prefix}admin* ( ADMIN CMD )
    
*${prefix}song / play* ( DOWNLOAD MP3 )

*${prefix}delete / d* ( DELETE MESSEGE )
   
*${prefix}joke*  _Categories: Programming, Misc, Pun, Spooky, Christmas, Dark_

*${prefix}meme* ( RANDOM MEME )

*${prefix}sticker / sticker crop / s* ( CREATE STICKER )

*${prefix}toimg* ( STICKER TO IMAGE )

*${prefix}img* ( SEARCH IMAGE )

*${prefix}search* ( GOOGLE SEARCH )
 
*${prefix}mp3*  ( VIDEO TO AUDIO )

*${prefix}fact* ( RANDOM FACT )

*${prefix}news*  _category could be sports, business or anything_

*${prefix}idp* ( INSTA PFP DOWNLOADER )

*${prefix}insta* ( INSTA MEDIA DOWNLOADER )

*${prefix}ytv / yta* ( YT VIDEO AUDIO DOWNLOADER )
 
*${prefix}vs* ( VIDEO SEARCH )

*${prefix}advice* ( RANDOM ADVICE )

*${prefix}quote / qpt* ( RANDOM QUOTE )
 
*${prefix}removebg* ( REMOVE BACKGROUND )

*${prefix}tts* ( TEXT TO STICKER )

*${prefix}say* ( TEXT TO VOICE NOTE )

*${prefix}total* _Get total number of messages sent by You in particular group_

*${prefix}totalg*  _Get total number of messages sent by You in all groups_

*${prefix}ud* ( MEANING OF YOUR NAME )

*${prefix}dict* (WORD MEANING)

*${prefix}source* ( SOURCE CODE LINK )

𝙎𝘼𝘿𝙄𝙌 🤖 𝘽𝙊𝙏`;


    const helpInDm = `
─「 *Dm Commands* 」─

*${prefix}sticker*
    _Create a sticker from different media types!_
    *Properties of sticker:*
        _crop_ - Used to crop the sticker size!
`;

    await sendMessageWTyping(from, {
        text: isGroup ? help : helpInDm,
        // mentions: [senderJid]
    });
}

module.exports.command = () => ({ cmd: ['help', 'menu'], handler });