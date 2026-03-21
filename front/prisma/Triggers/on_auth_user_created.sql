CREATE OR REPLACE FUNCTION public.on_auth_user_created()
RETURNS TRIGGER AS $$
DECLARE
    user_name TEXT;
BEGIN
    IF new.raw_user_meta_data ->> 'name' IS NULL 
       OR new.raw_user_meta_data ->> 'name' = '' THEN
       
        user_name := substring(new.email FROM '([^@]+)');
        user_name := regexp_replace(user_name, '[_.-]', ' ', 'g');
        user_name := initcap(user_name);
        
    ELSE
        user_name := new.raw_user_meta_data ->> 'name';
    END IF;

    INSERT INTO public.profile (id, email, name, "createdAt")
    VALUES (new.id, new.email, user_name, NOW())
    ON CONFLICT (id) DO NOTHING;

    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';


CREATE TRIGGER create_user_on_signup
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.on_auth_user_created();
