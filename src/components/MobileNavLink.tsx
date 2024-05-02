import { mobileLinkVars } from '../components/FrameMotion/mobileLinkVars'
import { motion } from 'framer-motion'

type MobileNavLinkProps = {
  href: string
  text: string
}

export function MobileNavLink({href, text}: MobileNavLinkProps) {
  return (
    <motion.div variants={mobileLinkVars}>
      <a href={href}>
        {text}
      </a>
    </motion.div>
  )
}
