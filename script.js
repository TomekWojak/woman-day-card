const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const terminalBody = document.querySelector(".terminal-body");
const audio = document.getElementById("clickSound");
const sendButton = document.getElementById("send-btn");
let processing = false;
const codeBtn = document.querySelector(".codeBtn");
const codePopup = document.querySelector(".code-popup");
const CODE = "YOU-ARE-AMAZING-01";
if (isMobile) {
	sendButton.style.display = "inline-block";
} else {
	sendButton.style.display = "none";
}
const scrollToBottom = () => {
	terminalBody.scrollTop = terminalBody.scrollHeight;
};
const focusInputAutomatically = () => {
	const input = document.querySelector(".active");
	addListener(input);
	input.focus();
};

const lockInput = () => {
	const input = document.querySelector(".active");
	input.setAttribute("readonly", "true");
};

let currentStep = 0;

const handleInput = () => {
	const input = document.querySelector(".active");
	if (!input) return;

	const command = input.value.trim().toLowerCase();

	if (currentStep === 0 && command === "start") {
		lockInput();
		currentStep = 1;
		launchFirstStep();
	} else if (currentStep === 1 && command === "vibe") {
		lockInput();
		currentStep = 2;
		launchSecondStep();
	} else if (currentStep === 2 && command === "konfetti") {
		lockInput();
		currentStep = 3;
		launchThirdStep();
	} else if (currentStep === 3 && command === "róża") {
		lockInput();
		currentStep = 4;
		launchFifthStep();
	} else if (currentStep === 4 && command === "analiza") {
		lockInput();
		currentStep = 5;
		launchSixStep();
	}
};

const launchFirstStep = async () => {
	if (processing) return;
	processing = true;

	terminalBody.append(createLoadingAlert("Przygotowywanie kwiatów 💐"));
	await wait(4000);
	terminalBody.append(createLoadingAlert("Generowanie komplementów 🥰"));
	await wait(4000);
	terminalBody.append(createStaticAlert("Gotowe ❤️"));
	terminalBody.append(
		createStaticAlert(
			`Wpisz <span class="text-[#ff4d6d] accent font-semibold">vibe</span> żeby poczuć klimat 🔊`,
		),
	);
	deleteAllLoadingSquares();

	terminalBody.append(createInput());

	focusInputAutomatically();

	processing = false;
};

const launchSecondStep = async () => {
	if (processing) return;
	processing = true;

	terminalBody.append(createLoadingAlert("Ustawiam nastrój 🎵"));
	await wait(4000);
	audio.play();
	terminalBody.append(createStaticAlert("Gotowe, wsłuchaj się 🎧"));
	scrollToBottom();
	terminalBody.append(
		createStaticAlert(
			`Wpisz <span class="text-[#ff4d6d] accent font-semibold">konfetti</span> aby uczcić ten dzień 🎉`,
		),
	);
	deleteAllLoadingSquares();
	terminalBody.append(createInput());

	focusInputAutomatically();

	processing = false;
};
const launchThirdStep = async () => {
	if (processing) return;
	processing = true;

	Draw();
	terminalBody.append(createStaticAlert("🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳"));
	scrollToBottom();
	await wait(5000);
	terminalBody.append(
		createStaticAlert(
			`Wpisz <span class="text-[#ff4d6d] accent font-semibold">róża</span> aby otrzymać wirtualną różę 🌹 `,
		),
	);
	deleteAllLoadingSquares();
	terminalBody.append(createInput());

	focusInputAutomatically();
	processing = false;
};

