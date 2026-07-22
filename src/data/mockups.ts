// ─────────────────────────────────────────────────────────────
// Centralized mockup data  single source of truth for all
// screenshot paths and captions used across the landing page.
// ─────────────────────────────────────────────────────────────

export type MockupItem = {
  /** Public asset path */
  src: string
  /** Accessible alt text */
  alt: string
  /** Short caption (2-4 words, NO period) */
  caption: string
}

// ── Common Screens ──────────────────────────────────────────

export const COMMON_SCREENS: MockupItem[] = [
  { src: '/assets/common/splash.jpeg', alt: 'Joby splash screen', caption: '' },
  { src: '/assets/common/on_boarding.jpeg', alt: 'Joby onboarding screen', caption: '' },
  { src: '/assets/common/login.jpeg', alt: 'Joby login screen', caption: '' },
  { src: '/assets/common/sign_up.jpeg', alt: 'Joby sign up screen', caption: '' },
  { src: '/assets/common/reset-password.jpeg', alt: 'Joby reset password screen', caption: '' },
  { src: '/assets/common/settings.jpeg', alt: 'Joby settings screen', caption: '' },
  { src: '/assets/common/off_line.jpeg', alt: 'Joby offline mode screen', caption: '' },
  { src: '/assets/common/feed-back.jpeg', alt: 'Joby feedback screen', caption: '' },
  { src: '/assets/common/feed-back-two.jpeg', alt: 'Joby feedback confirmation', caption: '' },
  { src: '/assets/common/about-us-one.jpeg', alt: 'Joby about page', caption: '' },
  { src: '/assets/common/about-us-two.jpeg', alt: 'Joby about team', caption: '' },
  { src: '/assets/common/about-us-three.jpeg', alt: 'Joby about vision', caption: '' },
  { src: '/assets/common/log_out.jpeg', alt: 'Joby logout confirmation', caption: '' },
  { src: '/assets/common/exit_app.jpeg', alt: 'Joby exit app prompt', caption: '' },
  { src: '/assets/common/exit-app-two.jpeg', alt: 'Joby exit app alternate', caption: '' },
]

// ── Company Screens ─────────────────────────────────────────

export const COMPANY_SCREENS: MockupItem[] = [
  { src: '/assets/company/setup-company-profile.jpeg', alt: 'Company profile setup', caption: '' },
  { src: '/assets/company/empty-talent-list.jpeg', alt: 'Empty talent list state', caption: '' },
  { src: '/assets/company/empty-saved.jpeg', alt: 'Empty saved talents', caption: '' },
  { src: '/assets/company/talents-list.jpeg', alt: 'Talent browsing list', caption: '' },
  { src: '/assets/company/filter.jpeg', alt: 'Talent filter controls', caption: '' },
  { src: '/assets/company/show-talent.jpeg', alt: 'Talent detail card', caption: '' },
  { src: '/assets/company/talent-profile.jpeg', alt: 'Full talent profile view', caption: '' },
  { src: '/assets/company/talent-profile-two.jpeg', alt: 'Talent profile skills section', caption: '' },
  { src: '/assets/company/saved-talents.jpeg', alt: 'Saved talents collection', caption: '' },
]

// ── User / Job Seeker Screens ───────────────────────────────

