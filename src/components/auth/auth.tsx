'use client'

import { Provider } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase"
import Image from "next/image";
import { useTranslations } from "next-intl";

function OAuthSignIn({
  params
} : {
  params: OAuthSignInParams
}) {
  const onClickSignIn = async () => {
    const response = await supabase.auth.signInWithOAuth({ 
      provider: params.provider,
      options: {
        // 로그인 로딩 창으로
        // 주소창에 표시되는 oauth 정보를 제거하기 위해 
        redirectTo: `${location.origin}/auth/callback`
      }
    });

    if (response.error !== null) {
      console.log('signInWithOAuth', response.error);
    }
  }
  
  return (
    <div className="flex flex-col items-center">
      <button className="btn" onClick={onClickSignIn}>
        <Image src={params.logo!} alt={`alt_oauth_logo_${params.provider}`} width={32} height={32} />
      </button>
    </div>
  );
}

export function AuthContents({
  params
} : {
  params: OAuthSignInParams[]
}) {
  const t = useTranslations('auth');

  return (
    <>
      <div className='text-center'>
        <h1 className='text-2xl font-bold sm:w-[250px]'>
          {t('title')}
        </h1>
      </div>
      {/* oauth buttons */}
      <div className='flex flex-col gap-4'>
        { 
          params.map((x) => 
            <OAuthSignIn
              key={`oauth_button_${x.provider}`}
              params={x} />) 
        }
      </div>
    </>
  );
}