function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(function (tab) {
        tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");

    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth < 768) {
        sidebar.classList.remove("open");
    }
}

function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

document.documentElement.setAttribute("data-theme", "light");