const text = document.querySelector('#text');
const nadpis = document.querySelector('#nadpis');
const obrazek = document.querySelector('#obrazek');

const sporting = document.querySelector('#sporting');
const manchester = document.querySelector('#manchester');
const real = document.querySelector('#real');
const juventus = document.querySelector('#juventus');
const allnassr = document.querySelector('#allnassr');

sporting.addEventListener("click",function(){
    text.innerHTML = 'Cristiano Ronaldo začal svou profesionální kariéru v Sporting CP, jednom z největších portugalských klubů. Sporting je známý tím, že vychoval mnoho skvělých fotbalistů, a právě zde se Ronaldo poprvé ukázal světu. Už jako teenager byl neuvěřitelně rychlý, technicky nadaný a sebevědomý. V přátelském zápase proti Manchesteru United předvedl tak skvělý výkon, že hráči Manchesteru přesvědčili vedení klubu, aby ho okamžitě koupilo.';
    nadpis.innerHTML = 'Sporting';
    obrazek.src = "./img/16157288884852.jpg";
})
manchester.addEventListener("click",function(){
    text.innerHTML = 'V roce 2003 přestoupil do Manchester United. Pod vedením legendárního trenéra Sir Alex Ferguson se z talentovaného mladíka stal jeden z nejlepších hráčů na světě. Zpočátku byl známý hlavně svými kličkami a rychlostí, ale postupně začal dávat stále více gólů. V Manchesteru vyhrál několik ligových titulů, Ligu mistrů a v roce 2008 získal svůj první Zlatý míč. Fanoušci si ho zamilovali díky jeho bojovnosti a schopnosti rozhodovat důležité zápasy.<br> <br> V roce 2021 se vrátil do Manchesteru United. Návrat vyvolal obrovské nadšení a fanoušci doufali, že klub vrátí na vrchol. Ronaldo skutečně dával důležité góly a byl jedním z nejlepších hráčů týmu, ale Manchester procházel složitým obdobím. Klub často střídal trenéry a výsledky nebyly podle očekávání. Přesto Ronaldo ukázal, že stále patří mezi nejlepší střelce své generace.';
    nadpis.innerHTML = 'Manchester United';
    obrazek.src = "./img/newFile-5.avif";
})
real.addEventListener("click",function(){
    text.innerHTML = 'V roce 2009 přestoupil do Real Madrid za tehdy rekordní částku. Tady prožil nejlepší období své kariéry. Real Madrid je nejúspěšnější klub v historii fotbalu a Ronaldo se stal jeho největší střeleckou legendou. Během devíti let nastřílel neuvěřitelných 450 gólů a pomohl klubu vyhrát čtyři Ligy mistrů. Jeho souboje s Lionel Messi, který tehdy hrál za FC Barcelona, sledoval celý svět. V Madridu získal další čtyři Zlaté míče a stal se symbolem vítězství, tvrdé práce a neustálého překonávání rekordů.';
    nadpis.innerHTML = 'Real Madrid';
    obrazek.src = "./img/gettyimages-962792890-612x612.jpg";
})
juventus.addEventListener("click",function(){
    text.innerHTML = 'Po odchodu z Realu zamířil do Juventus. Mnoho lidí si myslelo, že ve třiatřiceti letech už nebude tak dominantní, ale Ronaldo znovu dokázal opak. V Itálii pokračoval ve střílení gólů, vyhrál ligové tituly a stal se jedním z mála hráčů, kteří uspěli ve třech největších evropských ligách. Fanoušci Juventusu obdivovali jeho profesionalitu a fyzickou připravenost, protože i ve vyšším věku předváděl výkony na světové úrovni.';
    nadpis.innerHTML = 'Juventus';
    obrazek.src = "./img/3722.avif";
})
allnassr.addEventListener("click",function(){
    text.innerHTML = 'Na konci roku 2022 podepsal smlouvu s Al Nassr v Saúdské Arábii. Jeho příchod změnil celý tamní fotbal. Díky němu začali do saúdské ligy přicházet další slavní hráči a soutěž získala obrovskou pozornost po celém světě. Ronaldo zde dál překonává rekordy a ukazuje, že i po čtyřicítce dokáže hrát na vysoké úrovni. Pro mnoho fanoušků je důkazem toho, kam může člověka dovést disciplína, tvrdá práce a obrovská touha být nejlepší.';
    nadpis.innerHTML = 'Al-Nassr';
    obrazek.src = "./img/www-instagram-com-cristiano-785653316-1.webp";
})
