import BlockFeatured from "@/components/block/Featured"
import API from "@/static/db.json"

export default {
    title: "Doomsday / BlockFeatured",
}

export const Default = () => ({
    components: { BlockFeatured },
    data() {
        return {
            api: API,
        }
    },
    template: `<block-featured
                :imagePrimary="api.images[0]"
                :imageSecondary="api.images[1]"
                title="HP - Meant To Move"
                credit="Yoni Lappin"
                to="" />`,
})
