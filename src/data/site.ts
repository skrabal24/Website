export type NavigationItem = {
  label: string
  to: string
}

export type HomeMetric = {
  detail: string
  label: string
  value: string
}

export type SocialLink = {
  description: string
  href: string
  icon: string
  name: string
}

export type RoadmapStep = {
  description: string
  index: string
  title: string
}

export type FeatureCard = {
  description: string
  meta: string
  title: string
}

export type TimelineItem = {
  description: string
  label: string
  title: string
}

export type SectionPageContent = {
  cards: FeatureCard[]
  checklist: string[]
  chips: string[]
  description: string
  eyebrow: string
  label: string
  panelDescription: string
  panelTitle: string
  path: string
  slug: string
  summary: string
  timeline: TimelineItem[]
  title: string
}

export type DashboardStat = {
  detail: string
  label: string
  value: string
}

export type DashboardPanel = {
  action: string
  description: string
  status: string
  title: string
}

export const homeMetrics: HomeMetric[] = [
  {
    detail: 'Home plus sedm obsahovych sekci pripravenych pro dalsi napojeni.',
    label: 'Public routes',
    value: '08',
  },
  {
    detail: 'Login a dashboard placeholder pro budouci administraci obsahu.',
    label: 'Admin flow',
    value: '01',
  },
  {
    detail: 'Frontend skeleton pripraveny pro auth, data a upload vrstvu.',
    label: 'Base layer',
    value: 'V1',
  },
]

export const socialLinks: SocialLink[] = [
  {
    description: 'Repo, changelog a technicke vypisy.',
    href: 'https://github.com/',
    icon: 'github-icon',
    name: 'GitHub',
  },
  {
    description: 'Komunita, backstage signal a early feedback.',
    href: 'https://discord.com/',
    icon: 'discord-icon',
    name: 'Discord',
  },
  {
    description: 'Kratsi aktuality, teasing a rychle statusy.',
    href: 'https://x.com/',
    icon: 'x-icon',
    name: 'X',
  },
  {
    description: 'Dalsi kanal pro public feed a vizualni snippets.',
    href: 'https://bsky.app/',
    icon: 'bluesky-icon',
    name: 'Bluesky',
  },
]

export const roadmap: RoadmapStep[] = [
  {
    description: 'Nahradit placeholder session realnym prihlasenim a rolemi.',
    index: '01',
    title: 'Supabase auth',
  },
  {
    description: 'Napojit tracks, releases a galerii na realne datove zdroje.',
    index: '02',
    title: 'Content CRUD',
  },
  {
    description: 'Zavest CI a automaticky deployment pipeline na GitHub Pages.',
    index: '03',
    title: 'GitHub Pages deploy',
  },
]

