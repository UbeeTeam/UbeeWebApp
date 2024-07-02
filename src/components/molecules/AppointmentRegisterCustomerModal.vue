<script setup lang="ts">

</script>

<template>
    <p>Мы не нашли вас в базе данных наших пользователей. Давайте познакомимся!</p>
    <div class="my-3">
        <label for="userName" class="form-label">Как вас зовут?</label>
        <input type="email" class="form-control" id="userName" placeholder="ФИО">
        <p class="mb-2">Вы…</p>
        <div class="form-checkradio">
			<input type="radio" name="flexRadioDefault" id="flexRadioDefault1">
			<label for="flexRadioDefault1">мужчина</label>
		</div>
        <div class="mt-2 form-checkradio">
			<input type="radio" name="flexRadioDefault" id="flexRadioDefault2">
			<label for="flexRadioDefault2">женщина</label>
		</div>
    </div>
</template>