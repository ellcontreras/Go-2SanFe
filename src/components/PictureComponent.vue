<template>
    <div class="card">
        <div class="card-content has-text-centered">
            <h2 class="subtitle is-2">Fotos</h2>
            <carousel>
                <slide>
                    <img class="image" src="../assets/1.jpg" alt="">
                </slide>
                <slide>
                    <img class="image" src="../assets/2.jpg" alt="">
                </slide>
                <slide>
                    <img class="image" src="../assets/3.jpg" alt="">
                </slide>
                <slide>
                    <img class="image" src="../assets/4.jpg" alt="">
                </slide>
                <slide>
                    <img class="image" src="../assets/5.jpg" alt="">
                </slide>
                <slide>
                    <img class="image" src="../assets/6.jpg" alt="">
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PictureComponent',
    data() {
        return {
            img: [1, 2, 3, 4, 5, 6]
        }
    }
}
</script>
