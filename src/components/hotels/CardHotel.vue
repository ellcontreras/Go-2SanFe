<template>
    <div class="card">
        <div class="card-content">
            <img :src="img">
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardHotel',
    props: {
        img: String
    }
}
</script>
