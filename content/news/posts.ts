/**
 * AZONERA MMO — news / devlogi.
 *
 * ABY DODAĆ NOWY NEWS: skopiuj dowolny obiekt z listy POSTS,
 * zmień slug / tytuł / datę / kategorię / okładkę i treść,
 * a następnie dodaj ten plik do importów w content/news/index.ts.
 *
 * Zasady treści:
 * - nie podawaj danych, których nie ma (dat premiery, liczb graczy itd.),
 * - statusy: PLANNED / IN DEVELOPMENT / TESTING / COMING SOON.
 */

export type NewsCategory =
  | "DEVLOG"
  | "COMBAT"
  | "WORLD"
  | "MONSTERS"
  | "EFFECTS"
  | "SOUNDS"
  | "ANDROID"
  | "PC"
  | "UI"
  | "SYSTEM"
  | "TESTS"
  | "PATCH NOTES"
  | "ANNOUNCEMENT";

export type NewsBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface NewsPost {
  slug: string;
  title: string;
  /** ISO: YYYY-MM-DD */
  date: string;
  category: NewsCategory;
  /** ścieżka okładki od /public, np. "images/media/arena.jpg" */
  cover: string;
  description: string;
  content: NewsBlock[];
  tags: string[];
  /** opcjonalne wideo — lokalne (public/videos/...) lub zewnętrzne */
  video?: { provider: "youtube" | "local"; url: string };
}

