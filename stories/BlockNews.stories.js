import BlockNews from "@/components/block/News"
import API from "@/static/db.json"

export default {
    title: "Doomsday / BlockNews",
}

export const Default = () => ({
    components: { BlockNews },
    data() {
        return {
            api: API,
        }
    },
    template: `<block-news
                :image="api.images[1]"
                title="Why Doomsday Entertainment Is a Much Nicer Production Company than the Name Suggests"
                date="2020-06-03T14:14:01"
                to="" />`,
})
