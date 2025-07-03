'use client'

import { useTranslations } from "next-intl";
import Link from "next/link";

export function PolicyContentsFooter() {
  const t = useTranslations('auth');
  return (
    <>
      {
        // https://next-intl.dev/docs/usage/messages#rich-text
        t.rich('agreement', { 
          policies : (x) => 
            <Link  
              href='/policies'
              className='underline underline-offset-4'>
              {x}
            </Link>, 
        })
      }
    </>
  );
}