export const POSTS: NewsPost[] = [
  {
    slug: "wersja-0-3-7-wspolna-walka",
    title: "Wersja 0.3.7: wspólna walka w grze sieciowej",
    date: "2026-10-06",
    category: "PATCH NOTES",
    cover: "images/media/mp-walka.jpg",
    description:
      "W grze sieciowej potwory, obrażenia, doświadczenie, łup i nagrody liczy teraz serwer. Dwóch graczy widzi te same potwory, a łup należy do tego, kto go zdobył.",
    content: [
      {
        type: "p",
        text: "Do tej pory w grze sieciowej każdy gracz miał swoje potwory. Od wersji 0.3.7 świat potworów jest jeden i prowadzi go serwer (gracz, który założył grę). Gdy atakujesz wilka, gra wysyła prośbę, a serwer sprawdza zasięg, broń i czas ciosu, liczy obrażenia i rozsyła wynik wszystkim graczom w pobliżu.",
      },
      { type: "h2", text: "Co nowego" },
      {
        type: "list",
        items: [
          "Wspólne potwory: wszyscy widzą tego samego wilka, jego życie, ataki i śmierć",
          "Doświadczenie liczy serwer — przy wspólnej walce dzieli się według zadanych obrażeń",
          "Łup ma właściciela: przez 2 minuty może go podnieść tylko gracz, który zabił potwora, potem każdy",
          "Ten sam przedmiot nie trafi do dwóch plecaków, nawet gdy dwie osoby klikną w tej samej chwili",
          "Zadanie „Ślad we mgle” działa w grze sieciowej: każdy ma własny postęp, a nagroda przychodzi tylko raz",
          "Po zerwaniu połączenia wracasz z tym samym poziomem, doświadczeniem, zadaniami i łupem",
          "Serwer odrzuca nierealne skoki pozycji i zgłoszenia, których gracz nie mógł zrobić",
        ],
      },
      {
        type: "image",
        src: "images/media/mp-dwoch-graczy.jpg",
        alt: "Dwóch graczy, Aldric i Berta, na Trakcie Zachodnim",
        caption: "Dwóch graczy przy watasze mglistych wilków — zrzut z automatycznego testu gry sieciowej (widok serwera, wersja deweloperska).",
      },
      { type: "h2", text: "Jak to sprawdziliśmy" },
      {
        type: "p",
        text: "Automatyczny test uruchamia serwer i dwóch graczy. Gracz A bierze zadanie, walczy z wilkami i zbiera łup, a gracz B próbuje go podnieść, podszyć się pod zabicie albo dostać cudzą nagrodę. Test sprawdza też wyścig dwóch graczy o ten sam przedmiot, rozłączenie w trakcie walki i powrót do gry. Płynność gry się nie pogorszyła: na testowym komputerze (GTX 960, 1080p) trakt ma ok. 82 klatki na sekundę.",
      },
      {
        type: "note",
        text: "Masz już grę? Wersja 0.3.7 pobierze się sama przy następnym uruchomieniu, na PC i na Androidzie. Wszystkie linki są na naszym Discordzie.",
      },
    ],
    tags: ["gra sieciowa", "walka", "łup", "serwer", "0.3.7"],
  },
  {
    slug: "wersja-0-3-6-pierwsza-petla",
    title: "Wersja 0.3.6: pierwsza pełna pętla gry i płynność",
    date: "2026-10-06",
    category: "PATCH NOTES",
    cover: "images/media/slice-cel.jpg",
    description:
      "Jedno zadanie od początku do końca — rozmowa, walka, łup, powrót i nagroda — sprawdzone automatycznym testem. Do tego duży skok płynności poza miastem i jaśniejszy świat.",
    content: [
      {
        type: "p",
        text: "Zamiast budować kolejne lokacje, dopracowaliśmy jeden kawałek Azonery tak, żeby działał jak prawdziwa gra. Kapłanka Eliana w świątyni Morvenhalu daje nowe zadanie: „Ślad we mgle”. Za zachodnią bramą, na trakcie do Brzasku, krążą mgliste wilki. Trzeba je pokonać, zdobyć Kieł z mgły i wrócić po nagrodę.",
      },
      { type: "h2", text: "Co nowego" },
      {
        type: "list",
        items: [
          "Zadanie „Ślad we mgle” — wilki pojawiają się dopiero po przyjęciu zadania, a przedmiot z nich trzeba podnieść i oddać",
          "Cel zadania na ekranie: „Pokonaj mgliste wilki 2 / 3”, potem „Cele ukończone — oddaj zadanie”",
          "Podpowiedź pod kursorem: widać od razu, czy klik zaatakuje, porozmawia, czy podniesie przedmiot",
          "NPC odwraca się do ciebie, gdy z nim rozmawiasz",
          "Mniej okien na ekranie: plecak (I) i postać (C) otwierasz, kiedy ich potrzebujesz — świat jest najważniejszy",
          "Jaśniejszy świat i suwak „Jasność” w ustawieniach grafiki (0.3.5)",
        ],
      },
      {
        type: "image",
        src: "images/media/slice-walka.jpg",
        alt: "Walka z mglistymi wilkami na Trakcie Zachodnim",
        caption: "Mgliste wilki na Trakcie Zachodnim — zrzut z automatycznego testu gry (wersja deweloperska).",
      },
      { type: "h2", text: "Płynność" },
      {
        type: "p",
        text: "Zmierzyliśmy, co spowalniało grę poza miastem: potwory szukały drogi do celu, którego nie mogły osiągnąć, i robiły to w każdej klatce, a cały świat — ponad tysiąc potworów — był liczony naraz, nawet daleko od gracza. Teraz potwory poza zasięgiem wzroku odpoczywają, a szukanie drogi jest dużo lżejsze. Na testowym komputerze (GTX 960, 1080p, wysokie ustawienia) walka na trakcie wzrosła z ok. 32 do ok. 75 klatek na sekundę, a przycięcia zniknęły.",
      },
      {
        type: "note",
        text: "Masz już grę? Wersja 0.3.6 pobierze się sama przy następnym uruchomieniu, na PC i na Androidzie. Wszystkie linki są na naszym Discordzie.",
      },
    ],
    tags: ["zadania", "walka", "wydajność", "interfejs", "0.3.6"],
  },
  {
    slug: "wersja-0-3-3-walka",
    title: "Wersja 0.3.3: walka od nowa",
    date: "2026-10-06",
    category: "COMBAT",
    cover: "images/media/walka-ogien.jpg",
    description:
      "Każdy cios ma teraz zamach, uderzenie i powrót, a trafienie widać dokładnie wtedy, gdy broń dosięga celu. Do tego czary z prawdziwymi efektami, reakcje potworów i ostrzeżenia bossów.",
    video: { provider: "local", url: "videos/walka-0.3.3.mp4" },
    content: [
      {
        type: "p",
        text: "Obrażenia w Azonerze liczy serwer gry — natychmiast i uczciwie. Do tej pory ekran pokazywał trafienie w tej samej chwili, czyli zanim broń w ogóle dosięgła celu. W wersji 0.3.3 przebudowaliśmy warstwę prezentacji walki: liczba obrażeń, rozbłysk, reakcja potwora i dźwięk pojawiają się w klatce kontaktu ciosu albo w chwili, gdy pocisk doleci.",
      },
      { type: "h2", text: "Co się zmieniło" },
      {
        type: "list",
        items: [
          "Każda broń ma własny ruch: miecz tnie szybko, buława uderza ciężko, kopia pcha, łuk napina cięciwę, kusza celuje i odrzuca",
          "Mnich bije pięściami, a co trzeci cios to kopnięcie",
          "Czary z animowanymi efektami: kula ognia, piorun z nieba, kolce spod ziemi, burza lodu, święte światło, otchłań",
          "Potwory drgają po trafieniu i padają dopiero po ostatnim ciosie",
          "Bossowie ostrzegają przed ciężkim uderzeniem czerwonym kręgiem pod stopami",
          "Trucizna, ogień, krwawienie, spowolnienie i tarcza many są widoczne na postaci",
          "Subtelny wstrząs kamery tylko przy ciosach krytycznych, ciężkich i bossach — da się go wyłączyć",
        ],
      },
      {
        type: "p",
        text: "Tempo ataków, obrażenia i balans profesji zostały bez zmian — to wyłącznie warstwa wizualna. Efekty pochodzą z darmowych paczek z licencją na użycie komercyjne, bez treści generowanych przez AI.",
      },
      {
        type: "image",
        src: "images/media/walka-miecz.jpg",
        alt: "Rycerz z mieczem płomieni na arenie testowej",
        caption: "Miecz płomieni tnie ogniem — zrzut z areny testowej (wersja deweloperska).",
      },
      {
        type: "note",
        text: "Masz już grę? Wersja 0.3.3 pobierze się sama przy następnym uruchomieniu, na PC i na Androidzie.",
      },
    ],
    tags: ["walka", "efekty", "czary", "potwory", "0.3.3"],
  },
  {
    slug: "czytelnosc-jednostek",
    title: "Postacie i potwory widoczne w ciemnym świecie",
    date: "2026-10-04",
    category: "UI",
    cover: "images/media/czytelnosc.jpg",
    description:
      "Azonera jest mroczna — i taka ma zostać. Zamiast rozjaśniać świat, dodaliśmy subtelny obrys, poświatę krawędzi i tabliczki nad jednostkami.",
    content: [
      {
        type: "p",
        text: "Testy nocą pokazały problem: potwory zlewały się z tłem. Nie chcieliśmy rozjaśniać świata ani dawać grubych neonowych obrysów, więc powstał osobny system czytelności jednostek.",
      },
      {
        type: "list",
        items: [
          "Obrys dopasowany do tła i lekka poświata krawędzi — inna dla NPC, potworów, elit, bossów i graczy",
          "Tabliczki z nazwą, paskiem zdrowia i znacznikiem zadania",
          "Pierścień pod wybranym celem i podgląd celu zasłoniętego przez przeszkodę",
          "Ustawienia zależne od profilu grafiki (LOW–ULTRA)",
        ],
      },
      {
        type: "image",
        src: "images/media/czytelnosc.jpg",
        alt: "Porównanie przed i po wprowadzeniu systemu czytelności",
        caption: "Ta sama scena nocą: przed i po.",
      },
    ],
    tags: ["grafika", "interfejs", "czytelność"],
  },
  {
    slug: "prolog-przez-mgle",
    title: "Prolog: Przez mgłę",
    date: "2026-10-04",
    category: "WORLD",
    cover: "images/media/prolog-boss.jpg",
    description:
      "Nowa postać zaczyna przygodę w łodzi wypływającej z mgły do Starej Przystani pod Morvenhalem. Samouczek, pierwsze walki i pierwszy boss.",
    content: [
      {
        type: "p",
        text: "Każda nowa postać zaczyna teraz od prologu. Przewoźnik dowozi cię przez mgłę do Starej Przystani, gdzie z zatoki wychodzą Topielcy. Prolog uczy ruchu, ataku, czarów, mikstur i podnoszenia łupu — zależnie od tego, czy grasz myszą, padem czy dotykiem.",
      },
      {
        type: "list",
        items: [
          "Przerywnik z rozmową — można go pominąć",
          "Dwie fale Topielców przybrzeżnych",
          "Boss: Zatopiony Latarnik, z posiłkami w połowie walki",
          "Po walce: brama portowa, Kapitan Rurik i Kapłanka Eliana w świątyni Morvenhalu",
        ],
      },
    ],
    tags: ["świat", "fabuła", "prolog", "boss"],
  },
  {
    slug: "autoaktualizacja",
    title: "Gra aktualizuje się sama — PC i Android",
    date: "2026-10-04",
    category: "SYSTEM",
    cover: "images/media/swiatynia.jpg",
    description:
      "Po uruchomieniu Azonera sprawdza, czy jest nowa wersja, i sama ją pobiera. Wystarczy raz zainstalować grę.",
    content: [
      {
        type: "p",
        text: "Nowe wersje publikujemy jako wydania na GitHubie. Gra przy starcie porównuje swój numer z najnowszym wydaniem, pokazuje listę zmian i pobiera paczkę. Przed instalacją sprawdza rozmiar i sumę kontrolną, więc uszkodzony plik nie zostanie zainstalowany.",
      },
      {
        type: "list",
        items: [
          "Windows: gra sama podmienia pliki i uruchamia się ponownie — zapisy i ustawienia zostają",
          "Android: gra pobiera APK i otwiera systemowy instalator (Android zawsze pyta o zgodę)",
          "Przycisk Później odkłada aktualizację do następnego uruchomienia",
          "Bez internetu gra startuje normalnie",
        ],
      },
    ],
    tags: ["aktualizacje", "pc", "android"],
  },
  {
    slug: "jeden-swiat-8-regionow",
    title: "Jeden świat: Morvenhal i 8 regionów",
    date: "2026-10-03",
    category: "WORLD",
    cover: "images/media/puszcza.jpg",
    description:
      "Świat Azonery jest teraz jedną mapą bez ekranów ładowania: portowe miasto Morvenhal, osady, lochy i osiem regionów o różnym klimacie.",
    content: [
      {
        type: "p",
        text: "Złożyliśmy wszystkie dotychczasowe mapy w jeden ciągły świat. Każdy region ma własne potwory, osadę z usługami, zadania i pogodę, a mapa świata odkrywa się w miarę eksploracji.",
      },
      {
        type: "list",
        items: [
          "Morvenhal: mury, zamek, świątynia startowa, bank i depozyt, tawerna, gildie profesji, port i kanały pod miastem",
          "Osiem regionów — od Przeklętej Puszczy po Spalone Pustkowia i mroźną północ",
          "Lochy na kilku poziomach mapy, osady ze strefami ochronnymi",
          "Wydarzenia świata: napady na karawany, eskorty, obrona osad, rzadcy bossowie",
        ],
      },
      {
        type: "image",
        src: "images/media/pustkowia.jpg",
        alt: "Popielna Strażnica na Spalonych Pustkowiach",
        caption: "Spalone Pustkowia — zrzut z wersji deweloperskiej.",
      },
    ],
    tags: ["świat", "regiony", "eksploracja"],
  },
  {
    slug: "android-dotyk-i-pad",
    title: "Android: sterowanie dotykiem i pad",
    date: "2026-10-03",
    category: "ANDROID",
    cover: "images/media/morvenhal-dzien.jpg",
    description:
      "Azonera działa na Androidzie jako wersja testowa: wirtualna gałka, przyciski akcji, szczypanie do przybliżania — i obsługa pada na PC i telefonie.",
    content: [
      {
        type: "p",
        text: "Wersja na Androida to ten sam świat i te same systemy co na PC. Sterowanie dotykowe włącza się samo na telefonie, a pad (Xbox, DualShock, DualSense) działa na obu platformach.",
      },
      {
        type: "list",
        items: [
          "Wirtualna gałka, przyciski akcji, celu i zatrzymania, obrót kamery",
          "Stuknięcie w świat = kliknięcie, przytrzymanie palca = marsz",
          "Konfigurowalny HUD i skala interfejsu",
          "Wydajność na prawdziwych telefonach dopiero sprawdzamy — czekamy na wasze zgłoszenia",
        ],
      },
      {
        type: "note",
        text: "Masz telefon z Androidem 8.0 lub nowszym? Pobierz APK z sekcji Download i napisz na Discordzie, jak działa na twoim urządzeniu.",
      },
    ],
    tags: ["android", "pad", "sterowanie"],
  },
];
