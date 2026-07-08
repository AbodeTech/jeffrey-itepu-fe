export const JEFFERY_ITEPU_REFERRAL_USERNAME = 'jeffrey_itepu_3810'

const JEFFERY_ITEPU_DOMAINS = new Set([
  'jeffreyitepu.com',
  'www.jeffreyitepu.com',
  'jefferyitepu.com',
  'www.jefferyitepu.com',
  'jeffereyitepu.com',
  'www.jeffereyitepu.com',
])

export function isJefferyItepuHost(hostname: string): boolean {
  return JEFFERY_ITEPU_DOMAINS.has(hostname.toLowerCase())
}

export function getRegisterHref(_hostname?: string): string {
  void _hostname
  return "/register"
}

export function getHeroPortraitSrc(_hostname?: string): string {
  void _hostname
  return "/about/about-hero-portrait.png"
}
