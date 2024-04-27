"use client";

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import {config, lConfig} from '../../../../sanity.config'
import { useTheme } from 'next-themes'
import { buildLegacyTheme } from 'sanity'


export default function StudioPage() {
  const theme = useTheme().theme;
  console.log(theme);
  if(theme === "light"){ 
    return (
      <div className='z-[999999]'>
        <NextStudio config={lConfig} />
      </div>
    )
  }
  else{
    return (
      <div className='z-[999999]'>
        <NextStudio config={config} />
      </div>
    )
  }

}