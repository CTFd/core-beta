import CTFd from "../index";

export default () => {
  const form = document.getElementById("language-switch");
  form.addEventListener("submit", async e => {
    // Do not open API page
    e.preventDefault();

    // Set language cookie
    const data = new FormData(form);
    const language = data.get("language");
    document.cookie = `language=${language};SameSite=Lax`;

    // Set user language preference if logged in
    if (CTFd.user.id) {
      await CTFd.fetch("/api/v1/users/me", {
        method: "PATCH",
        body: JSON.stringify({ language }),
      });
    }

    // Reload with new language
    window.location.reload();
  });

  document.querySelectorAll("#language-switch input[type='radio']").forEach(el => {
    el.addEventListener("change", e => {
      form.requestSubmit();
    });
  });
};
