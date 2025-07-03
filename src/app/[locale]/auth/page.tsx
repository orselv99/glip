import { AuthContents } from "@/components/auth/auth";
import { PolicyContentsFooter } from "@/components/policies/footer";

// todo
//  server side 로 변경
//  oauth component 추상화
const providers: OAuthSignInParams[] = [
  { provider: 'google',  logo: '/oauth/google.png' },
  { provider: 'github',  logo: '/oauth/google.png' },
  { provider: 'discord', logo: '/oauth/google.png' },
];

export default async function AuthPage() {
  return (
    <>
      <div className='row-start-2 flex flex-col items-center justify-center gap-8 sm:w-[300px]'>
        <AuthContents params={providers} />
      </div>
      <div className="row-start-3 text-center text-xs px-8 sm:w-[300px]">
        <PolicyContentsFooter />    
      </div>
    </>
  )
}
