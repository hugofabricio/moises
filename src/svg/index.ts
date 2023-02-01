import BrandFull from './brand-full.svg'
import BrandIcon from './brand-icon.svg'
import SocialFacebook from './social-facebook.svg'
import SocialInstagram from './social-instagram.svg'
import SocialLinkedin from './social-linkedin.svg'
import SocialTiktok from './social-tiktok.svg'
import SocialTwitter from './social-twitter.svg'
import SocialYoutube from './social-youtube.svg'

const svg = {
  'brand-full': BrandFull,
  'brand-icon': BrandIcon,
  'social-facebook': SocialFacebook,
  'social-instagram': SocialInstagram,
  'social-linkedin': SocialLinkedin,
  'social-tiktok': SocialTiktok,
  'social-twitter': SocialTwitter,
  'social-youtube': SocialYoutube,
}

export type SvgProps = keyof typeof svg

export default svg