// ══════════════════════════════════════════════════════════
// AUTH.JS — Re:Quest Session Guard
// À inclure AVANT script.js dans index.html
// ══════════════════════════════════════════════════════════

const SUPABASE_URL = 'https://pvucciyqokblpmtitypr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dWNjaXlxb2tibHBtdGl0eXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNDQ4MzUsImV4cCI6MjA5MDkyMDgzNX0.1SM1WOaEP3ABa3k9rDT9TEvhXtDTtPi_N69aHm3Pz9A';

// Init Supabase client (disponible globalement)
const { createClient } = supabase;
window.sb = createClient(SUPABASE_URL, SUPABASE_KEY);
window.currentUser = null;
window.userProfile = null;

// ── Session check ─────────────────────────────────────────
(async function() {
  const { data: { session } } = await window.sb.auth.getSession();

  if (!session) {
    window.location.href = 'login.html';
    return;
  }

  window.currentUser = session.user;

  // Load profile
  const { data: profile } = await window.sb.from('users_profiles')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (!profile) {
    window.location.href = 'profile-setup.html';
    return;
  }

  window.userProfile = profile;

  // Show app (was hidden during auth check)
  document.getElementById('app-root')?.style.removeProperty('display');

})();

// ── Listen for auth changes (logout, token refresh) ───────
window.sb.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_OUT') {
    window.location.href = 'login.html';
  }
});

// ── Logout function (appelable depuis l'app) ──────────────
window.logout = async function() {
  await window.sb.auth.signOut();
  window.location.href = 'login.html';
};
