/**
 * ROADMAPA i STATUS PRODUKCJI Azonera MMO.
 * Edytuj statusy i pozycje tutaj — strona renderuje je automatycznie.
 *
 * Zasada: nie wpisuj statusu, którego nie możesz poprzeć.
 * W razie wątpliwości: IN DEVELOPMENT lub PLANNED.
 */

export type RoadmapStatus = "COMPLETED" | "IN DEVELOPMENT" | "TESTING" | "PLANNED";

export interface RoadmapPhase {
  phase: string;
  title: string;
  status: RoadmapStatus;
  description: string;
  items: string[];
}

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: "FAZA 01",
    title: "Fundamenty",
    status: "COMPLETED",
    description: "Silnik, kierunek artystyczny i logika świata na polach — fundament, na którym powstaje reszta.",
    items: ["Unity 6 (URP), izometryczne 3D", "Mroczny, stonowany kierunek artystyczny", "Ruch po polach, kondygnacje mapy, przedmioty i kontenery"],
  },
  {
    phase: "FAZA 02",
    title: "Świat i rozgrywka",
    status: "TESTING",
    description: "Jeden świat bez ekranów ładowania i podstawowe systemy MMORPG — w testach.",
    items: ["Morvenhal i 8 regionów, lochy, osady", "5 profesji, umiejętności rosnące od używania, czary u mistrzów gildii", "Zadania, handel, bank i depozyt, karawana, wydarzenia świata", "Prolog z samouczkiem"],
  },
  {
    phase: "FAZA 03",
    title: "Walka, efekty i dźwięk",
    status: "TESTING",
    description: "Pełna prezentacja walki: ruch broni, trafienie w klatce kontaktu, efekty czarów, dźwięki.",
    items: ["Nowy system walki (wersja 0.3.3)", "Efekty czarów i stanów", "Dźwięki walki i otoczenia", "Czytelność jednostek w ciemności"],
  },
  {
    phase: "FAZA 04",
    title: "Gra sieciowa",
    status: "IN DEVELOPMENT",
    description: "Dziś jeden gracz hostuje świat, a inni dołączają. Dalej: wspólne potwory, serwer dedykowany i PvP.",
    items: ["Host i klienci (wczesne testy)", "Wspólne walki z potworami", "Serwer dedykowany", "PvP"],
  },
  {
    phase: "FAZA 05",
    title: "Otwarte testy",
    status: "PLANNED",
    description: "Szersze testy z graczami. Datę ogłosimy na Discordzie i tutaj — nie podajemy jej, dopóki nie jest pewna.",
    items: ["Testy z pierwszymi graczami", "Poprawki z feedbacku", "Otwarte testy PC + Android"],
  },
];

/** Status poszczególnych obszarów produkcji (panel AZONERA DEVELOPMENT STATUS). */
export type DevStatusLevel = "PLANNED" | "IN DEVELOPMENT" | "TESTING" | "READY";

export interface DevStatusArea {
  area: string;
  status: DevStatusLevel;
  note?: string;
}

export const DEV_STATUS: DevStatusArea[] = [
  { area: "Combat", status: "TESTING", note: "Nowy system walki w wersji 0.3.3" },
  { area: "Effects", status: "TESTING", note: "Efekty broni, czarów i stanów" },
  { area: "Sounds", status: "TESTING", note: "Dźwięki walki, kroków i stref" },
  { area: "World", status: "TESTING", note: "Morvenhal i 8 regionów w jednym świecie" },
  { area: "Quests", status: "TESTING", note: "Zadania w miastach i osadach, prolog" },
  { area: "Items", status: "TESTING", note: "Bronie, zbroje, mikstury, handel" },
  { area: "Monsters", status: "IN DEVELOPMENT", note: "Część potworów czeka na własne modele" },
  { area: "PC", status: "TESTING", note: "Wersja testowa z autoaktualizacją" },
  { area: "Android", status: "TESTING", note: "APK z autoaktualizacją, sterowanie dotykiem" },
  { area: "UI", status: "IN DEVELOPMENT", note: "HUD, mapa, minimapa, ustawienia" },
  { area: "Multiplayer", status: "IN DEVELOPMENT", note: "Host + klienci; bez wspólnych potworów i PvP" },
];
