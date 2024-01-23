import React from 'react'
import styles from './Announcement.module.css'
import { ReactComponent as AnnounceIcon } from '../../assets/ss-mark-white.svg'
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg'

const Announcement = () => {
  return (
    <a href='https://app.shapeshift.com/?utm_source=CoinCap&utm_medium=Banner&utm_campaign=Buy+%26+Sell#/connect-wallet?returnUrl=/buy-crypto' style={{textDecoration: "none"}}>
      <div className={styles.announcementBar}>
        <AnnounceIcon />
        <p >
        Buy, sell, & swap your favorite assets. No KYC. No added fees. Decentralized. 
        </p>
        <ArrowRight />
      </div>
    </a>
  )
}

export default Announcement