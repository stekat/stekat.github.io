function insertContact() {
    var c = ['l','a','@','n','h','o','s','.','t','r','e','k','v',':','m','i','x','g'];
  
    var hostnameRegexMatch = window.location.hostname.match(/.*?\.(.*)/);

    if (hostnameRegexMatch === null){
      return;
    }
  
    var textMail = c[4]+c[1]+c[0]+c[0]+c[5]+c[2]+hostnameRegexMatch[1];
    var textMatrix = c[2]+c[6]+c[8]+c[10]+c[11]+c[1]+c[8]+c[13]+c[14]+c[1]+c[8]+c[9]+c[15]+c[16]+c[7]+c[5]+c[9]+c[17];
    document.getElementById("print-mail").innerHTML = textMail;
    document.getElementById("print-matrix").innerHTML = textMatrix;
    document.getElementById("mail").href = "mailto:"+textMail;
    document.getElementById("matrix").href = "https://matrix.to/#/"+textMatrix;
  }
  
  window.onload = insertContact;