export const sectionPages: SectionPageContent[] = [
  {
    slug: 'music',
    path: '/music',
    label: 'Music',
    summary: 'Playlisty, spotlight tracky a rychly feed pro dalsi sync s backendem.',
    eyebrow: 'MUSIC',
    title: 'Hudebni feed a spotlight tracky',
    description:
      'Sekce pocita s featured releasem, track listem a moduly pro stream odkazy bez vazby na finalni API.',
    panelTitle: 'Co muze jit do prvni verze',
    panelDescription:
      'Pripravene bloky pokryji hero skladbu, playlist grid i metadata k jednotlivym stopam.',
    chips: ['featured', 'playlist', 'preview'],
    checklist: [
      'Hero modul pro aktualni release',
      'Grid pro tracky a kategorie',
      'Misto pro stream odkazy a metadata',
    ],
    cards: [
      {
        meta: 'Hero module',
        title: 'Lead track',
        description:
          'Velky spotlight blok pro nejcerstvejsi singl nebo teaser releasu.',
      },
      {
        meta: 'Structured list',
        title: 'Track registry',
        description:
          'Pripraveny prostor pro seznam skladeb, filtry a pozdeji i prehravac.',
      },
      {
        meta: 'Outbound links',
        title: 'Platform routing',
        description:
          'Bezpecne misto pro Spotify, Apple Music, YouTube Music a dalsi odkazy.',
      },
    ],
    timeline: [
      {
        label: 'Stage 01',
        title: 'Content schema',
        description: 'Rozdelit track metadata, artwork a externi odkazy do jednoho modelu.',
      },
      {
        label: 'Stage 02',
        title: 'Admin upload',
        description: 'Napojit dashboard na tvorbu a publikaci skladeb bez rucniho zasahu do kodu.',
      },
      {
        label: 'Stage 03',
        title: 'Player integration',
        description: 'Doplnit preview stream nebo embed prehravac podle zvolene platformy.',
      },
    ],
  },
  {
    slug: 'releases',
    path: '/releases',
    label: 'Releases',
    summary: 'Singles, EP a roadmapa vydani s mistem pro cover, datum a stav kampane.',
    eyebrow: 'RELEASES',
    title: 'Release pipeline a vydavaci kalendar',
    description:
      'Tahle stranka drzi strukturu pro cover art, release datum, status kampane a navazne promo bloky.',
    panelTitle: 'Release kontrola',
    panelDescription:
      'Frontend uz pocita s odlisnym stavem draft, scheduled a live bez dalsiho prepisu UI.',
    chips: ['single', 'ep', 'scheduled'],
    checklist: [
      'Karty pro singles a EP',
      'Datum vydani a status kampane',
      'Prostor pro cover a press text',
    ],
    cards: [
      {
        meta: 'Release cards',
        title: 'Catalog blocks',
        description:
          'Vizualni grid pro cover, datum, format a hlavni call to action.',
      },
      {
        meta: 'Campaign state',
        title: 'Status tracking',
        description:
          'Jasne odliseni pripravovaneho releasu od aktivni kampane a archivu.',
      },
      {
        meta: 'Editorial copy',
        title: 'Press snippets',
        description:
          'Misto pro kratky release text, credits a dalsi editovatelne doprovodne info.',
      },
    ],
    timeline: [
      {
        label: 'Phase 01',
        title: 'Draft model',
        description: 'Zavest datovy model pro cover, slug, datum, copy a dostupnost.',
      },
      {
        label: 'Phase 02',
        title: 'Schedule management',
        description: 'Napojit admin formulare na zmenu statusu a casovani publikace.',
      },
      {
        label: 'Phase 03',
        title: 'Archive view',
        description: 'Doplnit filtrovani starsich releasu bez ztraty prehledu na mobilech.',
      },
    ],
  },
  {
    slug: 'videos',
    path: '/videos',
    label: 'Videos',
    summary: 'Premiery, visualizery a short-form obsah pripravene pro embed i archiv.',
    eyebrow: 'VIDEOS',
    title: 'Video premiery a vizualni archiv',
    description:
      'Sekce je navrzena pro klipy, live sessions i kratke vertical formaty se samostatnou prioritou.',
    panelTitle: 'Video vrstva',
    panelDescription:
      'Pocita se s embed prehravacem, cover frame karty a oddelenim premier od archivu.',
    chips: ['premiere', 'live session', 'short form'],
    checklist: [
      'Embed ready video cards',
      'Premiere highlight s CTA',
      'Archiv pro klipy a snippets',
    ],
    cards: [
      {
        meta: 'Launch slot',
        title: 'Premiere hero',
        description:
          'Velky blok pro hlavni video launch s datem a odpoctem na publikaci.',
      },
      {
        meta: 'Content split',
        title: 'Format separation',
        description:
          'Rozliseni official video, visualizer, live cut a short-form obsahu.',
      },
      {
        meta: 'Media routing',
        title: 'External embeds',
        description:
          'Pripraveny prostor pro YouTube, Vimeo nebo dalsi video platformy.',
      },
    ],
    timeline: [
      {
        label: 'Queue 01',
        title: 'Premiere data',
        description: 'Rozdelit metadata na launch datum, typ videa a cover frame.',
      },
      {
        label: 'Queue 02',
        title: 'Embed management',
        description: 'Napojit admin upload na URL validaci a preview blok.',
      },
      {
        label: 'Queue 03',
        title: 'Archive filters',
        description: 'Doplnit filtrovani podle formatu a data publikace.',
      },
    ],
  },
  {
    slug: 'shows',
    path: '/shows',
    label: 'Shows',
    summary: 'Live dates, venue informace a stav jednotlivych vystoupeni.',
    eyebrow: 'SHOWS',
    title: 'Live dates a venue signal',
    description:
      'Stranka drzi prostor pro upcoming shows, venue info, ticket linky a pozdeji i rider data.',
    panelTitle: 'Live modul',
    panelDescription:
      'Skalovatelny layout pro jednotlive akce, headline event i archiv odehranych show.',
    chips: ['dates', 'venue', 'tickets'],
    checklist: [
      'Upcoming list s datem a lokaci',
      'Ticket CTA a externi routing',
      'Archiv odehranych akci',
    ],
    cards: [
      {
        meta: 'Headline event',
        title: 'Priority show',
        description:
          'Vyrazneny blok pro nejblizsi nebo nejdulezitejsi akci s rychlym CTA.',
      },
      {
        meta: 'Venue data',
        title: 'Location layer',
        description:
          'Misto pro mesto, klub, cas otevreni a dalsi zakladni produkcni informace.',
      },
      {
        meta: 'Post-event mode',
        title: 'Archive pass',
        description:
          'Po odehrani lze show presunout do archivu bez ztraty URL a navstevnosti.',
      },
    ],
    timeline: [
      {
        label: 'Live 01',
        title: 'Event schema',
        description: 'Popsat datum, lokaci, ticket URL, status a media vazby.',
      },
      {
        label: 'Live 02',
        title: 'Promoter workflow',
        description: 'Pridat editaci detailu a publikaci show z admin panelu.',
      },
      {
        label: 'Live 03',
        title: 'Post-show content',
        description: 'Navazat galerie nebo video recap na konkretni akci.',
      },
    ],
  },
  {
    slug: 'gallery',
    path: '/gallery',
    label: 'Gallery',
    summary: 'Fotky, artwork a backstage drops s pripravenym prostorem pro upload.',
    eyebrow: 'GALLERY',
    title: 'Galerie, artwork a backstage drops',
    description:
      'Sekce pocita s fotkami z vystoupeni, press fotkami, cover artem i dalsim vizualnim archivem.',
    panelTitle: 'Visual storage',
    panelDescription:
      'UI je pripravene na obrazkove gridy, lightbox logiku i napojeni na storage provider.',
    chips: ['photos', 'artwork', 'archive'],
    checklist: [
      'Grid pro image kolekce',
      'Kategorie pro photo dropy a artwork',
      'Prostor pro lightbox nebo detail',
    ],
    cards: [
      {
        meta: 'Gallery grid',
        title: 'Visual index',
        description:
          'Prehledny grid pro rychle prochazeni fotek a cover artu napric kategoriemi.',
      },
      {
        meta: 'Metadata',
        title: 'Shot context',
        description:
          'Kazdy asset muze dostat lokaci, datum, kredit a vztah k release nebo show.',
      },
      {
        meta: 'Storage ready',
        title: 'Upload pipeline',
        description:
          'Priprava na storage bucket a spravu obrazku primo z admin dashboardu.',
      },
    ],
    timeline: [
      {
        label: 'Drop 01',
        title: 'Asset categories',
        description: 'Rozdelit kolekce na live, press, backstage a artwork.',
      },
      {
        label: 'Drop 02',
        title: 'Upload rules',
        description: 'Doplnit formaty, crop logiku a validaci velikosti souboru.',
      },
      {
        label: 'Drop 03',
        title: 'Detail views',
        description: 'Pridat lightbox nebo detail assetu s dalsim textem.',
      },
    ],
  },
  {
    slug: 'about',
    path: '/about',
    label: 'About',
    summary: 'Identita projektu, sonic DNA a prostor pro delsi text bez preplacani homepage.',
    eyebrow: 'ABOUT',
    title: 'Identita projektu a sonic DNA',
    description:
      'About page drzi klidnejsi prostor pro pribeh, styl, reference a dalsi kontext kolem projektu.',
    panelTitle: 'Editorial zone',
    panelDescription:
      'Stranka je vhodna pro delsi copy, credits, crew info nebo manifest celeho projektu.',
    chips: ['story', 'identity', 'credits'],
    checklist: [
      'Delsi text bez tlaku na hero sekci',
      'Misto pro crew a credits',
      'Sekce pro reference a inspirace',
    ],
    cards: [
      {
        meta: 'Origin layer',
        title: 'Project story',
        description:
          'Prirozene misto pro vysvetleni, odkud projekt prisel a kam smeruje.',
      },
      {
        meta: 'Team credits',
        title: 'People map',
        description:
          'Pozdeji lze doplnit producenty, vizualni spoluprace a dalsi klicove role.',
      },
      {
        meta: 'Narrative block',
        title: 'Tone control',
        description:
          'Stranka drzi konzistentni jazyk a identitu bez nutnosti zatezovat ostatni routy.',
      },
    ],
    timeline: [
      {
        label: 'Story 01',
        title: 'Long-form copy',
        description: 'Sepsat hlavni pribeh projektu a zjednotit ton komunikace.',
      },
      {
        label: 'Story 02',
        title: 'Credits structure',
        description: 'Pripravit editovatelne bloky pro lidi, role a externi spoluprace.',
      },
      {
        label: 'Story 03',
        title: 'Media pack',
        description: 'Napojit About na foto, press text a kontaktni kanaly.',
      },
    ],
  },
  {
    slug: 'contact',
    path: '/contact',
    label: 'Contact',
    summary: 'Booking, press a spoluprace na jednom miste s pozdejsim formularovym flow.',
    eyebrow: 'CONTACT',
    title: 'Booking, press a dalsi spojeni',
    description:
      'Kontaktni sekce drzi jasny rozcestnik pro booking, media, spoluprace a pozdeji i zabezpeceny formular.',
    panelTitle: 'Kontaktni smerovani',
    panelDescription:
      'Muze obslouzit prime kontakty, formular i filtrovani podle typu poptavky.',
    chips: ['booking', 'press', 'collabs'],
    checklist: [
      'Misto pro emaily a social handoff',
      'Rozdeleni poptavek podle typu',
      'Rezerva pro formular a antispam vrstvu',
    ],
    cards: [
      {
        meta: 'Direct lines',
        title: 'Primary channels',
        description:
          'Rychly blok pro booking, media a vsechny oficialni kontaktni body.',
      },
      {
        meta: 'Request routing',
        title: 'Intent split',
        description:
          'Poptavky lze rozdelit na booking, collab, press nebo support.',
      },
      {
        meta: 'Safe intake',
        title: 'Future form',
        description:
          'Frontend uz pocita s formularovou vrstvou a navaznou backend validaci.',
      },
    ],
    timeline: [
      {
        label: 'Contact 01',
        title: 'Channel setup',
        description: 'Doplnit realne adresy a pravidla, kam maji vest jednotlive dotazy.',
      },
      {
        label: 'Contact 02',
        title: 'Form backend',
        description: 'Rozhodnout mezi edge function, email bridge nebo externi sluzbou.',
      },
      {
        label: 'Contact 03',
        title: 'Admin intake',
        description: 'Napojit dashboard na prehled prichozich poptavek a jejich stav.',
      },
    ],
  },
]

