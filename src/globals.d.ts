import { Provider } from "@supabase/supabase-js";

declare global {
  interface OAuthSignInParams { 
    provider: Provider,  
    logo    : string;
  };
}