const launchFifthStep = async () => {
	if (processing) return;
	processing = true;
	const rose = document.querySelector(".rose");
	rose.classList.remove("scale-0");
	rose.classList.add("animate-[roseMove_2s_ease-in-out_infinite_alternate]");
	terminalBody.append(createStaticAlert("Dla Ciebie 😉"));
	scrollToBottom();
	await wait(3000);
	terminalBody.append(
		createStaticAlert(
			`Wpisz <span class="text-[#ff4d6d] accent font-semibold"> analiza</span> aby rozpocząć proces weryfikacji 🔐`,
		),
	);
	deleteAllLoadingSquares();
	terminalBody.append(createInput());

	focusInputAutomatically();
	processing = false;
};
const launchSixStep = async () => {
	if (processing) return;
	processing = true;

	terminalBody.append(
		createLoadingAlert("[1/4] Analiza poziomu uroku użytkowniczki"),
	);
	scrollToBottom();
	await wait(5000);
	terminalBody.append(
		createLoadingAlert("[2/4] Weryfikacja unikalności sygnatury uśmiechu"),
	);
	scrollToBottom();
	await wait(5000);
	terminalBody.append(
		createLoadingAlert("[3/4] Testowanie odporności serwera na Twój urok"),
	);
	scrollToBottom();
	await wait(5000);
	terminalBody.append(
		createLoadingAlert("[4/4] Synchronizacja z energią użytkowniczki"),
	);
	scrollToBottom();
	await wait(5000);
	terminalBody.append(
		createStaticAlert(
			'<span class="text-[#ff4d6d] font-semibold tracking-wide">Błąd krytyczny:</span> Poziom uroku przekracza normy systemowe.',
		),
	);
	deleteAllLoadingSquares();
	scrollToBottom();
	await wait(4000);
	terminalBody.append(
		createLoadingAlert("Generowanie indywidualnego klucza dostępu"),
	);
	scrollToBottom();
	await wait(5000);
	terminalBody.append(createStaticAlert("Oto twój klucz dostępu: "));
	terminalBody.append(
		createStaticAlert(`<span class="text-white font-semibold">${CODE}</span>`),
	);
	scrollToBottom();
	deleteAllLoadingSquares();

	await wait(5000);

	showCodePopup();
	processing = false;
};
const launchSeventhStep = async () => {
	if (processing) return;
	processing = true;

	terminalBody.append(
		createStaticAlert("Pomyślnie przeszłaś proces weryfikacji 🥳"),
	);
	scrollToBottom();
	await wait(3000);
	terminalBody.append(
		createLoadingAlert("Ładowanie specjalnej wiadomości dla Ciebie"),
	);
	scrollToBottom();
	await wait(4000);
	showFinalImg();
	await wait(5000);

	deleteAllLoadingSquares();
	focusInputAutomatically();
	processing = false;
};
const showCodePopup = () => {
	codePopup.classList.add("flex");
	codePopup.classList.remove("hidden");
	codePopup.classList.remove("opacity-0");
};
const showFinalImg = () => {
	const blurredPopup = document.querySelector(".blurred-popup");
	blurredPopup.classList.remove("hidden");
	blurredPopup.classList.remove("opacity-0");
};
const deleteAllLoadingSquares = () => {
	document
		.querySelectorAll(".dot")
		.forEach((dot) => (dot.style.display = "none"));
};

const createInput = () => {
	document
		.querySelectorAll(".active")
		.forEach((activeInput) => activeInput.classList.remove("active"));

	const inputBox = document.createElement("div");
	const sign = document.createElement("p");
	const input = document.createElement("input");

	input.autocomplete = "off";
	input.autocapitalize = "off";
	input.spellcheck = "false";
	input.type = "text";
	input.id = "entry";

	addClasses(input, [
		"active",
		"entry",
		"w-full",
		"h-6",
		"caret-[#ff4d6d]",
		"focus-visible:outline-0",
		"outline-0",
		"font-hacker",
		"select-none",
	]);
	addClasses(inputBox, [
		"input-box",
		"flex",
		"justify-between",
		"items-center",
		"gap-2",
		"w-full",
	]);
	addClasses(sign, ["pointer-events-none", "select-none", "md:text-lg"]);

	sign.textContent = ">";

	inputBox.append(sign, input);

	return inputBox;
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const createStaticAlert = (text) => {
	const alertOption = document.createElement("p");
	addClasses(alertOption, ["static-text"]);
	alertOption.innerHTML = text;

	return alertOption;
};

const createLoadingAlert = (text) => {
	const alertOption = document.createElement("p");
	const dotsContainer = document.createElement("div");

	const dot1 = document.createElement("span");
	const dot2 = document.createElement("span");
	const dot3 = document.createElement("span");

	addClasses(dotsContainer, ["flex", "space-x-1", "mt-2"]);
	addClasses(dot1, [
		"dot",
		"w-1",
		"aspect-square",
		"bg-[#ffd6e0]",
		"animate-[dotPulse_0.5s_ease-in-out_infinite_alternate]",
	]);
	addClasses(dot2, [
		"dot",
		"w-1",
		"aspect-square",
		"bg-[#ffd6e0]",
		"animate-[dotPulse_0.5s_0.2s_ease-in-out_infinite_alternate]",
	]);
	addClasses(dot3, [
		"dot",
		"w-1",
		"aspect-square",
		"bg-[#ffd6e0]",
		"animate-[dotPulse_0.5s_0.4s_ease-in-out_infinite_alternate]",
	]);
	addClasses(alertOption, ["loading-text", "flex", "items-center", "gap-1"]);

	alertOption.innerHTML = text;
	dotsContainer.append(dot1, dot2, dot3);
	alertOption.append(dotsContainer);

	return alertOption;
};

const addListener = (input) => {
	input.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			handleInput();
		}
	});
};
sendButton?.addEventListener("click", handleInput);
focusInputAutomatically();

