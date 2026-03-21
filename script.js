// JavaScript Created Powerfully

// Wait until the DOM is fully loaded
//document.addEventListener('DOMContentLoaded', () => {
    //console.log('DOM fully loaded and parsed');
  
    // Initialize app
    //initApp();
  //});
  
  // ========== App Initialization ==========
  //function initApp() {
    // Example: Attach events, fetch data, etc.
    // setupEventListeners();
    // fetchData(); // Example function if you plan to use APIs
  //}
  
  // ========== Event Listeners ==========
  /* Set the width of the sidebar to 500px and the right margin of the page content to 500px */
  function openNav() {
    document.getElementById("site-links").style.width = "100%";
    document.getElementById("openButton").ariaExpanded = true;
    document.getElementById("site-links").ariaHidden = false;
  }
  /* Set the width of the sidebar to 0 and the right margin of the page content to 0 */
  function closeNav() {
    document.getElementById("site-links").style.width = "0px";
    document.getElementById("openButton").ariaExpanded = false;
    document.getElementById("site-links").ariaHidden = true;
  }
  // ========== Utility Function ==========
  // Dutch localization
  flatpickr.localize({
      weekdays: {
          shorthand: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
          longhand: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag']
      },
      months: {
          shorthand: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
          longhand: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December']
      },
      firstDayOfWeek: 1,        // Monday as first day
      locale: "nl",             // must load script for the Dutch locale file, included in index.html
      rangeSeparator: " tot ",
      scrollTitle: "Scroll om te veranderen",
      toggleTitle: "Klik om te wisselen"
  });
  // Initialize Flatpickr
  flatpickr("#datum", {
      dateFormat: "Y-m-d",           // hidden value format (good for form submission)
      altInput: true,                // creates a second visible input for nice formatting
      altFormat: "d F Y",            // nice display: "18 Maart 2025"
      placeholder: "Kies een datum...", 
      disableMobile: true,           // forces Flatpickr calendar on iOS/Android (prevents native half-size issue)
      allowInput: false,             // optional: prevents typing
      // clickOpens: true,           // default is true
  });
  