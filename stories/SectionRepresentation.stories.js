import SectionRepresentation from "@/components/contact/SectionRepresentation"

const Region = {
    title: "West",
    text: "<p>Resource LA<br>Office – 212 343 8085</p>",
    people: [
        { name: "Dana Balkin", email: "example@example.com" },
        { name: "Frank Antonoff", email: "example@example.com" },
    ],
}

export default {
    title: "Doomsday / SectionRepresentation",
}

export const Default = () => ({
    components: { SectionRepresentation },
    data() {
        return {
            regions: [
                { ...Region },
                { ...Region },
                { ...Region },
                { ...Region },
                { ...Region },
            ],
        }
    },
    template: `<section-representation :regions="regions" title="Representation" />`,
})
