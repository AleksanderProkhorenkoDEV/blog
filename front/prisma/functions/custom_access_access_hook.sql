-- Hook to add custom claim in jwt, to avoid make more request.

create or replace function public.custom_access_token_hook(event jsonb)
returns jsonb
language plpgsql
stable
as $$
declare
  claims jsonb;
  user_role text;
begin
  claims := event->'claims';

  -- event->>'user_id' es el id del usuario (auth.users.id)
  select p."role"
    into user_role
  from public."Profile" p
  where p.id = (event->>'user_id')::uuid;

  -- añade claim (user_role) al JWT
  claims := jsonb_set(claims, '{user_role}', to_jsonb(user_role), true);

  event := jsonb_set(event, '{claims}', claims, true);
  return event;
end;
$$;

grant usage on schema public to supabase_auth_admin;
grant execute on function public.custom_access_token_hook to supabase_auth_admin;

revoke execute on function public.custom_access_token_hook from authenticated, anon, public;

-- give permisions to supabase to read the profile table
grant select on table public."Profile" to supabase_auth_admin;

-- I have the RSL policy active, and i need to create a policy to allow the hook to read 
create policy "auth hook can read profile"
on public."Profile"
for select
to supabase_auth_admin
using (true);