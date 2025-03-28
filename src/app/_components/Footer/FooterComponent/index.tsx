'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constans'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
                style={{ width: 'auto', height: 'auto' }}
              />
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image 
                src="/bunny_logo.png" 
                alt="Bunny Logo" 
                width={50} 
                height={50} 
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <p>{footer.copyright}</p>
          </div>
        </Gutter>
        <div className={classes.socialLinks}>
          {navItems.map(item => {
            const icon = item?.link?.icon as Media

            return (
              <Button
                key={item.link.label}
                el="link"
                href={item.link.url}
                newTab={true}
                className={classes.socialLinkItem}
              >
                <Image
                  src={icon?.url}
                  alt={item.link.label}
                  width={24}
                  height={24}
                  className={classes.socialIcon}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </Button>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
