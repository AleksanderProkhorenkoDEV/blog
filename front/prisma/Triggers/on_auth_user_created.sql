CREATE OR REPLACE FUNCTION on_auth_user_created([])
RETURNS TRIGGER AS $$
DECLARE
    user_name TEXT;
BEGIN
    if new.raw_user_meta_data ->> 'name' is null or new.raw_user_meta_data ->> 'name' = '' then
        user_name := substring(new.email from '([^@]+)');
        user_name := regexp_replace(user_name, '[_.-]', ' ', 'g');
        user_name := initcap(user_name);
    else
        user_name := new.raw_user_meta_data ->> 'name';
    end if;

    INSERT INTO public.profile (id, email, name, createdAt) VALUES (new.id, new.email, user_name, NOW());

    return new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';


CREATE TRIGGER create_user_on_singUp()
AFTER INSERT ON auth.user
FOR EACH ROW
EXECUTE FUNCTION public.on_auth_user_created();
