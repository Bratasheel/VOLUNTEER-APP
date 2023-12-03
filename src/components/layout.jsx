import React from 'react';
import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import '../styles/layout.css';
import Home from '../pages/homepage';

export default function Layout() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className={`layout-container ${session ? 'logged-in' : ''}`}>
      {!session ? (
        <div className="login-popup">
          <Auth 
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={['google', 'facebook', 'twitter']}
              queryParams={{
                access_type: 'offline',
                prompt: 'consent',
                hd: 'domain.com',
              }}
              
              providerScopes={{
                google: 'https://www.googleapis.com/auth/calendar.readonly',
              }}
          />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}
