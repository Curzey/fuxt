import BlockWork from "@/components/block/Work"
import API from "@/static/db.json"

export default {
    title: "Doomsday / BlockWork",
}

export const Default = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API,
        }
    },
    template: `<block-work
                :image="api.images[0]"
                title="HP - Meant To Move"
                credit="Yoni Lappin"
                to="" />`,
})
