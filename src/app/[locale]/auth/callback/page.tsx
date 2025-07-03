'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Image from 'next/image';

// loading 사용자의 정보 및 서비스 업데이트 내용 표시
export default function AuthCallbackPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(); // todo: interface 화

  useEffect(() => {
    async function getUser() { 
      // session 확인
      const { 
        data: { session }, 
        error 
      } = await supabase.auth.getSession();

      if (session) {
        // rls 활성화 (본인 정보만 조회)
        const { 
          data, 
          error 
        } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id);

        // todo: error 처리
        if (data) {
          setUser(data[0]);
        }
      }
    }

    getUser();
  }, [router]);

  // landing page 로 이동
  function onClick() {
    router.replace( `${location.origin}`) 
  }

  // 움직이는 로그인 indicator 
  //  귀여운 이미지 회전
  //  session.user 에서 사용자 display name 을 가져와서 특별하게?
  return (
    <div>
      { user &&
      <>
        <p>{user.display_name}</p>
        <img src={user.picture} alt={`alt_profile_${user.display_name}`} width={128} height={128} />
        <button onClick={onClick}>시작하기</button>
      </>
      }
    </div>
  );
}