export const USER_SCREENS: MockupItem[] = [
  { src: '/assets/users/awesome.jpeg', alt: 'Achievement celebration', caption: '' },
  { src: '/assets/users/basic-info.jpeg', alt: 'Basic information form', caption: '' },
  { src: '/assets/users/company-view-one.jpeg', alt: 'Company view preview', caption: '' },
  { src: '/assets/users/company-view-two.jpeg', alt: 'Company view detail', caption: '' },
  { src: '/assets/users/crop_image.jpeg', alt: 'Profile image cropping', caption: '' },
  { src: '/assets/users/edit-profile-one.jpeg', alt: 'Profile editing first step', caption: '' },
  { src: '/assets/users/edit-profile-two.jpeg', alt: 'Profile editing second step', caption: '' },
  { src: '/assets/users/experince.jpeg', alt: 'Experience and work type', caption: '' },
  { src: '/assets/users/links.jpeg', alt: 'Social links setup', caption: '' },
  { src: '/assets/users/location-access.jpeg', alt: 'Location permission request', caption: '' },
  { src: '/assets/users/location.jpeg', alt: 'Location selection map', caption: '' },
  { src: '/assets/users/pick_location.jpeg', alt: 'Location picker map view', caption: '' },
  { src: '/assets/users/points-one.jpeg', alt: 'Points dashboard overview', caption: '' },
  { src: '/assets/users/points-two.jpeg', alt: 'Points earning detail', caption: '' },
  { src: '/assets/users/profile-image.jpeg', alt: 'Profile image upload', caption: '' },
  { src: '/assets/users/profile-one.jpeg', alt: 'Complete user profile', caption: '' },
  { src: '/assets/users/profile-views.jpeg', alt: 'Profile views analytics', caption: '' },
  { src: '/assets/users/show-cv.jpeg', alt: 'CV document viewer', caption: '' },
]

// ── Feature Card Groupings ──────────────────────────────────

export const JOB_SEEKER_FEATURES = {
  profiles: {
    title: 'Smart Profiles',
    eyebrow: 'Feature',
    description:
      'Add your location, upload your CV, and connect social links so employers see the full picture fast, structured, and ready to share.',
    screens: [
      USER_SCREENS.find((s) => s.src.includes('profile-one'))!,
      USER_SCREENS.find((s) => s.src.includes('location.jpeg'))!,
    ],
  },
  gamification: {
    title: 'Gamified Experience',
    eyebrow: 'Core USP',
    description:
      'Daily check-ins and point rewards keep momentum high. Small wins (+10 points and more) turn your job hunt into a streak you actually want to maintain.',
    screens: [
      USER_SCREENS.find((s) => s.src.includes('points-one'))!,
      USER_SCREENS.find((s) => s.src.includes('awesome'))!,
    ],
  },
  seamless: {
    title: 'Seamless UX & Offline Mode',
    eyebrow: 'Reliability',
    description:
      'A clean interface with thoughtful error handling including a friendly offline state so the app stays approachable even when connectivity drops.',
    screens: [
      COMMON_SCREENS.find((s) => s.src.includes('settings'))!,
      COMMON_SCREENS.find((s) => s.src.includes('off_line'))!,
    ],
  },
} as const

export const COMPANY_FEATURES = {
  profiles: {
    title: 'Rich Candidate Profiles',
    eyebrow: 'Talent',
    description:
      'Browse structured profiles with CVs, locations, and social context so you can shortlist faster and interview with confidence.',
    screens: [
      COMPANY_SCREENS.find((s) => s.src.includes('talent-profile.jpeg'))!,
      COMPANY_SCREENS.find((s) => s.src.includes('talent-profile-two'))!,
    ],
  },
  pipeline: {
    title: 'Pipeline & Engagement',
    eyebrow: 'Hiring',
    description:
      'Track applicants through stages, see engagement signals, and keep momentum on roles that matter without losing context in spreadsheets.',
    screens: [
      COMPANY_SCREENS.find((s) => s.src.includes('talents-list'))!,
      COMPANY_SCREENS.find((s) => s.src.includes('saved-talents'))!,
    ],
  },
  clarity: {
    title: 'Operational Clarity',
    eyebrow: 'Control',
    description:
      'A calm dashboard for roles, settings, and day-to-day hiring tasks designed to stay usable when volume spikes or teams collaborate.',
    screens: [
      COMPANY_SCREENS.find((s) => s.src.includes('filter'))!,
      COMPANY_SCREENS.find((s) => s.src.includes('show-talent'))!,
    ],
  },
} as const

// ── Marquee Tab Collections ─────────────────────────────────

export const MARQUEE_TABS = {
  common: COMMON_SCREENS,
  jobSeekers: USER_SCREENS,
  company: COMPANY_SCREENS,
} as const

// ── Hero Mockups ────────────────────────────────────────────

export const HERO_SCREENS = {
  left: COMMON_SCREENS.find((s) => s.src.includes('on_boarding'))!,
  right: COMMON_SCREENS.find((s) => s.src.includes('splash'))!,
} as const