export const publicNavigation: NavigationItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  ...sectionPages.map((page) => ({
    label: page.label,
    to: page.path,
  })),
]

export const dashboardStats: DashboardStat[] = [
  {
    detail: 'Public navigace je rozdelena na samostatne routy.',
    label: 'Sections',
    value: '08',
  },
  {
    detail: 'Admin flow zatim bezi jen jako frontend placeholder.',
    label: 'Auth state',
    value: 'TEMP',
  },
  {
    detail: 'Zatim bez realneho providera, pripravene pro dalsi integraci.',
    label: 'Backend',
    value: 'OFF',
  },
]

export const dashboardPanels: DashboardPanel[] = [
  {
    action: 'Pripravit CRUD',
    description: 'Sprava tracku, metadata, stream odkazu a publish state.',
    status: 'planned',
    title: 'Tracks',
  },
  {
    action: 'Napojit release pipeline',
    description: 'Covers, datum vydani, editorial copy a schedule management.',
    status: 'planned',
    title: 'Releases',
  },
  {
    action: 'Doplnit storage',
    description: 'Galerie, artwork a dalsi obrazkove assety s upload flow.',
    status: 'planned',
    title: 'Gallery assets',
  },
  {
    action: 'Napojit formulare',
    description: 'Budouci prehled kontaktu, show dotazu a dalsich requestu.',
    status: 'queued',
    title: 'Inbox',
  },
]

export const dashboardChecklist: string[] = [
  'Nahradit placeholder session realnou autentizaci.',
  'Pridat role, ochranu rout a server-side validaci.',
  'Napojit dashboard formulare na databazi a storage.',
  'Rozdelit jednotlive moduly na editacni stranky.',
]
