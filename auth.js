// ══════════════════════════════════════════════════════════
// AUTH.JS — Re:Quest Session Guard
// ══════════════════════════════════════════════════════════
const SUPABASE_URL = 'https://pvucciyqokblpmtitypr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dWNjaXlxb2tibHBtdGl0eXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNDQ4MzUsImV4cCI6MjA5MDkyMDgzNX0.1SM1WOaEP3ABa3k9rDT9TEvhXtDTtPi_N69aHm3Pz9A';

const { createClient } = supabase;
window.sb = createClient(SUPABASE_URL, SUPABASE_KEY);
window.currentUser = null;
window.userProfile = null;

function injectProfile(profile) {
  const el = document.getElementById('hp-player-name');
  if(el) el.textContent = (profile.pseudo || '').toUpperCase();
  const nav = document.getElementById('nav-pseudo');
  if(nav) nav.textContent = profile.pseudo || 'Profil';
  const avatar = document.getElementById('nav-avatar');
  if(avatar && profile.avatar_url) avatar.src = profile.avatar_url;
}

(async function() {
  const { data: { session } } = await window.sb.auth.getSession();
  if (!session) { window.location.href = 'login.html'; return; }
  window.currentUser = session.user;

  const { data: profile } = await window.sb.from('users_profiles')
    .select('*').eq('id', session.user.id).single();
  if (!profile) { window.location.href = 'profile-setup.html'; return; }

  window.userProfile = profile;

  // Inject pseudo dès que le DOM est prêt
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => injectProfile(profile));
  } else {
    injectProfile(profile);
  }

  // Réinjecter après un court délai au cas où script.js modifie le DOM
  setTimeout(() => injectProfile(profile), 500);

  document.getElementById('app-root')?.style.removeProperty('display');
})();

window.sb.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_OUT') { window.location.href = 'login.html'; }
});

window.supabaseSignOut = async function() {
  await window.sb.auth.signOut();
  window.location.href = 'login.html';
};
