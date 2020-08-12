import SlideshowWork from "@/components/work/SlideshowWork"
import API from "@/static/db.json"

export default {
    title: "SlideshowWork",
}

export const Default = () => ({
    components: { SlideshowWork },
    data() {
        return {
            images: API.images,
        }
    },
    template: `<slideshow-work  :images="images"/>`,
})
