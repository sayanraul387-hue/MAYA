import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://qepyxcepuatqlmqolrvy.supabase.co";
const SUPABASE_KEY = "sb_publishable_QKq1AjqnBye6MPl3afvfOw_h1UPQr9i";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


// Login check
const {
  data: { session }
} = await supabase.auth.getSession();


// Login না করা থাকলে login page-এ পাঠাবে
if (!session) {
  window.location.href = "login.html";
}


// Logout
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {

  await supabase.auth.signOut();

  window.location.href = "login.html";

});


// Start Quiz
const startQuizBtn = document.getElementById("startQuizBtn");

startQuizBtn.addEventListener("click", () => {

window.location.href = "quiz.html";

});