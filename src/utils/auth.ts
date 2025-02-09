import { supabase } from './supabaseClient';
import { NavigateFunction } from 'react-router-dom';

export const checkAuth = async (navigate: NavigateFunction) => {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    navigate('/login');
    return false;
  }
  
  return true;
};

export const signOut = async (navigate: NavigateFunction) => {
  await supabase.auth.signOut();
  navigate('/login');
};