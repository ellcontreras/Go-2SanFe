<template>
    <div class="container">
        <div v-for="(c, k) of couriosities" :key="k">
            <p><b>{{ c.title }}</b></p>
            <p>{{ c.content }}</p>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Couriosities',
    data() {
        return {
            couriosities: [
                {
                    title: 'En San Felipe vivió Miguel Hidalgo',
                    content: `Miguel Hidalgo durante un tiempo fue Sr. Cura de San Felipe
                    y vivió en la calle Hidalgo #121`
                },
                {
                    title: 'La Feria de San Miguel',
                    content: `En el mes de Septiembre se celebra la feria de San Miguel Arcangel
                    desde el 21 al 29 del mes`
                },
                {
                    title: 'El Indio',
                    content: `El indio es un monumento que representa ...`
                }
            ]
        }
    }
}
</script>
