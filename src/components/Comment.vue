<template>
        <div class="card mt-1 mb-1">
            <div class="card-body row">
                <p class="col-11">{{text}}</p>
                <div class="time">
                    {{time.getDay()+1}}.{{time.getMonth()+1}}.{{time.getFullYear()}}
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Comment",
        props: {
            id: Number,
            time: Date,
            text: String
        },
    }
</script>

<style scoped>
    .time {
        color: #828282;
    }
</style>