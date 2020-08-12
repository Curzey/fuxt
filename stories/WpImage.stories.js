import WpImage from "@/components/WpImage"
import API from "@/static/db.json"

export default {
<<<<<<< HEAD
    title: "WpComponents / WpImage",
=======
    title: "WpComponents / WpImage"
>>>>>>> 63e94678f29bdae5971968424fabb81a06f42c58
}

export const Default = () => ({
    components: { WpImage },
    data() {
        return {
            image: API.image
        }
    },
    template: `<wp-image :image="image" />`
})

export const ImageWithVideo = () => ({
    components: { WpImage },
    data() {
        return {
            image: API.images[1]
        }
    },
    template: `<wp-image :image="image" />`
})
