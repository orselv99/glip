create or replace table public.profiles (
  -- id (pk)      : supabase auth.users 
  -- display_name : 사용자 이름
  -- picture      : 사용자 사진
  id uuid not null references auth.users on delete cascade,
  display_name text,
  picture text,

  primary key (id)
);

alter table public.profiles enable row level security;

-- inserts a row into public.profiles
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
declare
  display_name text;
  picture text;
begin
  -- raw_user_meta_data	: oauth provider 에서 받은 사용자 정보 (json)
  -- 랜덤 아바타 생성 seed 에 사용자 이름을 추가
  display_name := new.raw_user_meta_data ->> 'name';
  picture := 'https://api.dicebear.com/9.x/personas/svg?seed=' || replace(display_name, ' ', '');

  insert into public.profiles (id, display_name, picture) values (new.id, display_name, picture);
  return new;
end;
$$;

-- trigger the function every time a user is created
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();