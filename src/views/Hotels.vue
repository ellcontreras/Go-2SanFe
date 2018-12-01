<template>
    <div>
        <br>
        <h2 class="title is-2 has-text-centered">Hoteles</h2>
        <div class="card">
            <div class="card-content has-text-centered">
                <div class="column is-3">
                    <img src="../assets/imagen8.jpg">
                </div>
                <div class="column is-9">
                    <p><b>Hotel La Luz</b></p>
                    <p><b>Precio: </b>$250 la noche.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-content has-text-centered">
                <div class="column is-3">
                    <img src="../assets/images6.jpg">
                </div>
                <div class="column is-9">
                    <p><b>Hotel La Posada</b></p>
                    <p><b>Precio: </b>$300 la noche.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardHotel from '@/components/hotels/CardHotel.vue'

export default {
    name: 'Hotels',
    components: {
        CardHotel
    }
}
</script>
