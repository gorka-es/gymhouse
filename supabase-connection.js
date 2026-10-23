/* DEPORTE · conexión Supabase v0.0.8: sesión personal y lectura del catálogo. */
(function (global) {
  'use strict';
  let client = null;
  function getClient() {
    if (client) return client;
    const config = global.DEPORTE_SUPABASE_CONFIG;
    if (!config || !config.url || !config.publishableKey || config.url.startsWith('PEGA_AQUI_') || config.publishableKey.startsWith('PEGA_AQUI_')) {
      throw new Error('Falta configurar la URL y la clave publicable en supabase-config.js.');
    }
    if (!global.supabase || typeof global.supabase.createClient !== 'function') {
      throw new Error('No se ha cargado supabase-js. Comprueba la conexión a Internet.');
    }
    client = global.supabase.createClient(config.url, config.publishableKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    return client;
  }
  async function getSession() {
    const { data, error } = await getClient().auth.getSession();
    if (error) throw error;
    return data.session;
  }
  async function signIn(email, password) {
    const { data, error } = await getClient().auth.signInWithPassword({ email, password });
    if (error) throw error;
    if (!data.session) throw new Error('Supabase no ha devuelto una sesión autenticada.');
    return data.session;
  }
  async function signOut() {
    const { error } = await getClient().auth.signOut();
    if (error) throw error;
  }
  async function getExercises() {
    const session = await getSession();
    if (!session) throw new Error('Inicia sesión antes de cargar los ejercicios.');
    const { data, error } = await getClient().from('ejercicios').select('id,nombre,tipo,user_id').order('id');
    if (error) throw error;
    return data || [];
  }
  global.DeporSupabase = Object.freeze({ getSession, signIn, signOut, getExercises });
})(window);
