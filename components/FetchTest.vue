<template>
    <div class="fetch-test">
        <h2>Fetch Test</h2>
        <ul>
            <li
                v-for="post of posts"
                :key="post.id"
            >
                <nuxt-link :to="`/posts/${post.id}`">
                    {{ post.title }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    async fetch() {
        this.posts = await this.$http.$get(
            "https://jsonplaceholder.typicode.com/posts"
        )
    },
    data() {
        return {
            posts: [],
        }
    },
    mounted() {
        console.log("hello world")
    },
}
</script>

<style lang="scss" scoped>
.fetch-test {
    h2 {
        // font-family: var(--font-secondary);
    }
}
</style>
