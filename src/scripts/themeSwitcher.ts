import { setTheme, setAccent } from "../utils/theme.ts";

const isActiveTheme = localStorage.getItem("theme") ?? "main";
const isActiveAccent = localStorage.getItem("accent") ?? "pine";

document.addEventListener("astro:page-load", () => {
  document
    .querySelectorAll<HTMLElement>("[data-theme-choice]")
    .forEach((btn) => {
      if (btn.dataset.themeChoice === isActiveTheme) {
        btn.classList.replace("border-border", "border-accent");
      }
      btn.addEventListener("click", () => {
        setTheme(btn.dataset.themeChoice!);
        document
          .querySelectorAll<HTMLElement>("[data-theme-choice]")
          .forEach((b) =>
            b.classList.replace("border-accent", "border-border"),
          );
        btn.classList.replace("border-border", "border-accent");
      });
    });

  document
    .querySelectorAll<HTMLElement>("[data-accent-choice]")
    .forEach((btn) => {
      if (btn.dataset.accentChoice === isActiveAccent) {
        btn.classList.replace("outline-none", "outline-accent");
      }
      btn.addEventListener("click", () => {
        setAccent(btn.dataset.accentChoice!);
        document
          .querySelectorAll<HTMLElement>("[data-accent-choice]")
          .forEach((b) =>
            b.classList.replace("outline-accent", "outline-none"),
          );
        btn.classList.replace("outline-none", "outline-accent");
      });
    });
});
