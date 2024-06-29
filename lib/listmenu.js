//Zenitsu-Bot8

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return` 
*╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 620+
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Owner Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}autoread 
┋⍟┃ ${prefix}autobio 
┋⍟┃ ${prefix}autotype 
┋⍟┃ ${prefix}unavailable 
┋⍟┃ ${prefix}autorecord 
┋⍟┃ ${prefix}autorecordtype 
┋⍟┃ ${prefix}autoswview 
┋⍟┃ ${prefix}setautoblock 
┋⍟┃ ${prefix}setantiforeign 
┋⍟┃ ${prefix}autoblock 
┋⍟┃ ${prefix}onlygc 
┋⍟┃ ${prefix}onlypc 
┋⍟┃ ${prefix}onlyindia 
┋⍟┃ ${prefix}onlyindo 
┋⍟┃ ${prefix}anticall 
┋⍟┃ ${prefix}self 
┋⍟┃ ${prefix}public 
┋⍟┃ ${prefix}join 
┋⍟┃ ${prefix}poll 
┋⍟┃ ${prefix}spam 
┋⍟┃ ${prefix}bc 
┋⍟┃ ${prefix}bcgroup 
┋⍟┃ ${prefix}setmenu 
┋⍟┃ ${prefix}setimgmenu 
┋⍟┃ ${prefix}setvidmenu 
┋⍟┃ ${prefix}setgifmenu 
┋⍟┃ ${prefix}setreply 
┋⍟┃ ${prefix}setprefix 
┋⍟┃ ${prefix}addlimit 
┋⍟┃ ${prefix}dellimit 
┋⍟┃ ${prefix}resethit 
┋⍟┃ ${prefix}resetuser 
┋⍟┃ ${prefix}creategc 
┋⍟┃ ${prefix}setexif 
┋⍟┃ ${prefix}userjid 
┋⍟┃ ${prefix}setbotbio 
┋⍟┃ ${prefix}delppbot 
┋⍟┃ ${prefix}shutdown 
┋⍟┃ ${prefix}setppbot 
┋⍟┃ ${prefix}addprem 
┋⍟┃ ${prefix}delprem 
┋⍟┃ ${prefix}addowner 
┋⍟┃ ${prefix}delowner 
┋⍟┃ ${prefix}addvn 
┋⍟┃ ${prefix}addapk 
┋⍟┃ ${prefix}addzip 
┋⍟┃ ${prefix}addpdf 
┋⍟┃ ${prefix}delapk 
┋⍟┃ ${prefix}delzip 
┋⍟┃ ${prefix}delpdf 
┋⍟┃ ${prefix}delvn 
┋⍟┃ ${prefix}addsticker 
┋⍟┃ ${prefix}delsticker 
┋⍟┃ ${prefix}addimage 
┋⍟┃ ${prefix}delimage 
┋⍟┃ ${prefix}addvideo 
┋⍟┃ ${prefix}delvideo 
┋⍟┃ ${prefix}addtitle 
┋⍟┃ ${prefix}deltitle 
┋⍟┃ ${prefix}upswtext 
┋⍟┃ ${prefix}upswvideo 
┋⍟┃ ${prefix}upswimage 
┋⍟┃ ${prefix}upswaudio 
┋⍟┃ ${prefix}autosticker 
┋⍟┃ ${prefix}block 
┋⍟┃ ${prefix}unblock 
┋⍟┃ ${prefix}leavegc 
┋⍟┃ ${prefix}pushcontact 
┋⍟┃ ${prefix}pushcontactv2 
┋⍟┃ ${prefix}pushcontactv3 
┋⍟┃ ${prefix}jpm 
┋⍟┃ ${prefix}post 
┋⍟┃ ${prefix}clearall 
┋⍟┃ ${prefix}pinchat 
┋⍟┃ ${prefix}unpinchat 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Group Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}antibot 
┋⍟┃ ${prefix}antiviewonce 
┋⍟┃ ${prefix}readviewonce 
┋⍟┃ ${prefix}welcome 
┋⍟┃ ${prefix}adminevent 
┋⍟┃ ${prefix}groupevent 
┋⍟┃ ${prefix}antiforeign 
┋⍟┃ ${prefix}antimedia 
┋⍟┃ ${prefix}antiaudio 
┋⍟┃ ${prefix}antivideo 
┋⍟┃ ${prefix}antiimage 
┋⍟┃ ${prefix}antidocument 
┋⍟┃ ${prefix}antilocation 
┋⍟┃ ${prefix}anticontact 
┋⍟┃ ${prefix}antisticker 
┋⍟┃ ${prefix}antipoll 
┋⍟┃ ${prefix}antilink 
┋⍟┃ ${prefix}antilinkgc 
┋⍟┃ ${prefix}antipromotion 
┋⍟┃ ${prefix}antivirtex 
┋⍟┃ ${prefix}grouplink 
┋⍟┃ ${prefix}listadmin 
┋⍟┃ ${prefix}invite 
┋⍟┃ ${prefix}ephemeral 
┋⍟┃ ${prefix}delete 
┋⍟┃ ${prefix}setppgroup 
┋⍟┃ ${prefix}delppgroup 
┋⍟┃ ${prefix}setnamegc 
┋⍟┃ ${prefix}setdesc 
┋⍟┃ ${prefix}add 
┋⍟┃ ${prefix}kick 
┋⍟┃ ${prefix}promote 
┋⍟┃ ${prefix}demote 
┋⍟┃ ${prefix}kickall 
┋⍟┃ ${prefix}promoteall 
┋⍟┃ ${prefix}demoteall 
┋⍟┃ ${prefix}getcontact 
┋⍟┃ ${prefix}savecontact 
┋⍟┃ ${prefix}sendcontact 
┋⍟┃ ${prefix}contactag 
┋⍟┃ ${prefix}hidetag 
┋⍟┃ ${prefix}totag 
┋⍟┃ ${prefix}tagall 
┋⍟┃ ${prefix}editinfo 
┋⍟┃ ${prefix}opentime 
┋⍟┃ ${prefix}closetime 
┋⍟┃ ${prefix}resetlink 
┋⍟┃ ${prefix}getbio 
┋⍟┃ ${prefix}vote 
┋⍟┃ ${prefix}upvote 
┋⍟┃ ${prefix}downvote 
┋⍟┃ ${prefix}checkvote 
┋⍟┃ ${prefix}delvote 
┋⍟┃ ${prefix}antivirus 
┋⍟┃ ${prefix}antitoxic 
┋⍟┃ ${prefix}nsfw 
┋⍟┃ ${prefix}react 
┋⍟┃ ${prefix}getjoinrequest 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Search* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}wikipedia 
┋⍟┃ ${prefix}ytsearch 
┋⍟┃ ${prefix}xnxxsearch 
┋⍟┃ ${prefix}xvideosearch 
┋⍟┃ ${prefix}apksearch 
┋⍟┃ ${prefix}stickersearch 
┋⍟┃ ${prefix}imdb 
┋⍟┃ ${prefix}wanumber 
┋⍟┃ ${prefix}friend 
┋⍟┃ ${prefix}lyrics 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Download Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}xnxxdl 
┋⍟┃ ${prefix}xvideodl 
┋⍟┃ ${prefix}itunes 
┋⍟┃ ${prefix}play 
┋⍟┃ ${prefix}ytmp3 
┋⍟┃ ${prefix}ytmp4 
┋⍟┃ ${prefix}tiktok 
┋⍟┃ ${prefix}tiktokaudio 
┋⍟┃ ${prefix}tiktokvideo 
┋⍟┃ ${prefix}tiktokslide 
┋⍟┃ ${prefix}igvideo 
┋⍟┃ ${prefix}igimage 
┋⍟┃ ${prefix}facebook 
┋⍟┃ ${prefix}twitter 
┋⍟┃ ${prefix}capcut 
┋⍟┃ ${prefix}apk 
┋⍟┃ ${prefix}mega 
┋⍟┃ ${prefix}mediafire 
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}gimage 
┋⍟┃ ${prefix}weather 
┋⍟┃ ${prefix}spotify 
┋⍟┃ ${prefix}gitclone 
┋⍟┃ ${prefix}happymod 
┋⍟┃ ${prefix}gdrive 
┋⍟┃ ${prefix}pinterest 
┋⍟┃ ${prefix}ringtone 
┋⍟┃ ${prefix}autodownload 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Convert* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}obfuscate 
┋⍟┃ ${prefix}styletext 
┋⍟┃ ${prefix}fliptext 
┋⍟┃ ${prefix}tts 
┋⍟┃ ${prefix}say 
┋⍟┃ ${prefix}togif 
┋⍟┃ ${prefix}toqr 
┋⍟┃ ${prefix}bass 
┋⍟┃ ${prefix}blown 
┋⍟┃ ${prefix}deep 
┋⍟┃ ${prefix}earrape 
┋⍟┃ ${prefix}fast 
┋⍟┃ ${prefix}fat 
┋⍟┃ ${prefix}nightcore 
┋⍟┃ ${prefix}reverse 
┋⍟┃ ${prefix}robot 
┋⍟┃ ${prefix}slow 
┋⍟┃ ${prefix}smooth 
┋⍟┃ ${prefix}squirrel 
┋⍟┃ ${prefix}tinyurl 
┋⍟┃ ${prefix}tovn 
┋⍟┃ ${prefix}toaudio 
┋⍟┃ ${prefix}tomp3 
┋⍟┃ ${prefix}tomp4
┋⍟┃ ${prefix}toimg 
┋⍟┃ ${prefix}toonce 
┋⍟┃ ${prefix}sticker 
┋⍟┃ ${prefix}smeme 
┋⍟┃ ${prefix}smeta 
┋⍟┃ ${prefix}take 
┋⍟┃ ${prefix}emoji 
┋⍟┃ ${prefix}volaudio 
┋⍟┃ ${prefix}volvideo 
┋⍟┃ ${prefix}ebinary 
┋⍟┃ ${prefix}dbinary 
┋⍟┃ ${prefix}ssweb 
┋⍟┃ ${prefix}quoted 
┋⍟┃ ${prefix}translate 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *List* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}listprem 
┋⍟┃ ${prefix}listowner 
┋⍟┃ ${prefix}liststicker 
┋⍟┃ ${prefix}listimage 
┋⍟┃ ${prefix}listvideo 
┋⍟┃ ${prefix}listvn 
┋⍟┃ ${prefix}listapk 
┋⍟┃ ${prefix}listzip 
┋⍟┃ ${prefix}listpdf 
┋⍟┃ ${prefix}listbadword 
┋⍟┃ ${prefix}listpc 
┋⍟┃ ${prefix}listgc 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Random Photo* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}aesthetic 
┋⍟┃ ${prefix}coffee 
┋⍟┃ ${prefix}wikimedia 
┋⍟┃ ${prefix}wallpaper 
┋⍟┃ ${prefix}art 
┋⍟┃ ${prefix}bts 
┋⍟┃ ${prefix}dogwoof 
┋⍟┃ ${prefix}catmeow 
┋⍟┃ ${prefix}lizardpic 
┋⍟┃ ${prefix}goosebird 
┋⍟┃ ${prefix}8ballpool 
┋⍟┃ ${prefix}cosplay 
┋⍟┃ ${prefix}hacker 
┋⍟┃ ${prefix}cyber 
┋⍟┃ ${prefix}gamewallpaper 
┋⍟┃ ${prefix}islamic 
┋⍟┃ ${prefix}jennie 
┋⍟┃ ${prefix}jiso 
┋⍟┃ ${prefix}satanic 
┋⍟┃ ${prefix}justina 
┋⍟┃ ${prefix}cartoon 
┋⍟┃ ${prefix}pentol 
┋⍟┃ ${prefix}cat 
┋⍟┃ ${prefix}kpop 
┋⍟┃ ${prefix}exo 
┋⍟┃ ${prefix}lisa 
┋⍟┃ ${prefix}space 
┋⍟┃ ${prefix}car 
┋⍟┃ ${prefix}technology 
┋⍟┃ ${prefix}bike 
┋⍟┃ ${prefix}shortquote 
┋⍟┃ ${prefix}antiwork 
┋⍟┃ ${prefix}hacking 
┋⍟┃ ${prefix}boneka 
┋⍟┃ ${prefix}rose 
┋⍟┃ ${prefix}ryujin 
┋⍟┃ ${prefix}ulzzangboy 
┋⍟┃ ${prefix}ulzzanggirl 
┋⍟┃ ${prefix}wallml 
┋⍟┃ ${prefix}wallphone 
┋⍟┃ ${prefix}mountain 
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}profilepic 
┋⍟┃ ${prefix}couplepp 
┋⍟┃ ${prefix}programming 
┋⍟┃ ${prefix}pubg 
┋⍟┃ ${prefix}blackpink 
┋⍟┃ ${prefix}randomboy   
┋⍟┃ ${prefix}randomgirl 
┋⍟┃ ${prefix}hijab   
┋⍟┃ ${prefix}chinese 
┋⍟┃ ${prefix}indo 
┋⍟┃ ${prefix}japanese 
┋⍟┃ ${prefix}korean 
┋⍟┃ ${prefix}malay 
┋⍟┃ ${prefix}thai 
┋⍟┃ ${prefix}vietnamese 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Random Video* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}tiktokgirl 
┋⍟┃ ${prefix}tiktoknukthy 
┋⍟┃ ${prefix}tiktokkayes 
┋⍟┃ ${prefix}tiktokpanrika 
┋⍟┃ ${prefix}tiktoknotnot 
┋⍟┃ ${prefix}tiktokghea 
┋⍟┃ ${prefix}tiktoksantuy 
┋⍟┃ ${prefix}tiktokbocil 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Stalker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}tiktokstalk 
┋⍟┃ ${prefix}mlstalk 
┋⍟┃ ${prefix}npmstalk 
┋⍟┃ ${prefix}ghstalk 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *OpenAI* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}animate 
┋⍟┃ ${prefix}diffusion-anime 
┋⍟┃ ${prefix}bingai 
┋⍟┃ ${prefix}blackboxai 
┋⍟┃ ${prefix}travel-assistant 
┋⍟┃ ${prefix}guru-ai 
┋⍟┃ ${prefix}emi-ai 
┋⍟┃ ${prefix}claude-ai 
┋⍟┃ ${prefix}costume-ai 
┋⍟┃ ${prefix}herc-ai 
┋⍟┃ ${prefix}hercaiv1 
┋⍟┃ ${prefix}hercai-cartoon 
┋⍟┃ ${prefix}hercai-animefy 
┋⍟┃ ${prefix}hercai-lexica 
┋⍟┃ ${prefix}hercai-prodia 
┋⍟┃ ${prefix}hercai-simurg 
┋⍟┃ ${prefix}hercai-raava 
┋⍟┃ ${prefix}hercai-shonin 
┋⍟┃ ${prefix}realistic 
┋⍟┃ ${prefix}3dmodel 
┋⍟┃ ${prefix}openai-indo 
┋⍟┃ ${prefix}indo-ai 
┋⍟┃ ${prefix}diffusion 
┋⍟┃ ${prefix}photoleap 
┋⍟┃ ${prefix}openai 
┋⍟┃ ${prefix}dalle 
┋⍟┃ ${prefix}ai 
┋⍟┃ ${prefix}remini 
┋⍟┃ ${prefix}simi 
┋⍟┃ ${prefix}removebg 
┋⍟┃ ${prefix}tozombie 
┋⍟┃ ${prefix}toanime 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Game* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}truth 
┋⍟┃ ${prefix}dare 
┋⍟┃ ${prefix}suit 
┋⍟┃ ${prefix}tictactoe 
┋⍟┃ ${prefix}math 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Fun Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}define 
┋⍟┃ ${prefix}readmore 
┋⍟┃ ${prefix}fact 
┋⍟┃ ${prefix}couple 
┋⍟┃ ${prefix}soulmate 
┋⍟┃ ${prefix}stupidcheck 
┋⍟┃ ${prefix}handsomecheck 
┋⍟┃ ${prefix}uncleancheck 
┋⍟┃ ${prefix}hotcheck 
┋⍟┃ ${prefix}smartcheck 
┋⍟┃ ${prefix}greatcheck 
┋⍟┃ ${prefix}evilcheck 
┋⍟┃ ${prefix}dogcheck 
┋⍟┃ ${prefix}coolcheck 
┋⍟┃ ${prefix}waifucheck 
┋⍟┃ ${prefix}awesomecheck 
┋⍟┃ ${prefix}gaycheck 
┋⍟┃ ${prefix}cutecheck 
┋⍟┃ ${prefix}lesbiancheck 
┋⍟┃ ${prefix}hornycheck 
┋⍟┃ ${prefix}prettycheck 
┋⍟┃ ${prefix}lovelycheck 
┋⍟┃ ${prefix}uglycheck 
┋⍟┃ ${prefix}pick 
┋⍟┃ ${prefix}pickupline 
┋⍟┃ ${prefix}quotes 
┋⍟┃ ${prefix}can 
┋⍟┃ ${prefix}is 
┋⍟┃ ${prefix}when 
┋⍟┃ ${prefix}where 
┋⍟┃ ${prefix}what 
┋⍟┃ ${prefix}how 
┋⍟┃ ${prefix}rate 
┋⍟┃ ${prefix}cry 
┋⍟┃ ${prefix}kill 
┋⍟┃ ${prefix}hug 
┋⍟┃ ${prefix}pat 
┋⍟┃ ${prefix}lick  
┋⍟┃ ${prefix}kiss 
┋⍟┃ ${prefix}bite 
┋⍟┃ ${prefix}yeet 
┋⍟┃ ${prefix}bully 
┋⍟┃ ${prefix}bonk 
┋⍟┃ ${prefix}wink 
┋⍟┃ ${prefix}poke 
┋⍟┃ ${prefix}nom 
┋⍟┃ ${prefix}slap 
┋⍟┃ ${prefix}smile  
┋⍟┃ ${prefix}wave 
┋⍟┃ ${prefix}awoo 
┋⍟┃ ${prefix}blush 
┋⍟┃ ${prefix}smug 
┋⍟┃ ${prefix}glomp  
┋⍟┃ ${prefix}happy 
┋⍟┃ ${prefix}dance 
┋⍟┃ ${prefix}cringe 
┋⍟┃ ${prefix}cuddle 
┋⍟┃ ${prefix}highfive  
┋⍟┃ ${prefix}handhold 
┋⍟┃ ${prefix}spank 
┋⍟┃ ${prefix}tickle 
┋⍟┃ ${prefix}feed 
┋⍟┃ ${prefix}checkme 
┋⍟┃ ${prefix}sound1 - sound161 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Sticker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}woof 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}lizard 
┋⍟┃ ${prefix}meow 
┋⍟┃ ${prefix}gura 
┋⍟┃ ${prefix}telestick 
┋⍟┃ ${prefix}ttp 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Anime* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}stickhandhold 
┋⍟┃ ${prefix}stickshinobu 
┋⍟┃ ${prefix}stickcuddle 
┋⍟┃ ${prefix}stickhighfive 
┋⍟┃ ${prefix}stickdance 
┋⍟┃ ${prefix}stickcringe 
┋⍟┃ ${prefix}stickhappy 
┋⍟┃ ${prefix}stickglomp 
┋⍟┃ ${prefix}sticksmug 
┋⍟┃ ${prefix}stickblush 
┋⍟┃ ${prefix}stickawoo 
┋⍟┃ ${prefix}stickwave 
┋⍟┃ ${prefix}sticksmile 
┋⍟┃ ${prefix}stickslap 
┋⍟┃ ${prefix}stickpoke 
┋⍟┃ ${prefix}stickwink 
┋⍟┃ ${prefix}stickbonk 
┋⍟┃ ${prefix}stickbully 
┋⍟┃ ${prefix}stickyeet 
┋⍟┃ ${prefix}stickbike 
┋⍟┃ ${prefix}stickkiss 
┋⍟┃ ${prefix}sticklick 
┋⍟┃ ${prefix}stickpat 
┋⍟┃ ${prefix}stickhug 
┋⍟┃ ${prefix}stickkill 
┋⍟┃ ${prefix}stickcry 
┋⍟┃ ${prefix}stickspank 
┋⍟┃ ${prefix}sticktickle 
┋⍟┃ ${prefix}traceanime 
┋⍟┃ ${prefix}akira 
┋⍟┃ ${prefix}akiyama 
┋⍟┃ ${prefix}ana 
┋⍟┃ ${prefix}asuna 
┋⍟┃ ${prefix}ayuzawa 
┋⍟┃ ${prefix}boruto 
┋⍟┃ ${prefix}chiho 
┋⍟┃ ${prefix}chitoge 
┋⍟┃ ${prefix}cosplayloli 
┋⍟┃ ${prefix}cosplaysagiri 
┋⍟┃ ${prefix}deidara 
┋⍟┃ ${prefix}doraemon 
┋⍟┃ ${prefix}elaina 
┋⍟┃ ${prefix}emilia 
┋⍟┃ ${prefix}erza 
┋⍟┃ ${prefix}gremory 
┋⍟┃ ${prefix}hestia 
┋⍟┃ ${prefix}husbu 
┋⍟┃ ${prefix}inori 
┋⍟┃ ${prefix}isuzu 
┋⍟┃ ${prefix}itachi 
┋⍟┃ ${prefix}itori 
┋⍟┃ ${prefix}kaga 
┋⍟┃ ${prefix}kagura 
┋⍟┃ ${prefix}kakasih 
┋⍟┃ ${prefix}kaori 
┋⍟┃ ${prefix}keneki 
┋⍟┃ ${prefix}kotori 
┋⍟┃ ${prefix}kurumi 
┋⍟┃ ${prefix}loli 
┋⍟┃ ${prefix}loli2 
┋⍟┃ ${prefix}madara 
┋⍟┃ ${prefix}megumin 
┋⍟┃ ${prefix}mikasa 
┋⍟┃ ${prefix}mikey 
┋⍟┃ ${prefix}miku 
┋⍟┃ ${prefix}minato 
┋⍟┃ ${prefix}naruto 
┋⍟┃ ${prefix}neko 
┋⍟┃ ${prefix}nekonime 
┋⍟┃ ${prefix}nezuko 
┋⍟┃ ${prefix}onepiece 
┋⍟┃ ${prefix}pokemon 
┋⍟┃ ${prefix}randomnime 
┋⍟┃ ${prefix}randomnime2 
┋⍟┃ ${prefix}rize 
┋⍟┃ ${prefix}sagiri 
┋⍟┃ ${prefix}sakura 
┋⍟┃ ${prefix}sasuke 
┋⍟┃ ${prefix}shina 
┋⍟┃ ${prefix}shinka 
┋⍟┃ ${prefix}shinomiya 
┋⍟┃ ${prefix}shizuka 
┋⍟┃ ${prefix}shota 
┋⍟┃ ${prefix}tejina 
┋⍟┃ ${prefix}toukachan 
┋⍟┃ ${prefix}tsunade 
┋⍟┃ ${prefix}waifu 
┋⍟┃ ${prefix}waifu2 
┋⍟┃ ${prefix}animewall 
┋⍟┃ ${prefix}yotsuba 
┋⍟┃ ${prefix}yuki 
┋⍟┃ ${prefix}yulibocil 
┋⍟┃ ${prefix}yumeko 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}animeawoo 
┋⍟┃ ${prefix}animemegumin 
┋⍟┃ ${prefix}animeshinobu 
┋⍟┃ ${prefix}animehandhold 
┋⍟┃ ${prefix}animehighfive 
┋⍟┃ ${prefix}animecringe 
┋⍟┃ ${prefix}animedance 
┋⍟┃ ${prefix}animehappy 
┋⍟┃ ${prefix}animeglomp 
┋⍟┃ ${prefix}animeblush 
┋⍟┃ ${prefix}animesmug 
┋⍟┃ ${prefix}animewave 
┋⍟┃ ${prefix}animesmille 
┋⍟┃ ${prefix}animepoke 
┋⍟┃ ${prefix}animewink 
┋⍟┃ ${prefix}animebonk 
┋⍟┃ ${prefix}animebully 
┋⍟┃ ${prefix}animeyeet 
┋⍟┃ ${prefix}animebite 
┋⍟┃ ${prefix}animelick 
┋⍟┃ ${prefix}animekill 
┋⍟┃ ${prefix}animecry 
┋⍟┃ ${prefix}animewlp 
┋⍟┃ ${prefix}animekiss 
┋⍟┃ ${prefix}animehug 
┋⍟┃ ${prefix}animeneko 
┋⍟┃ ${prefix}animepat 
┋⍟┃ ${prefix}animeslap 
┋⍟┃ ${prefix}animecuddle 
┋⍟┃ ${prefix}animewaifu 
┋⍟┃ ${prefix}animenom 
┋⍟┃ ${prefix}animefoxgirl 
┋⍟┃ ${prefix}animegecg 
┋⍟┃ ${prefix}animetickle 
┋⍟┃ ${prefix}animefeed 
┋⍟┃ ${prefix}animeavatar 
┋⍟┃ ${prefix}anime 
┋⍟┃ ${prefix}avatar 
┋⍟┃ ${prefix}shinobu 
┋⍟┃ ${prefix}fox_girl 
┋⍟┃ ${prefix}gecg 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Anime NSFW* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}hentai 
┋⍟┃ ${prefix}gifblowjob 
┋⍟┃ ${prefix}hentaivid 
┋⍟┃ ${prefix}hneko 
┋⍟┃ ${prefix}nwaifu 
┋⍟┃ ${prefix}animespank 
┋⍟┃ ${prefix}trap 
┋⍟┃ ${prefix}blowjob 
┋⍟┃ ${prefix}cuckold 
┋⍟┃ ${prefix}milf 
┋⍟┃ ${prefix}eba 
┋⍟┃ ${prefix}pussy 
┋⍟┃ ${prefix}yuri 
┋⍟┃ ${prefix}zettai 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Database* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}setcmd 
┋⍟┃ ${prefix}delcmd 
┋⍟┃ ${prefix}listcmd 
┋⍟┃ ${prefix}lockcmd 
┋⍟┃ ${prefix}addmsg 
┋⍟┃ ${prefix}delmsg 
┋⍟┃ ${prefix}getmsg 
┋⍟┃ ${prefix}listmsg 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Store* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}list 
┋⍟┃ ${prefix}store 
┋⍟┃ ${prefix}shop 
┋⍟┃ ${prefix}addlist 
┋⍟┃ ${prefix}dellist 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Religon* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}gita 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Bug & War* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}xreact 
┋⍟┃ ${prefix}x 
┋⍟┃ ${prefix}x2 
┋⍟┃ ${prefix}iosbug 
┋⍟┃ ${prefix}iosbug2 
┋⍟┃ ${prefix}xaudio 
┋⍟┃ ${prefix}xaudio2 
┋⍟┃ ${prefix}xsticker 
┋⍟┃ ${prefix}xsticker2 
┋⍟┃ ${prefix}xloc 
┋⍟┃ ${prefix}xloc2 
┋⍟┃ ${prefix}xlist 
┋⍟┃ ${prefix}xlist2 
┋⍟┃ ${prefix}xkill 
┋⍟┃ ${prefix}xkill2 
┋⍟┃ ${prefix}xkillgc 
┋⍟┃ ${prefix}tempban 
┋⍟┃ ${prefix}xcrash 
┋⍟┃ ${prefix}xcrash2 
┋⍟┃ ${prefix}xioscrash 
┋⍟┃ ${prefix}xioscrash2 
┋⍟┃ ${prefix}iosgoogle 
┋⍟┃ ${prefix}iosgoogle2 
┋⍟┃ ${prefix}iosq 
┋⍟┃ ${prefix}amountbug 
┋⍟┃ ${prefix}pmbug 
┋⍟┃ ${prefix}delaybug 
┋⍟┃ ${prefix}docubug 
┋⍟┃ ${prefix}unlimitedbug 
┋⍟┃ ${prefix}bombug 
┋⍟┃ ${prefix}lagbug 
┋⍟┃ ${prefix}trollybug 
┋⍟┃ ${prefix}gcbug 
┋⍟┃ ${prefix}delaygcbug 
┋⍟┃ ${prefix}laggcbug 
┋⍟┃ ${prefix}bomgcbug 
┋⍟┃ ${prefix}unlimitedgcbug 
┋⍟┃ ${prefix}trollygcbug 
┋⍟┃ ${prefix}docugcbug 
┋⍟┃ ${prefix}verif 
┋⍟┃ ${prefix}banv1 
┋⍟┃ ${prefix}banv2 
┋⍟┃ ${prefix}banv3 
┋⍟┃ ${prefix}banv4 
┋⍟┃ ${prefix}banv5 
┋⍟┃ ${prefix}banv6 
┋⍟┃ ${prefix}unbanv1 
┋⍟┃ ${prefix}unbanv2 
┋⍟┃ ${prefix}unbanv3 
┋⍟┃ ${prefix}unbanv4 
┋⍟┃ ${prefix}unbanv5 
┋⍟╰───────────────
╰═════════════════⍟

╭────❂* *Other Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}update 
┋⍟┃ ${prefix}ping 
┋⍟┃ ${prefix}menu 
┋⍟┃ ${prefix}myip 
┋⍟┃ ${prefix}repo 
┋⍟┃ ${prefix}reportbug 
┋⍟┃ ${prefix}idgroup 
┋⍟┃ ${prefix}owner 
┋⍟┃ ${prefix}rentbot 
┋⍟┃ ${prefix}donate 
┋⍟┃ ${prefix}runtime 
┋⍟┃ ${prefix}checkaccount 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.animemenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 136
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Anime* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}stickhandhold 
┋⍟┃ ${prefix}stickshinobu 
┋⍟┃ ${prefix}stickcuddle 
┋⍟┃ ${prefix}stickhighfive 
┋⍟┃ ${prefix}stickdance 
┋⍟┃ ${prefix}stickcringe 
┋⍟┃ ${prefix}stickhappy 
┋⍟┃ ${prefix}stickglomp 
┋⍟┃ ${prefix}sticksmug 
┋⍟┃ ${prefix}stickblush 
┋⍟┃ ${prefix}stickawoo 
┋⍟┃ ${prefix}stickwave 
┋⍟┃ ${prefix}sticksmile 
┋⍟┃ ${prefix}stickslap 
┋⍟┃ ${prefix}stickpoke 
┋⍟┃ ${prefix}stickwink 
┋⍟┃ ${prefix}stickbonk 
┋⍟┃ ${prefix}stickbully 
┋⍟┃ ${prefix}stickyeet 
┋⍟┃ ${prefix}stickbike 
┋⍟┃ ${prefix}stickkiss 
┋⍟┃ ${prefix}sticklick 
┋⍟┃ ${prefix}stickpat 
┋⍟┃ ${prefix}stickhug 
┋⍟┃ ${prefix}stickkill 
┋⍟┃ ${prefix}stickcry 
┋⍟┃ ${prefix}stickspank 
┋⍟┃ ${prefix}sticktickle 
┋⍟┃ ${prefix}traceanime 
┋⍟┃ ${prefix}akira 
┋⍟┃ ${prefix}akiyama 
┋⍟┃ ${prefix}ana 
┋⍟┃ ${prefix}asuna 
┋⍟┃ ${prefix}ayuzawa 
┋⍟┃ ${prefix}boruto 
┋⍟┃ ${prefix}chiho 
┋⍟┃ ${prefix}chitoge 
┋⍟┃ ${prefix}cosplayloli 
┋⍟┃ ${prefix}cosplaysagiri 
┋⍟┃ ${prefix}deidara 
┋⍟┃ ${prefix}doraemon 
┋⍟┃ ${prefix}elaina 
┋⍟┃ ${prefix}emilia 
┋⍟┃ ${prefix}erza 
┋⍟┃ ${prefix}gremory 
┋⍟┃ ${prefix}hestia 
┋⍟┃ ${prefix}husbu 
┋⍟┃ ${prefix}inori 
┋⍟┃ ${prefix}isuzu 
┋⍟┃ ${prefix}itachi 
┋⍟┃ ${prefix}itori 
┋⍟┃ ${prefix}kaga 
┋⍟┃ ${prefix}kagura 
┋⍟┃ ${prefix}kakasih 
┋⍟┃ ${prefix}kaori 
┋⍟┃ ${prefix}keneki 
┋⍟┃ ${prefix}kotori 
┋⍟┃ ${prefix}kurumi 
┋⍟┃ ${prefix}loli 
┋⍟┃ ${prefix}loli2 
┋⍟┃ ${prefix}madara 
┋⍟┃ ${prefix}megumin 
┋⍟┃ ${prefix}mikasa 
┋⍟┃ ${prefix}mikey 
┋⍟┃ ${prefix}miku 
┋⍟┃ ${prefix}minato 
┋⍟┃ ${prefix}naruto 
┋⍟┃ ${prefix}neko 
┋⍟┃ ${prefix}nekonime 
┋⍟┃ ${prefix}nezuko 
┋⍟┃ ${prefix}onepiece 
┋⍟┃ ${prefix}pokemon 
┋⍟┃ ${prefix}randomnime 
┋⍟┃ ${prefix}randomnime2 
┋⍟┃ ${prefix}rize 
┋⍟┃ ${prefix}sagiri 
┋⍟┃ ${prefix}sakura 
┋⍟┃ ${prefix}sasuke 
┋⍟┃ ${prefix}shina 
┋⍟┃ ${prefix}shinka 
┋⍟┃ ${prefix}shinomiya 
┋⍟┃ ${prefix}shizuka 
┋⍟┃ ${prefix}shota 
┋⍟┃ ${prefix}tejina 
┋⍟┃ ${prefix}toukachan 
┋⍟┃ ${prefix}tsunade 
┋⍟┃ ${prefix}waifu 
┋⍟┃ ${prefix}waifu2 
┋⍟┃ ${prefix}animewall 
┋⍟┃ ${prefix}yotsuba 
┋⍟┃ ${prefix}yuki 
┋⍟┃ ${prefix}yulibocil 
┋⍟┃ ${prefix}yumeko 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}feed 
┋⍟┃ ${prefix}animeawoo 
┋⍟┃ ${prefix}animemegumin 
┋⍟┃ ${prefix}animeshinobu 
┋⍟┃ ${prefix}animehandhold 
┋⍟┃ ${prefix}animehighfive 
┋⍟┃ ${prefix}animecringe 
┋⍟┃ ${prefix}animedance 
┋⍟┃ ${prefix}animehappy 
┋⍟┃ ${prefix}animeglomp 
┋⍟┃ ${prefix}animeblush 
┋⍟┃ ${prefix}animesmug 
┋⍟┃ ${prefix}animewave 
┋⍟┃ ${prefix}animesmille 
┋⍟┃ ${prefix}animepoke 
┋⍟┃ ${prefix}animewink 
┋⍟┃ ${prefix}animebonk 
┋⍟┃ ${prefix}animebully 
┋⍟┃ ${prefix}animeyeet 
┋⍟┃ ${prefix}animebite 
┋⍟┃ ${prefix}animelick 
┋⍟┃ ${prefix}animekill 
┋⍟┃ ${prefix}animecry 
┋⍟┃ ${prefix}animewlp 
┋⍟┃ ${prefix}animekiss 
┋⍟┃ ${prefix}animehug 
┋⍟┃ ${prefix}animeneko 
┋⍟┃ ${prefix}animepat 
┋⍟┃ ${prefix}animeslap 
┋⍟┃ ${prefix}animecuddle 
┋⍟┃ ${prefix}animewaifu 
┋⍟┃ ${prefix}animenom 
┋⍟┃ ${prefix}animefoxgirl 
┋⍟┃ ${prefix}animegecg 
┋⍟┃ ${prefix}animetickle 
┋⍟┃ ${prefix}animefeed 
┋⍟┃ ${prefix}animeavatar 
┋⍟┃ ${prefix}anime 
┋⍟┃ ${prefix}animequote 
┋⍟┃ ${prefix}avatar 
┋⍟┃ ${prefix}shinobu 
┋⍟┃ ${prefix}fox_girl 
┋⍟┃ ${prefix}gecg 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.ownermenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 74
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Owner Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}autoread 
┋⍟┃ ${prefix}autobio 
┋⍟┃ ${prefix}autotype 
┋⍟┃ ${prefix}unavailable 
┋⍟┃ ${prefix}autorecord 
┋⍟┃ ${prefix}autorecordtype 
┋⍟┃ ${prefix}autoswview 
┋⍟┃ ${prefix}setautoblock 
┋⍟┃ ${prefix}setantiforeign 
┋⍟┃ ${prefix}autoblock 
┋⍟┃ ${prefix}onlygc 
┋⍟┃ ${prefix}onlypc 
┋⍟┃ ${prefix}onlyindia 
┋⍟┃ ${prefix}onlyindo 
┋⍟┃ ${prefix}anticall 
┋⍟┃ ${prefix}self 
┋⍟┃ ${prefix}public 
┋⍟┃ ${prefix}join 
┋⍟┃ ${prefix}poll 
┋⍟┃ ${prefix}spam 
┋⍟┃ ${prefix}bc 
┋⍟┃ ${prefix}bcgroup 
┋⍟┃ ${prefix}setmenu 
┋⍟┃ ${prefix}setimgmenu 
┋⍟┃ ${prefix}setvidmenu 
┋⍟┃ ${prefix}setgifmenu 
┋⍟┃ ${prefix}setreply 
┋⍟┃ ${prefix}setprefix 
┋⍟┃ ${prefix}addlimit 
┋⍟┃ ${prefix}dellimit 
┋⍟┃ ${prefix}resethit 
┋⍟┃ ${prefix}resetuser 
┋⍟┃ ${prefix}creategc 
┋⍟┃ ${prefix}userjid 
┋⍟┃ ${prefix}setexif 
┋⍟┃ ${prefix}setbotbio 
┋⍟┃ ${prefix}delppbot 
┋⍟┃ ${prefix}shutdown 
┋⍟┃ ${prefix}setppbot 
┋⍟┃ ${prefix}addprem 
┋⍟┃ ${prefix}delprem 
┋⍟┃ ${prefix}addowner 
┋⍟┃ ${prefix}delowner 
┋⍟┃ ${prefix}addvn 
┋⍟┃ ${prefix}addapk 
┋⍟┃ ${prefix}addzip 
┋⍟┃ ${prefix}addpdf 
┋⍟┃ ${prefix}delapk 
┋⍟┃ ${prefix}delzip 
┋⍟┃ ${prefix}delpdf 
┋⍟┃ ${prefix}delvn 
┋⍟┃ ${prefix}addsticker 
┋⍟┃ ${prefix}delsticker 
┋⍟┃ ${prefix}addimage 
┋⍟┃ ${prefix}delimage 
┋⍟┃ ${prefix}addvideo 
┋⍟┃ ${prefix}delvideo 
┋⍟┃ ${prefix}addtitle 
┋⍟┃ ${prefix}deltitle 
┋⍟┃ ${prefix}upswtext 
┋⍟┃ ${prefix}upswvideo 
┋⍟┃ ${prefix}upswimage 
┋⍟┃ ${prefix}upswaudio 
┋⍟┃ ${prefix}autosticker 
┋⍟┃ ${prefix}block 
┋⍟┃ ${prefix}unblock 
┋⍟┃ ${prefix}leavegc 
┋⍟┃ ${prefix}pushcontact 
┋⍟┃ ${prefix}pushcontactv2 
┋⍟┃ ${prefix}pushcontactv3 
┋⍟┃ ${prefix}jpm 
┋⍟┃ ${prefix}post 
┋⍟┃ ${prefix}clearall 
┋⍟┃ ${prefix}pinchat 
┋⍟┃ ${prefix}unpinchat 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.othermenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 12
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Other Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}update 
┋⍟┃ ${prefix}ping 
┋⍟┃ ${prefix}menu 
┋⍟┃ ${prefix}myip 
┋⍟┃ ${prefix}repo 
┋⍟┃ ${prefix}reportbug 
┋⍟┃ ${prefix}idgroup 
┋⍟┃ ${prefix}owner 
┋⍟┃ ${prefix}rentbot 
┋⍟┃ ${prefix}donate 
┋⍟┃ ${prefix}checkaccount 
┋⍟┃ ${prefix}runtime 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.downloadmenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 27
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Download Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}xnxxdl 
┋⍟┃ ${prefix}xvideodl 
┋⍟┃ ${prefix}itunes 
┋⍟┃ ${prefix}play 
┋⍟┃ ${prefix}ytmp3 
┋⍟┃ ${prefix}ytmp4 
┋⍟┃ ${prefix}tiktok 
┋⍟┃ ${prefix}tiktokaudio 
┋⍟┃ ${prefix}tiktokvideo 
┋⍟┃ ${prefix}tiktokslide 
┋⍟┃ ${prefix}igvideo 
┋⍟┃ ${prefix}igimage 
┋⍟┃ ${prefix}facebook 
┋⍟┃ ${prefix}twitter 
┋⍟┃ ${prefix}capcut 
┋⍟┃ ${prefix}apk 
┋⍟┃ ${prefix}mega 
┋⍟┃ ${prefix}mediafire 
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}gimage 
┋⍟┃ ${prefix}weather 
┋⍟┃ ${prefix}spotify 
┋⍟┃ ${prefix}gitclone 
┋⍟┃ ${prefix}happymod 
┋⍟┃ ${prefix}gdrive 
┋⍟┃ ${prefix}pinterest 
┋⍟┃ ${prefix}ringtone 
┋⍟┃ ${prefix}autodownload 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.groupmenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 57
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Group Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}antibot 
┋⍟┃ ${prefix}readviewonce 
┋⍟┃ ${prefix}antiviewonce 
┋⍟┃ ${prefix}welcome 
┋⍟┃ ${prefix}adminevent 
┋⍟┃ ${prefix}groupevent 
┋⍟┃ ${prefix}antiforeign 
┋⍟┃ ${prefix}antimedia 
┋⍟┃ ${prefix}antiaudio 
┋⍟┃ ${prefix}antivideo 
┋⍟┃ ${prefix}antiimage 
┋⍟┃ ${prefix}antidocument 
┋⍟┃ ${prefix}antilocation 
┋⍟┃ ${prefix}anticontact 
┋⍟┃ ${prefix}antisticker 
┋⍟┃ ${prefix}antipoll 
┋⍟┃ ${prefix}antilink 
┋⍟┃ ${prefix}antilinkgc 
┋⍟┃ ${prefix}antipromotion 
┋⍟┃ ${prefix}antivirtex 
┋⍟┃ ${prefix}grouplink 
┋⍟┃ ${prefix}listadmin 
┋⍟┃ ${prefix}invite 
┋⍟┃ ${prefix}ephemeral 
┋⍟┃ ${prefix}delete 
┋⍟┃ ${prefix}setppgroup 
┋⍟┃ ${prefix}delppgroup 
┋⍟┃ ${prefix}setnamegc 
┋⍟┃ ${prefix}setdesc 
┋⍟┃ ${prefix}add 
┋⍟┃ ${prefix}kick 
┋⍟┃ ${prefix}promote 
┋⍟┃ ${prefix}demote 
┋⍟┃ ${prefix}kickall 
┋⍟┃ ${prefix}promoteall 
┋⍟┃ ${prefix}demoteall 
┋⍟┃ ${prefix}getcontact 
┋⍟┃ ${prefix}savecontact 
┋⍟┃ ${prefix}sendcontact 
┋⍟┃ ${prefix}contactag 
┋⍟┃ ${prefix}hidetag 
┋⍟┃ ${prefix}totag 
┋⍟┃ ${prefix}tagall 
┋⍟┃ ${prefix}editinfo 
┋⍟┃ ${prefix}opentime 
┋⍟┃ ${prefix}closetime 
┋⍟┃ ${prefix}resetlink 
┋⍟┃ ${prefix}getbio 
┋⍟┃ ${prefix}vote 
┋⍟┃ ${prefix}upvote 
┋⍟┃ ${prefix}downvote 
┋⍟┃ ${prefix}checkvote 
┋⍟┃ ${prefix}delvote 
┋⍟┃ ${prefix}antivirus 
┋⍟┃ ${prefix}antitoxic 
┋⍟┃ ${prefix}nsfw 
┋⍟┃ ${prefix}react 
┋⍟┃ ${prefix}getjoinrequest 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.funmenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 63
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Fun Menu* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}define 
┋⍟┃ ${prefix}readmore 
┋⍟┃ ${prefix}fact 
┋⍟┃ ${prefix}couple 
┋⍟┃ ${prefix}soulmate 
┋⍟┃ ${prefix}stupidcheck 
┋⍟┃ ${prefix}handsomecheck 
┋⍟┃ ${prefix}uncleancheck 
┋⍟┃ ${prefix}hotcheck 
┋⍟┃ ${prefix}smartcheck 
┋⍟┃ ${prefix}greatcheck 
┋⍟┃ ${prefix}evilcheck 
┋⍟┃ ${prefix}dogcheck 
┋⍟┃ ${prefix}coolcheck 
┋⍟┃ ${prefix}waifucheck 
┋⍟┃ ${prefix}awesomecheck 
┋⍟┃ ${prefix}gaycheck 
┋⍟┃ ${prefix}cutecheck 
┋⍟┃ ${prefix}lesbiancheck 
┋⍟┃ ${prefix}hornycheck 
┋⍟┃ ${prefix}prettycheck 
┋⍟┃ ${prefix}lovelycheck 
┋⍟┃ ${prefix}uglycheck 
┋⍟┃ ${prefix}pick 
┋⍟┃ ${prefix}pickupline 
┋⍟┃ ${prefix}quotes 
┋⍟┃ ${prefix}can 
┋⍟┃ ${prefix}is 
┋⍟┃ ${prefix}when 
┋⍟┃ ${prefix}where 
┋⍟┃ ${prefix}what 
┋⍟┃ ${prefix}how 
┋⍟┃ ${prefix}rate 
┋⍟┃ ${prefix}cry 
┋⍟┃ ${prefix}kill 
┋⍟┃ ${prefix}hug 
┋⍟┃ ${prefix}pat 
┋⍟┃ ${prefix}lick  
┋⍟┃ ${prefix}kiss 
┋⍟┃ ${prefix}bite 
┋⍟┃ ${prefix}yeet 
┋⍟┃ ${prefix}bully 
┋⍟┃ ${prefix}bonk 
┋⍟┃ ${prefix}wink 
┋⍟┃ ${prefix}poke 
┋⍟┃ ${prefix}nom 
┋⍟┃ ${prefix}slap 
┋⍟┃ ${prefix}smile  
┋⍟┃ ${prefix}wave 
┋⍟┃ ${prefix}awoo 
┋⍟┃ ${prefix}blush 
┋⍟┃ ${prefix}smug 
┋⍟┃ ${prefix}glomp  
┋⍟┃ ${prefix}happy 
┋⍟┃ ${prefix}dance 
┋⍟┃ ${prefix}cringe ??
┋⍟┃ ${prefix}cuddle 
┋⍟┃ ${prefix}highfive  
┋⍟┃ ${prefix}handhold 
┋⍟┃ ${prefix}spank 
┋⍟┃ ${prefix}tickle 
┋⍟┃ ${prefix}feed 
┋⍟┃ ${prefix}checkme 
┋⍟┃ ${prefix}sound1 - sound161 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.stalkermenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 4
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Stalker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}tiktokstalk 
┋⍟┃ ${prefix}mlstalk 
┋⍟┃ ${prefix}npmstalk 
┋⍟┃ ${prefix}ghstalk 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.stickermenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 8
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Sticker* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}woof 
┋⍟┃ ${prefix}8ball 
┋⍟┃ ${prefix}lizard 
┋⍟┃ ${prefix}meow 
┋⍟┃ ${prefix}gura 
┋⍟┃ ${prefix}telestick 
┋⍟┃ ${prefix}ttp 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.databasemenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 8
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Database* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}setcmd 
┋⍟┃ ${prefix}delcmd 
┋⍟┃ ${prefix}listcmd 
┋⍟┃ ${prefix}lockcmd 
┋⍟┃ ${prefix}addmsg 
┋⍟┃ ${prefix}delmsg 
┋⍟┃ ${prefix}getmsg 
┋⍟┃ ${prefix}listmsg 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.storemenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 5
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Store* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}list 
┋⍟┃ ${prefix}store 
┋⍟┃ ${prefix}shop 
┋⍟┃ ${prefix}addlist 
┋⍟┃ ${prefix}dellist 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.aimenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 31
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *OpenAI* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}animate 
┋⍟┃ ${prefix}diffusion-anime 
┋⍟┃ ${prefix}bingai 
┋⍟┃ ${prefix}blackboxai 
┋⍟┃ ${prefix}travel-assistant 
┋⍟┃ ${prefix}guru-ai 
┋⍟┃ ${prefix}emi-ai 
┋⍟┃ ${prefix}claude-ai 
┋⍟┃ ${prefix}costume-ai 
┋⍟┃ ${prefix}herc-ai 
┋⍟┃ ${prefix}hercaiv1 
┋⍟┃ ${prefix}hercai-cartoon 
┋⍟┃ ${prefix}hercai-animefy 
┋⍟┃ ${prefix}hercai-lexica 
┋⍟┃ ${prefix}hercai-prodia 
┋⍟┃ ${prefix}hercai-simurg 
┋⍟┃ ${prefix}hercai-raava 
┋⍟┃ ${prefix}hercai-shonin 
┋⍟┃ ${prefix}realistic 
┋⍟┃ ${prefix}3dmodel 
┋⍟┃ ${prefix}openai-indo 
┋⍟┃ ${prefix}indo-ai 
┋⍟┃ ${prefix}diffusion 
┋⍟┃ ${prefix}photoleap 
┋⍟┃ ${prefix}openai 
┋⍟┃ ${prefix}dalle 
┋⍟┃ ${prefix}ai 
┋⍟┃ ${prefix}remini 
┋⍟┃ ${prefix}simi 
┋⍟┃ ${prefix}removebg 
┋⍟┃ ${prefix}tozombie 
┋⍟┃ ${prefix}toanime 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.bugmenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 50
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Bug & War* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}xreact 
┋⍟┃ ${prefix}x 
┋⍟┃ ${prefix}x2 
┋⍟┃ ${prefix}iosbug 
┋⍟┃ ${prefix}iosbug2 
┋⍟┃ ${prefix}xaudio 
┋⍟┃ ${prefix}xaudio2 
┋⍟┃ ${prefix}xsticker 
┋⍟┃ ${prefix}xsticker2 
┋⍟┃ ${prefix}xloc 
┋⍟┃ ${prefix}xloc2 
┋⍟┃ ${prefix}xlist 
┋⍟┃ ${prefix}xlist2 
┋⍟┃ ${prefix}xkill 
┋⍟┃ ${prefix}xkill2 
┋⍟┃ ${prefix}xkillgc 
┋⍟┃ ${prefix}tempban 
┋⍟┃ ${prefix}xcrash 
┋⍟┃ ${prefix}xcrash2 
┋⍟┃ ${prefix}xioscrash 
┋⍟┃ ${prefix}xioscrash2 
┋⍟┃ ${prefix}iosgoogle 
┋⍟┃ ${prefix}iosgoogle2 
┋⍟┃ ${prefix}iosq 
┋⍟┃ ${prefix}amountbug 
┋⍟┃ ${prefix}pmbug 
┋⍟┃ ${prefix}delaybug 
┋⍟┃ ${prefix}docubug 
┋⍟┃ ${prefix}unlimitedbug 
┋⍟┃ ${prefix}bombug 
┋⍟┃ ${prefix}lagbug 
┋⍟┃ ${prefix}trollybug 
┋⍟┃ ${prefix}gcbug 
┋⍟┃ ${prefix}delaygcbug 
┋⍟┃ ${prefix}laggcbug 
┋⍟┃ ${prefix}bomgcbug 
┋⍟┃ ${prefix}unlimitedgcbug 
┋⍟┃ ${prefix}trollygcbug 
┋⍟┃ ${prefix}docugcbug 
┋⍟┃ ${prefix}verif 
┋⍟┃ ${prefix}banv1 
┋⍟┃ ${prefix}banv2 
┋⍟┃ ${prefix}banv3 
┋⍟┃ ${prefix}banv4 
┋⍟┃ ${prefix}banv5 
┋⍟┃ ${prefix}banv6 
┋⍟┃ ${prefix}unbanv1 
┋⍟┃ ${prefix}unbanv2 
┋⍟┃ ${prefix}unbanv3 
┋⍟┃ ${prefix}unbanv4 
┋⍟┃ ${prefix}unbanv5 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.randphotomenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 56
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Random Photo* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}aesthetic 
┋⍟┃ ${prefix}coffee 
┋⍟┃ ${prefix}wikimedia 
┋⍟┃ ${prefix}wallpaper 
┋⍟┃ ${prefix}art 
┋⍟┃ ${prefix}bts 
┋⍟┃ ${prefix}dogwoof 
┋⍟┃ ${prefix}catmeow 
┋⍟┃ ${prefix}lizardpic 
┋⍟┃ ${prefix}goosebird 
┋⍟┃ ${prefix}8ballpool 
┋⍟┃ ${prefix}cosplay 
┋⍟┃ ${prefix}hacker 
┋⍟┃ ${prefix}cyber 
┋⍟┃ ${prefix}gamewallpaper 
┋⍟┃ ${prefix}islamic 
┋⍟┃ ${prefix}jennie 
┋⍟┃ ${prefix}jiso 
┋⍟┃ ${prefix}satanic 
┋⍟┃ ${prefix}justina 
┋⍟┃ ${prefix}cartoon 
┋⍟┃ ${prefix}pentol 
┋⍟┃ ${prefix}cat 
┋⍟┃ ${prefix}kpop 
┋⍟┃ ${prefix}exo 
┋⍟┃ ${prefix}lisa 
┋⍟┃ ${prefix}space 
┋⍟┃ ${prefix}car 
┋⍟┃ ${prefix}technology 
┋⍟┃ ${prefix}bike 
┋⍟┃ ${prefix}shortquote 
┋⍟┃ ${prefix}antiwork 
┋⍟┃ ${prefix}hacking 
┋⍟┃ ${prefix}boneka 
┋⍟┃ ${prefix}rose 
┋⍟┃ ${prefix}ryujin 
┋⍟┃ ${prefix}ulzzangboy 
┋⍟┃ ${prefix}ulzzanggirl 
┋⍟┃ ${prefix}wallml 
┋⍟┃ ${prefix}wallphone 
┋⍟┃ ${prefix}mountain 
┋⍟┃ ${prefix}goose 
┋⍟┃ ${prefix}profilepic 
┋⍟┃ ${prefix}couplepp 
┋⍟┃ ${prefix}programming 
┋⍟┃ ${prefix}pubg 
┋⍟┃ ${prefix}blackpink 
┋⍟┃ ${prefix}randomboy   
┋⍟┃ ${prefix}randomgirl 
┋⍟┃ ${prefix}hijab   
┋⍟┃ ${prefix}chinese 
┋⍟┃ ${prefix}indo 
┋⍟┃ ${prefix}japanese 
┋⍟┃ ${prefix}korean 
┋⍟┃ ${prefix}malay 
┋⍟┃ ${prefix}thai 
┋⍟┃ ${prefix}vietnamese 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.randvideomenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 8
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Random Video* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}tiktokgirl 
┋⍟┃ ${prefix}tiktoknukthy 
┋⍟┃ ${prefix}tiktokkayes 
┋⍟┃ ${prefix}tiktokpanrika 
┋⍟┃ ${prefix}tiktoknotnot 
┋⍟┃ ${prefix}tiktokghea 
┋⍟┃ ${prefix}tiktoksantuy 
┋⍟┃ ${prefix}tiktokbocil 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.nsfwmenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 14
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Anime NSFW* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}hentai 
┋⍟┃ ${prefix}gifblowjob 
┋⍟┃ ${prefix}hentaivid 
┋⍟┃ ${prefix}hneko 
┋⍟┃ ${prefix}nwaifu 
┋⍟┃ ${prefix}animespank 
┋⍟┃ ${prefix}trap 
┋⍟┃ ${prefix}blowjob 
┋⍟┃ ${prefix}cuckold 
┋⍟┃ ${prefix}milf 
┋⍟┃ ${prefix}eba 
┋⍟┃ ${prefix}pussy 
┋⍟┃ ${prefix}yuri 
┋⍟┃ ${prefix}zettai 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.gamemenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 5
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Game* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}truth 
┋⍟┃ ${prefix}dare 
┋⍟┃ ${prefix}suit 
┋⍟┃ ${prefix}tictactoe 
┋⍟┃ ${prefix}math 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.religionmenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 1
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Religon* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}gita 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.searchmenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 11
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Search* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}google 
┋⍟┃ ${prefix}wikipedia 
┋⍟┃ ${prefix}ytsearch 
┋⍟┃ ${prefix}xnxxsearch 
┋⍟┃ ${prefix}xvideosearch 
┋⍟┃ ${prefix}apksearch 
┋⍟┃ ${prefix}stickersearch 
┋⍟┃ ${prefix}imdb 
┋⍟┃ ${prefix}wanumber 
┋⍟┃ ${prefix}friend 
┋⍟┃ ${prefix}lyrics 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.convertmenu = (prefix) => {
return `╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 37
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *Convert* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}obfuscate 
┋⍟┃ ${prefix}styletext 
┋⍟┃ ${prefix}fliptext 
┋⍟┃ ${prefix}tts 
┋⍟┃ ${prefix}say 
┋⍟┃ ${prefix}togif 
┋⍟┃ ${prefix}toqr 
┋⍟┃ ${prefix}bass 
┋⍟┃ ${prefix}blown 
┋⍟┃ ${prefix}deep 
┋⍟┃ ${prefix}earrape 
┋⍟┃ ${prefix}fast 
┋⍟┃ ${prefix}fat 
┋⍟┃ ${prefix}nightcore 
┋⍟┃ ${prefix}reverse 
┋⍟┃ ${prefix}robot 
┋⍟┃ ${prefix}slow 
┋⍟┃ ${prefix}smooth 
┋⍟┃ ${prefix}squirrel 
┋⍟┃ ${prefix}tinyurl 
┋⍟┃ ${prefix}tovn 
┋⍟┃ ${prefix}toaudio 
┋⍟┃ ${prefix}tomp3 
┋⍟┃ ${prefix}tomp4
┋⍟┃ ${prefix}toimg 
┋⍟┃ ${prefix}toonce 
┋⍟┃ ${prefix}sticker 
┋⍟┃ ${prefix}smeme 
┋⍟┃ ${prefix}smeta 
┋⍟┃ ${prefix}take 
┋⍟┃ ${prefix}emoji 
┋⍟┃ ${prefix}volaudio 
┋⍟┃ ${prefix}volvideo 
┋⍟┃ ${prefix}ebinary 
┋⍟┃ ${prefix}dbinary 
┋⍟┃ ${prefix}ssweb 
┋⍟┃ ${prefix}quoted 
┋⍟┃ ${prefix}translate 
┋⍟╰───────────────
╰═════════════════⍟
`}

global.listmenu = (prefix) => {
return ` ╭─────❂* 𝗕𝗢𝗧-𝗜𝗡𝗙𝗢 *❂───❂*
╏✺╭─────────────❂
┋⍟┃🤖𝗡𝗮𝗺𝗲 : Zenitsu-Bot A.I
┋⍟┃🪀️𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 8.0.0
┋⍟┃🧮Features : 12
┋⍟┃📱𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Android
┋⍟╰──────────────❂
*╰──────❂✧𝑾𝒂-𝑩𝒐𝒕✧❂────❂*

╭────❂* *List* *❂⊷*
╏✺╭─────────────❂
┋⍟┃ ${prefix}listprem 
┋⍟┃ ${prefix}listowner 
┋⍟┃ ${prefix}liststicker 
┋⍟┃ ${prefix}listimage 
┋⍟┃ ${prefix}listvideo 
┋⍟┃ ${prefix}listvn 
┋⍟┃ ${prefix}listapk 
┋⍟┃ ${prefix}listzip 
┋⍟┃ ${prefix}listpdf 
┋⍟┃ ${prefix}listbadword 
┋⍟┃ ${prefix}listpc 
┋⍟┃ ${prefix}listgc 
┋⍟╰───────────────
╰═════════════════⍟
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})