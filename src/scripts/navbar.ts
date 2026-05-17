document.addEventListener("astro:page-load", () => {
  const trigger = document.getElementById("sidebar-trigger");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  const closeBtn = document.getElementById("sidebar-close");

  function openSidebar() {
    sidebar?.classList.add("open");
    backdrop?.classList.add("open");
  }

  function closeSidebar() {
    sidebar?.classList.remove("open");
    backdrop?.classList.remove("open");
  }

  trigger?.addEventListener("click", openSidebar);
  backdrop?.addEventListener("click", closeSidebar);
  closeBtn?.addEventListener("click", closeSidebar);
});