const addClasses = (element, classes = []) => {
	classes.forEach((cls) => {
		element.classList.add(cls);
	});
};

const handleCodeBtn = async (e) => {
	const input = document.getElementById("accesInput");
	const error = document.querySelector(".error");
	const btn = e.target;
	error.textContent = "";
	btn.textContent = "";
	const loadingText = createLoadingAlert("Weryfikacja 😏");
	loadingText.classList.add("justify-center");
	btn.append(loadingText);
	btn.setAttribute("disabled", "true");
	await wait(3000);

	if (input) {
		if (input.value.trim().toLowerCase() === CODE.toLowerCase()) {
			codePopup.classList.add("scale-0");
			launchSeventhStep();
		} else {
			error.classList.remove("hidden");
			error.textContent = "Błędny klucz";
		}
	}
	btn.removeAttribute("disabled");
	btn.textContent = "Zweryfikuj";
};

codeBtn.addEventListener("click", (e) => handleCodeBtn(e));

let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 130;
const particles = [];

const possibleColors = [
	"DodgerBlue",
	"OliveDrab",
	"Gold",
	"Pink",
	"SlateBlue",
	"LightBlue",
	"Gold",
	"Violet",
	"PaleGreen",
	"SteelBlue",
	"SandyBrown",
	"Chocolate",
	"Crimson",
];

function randomFromTo(from, to) {
	return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
	this.x = Math.random() * W; // x
	this.y = Math.random() * H - H; // y
	this.r = randomFromTo(11, 33); // radius
	this.d = Math.random() * maxConfettis + 11;
	this.color =
		possibleColors[Math.floor(Math.random() * possibleColors.length)];
	this.tilt = Math.floor(Math.random() * 33) - 11;
	this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
	this.tiltAngle = 0;

	this.draw = function () {
		context.beginPath();
		context.lineWidth = this.r / 2;
		context.strokeStyle = this.color;
		context.moveTo(this.x + this.tilt + this.r / 3, this.y);
		context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
		return context.stroke();
	};
}

function Draw() {
	const results = [];

	// Magical recursive functional love
	requestAnimationFrame(Draw);

	context.clearRect(0, 0, W, window.innerHeight);

	for (var i = 0; i < maxConfettis; i++) {
		results.push(particles[i].draw());
	}

	let particle = {};
	let remainingFlakes = 0;
	for (var i = 0; i < maxConfettis; i++) {
		particle = particles[i];

		particle.tiltAngle += particle.tiltAngleIncremental;
		particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
		particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

		if (particle.y <= H) remainingFlakes++;

		// If a confetti has fluttered out of view,
		// bring it back to above the viewport and let if re-fall.
		if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
			particle.x = Math.random() * W;
			particle.y = -30;
			particle.tilt = Math.floor(Math.random() * 10) - 20;
		}
	}

	return results;
}

window.addEventListener(
	"resize",
	function () {
		W = window.innerWidth;
		H = window.innerHeight;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	},
	false,
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
	particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
