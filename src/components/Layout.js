import HeaderTop from './HeaderTop'
import FooterBottom from './FooterBottom'

import '../css/globals.css'

export default function Layout({ children }) {
  return (
    <div className='fullHeight'>
      <HeaderTop />
      <div className='bodycontent' style={{ paddingTop: '0' }}>
        {children}
      </div>
      <FooterBottom />
    </div>
  )
}

