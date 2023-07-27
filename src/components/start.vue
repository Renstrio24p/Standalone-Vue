<script setup>
import { ref } from 'vue';

defineProps({
	msg: String,
	desc: String,
});

const count = ref(0);
</script>

<template>
	<div class="d-flex-column">
		<div class="d-flex-align-center">
			<a href="https://vuejs.org">
				<img class="vue-logo" src="vue.svg" alt="vue logo" />
			</a>
			<div class="d-flex-column">
				<h1>{{ msg }}</h1>
				<p class="desc">{{ desc }}</p>
				<div class="button-div">
					<button class="button" type="button" @click="count++">
						count is {{ count }}
					</button>
				</div>
			</div>
			<a href="https://webpack.js.org"></a>
			<img class="webpack-logo" src="webpack.png" alt="webpack logo" />
		</div>
		<footer class="footer">
			<p class="version">Version 1.0.2</p>
			<div class="github-div">
				<img class="github-logo" src="github.png" alt="github logo" />
				<p class="codespace-text">Codespace</p>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.d-flex-align-center {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
}

.d-flex-between {
	width: 100%;
	padding: 10px;
	display: flex;
	justify-content: space-between;
}

.d-flex-gap-5 {
	display: flex;
	gap: 5px;
	align-items: center;
	justify-content: center;
}

.vue-logo,
.webpack-logo,
.github-logo {
	width: 20vh;
	will-change: filter;
	transition: filter 300ms;
}

.vue-logo:hover,
.webpack-logo:hover,
.github-logo:hover {
	width: 20vh;
	filter: drop-shadow(0 0 2em #54d654fb);
}

.d-flex-column {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.button-div {
	padding: 30px 40px;
}

.button {
	padding: 10px 15px;
	will-change: filter;
	transition: filter 300ms;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.button:hover {
	filter: drop-shadow(0 0 2em #54d654fb);
	background-color: rgb(88, 240, 88);
	transition: 0.5s;
}

.footer {
	position: absolute;
	bottom: 5px;
	width: 100%;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.github-div {
	display: flex; /* Add display:flex to align items side by side */
	align-items: center;
	width: fit-content;
}

.github-logo {
	width: 20vh;
	margin-right: 5px;
	filter: drop-shadow(0 0 1em #fcfcfcfb);
}

.codespace-text {
	margin: 0; /* Reset the default margin for the <p> element */
}

@media screen and (max-width: 952px) {
	.d-flex-align-center {
		flex-direction: column;
	}

	.desc {
		width: 100%;
	}
}

@media screen and (max-width: 399px) {
	.github-logo {
		width: 20vw;
	}

	h1 {
		font-size: 10vw;
	}
}
</style>
