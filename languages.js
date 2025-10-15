import { useSelector } from "react-redux";
export const allLanguages = {
    fi: {
        homePage: {
            heroSection: {
                title: "Vihdoinkin puhdasta – iloisten ammattilaisten tekemänä",
                subTitle:
                    "Luotettavat siivouspalvelut Helsingissä, Espoossa ja Vantaalla",
                subTitle1:
                    "Etsitkö säännöllistä kotisiivousta, toimistosiivousta tai apua muuttosiivouksen yhteydessä? Me hoidamme kaiken puolestasi – tarkasti ja huolellisesti.",
                subTitle2:
                    "Cleava tarjoaa ystävällistä, vastuullista ja ammattimaista siivouspalvelua koko pääkaupunkiseudulla. Anna meidän pitää kotisi ja työtilasi raikkaana ja viihtyisänä joka päivä.",
            },
            contactus: "Ota yhteyttä",
            aboutus: "Meistä",
            aboutDescription:
                "Cleava Cleaning Services syntyi rakkaudesta puhtauteen ja ihmisläheiseen palveluun. Uskomme, että puhdas koti tai työtila lisää onnellisuutta ja hyvinvointia. Tiimimme koostuu ammattitaitoisista siivoojista, jotka tekevät työnsä hymyssä suin ja suurella sydämellä.",
            readMore: "Lue lisää",
            ourServices: "Siivouspalvelumme Helsingissä, Espoossa ja Vantaalla",
            service1Title: "Kotisiivous",
            service1Desc:
                "Tee arjestasi helpompaa säännöllisen tai kertaluonteisen kotisiivouksen avulla. Suunnittelemme siivouksen toiveidesi mukaan – tuloksena raikas ja viihtyisä koti.",
            service2Title: "Muuttosiivous",
            service2Desc:
                "Anna meidän helpottaa muuttopäivääsi. Siivoamme vanhan tai uuden kotisi huolellisesti, jotta voit keskittyä siihen, mikä on tärkeintä – uuteen alkuun.",
            service3Title: "Toimistosiivous",
            service3Desc:
                "Puhdas työympäristö lisää viihtyvyyttä ja tuottavuutta. Tarjoamme joustavaa ja luotettavaa toimistosiivousta kaiken kokoisille yrityksille.",
            values: [
                {
                    title: "Visiomme",
                    description:
                        "Tavoitteenamme on olla siivousalan suunnannäyttäjä, joka luo puhtaita, terveellisiä ja viihtyisiä tiloja. Haluamme parantaa ihmisten arkea tuomalla tiloihin raikkautta ja harmoniaa.",
                },
                {
                    title: "Tehtävämme",
                    description:
                        "Tehtävämme on tarjota luotettavia ja laadukkaita siivouspalveluita, jotka ylittävät odotukset. Toimimme avoimesti, kuuntelemme asiakkaitamme ja rakennamme pitkäaikaisia yhteistyösuhteita.",
                },
                {
                    title: "Prosessimme",
                    description:
                        "Keskustelemme tarpeistasi, suunnittelemme yksilöllisen ratkaisun ja toteutamme työn huolellisesti. Varmistamme, että jokainen yksityiskohta on täydellinen ja lopputulos tekee vaikutuksen.",
                },
            ],
            testimonials: {
                topText: "Tosielämän kokemuksia ja aitoja mielipiteitä",
                title: "Asiakkaamme kertovat tyytyväisyydestään",
                quote:
                    "”Cleavan tiimi ylitti kaikki odotukseni! Heidän työnsä oli ammattimaista, ystävällistä ja huolellista – lopputulos oli upea.”",
                button: "OTA YHTEYTTÄ",
                summaryTitle: "ERINOMAINEN",
                basedOn: "Perustuu",
                reviewsCount: "85 arvosteluun",
                readMore: "Lue lisää",
                reviews: [
                    {
                        name: "Kaisa Mikkonen",
                        date: "2025-05-10",
                        review:
                            "Cleavan palvelu oli ensiluokkaista – siivooja oli täsmällinen, ammattimainen ja jälki oli erinomaista. Suosittelen lämpimästi!",
                        rating: 5,
                    },
                    {
                        name: "Johanna Lehtinen",
                        date: "2025-04-28",
                        review:
                            "Tilausprosessi oli helppo ja nopea. Tiimi teki upeaa työtä ja jätti toimistomme raikkaaksi ja siistiksi!",
                        rating: 5,
                    },
                    {
                        name: "Markku Rantanen",
                        date: "2025-04-15",
                        review:
                            "Todella ammattimaista palvelua! Cleava piti lupauksensa ja hoiti kaiken täsmällisesti – erinomainen kokemus.",
                        rating: 5,
                    },
                    {
                        name: "Nina Salonen",
                        date: "2025-04-02",
                        review:
                            "Siivouksen laatu oli poikkeuksellista. Kommunikointi oli sujuvaa ja aikataulu piti täydellisesti. Täydet pisteet!",
                        rating: 5,
                    },
                ],
            },
            ctaSection: {
                title: "Luotettava ja laadukas siivouspalvelu juuri sinulle",
                description:
                    "Olemme täällä helpottamassa arkeasi ja tekemässä ympäristöstäsi puhtaamman ja viihtyisämmän. Ota yhteyttä puhelimitse, sähköpostitse tai täytä lomake – vastaamme nopeasti ja ystävällisesti.",
                button: "OTA YHTEYTTÄ",
            },
            footer: {
                contactTitle: "Yhteystiedot",
                phone: "Puhelin: 0451878083",
                email: "Sähköposti:Cleava.helsinki@gmail.com",
                address: "Aallonhalkoja 9 B, 00540 Helsinki",
                companyTitle: "Cleava ",
                businessId: "Y-tunnus: 2746515-8",
                workingHoursTitle: "Aukioloajat",
                weekdays: "Maanantai – Perjantai: 09.00 – 17.00",
                weekends: "Lauantai – Sunnuntai: Suljettu",
                servicesTitle: "Palvelut",
                homeCleaning: "Kotisiivous",
                officeCleaning: "Toimistosiivous",
                moveCleaning: "Muuttosiivous",
            },
        },
        storyPage: {
            hero: {
                title:
                    "Tervetuloa Cleavaan – paikkaan, jossa puhtaus, hyvinvointi ja luottamus kohtaavat.",
                button: "OTA YHTEYTTÄ",
            },
            section1: {
                title: "Meidän tarinamme – miten kaikki alkoi",
                paragraphs: [
                    "Cleava syntyi yksinkertaisesta ajatuksesta: jokainen koti ja työtila ansaitsee tulla huolletuksi yhtä suurella huolella kuin sen asukkaat tai työntekijät ansaitsevat tulla kohdelluiksi. Lähtökohtamme oli tuoda markkinoille siivouspalvelu, joka on yhtä aikaa inhimillinen, vastuullinen ja tinkimättömän laadukas.",
                    "Alusta asti tavoitteenamme on ollut rakentaa yritys, jossa ammattitaito yhdistyy aidosti välittävään palveluasenteeseen. Cleava ei ole vain siivousyritys – se on yhteisö, jossa arvostetaan puhtautta, luotettavuutta ja hyvää arkea.",
                    "Vuosien varrella olemme kasvaneet pienestä paikallisesta toimijasta luotetuksi siivouskumppaniksi sadoille kotitalouksille ja yrityksille. Olemme ylpeitä siitä, että asiakkaamme pysyvät kanssamme – ei vain palvelun, vaan luottamuksen vuoksi.",
                ],
            },
            section2: {
                title: "Missiomme",
                paragraph1:
                    "Cleavan tehtävä on tehdä arjesta helpompaa ja ympäristöstä miellyttävämpi. Me uskomme, että puhdas tila lisää mielenrauhaa ja antaa energiaa keskittyä elämän tärkeimpiin asioihin.",
                paragraph2:
                    "Tavoitteemme on yhdistää modernit siivousmenetelmät, vastuullinen toiminta ja henkilökohtainen palvelu yhdeksi kokonaisuudeksi. Meille jokainen asiakas ja jokainen tila on ainutlaatuinen – ja niin tulisi olla myös siivouspalvelun.",
                button: "OTA YHTEYTTÄ",
            },
            section3: {
                leftTitle: "Ihmislähtöinen työ ja vastuullisuus",
                leftText:
                    "Cleavassa uskomme, että onnelliset työntekijät luovat onnellisia koteja. Kohtelemme jokaista tiimin jäsentä kunnioituksella ja tarjoamme reilun palkan sekä turvallisen työympäristön. Rakennamme työyhteisöä, jossa jokainen tuntee olevansa arvostettu ja osa jotakin suurempaa.",
                rightTitle: "Yksilöllinen palvelu, joka ylittää odotukset",
                rightText:
                    "Jokainen asiakaskohtaaminen on meille mahdollisuus tehdä vaikutus. Räätälöimme palvelumme elämäntapasi ja aikataulusi mukaan, olipa kyse kotisiivouksesta, toimistosta tai erityiskohteesta. Cleavan tiimi huolehtii pienimmistäkin yksityiskohdista, jotta sinä voit keskittyä siihen, mikä on oikeasti tärkeää.",
            },
        },
        blogsPage: {
            title: "Blogi",
            readMore: "LUE LISÄÄ",
            blog1Title:
                "Kuinka ylläpidät raikkaan kodin talvella – 7 tehokasta vinkkiä",
            blog1Date: "20 tammikuun, 2025",
            blog1Excerpt:
                "Talvi tuo mukanaan kosteuden, hiekan ja sisäilman haasteet. Tässä artikkelissa jaamme seitsemän käytännön vinkkiä, joiden avulla pidät kotisi raikkaana ja siistinä koko kylmän kauden ajan. Opi, miten oikea ilmanvaihto, tekstiilien huolto ja siivousrutiinit tekevät arjesta helpomman – ja kodista viihtyisämmän.",
            blog2Title: "Ammattilaisen salaisuudet: 5 tapaa tehostaa kotisiivousta",
            blog2Date: "10 huhtikuun, 2025",
            blog2Excerpt:
                "Siivous ei ole vain pintapuolista pyyhkimistä – se on suunnitelmallisuutta ja oikeiden menetelmien käyttöä. Tässä kirjoituksessa Manoelan siivousammattilaiset paljastavat viisi helppoa tapaa, joilla voit nopeuttaa siivousta ja saavuttaa täydellisen lopputuloksen ilman ylimääräistä vaivaa.",
            blog3Title:
                "Pieni koti, suuri vaikutus – näin pidät tilan järjestyksessä",
            blog3Date: "15 kesäkuun, 2025",
            blog3Excerpt:
                "Kompakti koti voi olla sekä toimiva että viihtyisä, kun jokaisella tavaralla on oma paikkansa. Tässä artikkelissa saat vinkkejä tehokkaaseen säilytykseen, minimalistiseen ajatteluun ja arjen helpottamiseen. Puhdas ja järjestyksessä oleva koti lisää rauhaa ja tilan tuntua joka päivä.",
            blog4Title: "Valmistaudu juhliin ilman stressiä – kodin pikasiivousopas",
            blog4Date: "12 joulukuun, 2024",
            blog4Excerpt:
                "Vieraat tulossa, mutta koti ei vielä valmis? Ei hätää! Olemme koonneet helpon pikasiivousoppaan, jonka avulla raikastat kotisi 30 minuutissa. Lue parhaat niksit valaistukseen, tuoksuihin ja pintoihin – näin saat kodistasi juhlavalmis ilman kiirettä tai kaaosta.",
        },
        navbar: {
            home: "Etusivu",
            story: "Tarinamme",
            blog: "Blogi",
            contact: "OTA YHTEYTTÄ",
        },
        homeCleaning: {
            heroTitle: "Kotisiivous Helsinki & Espoo",
            desc: "Cleava tarjoaa modernin, joustavan ja huolellisen kotisiivouspalvelun, joka tekee arjestasi helpompaa. Tiimimme varmistaa, että kotisi on aina siisti, raikas ja viihtyisä – juuri sellainen kuin sen kuuluu olla. Käytämme turvallisia ja tehokkaita siivousmenetelmiä, jotka kunnioittavat sekä kotiasi että ympäristöä.",
            homeCleaningSectionTitle: "Miksi valita Cleavan kotisiivous?",
            homeCleaningSectionDesc:
                "Tilaa kotisiivous, joka mukautuu elämääsi. Me huolehdimme yksityiskohdista – sinä saat nauttia siististä ja rennosta kodista ilman stressiä.",
            homeCleaningSections: [
                {
                    title: "Räätälöidyt ratkaisut jokaiseen kotiin",
                    desc: "Me suunnittelemme siivouspalvelun juuri sinun tarpeidesi mukaan. Säännöllinen ylläpitosiivous tai kertaluonteinen perusteellinen puhdistus – sinä päätät, me toteutamme.",
                },
                {
                    title: "Luotettavat ja osaavat siivoojat",
                    desc: "Cleavan siivoojat ovat koulutettuja ammattilaisia, joihin voit luottaa. He työskentelevät huolellisesti, kunnioittavat kotiasi ja pitävät huolta yksityisyydestäsi.",
                },
                {
                    title: "Vapauta aikasi tärkeille asioille",
                    desc: "Kun annat siivouksen meidän vastuullemme, voit käyttää aikasi siihen, mikä tekee sinut onnelliseksi – perheeseen, ystäviin ja omaan hyvinvointiisi.",
                },
                {
                    title: "Ekologinen ja turvallinen puhtaus",
                    desc: "Käytämme ympäristöystävällisiä, hajusteettomia ja turvallisia puhdistusaineita, jotka sopivat niin lapsiperheille kuin lemmikkikoteihinkin.",
                },
            ],
            pricingSectionTitle: "Koti, joka loistaa puhtaudesta",
            pricingSectionDesc:
                "Anna meidän huolehtia kotisi puhtaudesta – säännöllisesti, luotettavasti ja huolellisesti. Nauti arjesta, jossa siisti koti on aina valmiina vastaanottamaan sinut.",
            pricingSectionSubTitle:
                "Valitse palvelu, joka sopii parhaiten elämäntyyliisi ja aikatauluusi.",
            pricePlans: [
                {
                    title: "Viikoittainen siivous – jatkuvaa raikkautta",
                    desc: "Pidä kotisi aina siistinä säännöllisellä viikoittaisella siivouksella. Täydellinen kiireiseen arkeen.",
                    name: "Weekly",
                    price: 39,
                    bottomText: "25,35€/h kotitalousvähennyksen jälkeen.",
                },
                {
                    title: "Joka toinen viikko – sopivasti huolettomuutta",
                    name: "Bi-weekly",
                    desc: "Tasapaino helppouden ja ylläpidon välillä. Koti pysyy puhtaana, ilman että sinun tarvitsee huolehtia liikaa.",
                    price: 45,
                    bottomText: "29,25€/h kotitalousvähennyksen jälkeen.",
                },
                {
                    title: "Kerran kuussa – täydellinen uudistus",
                    name: "Monthly",
                    desc: "Perusteellinen kuukausittainen siivous, joka antaa kodillesi raikkaan alun ja helpottaa arkea.",
                    price: 49,
                    bottomText: "31,85€/h kotitalousvähennyksen jälkeen.",
                },
            ],
            whyChooseSection: {
                title: "Siivouspalvelu, joka tekee arjestasi helpomman",
                desc1:
                    "Cleavan kotisiivous on suunniteltu sinua varten. Me kuuntelemme tarpeesi ja sovitamme palvelun elämäntilanteesi mukaan. Olipa kyse kiireisestä arjesta tai rauhallisesta viikonlopusta, siivoojamme varmistavat, että kotisi pysyy viihtyisänä ja huoliteltuna – ilman, että sinun tarvitsee tehdä mitään.",
                desc2: "",
                leftTitle: "Luotettavuus ja laatu – meidän lupauksemme",
                rightTitle: "Nauti ajasta, me huolehdimme siisteydestä",
                leftDesc:
                    "Jokainen Cleavan työntekijä on koulutettu ja vastuullinen ammattilainen. Panostamme luotettavuuteen ja yksityiskohtien tarkkuuteen, jotta kotisi on aina parhaassa kunnossa. Meille tärkeintä on, että tunnet olosi turvalliseksi ja tyytyväiseksi palveluumme.",
                rightDesc:
                    "Anna meidän hoitaa siivous, jotta sinä voit keskittyä siihen, mikä on tärkeintä. Ystävät, perhe ja oma aika – kaikki maistuvat paremmalta, kun koti on puhdas ja raikas. Me huolehdimme jokaisesta yksityiskohdasta ympäristöystävällisesti ja hellävaraisesti.",
            },
        },
        movingCleaning: {
            movingCleaningHero: '"Luotettava muuttosiivous– huoleton alku uuteen kotiin"',
            movingCleaningDesc: 'Manoelan muuttosiivouspalvelu tarjoaa stressittömän alun elämänmuutokseesi. Muuttosiivous vaatii erityistä huolellisuutta ja perusteellisuutta, sillä se ei ole vain kotiin jäävän asukkaan etu, vaan myös uuden asukkaan toivoma puhdas tila. Kokeneet siivoojamme varmistavat, että kaikki pinnat, nurkat ja yksityiskohdat puhdistetaan tarkasti ja ammattimaisesti, jättäen tilan raikkaaksi ja edustuskelpoiseksi.',
            serviceTransitionSection: {
                title: "Kattava muuttosiivous sujuvaan siirtymään",
                desc: `Tarjoamme ammattitaitoista ja huolellista muuttosiivouspalvelua,
          joka auttaa jättämään vanhan kodin siistiksi ja valmiiksi uusille
          asukkaille. Muuttosiivouksemme kattaa kaikki tärkeät osa-alueet:
          puhdistamme keittiön kodinkoneet, kaapit ja pinnat, siistimme
          kylpyhuoneet, imuroimme ja pesemme lattiat, pyyhimme pölyt ja
          huolehdimme tarvittaessa ikkunoiden kirkkaudesta. Tiedämme, kuinka
          perusteellinen, lattiasta kattoon ulottuva siivous varmistaa, että
          koti on edustuskunnossa ja täyttää vuokranantajan tai ostajan
          odotukset. Kokeneen henkilökuntamme avulla ja ympäristöystävällisiä
          tuotteita käyttäen Cleava tekee muuttosiivouksesta vaivatonta ja
          tehokasta. Anna meidän huolehtia siivouksesta, jotta voit keskittyä
          uuden kodin järjestämiseen rauhallisin mielin.`,
                contactus: "OTA YHTEYTTÄ",
            },
            values: [
                {
                    title: "Visiomme",
                    description:
                        "Tavoitteenamme on luoda puhtaita, viihtyisiä tiloja, jotka vastaavat asiakkaidemme tarpeita ja mieltymyksiä, parantavat heidän hyvinvointiaan ja vaikuttavat myönteisesti heidän elämäänsä.",
                },
                {
                    title: "Tehtävämme",
                    description:
                        "Tehtävämme on tarjota korkealaatuisia siivouspalveluja selkeällä ja huomaavaisella viestinnällä. Asetamme etusijalle tarpeidesi ymmärtämisen ja avoimuuden ylläpitämisen koko kumppanuutemme ajan. Oikeudenmukaisuuden ja rehellisyyden avulla varmistamme luotettavan ja kunnioittavan kokemuksen sekä asiakkaillemme että tiimillemme.",
                },
                {
                    title: "Prosessimme",
                    description:
                        "Aloitamme ymmärtämällä siivoustarpeesi ja luomme räätälöidyn suunnitelman, jolla varmistetaan perusteellinen siivous. Taamme tyytyväisyytesi ja varmistamme, että tilasi on tahraton ja puhdas.",
                },
            ],
            pricePlans: [
                {
                    title: "Sisään- /poismuuttopalvelut",
                    desc: "Paranna asuinympäristöäsi ja nauti jatkuvasti raikkaasta tilasta joka viikko.",
                    name: "Weekly",
                    price: 52,
                    bottomText: "20,8€/h kotitalousvähennyksen jälkeen.",
                },
            ],
            movingCleaningData: [
                {
                    title: "Räätälöidyt palvelut",
                    desc: "Ymmärrämme, että jokainen koti on erilainen. Siksi mukautamme palvelumme juuri sinun tarpeisiisi – olipa kyseessä viikoittainen siivous tai perusteellinen kausisiivous.",
                },
                {
                    title: "Ammattitaitoinen henkilökunta",
                    desc: "Cleavan siivoojat ovat koulutettuja, luotettavia ja tarkkoja työssään. Voit luottaa siihen, että kotisi on turvallisissa käsissä.",
                },
                {
                    title: "Aikaa sinulle",
                    desc: "Anna meidän huolehtia siivouksesta, jotta sinulle jää enemmän aikaa keskittyä arjen tärkeisiin asioihin ja viettää aikaa läheistesi kanssa.",
                },
                {
                    title: "Ekologiset ja turvalliset menetelmät",
                    desc: "Käytämme ympäristöystävällisiä puhdistusaineita ja -välineitä, jotka ovat turvallisia niin perheellesi kuin lemmikeillekin.",
                },
            ],
            pricingSectionTitle: 'Muuttohulinasta aina tupareihin asti',
            pricingSectionDesc: 'Kun muutat, Cleava huolehtii siitä, että tilasi on tahraton ja viihtyisä. Asiantunteva kosketuksemme takaa tuoreen alun tai hellät jäähyväiset ja jättää kotisi moitteettoman puhtaaksi seuraavaa seikkailua varten.'
        },
        officeCleaning: {
            heroTitle: "Toimistosiivous Helsinki & Espoo",
            heroDesc:
                "Manoela tarjoaa korkeatasoista toimistosiivouspalvelua, joka takaa puhtaan, raikkaan ja viihtyisän työympäristön jokaiselle päivälle. Ammattitaitoiset siivoojamme huolehtivat kaikista yksityiskohdista – työpisteistä neuvottelutiloihin ja taukohuoneisiin. Käytämme turvallisia ja ympäristöystävällisiä puhdistusaineita, jotka ylläpitävät terveellistä ja miellyttävää ilmapiiriä. Palvelumme mukautuu yrityksesi aikatauluihin ja tarpeisiin, jotta siivous sujuu huomaamattomasti ja tehokkaasti. Puhdas toimisto tukee työntekijöiden hyvinvointia ja antaa ammattimaisen vaikutelman asiakkaille.",
            officeCleaningServices: [
                {
                    title: "Työpisteiden ja yhteistilojen siivous",
                    desc: "Pöytien, hyllyjen ja pintojen puhdistus, jotta toimisto pysyy siistinä ja viihtyisänä kaikille työntekijöille.",
                },
                {
                    title: "Lattioiden ja mattojen puhdistus",
                    desc: "Päivittäinen imurointi ja säännöllinen lattioiden pesu pitävät työtilat raikkaina ja pölyttöminä.",
                },
                {
                    title: "Saniteettitilojen ylläpito",
                    desc: "WC- ja pesutilojen desinfiointi, kalusteiden puhdistus ja tarvikkeiden täydennys takaavat hygienisen ympäristön.",
                },
                {
                    title: "Ikkunoiden ja lasipintojen kirkastus",
                    desc: "Lasipintojen ja ikkunoiden säännöllinen pesu takaa kirkkaan ja valoisan työympäristön.",
                },
                {
                    title: "Keittiö- ja taukotilojen siisteys",
                    desc: "Työpaikan keittiön ja taukotilan pintojen, laitteiden ja astioiden puhdistus hygienian ylläpitämiseksi.",
                },
                {
                    title: "Roska- ja kierrätysjärjestelyt",
                    desc: "Roska-astioiden tyhjennys ja kierrätyksen ylläpito varmistavat siistin ja vastuullisen työpaikan.",
                },
            ],
            pricingTitle: "Valmiina nostamaan työympäristösi uudelle tasolle? Pyydä tarjous toimistosiivouksesta jo tänään!",
            pricingSubtitle: "Puhdas ja raikas toimisto lisää keskittymistä, motivaatiota ja viihtyvyyttä. Säännöllinen siivous ehkäisee sairastumisia ja edistää työntekijöiden hyvinvointia – sijoitus, joka maksaa itsensä takaisin joka päivä.",
            pricingSubtitle1: "Anna Manoelan luoda työpaikallesi tilaa, jossa on helpompi hengittää ja menestyä!",
            pricePlans: [
                {
                    title: "Joustavat viikoittaiset siivouspaketit",
                    desc: "Ymmärrämme, että jokainen toimisto on ainutlaatuinen, ja niin ovat myös siivoustarpeet. Esittelemme joustavan hinnoittelurakenteemme, joka on suunniteltu kaiken kokoisille toimistoille ja mukautettu viikoittaisten siivoustuntien tarpeen mukaan.",
                    name: "Weekly",
                    price: "Alkaen 29",
                    bottomText: "ALV 0%",
                },
            ],
            values: [
                {
                    title: "Perussiivous: 2–10 h/viikko",
                    description:
                        "Kevyt siivouspaketti, joka sopii pienille toimistoille tai tiloihin, joissa siivoustarve on vähäinen. Pitää työtilan raikkaana ja järjestyksessä ilman ylimääräistä vaivaa.",
                },
                {
                    title: "Jatkuva ylläpito: 11–20 h/viikko",
                    description:
                        "Säännöllinen siivousratkaisu keskikokoisille toimistoille. Varmistaa puhtaan ja miellyttävän työympäristön työntekijöillesi joka viikko.",
                },
                {
                    title: "Premium-hoito: 21+ h/viikko",
                    description:
                        "Laajin siivouspakettimme, joka on suunniteltu suurille toimistoille ja vaativiin ympäristöihin. Takaa huippuluokan siisteyden ja edustavan ilmeen jokaisena päivänä.",
                },
            ],
            faqTitle: "Kysyt, me vastaamme",
            faqDescription:
                "Tavoitteenamme on, että tunnet olosi varmaksi valitessasi meidät puhtaamman ja terveellisemmän ympäristön puolesta.",
            contactus: "OTA YHTEYTTÄ",
            faqs: [
                {
                    question: "Miten varmistatte siivouksen tasaisen laadun?",
                    answer:
                        "Pidämme korkeat laatustandardit käyttämällä yksityiskohtaisia siivouslistoja, säännöllisiä tarkastuksia ja jatkuvaa henkilöstön koulutusta varmistaaksemme, että jokainen käynti täyttää odotuksesi.",
                },
                {
                    question: "Tarjoatteko ympäristöystävällisiä siivousvaihtoehtoja?",
                    answer:
                        "Kyllä! Käytämme ympäristölle turvallisia tuotteita, jotka ovat hellävaraisia sekä ihmisille että luonnolle, ja takaavat puhtaan ja terveellisen tilan.",
                },
                {
                    question: "Voimmeko aikatauluttaa siivouksen työajan ulkopuolelle?",
                    answer:
                        "Ehdottomasti. Tarjoamme joustavia siivousaikoja, kuten aikaisia aamuja, iltoja ja viikonloppuja, jotta työskentelysi sujuisi häiriöttä.",
                },
                {
                    question: "Onko henkilökuntanne koulutettu ja vakuutettu?",
                    answer:
                        "Kaikki siivoojamme ovat ammattitaitoisia, taustatarkistettuja ja vakuutettuja, jotta voit olla varma luotettavasta palvelusta joka kerta.",
                },
            ],
        },
        menuTitle: "Palvelut",
        homeCleaning: "Kotisiivous",
        movingCleaning: "Muuttosiivous",
        officeCleaning: "Toimistosiivous",
    },
    en: {
        homePage: {
            heroSection: {
                title: "Finally clean – done by happy professionals",
                subTitle: "Reliable cleaning services in Helsinki, Espoo, and Vantaa",
                subTitle1:
                    "Looking for regular home cleaning, office cleaning, or help with a move-out cleaning? We’ll take care of everything for you – thoroughly and carefully.",
                subTitle2:
                    "Cleava offers friendly, responsible, and professional cleaning services across the Helsinki metropolitan area. Let us keep your home and workspace fresh and inviting every day.",
            },
            contactus: "Contact Us",
            aboutus: "About Us",
            aboutDescription:
                "Cleava Cleaning Services was founded from a love for cleanliness and human-centered service. We believe a clean space increases happiness and wellbeing. Our professional cleaners work with a smile and genuine care in everything they do.",
            readMore: "Read More",
            ourServices: "Our Cleaning Services in Helsinki, Espoo, and Vantaa",
            service1Title: "Home Cleaning",
            service1Desc:
                "Make your daily life easier with regular or one-time cleaning. We tailor our services to your needs – for a fresh and cozy home.",
            service2Title: "Move-Out Cleaning",
            service2Desc:
                "Let us take the stress out of your moving day. We’ll clean your old or new home thoroughly, so you can focus on what matters most – a fresh start.",
            service3Title: "Office Cleaning",
            service3Desc:
                "A clean workspace improves comfort and productivity. We provide flexible and reliable office cleaning for businesses of all sizes.",
            values: [
                {
                    title: "Our Vision",
                    description:
                        "Our goal is to be a leading cleaning company that creates clean, healthy, and welcoming environments. We strive to enhance daily life by bringing freshness and harmony to every space we touch.",
                },
                {
                    title: "Our Mission",
                    description:
                        "Our mission is to deliver reliable, high-quality cleaning services that exceed expectations. We communicate openly, listen carefully to our clients, and build long-term, trustworthy relationships.",
                },
                {
                    title: "Our Process",
                    description:
                        "We start by understanding your needs, then design a customized cleaning plan. Every task is performed with care and precision, ensuring spotless results that truly impress.",
                },
            ],
            testimonials: {
                topText: "Real experiences and honest feedback",
                title: "What Our Clients Say",
                quote:
                    "“The Cleava team went above and beyond! Professional, friendly, and detailed service – the results were simply outstanding.”",
                button: "CONTACT US",
                summaryTitle: "EXCELLENT",
                basedOn: "Based on",
                reviewsCount: "85 reviews",
                readMore: "Read more",
                reviews: [
                    {
                        name: "Kaisa Mikkonen",
                        date: "2025-05-10",
                        review:
                            "Cleava’s service was top-notch – punctual, professional, and the quality of cleaning was amazing. Highly recommended!",
                        rating: 5,
                    },
                    {
                        name: "Johanna Lehtinen",
                        date: "2025-04-28",
                        review:
                            "The booking process was smooth and fast. The team did a wonderful job and left our office fresh and spotless!",
                        rating: 5,
                    },
                    {
                        name: "Markku Rantanen",
                        date: "2025-04-15",
                        review:
                            "Truly professional service! Cleava kept every promise and completed everything right on time – excellent experience.",
                        rating: 5,
                    },
                    {
                        name: "Nina Salonen",
                        date: "2025-04-02",
                        review:
                            "The quality of cleaning was exceptional. Communication was smooth, and everything went exactly as planned. Five stars!",
                        rating: 5,
                    },
                ],
            },
            ctaSection: {
                title: "Reliable and High-Quality Cleaning Services for You",
                description:
                    "We’re here to make your everyday life easier by creating a cleaner and more enjoyable environment. Contact us by phone, email, or fill out the form – our team will respond quickly and kindly.",
                button: "CONTACT US",
            },
            footer: {
                contactTitle: "Contact Information",
                phone: "Phone: 0451878083",
                email: "Email:Cleava.helsinki@gmail.com",
                address: "Aallonhalkoja 9 B, 00540 Helsinki",
                companyTitle: "Cleava ",
                businessId: "Business ID: 2746515-8",
                workingHoursTitle: "Opening Hours",
                weekdays: "Monday – Friday: 09:00 – 17:00",
                weekends: "Saturday – Sunday: Closed",
                servicesTitle: "Services",
                homeCleaning: "Home Cleaning",
                officeCleaning: "Office Cleaning",
                moveCleaning: "Move-Out Cleaning",
            },
        },
        storyPage: {
            hero: {
                title:
                    "Welcome to Cleava – where cleanliness, wellbeing, and trust come together.",
                button: "CONTACT US",
            },
            section1: {
                title: "Our Story – How It All Began",
                paragraphs: [
                    "Cleava was born from a simple idea: every home and workspace deserves to be cared for with the same dedication and respect that people deserve themselves. Our goal was to create a cleaning service that is both human-centered and uncompromising in quality.",
                    "From the very beginning, we’ve aimed to build a company where professionalism meets genuine care. Cleava is more than a cleaning business – it’s a community built on cleanliness, reliability, and better everyday living.",
                    "Over the years, we’ve grown from a small local team into a trusted cleaning partner for hundreds of homes and businesses. Our clients stay with us not just for the service – but because of the trust we build together.",
                ],
            },
            section2: {
                title: "Our Mission",
                paragraph1:
                    "At Cleava, our mission is to make everyday life easier and your surroundings more comfortable. We believe a clean space promotes peace of mind and gives energy to focus on what truly matters.",
                paragraph2:
                    "Our goal is to combine modern cleaning techniques, responsible practices, and personalized service into one seamless experience. Every client and every space is unique – and so should be the service you receive.",
                button: "CONTACT US",
            },
            section3: {
                leftTitle: "Human-Centered Work and Responsibility",
                leftText:
                    "At Cleava, we believe that happy employees create happy homes. We treat every member of our team with respect, provide fair pay, and ensure a safe work environment. We’re building a workplace where everyone feels valued and part of something meaningful.",
                rightTitle: "Personalized Service That Exceeds Expectations",
                rightText:
                    "Every customer interaction is an opportunity to make a difference. We tailor our services to your lifestyle and schedule, whether it’s home cleaning, office maintenance, or specialized care. The Cleava team takes care of every detail so you can focus on what truly matters.",
            },
        },
        blogsPage: {
            title: "Blog",
            readMore: "READ MORE",
            blog1Title: "How to Keep Your Home Fresh in Winter – 7 Practical Tips",
            blog1Date: "January 20, 2025",
            blog1Excerpt:
                "Winter brings challenges like humidity, sand, and poor indoor air quality. In this article, we share seven practical tips to keep your home fresh and clean throughout the cold season. Learn how proper ventilation, textile care, and smart cleaning routines make your life easier and your home cozier.",
            blog2Title: "Professional Secrets: 5 Ways to Boost Your Home Cleaning",
            blog2Date: "April 10, 2025",
            blog2Excerpt:
                "Cleaning isn’t just about wiping surfaces – it’s about planning and using the right techniques. In this article, Manoela’s cleaning professionals reveal five easy ways to speed up your cleaning and achieve a spotless finish without extra effort.",
            blog3Title: "Small Home, Big Impact – How to Stay Organized Every Day",
            blog3Date: "June 15, 2025",
            blog3Excerpt:
                "A compact home can be both functional and cozy when everything has its place. This article shares tips for smart storage, minimalist living, and keeping things tidy. A clean, organized space brings peace and spaciousness to your daily life.",
            blog4Title:
                "Get Party-Ready Without the Stress – The Quick Cleaning Guide",
            blog4Date: "December 12, 2024",
            blog4Excerpt:
                "Guests are coming but the house isn’t ready? Don’t worry! We’ve prepared a simple quick-cleaning guide that refreshes your home in 30 minutes. Discover easy tricks for lighting, scents, and surfaces – and make your home festive without rushing or chaos.",
        },
        navbar: {
            home: "Home",
            story: "Our Story",
            blog: "Blog",
            contact: "CONTACT US",
        },
        homeCleaning: {
            heroTitle: "Home Cleaning Helsinki & Espoo",
            desc: "Cleava offers a modern, flexible, and thorough home cleaning service that makes everyday life easier. Our team ensures your home stays clean, fresh, and cozy – just the way it should be. We use safe and efficient cleaning methods that respect both your home and the environment.",
            homeCleaningSectionTitle: "Why Choose Cleava’s Home Cleaning?",
            homeCleaningSectionDesc:
                "Book a cleaning service that adapts to your lifestyle. We take care of the details – you simply enjoy a spotless, stress-free home.",
            homeCleaningSections: [
                {
                    title: "Tailored Solutions for Every Home",
                    desc: "We design our cleaning service around your specific needs. Whether it’s a regular maintenance cleaning or a one-time deep clean, we make it fit your schedule.",
                },
                {
                    title: "Reliable and Skilled Cleaners",
                    desc: "Our cleaners are trained professionals you can trust. They work carefully, respect your home, and protect your privacy.",
                },
                {
                    title: "More Time for What Matters",
                    desc: "By letting us handle the cleaning, you can focus on the things that truly matter – family, friends, and your own well-being.",
                },
                {
                    title: "Eco-Friendly and Safe Cleaning",
                    desc: "We use environmentally friendly, fragrance-free, and safe cleaning products suitable for families with children and pets.",
                },
            ],
            pricingSectionTitle: "A Home That Shines with Cleanliness",
            pricingSectionDesc:
                "Let us take care of your home – regularly, reliably, and carefully. Enjoy a life where your clean home is always ready to welcome you.",
            pricingSectionSubTitle:
                "Choose a plan that fits your lifestyle and schedule.",
            pricePlans: [
                {
                    title: "Weekly Cleaning – Always Fresh",
                    desc: "Keep your home spotless with regular weekly cleaning. Perfect for a busy lifestyle.",
                    name: "Weekly",
                    price: 39,
                    bottomText: "€25.35/h after household tax deduction.",
                },
                {
                    title: "Every Other Week – Effortless Balance",
                    name: "Bi-weekly",
                    desc: "The perfect balance between ease and upkeep. Your home stays clean without the extra hassle.",
                    price: 45,
                    bottomText: "€29.25/h after household tax deduction.",
                },
                {
                    title: "Once a Month – A Fresh Start",
                    name: "Monthly",
                    desc: "A thorough monthly cleaning that refreshes your home and lightens your everyday routine.",
                    price: 49,
                    bottomText: "€31.85/h after household tax deduction.",
                },
            ],
            whyChooseSection: {
                title: "A Cleaning Service That Makes Life Easier",
                desc1:
                    "Cleava home cleaning is designed around you. We listen to your needs and adapt our services to your lifestyle. Whether your days are hectic or peaceful, our cleaners ensure your home stays tidy and comfortable – without you lifting a finger.",
                desc2: "",
                leftTitle: "Trust and Quality – Our Promise",
                rightTitle: "Enjoy Your Time, We’ll Handle the Cleaning",
                leftDesc:
                    "Every Cleava employee is a trained and responsible professional. We focus on reliability and attention to detail so that your home is always in its best condition. Your comfort and trust are at the heart of everything we do.",
                rightDesc:
                    "Let us take care of the cleaning so you can focus on what truly matters. Family, friends, and your own time – everything feels better when your home is clean and fresh. We handle every detail with care and respect for the environment.",
            },
        },
        movingCleaning: {
            movingCleaningHero: "Reliable Move-Out Cleaning – A Carefree Start in Your New Home",
            movingCleaningDesc: "Manoela’s moving cleaning service offers a stress-free start to your new chapter. Move-out cleaning requires special attention and thoroughness — it’s not only for the benefit of the departing resident but also to provide a fresh, clean space for the new one. Our experienced cleaners ensure that every surface, corner, and detail is cleaned meticulously and professionally, leaving the space fresh and ready to welcome its next occupants.",
            serviceTransitionSection: {
                title: "Comprehensive Move-Out Cleaning for a Smooth Transition",
                desc: "We provide professional and thorough move-out cleaning service that help you leave your old home spotless and ready for new residents. Our cleaning covers all key areas: we clean kitchen appliances, cabinets, and surfaces, sanitize bathrooms, vacuum and wash floors, wipe dust, and ensure windows shine when needed. We understand that a deep, floor-to-ceiling clean ensures the home looks its best and meets the expectations of landlords or buyers. With our experienced team and eco-friendly products, Cleava makes move-out cleaning effortless and efficient. Let us take care of the cleaning so you can focus on settling into your new home with peace of mind.",
                contactus: "CONTACT US",
            },
            values: [
                {
                    title: "Our Vision",
                    description:
                        "Our goal is to create clean, comfortable spaces that meet our clients’ needs and preferences, enhance their well-being, and positively impact their daily lives.",
                },
                {
                    title: "Our Mission",
                    description:
                        "Our mission is to provide high-quality cleaning services with clear and considerate communication. We prioritize understanding your needs and maintaining transparency throughout our partnership. Through fairness and honesty, we ensure a reliable and respectful experience for both our clients and our team.",
                },
                {
                    title: "Our Process",
                    description:
                        "We begin by understanding your cleaning needs and creating a tailored plan to ensure a thorough clean. We guarantee your satisfaction and make sure your space is spotless and fresh.",
                },
            ],
            pricePlans: [
                {
                    title: "Move-in / Move-out Cleaning",
                    desc: "Enhance your living environment and enjoy a continuously fresh space every week.",
                    name: "Weekly",
                    price: 52,
                    bottomText: "€20.8/hour after household deduction.",
                },
            ],
            movingCleaningData: [
                {
                    title: "Tailored Services",
                    desc: "We understand that every home is different. That’s why we customize our services to meet your exact needs — whether it’s weekly cleaning or a deep seasonal refresh.",
                },
                {
                    title: "Professional Staff",
                    desc: "Cleava’s cleaners are trained, reliable, and meticulous in their work. You can trust that your home is in safe and capable hands.",
                },
                {
                    title: "Time for You",
                    desc: "Let us take care of the cleaning so you can focus on what truly matters and spend more time with your loved ones.",
                },
                {
                    title: "Eco-friendly and Safe Methods",
                    desc: "We use environmentally friendly cleaning products and tools that are safe for both your family and your pets.",
                },
            ],
            pricingSectionTitle: "From Moving Chaos to Housewarming Bliss",
            pricingSectionDesc: "When you move, Cleava ensures your space is spotless and inviting. Our expert touch guarantees a fresh start or a graceful farewell, leaving your home impeccably clean for the next chapter.",
        },
        officeCleaning: {
            heroTitle: "Office Cleaning Helsinki & Espoo",
            heroDesc:
                "Manoela provides premium office cleaning services that ensure a clean, fresh, and pleasant workspace every day. Our skilled cleaners take care of every detail – from workstations and meeting rooms to break areas. We use safe, eco-friendly cleaning products that promote a healthy and productive atmosphere. Our flexible cleaning schedules adapt to your company’s needs, ensuring minimal disruption to your workday. A clean office enhances employee well-being and leaves a professional impression on clients.",
            officeCleaningServices: [
                {
                    title: "Workstation and Common Area Cleaning",
                    desc: "Dusting and wiping of desks, shelves, and surfaces to keep the office tidy and welcoming for everyone.",
                },
                {
                    title: "Floor and Carpet Maintenance",
                    desc: "Daily vacuuming and regular mopping to maintain a dust-free and fresh workspace environment.",
                },
                {
                    title: "Restroom Maintenance",
                    desc: "Disinfection of toilets and washrooms, cleaning of fixtures, and restocking of supplies for optimal hygiene.",
                },
                {
                    title: "Window and Glass Care",
                    desc: "Regular cleaning of interior and exterior glass surfaces for a bright and professional appearance.",
                },
                {
                    title: "Kitchen and Breakroom Cleaning",
                    desc: "Cleaning of kitchen surfaces, appliances, and dishes to maintain a hygienic and pleasant staff area.",
                },
                {
                    title: "Waste and Recycling Management",
                    desc: "Emptying trash bins and maintaining recycling systems to keep the office clean and environmentally responsible.",
                },
            ],
            pricingTitle: "Ready to elevate your workplace? Request a quote for office cleaning today!",
            pricingSubtitle: "A clean and fresh office boosts focus, motivation, and comfort. Regular cleaning reduces illness and promotes employee well-being — an investment that pays off every single day.",
            pricingSubtitle1: "Let Manoela create a workspace where productivity and positivity thrive!",
            pricePlans: [
                {
                    title: "Flexible Weekly Cleaning Packages",
                    desc: "We understand that every office is unique, and so are its cleaning needs. Our flexible pricing structure is designed for offices of all sizes and tailored to the number of weekly cleaning hours you require.",
                    name: "Weekly",
                    price: "From 29",
                    bottomText: "VAT 0%",
                },
            ],
            values: [
                {
                    title: "Basic Cleaning: 2–10 hrs/week",
                    description:
                        "A light cleaning package ideal for small offices or spaces with minimal cleaning needs. Keeps your workspace fresh and tidy with minimal effort.",
                },
                {
                    title: "Regular Maintenance: 11–20 hrs/week",
                    description:
                        "A consistent cleaning plan for medium-sized offices. Ensures a clean, pleasant, and productive environment for your team every week.",
                },
                {
                    title: "Premium Care: 21+ hrs/week",
                    description:
                        "Our most comprehensive package, designed for larger offices and demanding environments. Guarantees top-level cleanliness and a professional appearance every day.",
                },
            ],
            faqTitle: "You ask, we answer",
            faqDescription: "Our goal is to ensure you feel confident in choosing us for a cleaner, healthier environment.",
            contactus: "CONTACT US",
            faqs: [
                {
                    question: "How do you ensure consistent cleaning quality?",
                    answer:
                        "We maintain high standards through detailed checklists, regular inspections, and ongoing staff training to ensure consistent results.",
                },
                {
                    question: "Do you offer eco-friendly cleaning options?",
                    answer:
                        "Yes! We use environmentally friendly cleaning products that are safe for people, pets, and the planet.",
                },
                {
                    question: "Can we schedule cleaning outside of working hours?",
                    answer:
                        "Of course. We offer flexible scheduling options including early mornings, evenings, and weekends to suit your business needs.",
                },
                {
                    question: "Are your staff trained and insured?",
                    answer:
                        "All our cleaners are fully trained, background-checked, and insured to deliver reliable and trustworthy service every time.",
                },
            ],
        },
        menuTitle: "Services",
        homeCleaning: "Home Cleaning",
        movingCleaning: "Moving Cleaning",
        officeCleaning: "Office Cleaning",
    },
};
export const useTranslation = () => {
    const reduxLanguage = useSelector((s) => s?.language ?? "fi");
    const t = (path) => {
        const keys = path.split(".");
        let value = allLanguages?.[reduxLanguage];
        for (const key of keys) {
            value = value?.[key];
            if (!value) return path;
        }
        return value;
    };
    return { t };
};
