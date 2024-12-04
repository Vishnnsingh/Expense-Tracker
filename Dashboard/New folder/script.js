const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})




document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header a");
    const sections = document.querySelectorAll("#mains");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default anchor behavior
            const targetPage = link.getAttribute("data-page");

            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the target section
            const targetSection = document.querySelector(`.content-section[data-page="${targetPage}"]`);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".side-menu a");
    const mainContent = document.querySelector("main");

    // Pages data (could also be fetched from the server)
    const pages = {
        "general-purpose": `<h1>General Purpose Dashboard</h1><p>Welcome to the General Purpose dashboard.</p>`,

        "currency-converter": 
		` <h1>Currency Converter</h1>
    <div id="cc">
      <form id="converterForm">
        <label for="amount">Enter Amount: </label>
        <input type="number" id="amount" placeholder="Enter amount" required />
        <br>
        <label for="fromCurrency">From: </label>
        <select id="fromCurrency">
          <option value="INR">Indian Rupee (₹)</option>
          <option value="USD">US Dollar ($)</option>
          <option value="EUR">Euro (€)</option>
          <option value="GBP">British Pound (£)</option>
        </select>

        <label for="toCurrency">To: </label>
        <select id="toCurrency">
          <option value="INR">Indian Rupee (₹)</option>
          <option value="USD">US Dollar ($)</option>
          <option value="EUR">Euro (€)</option>
          <option value="GBP">British Pound (£)</option>
        </select>

        <button type="submit">Convert</button>
      </form>

      <div id="result">
        <h2>Converted Amount:</h2> <br>
        <p id="convertedAmount">₹0.00</p>
      </div>
    </div>
    `,
	  "ai-financial-advisor": `
	   <nav class="navbar">
        <h3 class="navbar__logo">Ai Financial Advisor</h3>
        <button class="navbar__button" id="themeToggler"><i class='bx bx-sun'></i></button>
    </nav>

    <header class="header">
        <div class="header__title">
            <h1>Hello, There!</h1>
            <h2>How can I help you today?</h2>
        </div>
        <div class="suggests">
            <div class="suggests__item">
                <p class="suggests__item-text">
                    Give tips on helping kids finish their homework on time
                </p>
                <div class="suggests__item-icon">
                    <i class='bx bx-stopwatch'></i>
                </div>
            </div>
            <div class="suggests__item">
                <p class="suggests__item-text">
                    Help me write an out-of-office email
                </p>
                <div class="suggests__item-icon">
                    <i class='bx bx-edit-alt'></i>
                </div>
            </div>
            <div class="suggests__item">
                <p class="suggests__item-text">
                    Give me phrases to learn a new language
                </p>
                <div class="suggests__item-icon">
                    <i class='bx bx-compass'></i>
                </div>
            </div>
            <div class="suggests__item">
                <p class="suggests__item-text">
                    Show me how to build something by hand
                </p>
                <div class="suggests__item-icon">
                    <i class='bx bx-wrench'></i>
                </div>
            </div>
        </div>
    </header>

    <section class="chats"></section>

    <section class="prompt">
        <form action="#" class="prompt__form" novalidate>
            <div class="prompt__input-wrapper">
                <input type="text" placeholder="Enter a prompt here" class="prompt__form-input" required>
                <button class="prompt__form-button" id="sendButton">
                    <i class='bx bx-send'></i>
                </button>
                <button class="prompt__form-button" id="deleteButton">
                    <i class='bx bx-trash'></i>
                </button>
            </div>
        </form>
        <p class="prompt__disclaim">
            Gemini may display inaccurate info, including about people, so double-check its responses.
        </p>
    </section>
	  `,
    };
	
	

    function loadCSS(cssFilePath) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssFilePath;
        document.head.appendChild(link);
    }
	
	function loadJS(jsFilePath) {
        const script = document.createElement("script");
        script.src = jsFilePath;
        script.defer = true;
        document.head.appendChild(script);
    }
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default link behavior
            const page = link.getAttribute("data-page");

            // Dynamically load the CSS file for the currency-converter page
            if (page === "currency-converter") {
                loadCSS("../Dashboard/Currency_Convertor/style.css");
				loadJS("../Dashboard/Currency_Convertor/script.js"); 
            }else if (page === "ai-financial-advisor") {
                loadCSS("../Dashboard/Ai_Financial_Advisor/style.css"); // Replace with correct path
                loadJS("../Dashboard/Ai_Financial_Advisor/script.js");   // Replace with correct path
            }

            mainContent.innerHTML = pages[page] || `<h1>Page Not Found</h1><p>The requested page does not exist.</p>`;
        });
    });
});
