/* DEPORTE · conexión Supabase Fase 1: sesión personal, catálogo y guardado de entrenamientos. */
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
  async function saveWorkout(payload) {
    const session = await getSession();
    if (!session) throw new Error('Inicia sesión antes de guardar un entrenamiento.');
    const { data, error } = await getClient().rpc('guardar_entrenamiento', { p_entrenamiento: payload });
    if (error) throw error;
    return data;
  }
  async function getExercises() {
    const session = await getSession();
    if (!session) throw new Error('Inicia sesión antes de cargar los ejercicios.');
    const { data, error } = await getClient().from('ejercicios').select('id,nombre,tipo,user_id').order('id');
    if (error) throw error;
    return data || [];
  }
  async function getWorkouts() {
  const session = await getSession();
  if (!session) {
    throw new Error('Inicia sesión para consultar el historial.');
  }
  const { data, error } = await getClient()
    .from('entrenamientos')
    .select('id,nombre,fecha_inicio,fecha_fin,estado')
    .eq('user_id', session.user.id)
    .order('fecha_inicio', { ascending: false });
  if (error) throw error;
  return data || [];
}
async function getWorkoutDetails(workoutId) {
  const session = await getSession();
  if (!session) {
    throw new Error('Inicia sesión para consultar el entrenamiento.');
  }
  const { data: workout, error: workoutError } = await getClient()
    .from('entrenamientos')
    .select('id,nombre,estado,fecha_inicio,fecha_fin,motivo_incompleto')
    .eq('id', workoutId)
    .eq('user_id', session.user.id)
    .single();
  if (workoutError) throw workoutError;
  const { data: series, error: seriesError } = await getClient()
    .from('entrenamiento_series')
    .select('id,ejercicio_id,numero_serie,repeticiones,duracion_segundos,peso_kg,completada')
    .eq('entrenamiento_id', workoutId)
    .order('ejercicio_id', { ascending: true })
    .order('numero_serie', { ascending: true });
  if (seriesError) throw seriesError;
  const exerciseIds = [...new Set((series || []).map(s => s.ejercicio_id))];
  let exercises = [];
  if (exerciseIds.length) {
    const { data, error } = await getClient()
      .from('ejercicios')
      .select('id,nombre,tipo')
      .in('id', exerciseIds);

    if (error) throw error;
    exercises = data || [];
  }
  const exerciseNames = new Map(
    exercises.map(exercise => [String(exercise.id), exercise.nombre])
  );
  return {
    workout,
    series: (series || []).map(item => ({
      ...item,
      ejercicio_nombre:
        exerciseNames.get(String(item.ejercicio_id)) || 'Ejercicio sin nombre'
    }))
  };
}
  global.DeporSupabase = Object.freeze({ getSession, signIn, signOut, getExercises, saveWorkout, getWorkouts, getWorkoutDetails});
})(window);
