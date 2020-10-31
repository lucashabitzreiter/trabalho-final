function iniciar() {
		// Altera o ícone da página (favicon) de acordo com o tema do sistema
	let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (matched) {
		document.querySelector("link[rel='shortcut icon']").href = "img/favicon-white.png";
	} else {
		document.querySelector("link[rel='shortcut icon']").href = "img/favicon-black.png";
	}
}