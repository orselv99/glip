'use client'

import { 
  OAuthSignIn, 
  OAuthSignInParams 
} from "@/components/auth/oauth";
import { useTranslations } from "next-intl";
import Link from "next/link";

// todo
//  server side 로 변경
//  oauth component 추상화
const providers : OAuthSignInParams[] = [
  { provider: 'google', signin: true, logo: '/oauth/google.png' },
  { provider: 'github', signin: true, logo: '/oauth/google.png' },
  { provider: 'discord', signin: true, logo: '/oauth/google.png' },
];

export default function AuthPage() {
  const t = useTranslations('auth');

  return (
    <>
      <div className='row-start-2 flex flex-col items-center justify-center gap-8 sm:w-[300px]'>
        {/* title */}
        <div className='text-center'>
          <h1 className='text-2xl font-bold sm:w-[250px]'>
            {t('title')}
          </h1>
        </div>
        {/* oauth buttons */}
        <div className='flex flex-col gap-4'>
          { 
            providers.map((x) => 
              <OAuthSignIn
                key={`oauth_button_${x.provider}`}
                params={x} />) 
          }
        </div>
        {/* terms and privacy policy */}
      </div>
      <div className="row-start-3 text-center text-xs px-8 sm:w-[300px]">
          {
            // https://next-intl.dev/docs/usage/messages#rich-text
            t.rich('agreement', { 
              terms : (x) => 
                <Link 
                  href={`${location.pathname}/policies#terms`}
                  className='underline underline-offset-4'>
                  {x}
                </Link>, 
              privacy : (x) => 
                <Link 
                  href={`${location.pathname}/policies#privacy`}
                  className='underline underline-offset-4'>
                  {x}
                </Link>, 
            })
          }
        </div>
    </>
  )
}
