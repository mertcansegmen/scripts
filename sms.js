const news = `
Valve'dan Heyecanlandıran Açıklama: Microsoft Onaylarsa Game Pass'i Steam'e Katmaya Hazırız

Oyuncuların neferi, Valve’ın kurucusu Gabe Newell, yine oyuncuları ne kadar düşündüğünü bizlere gösterdi. Gaben, verdiği bir röportajda eğer müşterileri istiyorsa Game Pass sisteminin Steam’e entegre edilmesini kabul etmeye hazır olduklarını belirtti.
Microsoft ve Sony arasındaki tabiri caizse ‘sınırlarına toprak katma savaşı’ diyebileceğimiz stüdyo satın alma furyasının arasında kalan kişiler tabii ki de oyuncular. Oyuncuları her zaman kim düşünür? Tabii ki sık sık ‘Gaben’ olarak hitap ettiğimiz Valve’ın kurucusu Gabe Newell. Newell, şimdi de oyuncuları sevindirecek bir duyuru yaptı.

PC Gamer sitesi ile yakın zamanda yaptığı bir röportajda Gabe Newell, oyuncular tarafından beğenilen ve Microsoft’a ait olan Game Pass sistemi ile alakalı müjdeli bir haber verdi. Gabe Newell’in söylediğine göre Valve, aynı EA Play gibi Steam’e Game Pass’i entegre etmeye hazır.

“Onların müşterileri bunu çok istiyor, biz de yapmaktan mutluluk duyarız”
gabe newell

Gabe Newell, verdiği röportajda şu ifadeleri kullandı: “Şu anda bizim bir abonelik sistemi yapmaya ihtiyacımız olduğunu düşünmüyorum, ancak entegre edebiliriz. Microsoft’un Game Pass sistemini kullanan müşterilerin bunu istediği de açık. Biz de Game Pass’i Steam’e getirmek için Microsoft birlikte çalışmaktan mutluluk duyarız.”

Gaben, demecinde daha sonra Game Pass’in Steam’e gelecekse bile yakın zamanda gelmeyeceğini ancak Valve ve Microsoft’un bu konu hakkında görüşmeler yaptığına işaret ediyor: “Bu konu hakkında oradaki insanlarla epey konuştuk. Eğer müşterileriniz istiyorsa bunu nasıl gerçekleştireceğinizin yollarını bulmalısınız. Biz bu noktadayız.”

İLGİLİ HABER
Oyun Dünyasının Lordu Gabe Newell Kimdir, Steam’i Nasıl Kurdu?
PC için Game Pass sisteminin Steam’e gelip gelmeyeceği, iki şirketten de resmi bir açıklama yapılana kadar gizemini koruyacak ancak Microsoft’un kesinlikle atması gerektiği bir adım. Keza Electronic Arts, 2020 yılında EA Play abonelik sistemini Steam’e entegre etmişti ve EA’in gelirleri katlanmıştı.

Her ne kadar şu anda Game Pass-Steam entegresinin gerçekleşip gerçekleşmeyeceği bilinmese de Microsoft, Steam’in Windows 11 mağazasında bulunmasıyla ilgilendiğini duyurmuştu. Microsoft, Valve’ın orada hoş karşılanacağını da sözlerine eklemişti.
`;

const isGSMAlphabet = (text) => {
    var regexp = new RegExp("^[A-Za-z0-9 \\r\\n@£$¥èéùìòÇØøÅå\u0394_\u03A6\u0393\u039B\u03A9\u03A0\u03A8\u03A3\u0398\u039EÆæßÉ!\"#$%&'()*+,\\-./:;<=>?¡ÄÖÑÜ§¿äöñüà^{}\\\\\\[~\\]|\u20AC]*$");

    return regexp.test(text);
}

const trCharToEn = (char) => {
    switch(char) {
      case 'ç': return 'c';
      case 'Ç': return 'C';
      case 'ğ': return 'g';
      case 'Ğ': return 'G';
      case 'ı': return 'i';
      case 'İ': return 'I';
      case 'Ö': return 'O';
      case 'ö': return 'o';
      case 'Ş': return 'S';
      case 'ş': return 's';
      case 'Ü': return 'U';
      case 'ü': return 'u';
      default: return char;
    }
}

const arrayToChunks = (arr, chunkSize) => {
    const chunkArray = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize)

      chunkArray.push(chunk);
    }

    return chunkArray;
}

var newsWithoutNewLines = news.replace(/\n/g, " ");

const newsCharArr = newsWithoutNewLines.split("")
    .map(ch => trCharToEn(ch))
    .filter(ch => isGSMAlphabet(ch));

const newsSmsMessages = arrayToChunks(newsCharArr, 1150)
    .map(chunk => chunk.join(""));

let output = "";
newsSmsMessages.forEach(msg => {
    output += msg + "\n\n---------------------------------------------\n\n";
});

console.log(output);

