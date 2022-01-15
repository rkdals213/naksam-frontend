<template>
    <div>
        this is community component
        <br>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Community",
    mounted() {
        this.getCommunity()
    },
    methods: {
        getCommunity() {
            axios.get('/community', {
                params: {
                    name: '',
                    categoryId: 1
                }
            }).then(res => {
                console.log(res.data.content)
            })
        }
    }
}
</script>

<style scoped>

</style>