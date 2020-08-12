import BlockContact from "@/components/block/Contact"

const Contact = {
    name: "Danielle Hinde",
    title: "Founder / Executive Producer",
    email: "danielle@doomsday.com",
}

export default {
    title: "BlockContact",
}

export const Default = () => ({
    components: { BlockContact },
    data() {
        return {
            contact: Contact,
        }
    },
    template: `<block-contact  :name="contact.name" :title="contact.title" :email="contact.email"/>`,
})
