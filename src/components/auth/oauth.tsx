'use client'

import { Provider } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase"
import Image from "next/image";

export interface OAuthSignInParams {
  provider: Provider;
  logo?   : string;
  signin  : boolean;
}

export function OAuthSignIn({
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
        redirectTo: `${location.origin}/auth/callback?signin=${params.signin}`
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