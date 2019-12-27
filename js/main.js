function insertContact() {
    var c = ['l','a','@','n','h','o','s','.','t','r','e','k','v']
    
    var hostnameRegexMatch = window.location.hostname.match(/.*?\.(.*)/);

    if (hostnameRegexMatch === null){
      return;
    }
  
    var textMail = c[4]+c[1]+c[0]+c[0]+c[5]+c[2]+hostnameRegexMatch[1];
    var textXmpp = c[6]+c[8]+c[10]+c[11]+c[1]+c[8]+c[2]+c[8]+c[9]+c[1]+c[6]+c[4]+c[6]+c[10]+c[9]+c[12]+c[10]+c[9]+c[7]+c[3]+c[10]+c[8];
    document.getElementById("print-mail").innerHTML = textMail;
    document.getElementById("print-xmpp").innerHTML = textXmpp;
    document.getElementById("mail").href = "mailto:"+textMail;
    document.getElementById("xmpp").href = "xmpp:"+textXmpp;
  }
  
  window.onload = insertContact;