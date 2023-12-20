// ===================================================================
// Sidebar navigation
// ===================================================================
document.addEventListener('DOMContentLoaded', function () {

    // Create shadow element
    const shadow = document.createElement('div');
    shadow.setAttribute('class', 'shadow');
    document.body.appendChild(shadow);

    // Close all functionallity to close active elements
    const closeAll = function () {
        document.querySelector('[data-sidebar-nav-active]').setAttribute('data-sidebar-nav-active', 'false');
        shadow.setAttribute('shadow-active', 'false');
    }

    // Listen for clicks
    document.addEventListener('click', function (event) {

        // Check if sidebar "open" button has been clicked
        if (event.target.hasAttribute('data-sidebar-open-btn') || event.target.closest('[data-sidebar-open-btn]')) {
            document.querySelector('[data-sidebar-nav-active]').setAttribute('data-sidebar-nav-active', 'true');
            shadow.setAttribute('shadow-active', 'true');
        }

        // Check if sidebar "close" button has been clicked
        if (event.target.hasAttribute('data-sidebar-close-btn') || event.target.closest('[data-sidebar-close-btn]')) {
            closeAll();
        }

        // Check if the shadow has been clicked
        if (event.target.hasAttribute('shadow-active') || event.target.closest('[shadow-active]')) {
            closeAll();
        }
    });
});
