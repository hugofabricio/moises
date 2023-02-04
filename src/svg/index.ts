import AiSongwriter from './ai-songwriter.svg'
import ArrowDown from './arrow-down.svg'
import AudioSeparation from './audio separation.svg'
import Bassists from './bassists.svg'
import BrandFull from './brand-full.svg'
import BrandIcon from './brand-icon.svg'
import ChordDetection from './chord-detection.svg'
import Drummers from './drummers.svg'
import Guitarists from './guitarists.svg'
import Ipad from './ipad.svg'
import Laptop from './laptop.svg'
import Phone from './phone.svg'
import PitchChanger from './pitch-changer.svg'
import Producers from './producers.svg'
import Singers from './singers.svg'
import SmartMetronome from './smart-metronome.svg'
import SocialFacebook from './social-facebook.svg'
import SocialInstagram from './social-instagram.svg'
import SocialLinkedin from './social-linkedin.svg'
import SocialTiktok from './social-tiktok.svg'
import SocialTwitter from './social-twitter.svg'
import SocialYoutube from './social-youtube.svg'

const svg = {
  'ai-songwriter': AiSongwriter,
  'arrow-down': ArrowDown,
  'audio separation': AudioSeparation,
  'bassists': Bassists,
  'brand-full': BrandFull,
  'brand-icon': BrandIcon,
  'chord-detection': ChordDetection,
  'drummers': Drummers,
  'guitarists': Guitarists,
  'ipad': Ipad,
  'laptop': Laptop,
  'phone': Phone,
  'pitch-changer': PitchChanger,
  'producers': Producers,
  'singers': Singers,
  'smart-metronome': SmartMetronome,
  'social-facebook': SocialFacebook,
  'social-instagram': SocialInstagram,
  'social-linkedin': SocialLinkedin,
  'social-tiktok': SocialTiktok,
  'social-twitter': SocialTwitter,
  'social-youtube': SocialYoutube,
}

export type SvgProps = keyof typeof svg

export default svg