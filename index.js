(function() {
  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shubham9694279109@gmail.com',
    pass: '9694279109'
  },
  secure: true,
});

var mailOptions = {
  from: 'shubhambabai8@gmail.com',
  to: 'shubham8619250837@gmail.com',
  subject: 'Warning',
  text: 'check your pc someone open chrome browser'
};

    var url = window.location.href;
 var badWebsites = ["mom-son-porn-video", "sister-brother-porn","xvideoes","adult", "adult", "porn",'https://www.xvideos.com/', 'https://www.pornhub.com/', 'https://xhamster.com/', 'https://www.xnxx.com/', 'https://www.youporn.com/', 'https://hclips.com/', 'https://www.porn.com/', 'https://www.tnaflix.com/', 'https://www.tube8.com/', 'https://spankbang.com/', 'https://www.nuvid.com/', 'https://www.ixxx.com/', 'https://www.sunporno.com/', 'https://www.pornhd.com/', 'https://www.porn300.com/', 'https://pornone.com/', 'https://www.sexvid.xxx/', 'https://www.thumbzilla.com/', 'https://zbporn.com/', 'https://www.fuq.com/', 'https://xxxbunker.com/', 'https://hdhole.com/', 'https://www.3movs.com/', 'https://www.cumlouder.com/', 'https://porndoe.com/', 'https://xbabe.com/', 'https://vipwank.com/', 'https://www.porndroids.com/', 'https://www.alohatube.com/', 'https://www.maturetube.com/', 'https://www.tubev.sex/', 'https://www.4tube.com/', 'https://www.shameless.com/', 'https://www.megatube.xxx/', 'https://www.porntube.com/', 'https://www.porndig.com/', 'https://www.pornburst.xxx/', 'https://www.bigporn.com/', 'https://www.porn.biz/', 'https://xxxvideo.best/', 'https://fapvidhd.com/', 'https://www.melonstube.com/', 'https://tastyblacks.com/', 'https://www.lobstertube.com/', 'https://fapster.xxx/', 'https://porngrey.com/', 'https://viviporn.tv/', 'https://pornfaze.com/', 'https://pornmaki.com/', 'https://www.pornid.xxx/', 'https://www.proporn.com/', 'https://www.hotporntubes.com/', 'https://pornito.xxx/', 'https://thematureporn.net/', 'https://www.xxxvideos247.com/', 'https://handjobhub.com/', 'http://www.dansmovies.com/', 'https://www.porn7.xxx/', 'https://www.forhertube.com/', 'https://www.pornheed.com/', 'https://www.orgasm.com/', 'https://www.pornrabbit.com/', 'https://www.tiava.com/', 'https://www.fux.com/', 'https://www.metaporn.com/', 'https://here.xxx/', 'https://www.pornerbros.com/', 'http://iporntv.net/', 'https://www.mobilepornmovies.com/', 'https://pornplanner.com/', 'https://mypornbible.com/', 'https://www.badjojo.com/', 'https://findtubes.com/', 'https://www.pornmd.com/', 'http://www.nudevista.com/', 'https://awejmp.com/?siteId=jasmin&categoryName=&pa…&prm[campaign_id]=104689&subAffId=toppornsitescom', 'http://imlive.com/wmaster.ashx?WID=126370604790&Li…e=BCODEL0000000_00000&QueryID=138&from=freevideo6', 'https://awejmp.com/?siteId=lpr&cobrandId=&superCat…&prm[campaign_id]=104689&subAffId=toppornsitescom', 'https://go.stripchat.com/?userId=d8c7e528a02d937f2…4e6fc8d09201552f4851837b825&sourceId=toppornsites', 'https://www.luckycrush.live/?aid=top5list&bid=toppornsites', 'https://www.slutroulette.com/', 'https://liveporngirls.com/?utm_medium=referral&utm_source=toppornsites&utm_campaign=hpage', 'https://www.sexedchat.com/?campaign=35&subaffid=tidecash&ref=1', 'https://www.camsfinder.com/?utm_source=327&utm_medium=link&utm_campaign=4033', 'https://www.jerkmate.com/?utm_source=327&utm_medium=link&utm_campaign=1531', 'https://www.watchmyexgf.net/', 'https://www.amateurest.com/', 'https://www.watchmygf.me/', 'https://lovehomeporn.com/', 'https://www.iknowthatgirl.com/tour5/?ats=eyJhIjoxM…3NDc0ODgsIm4iOjE1LCJzIjoxODEsImUiOjU5MiwicCI6NTd9', 'https://www.assoass.com/', 'https://bigassporn.tv/', 'https://join.analized.com/track/NzMxLjU5LjEyLjk3LjMuMC4wLjAuMA', 'http://stufferdb.com/', 'https://www.pornpics.com/', 'https://www.pictoa.com/', 'http://viewgals.com/', 'http://www.hotpornphotos.com/', 'https://www.pichunter.com/', 'http://www.nakedpornpics.com/'];
    badWebsites.find(function(item, index, badWords) {
        if(url.includes(item)){
            alert("tere baap ko email kr diya h");
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            window.history.back();
        }
    });
}());   