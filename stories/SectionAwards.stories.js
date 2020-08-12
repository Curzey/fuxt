import SectionAwards from "@/components/about/SectionAwards"

const Awards = [
    {
        total: 2,
        text: "BET awards",
    },
    {
        total: 20,
        text: "Clio awards",
    },
    {
        total: 13,
        text: "Cannes Lions",
    },
    {
        total: 5,
        text: "Webby Awards",
    },
    {
        total: 12,
        text: "Grammys",
    },
    {
        total: 5,
        text: "Latin Grammys",
    },
    {
        total: 8,
        text: "Cyclope Awards",
    },
    {
        total: 6,
        text: "Shorts Awards",
    },
    {
        total: 2,
        text: "Music Video Festival Brazil",
    },
    {
        total: 7,
        text: "Berlin Music Video Awards",
    },
]

export default {
    title: "SectionAwards",
}

export const Default = () => ({
    components: { SectionAwards },
    data() {
        return {
            awards: Awards,
        }
    },
    template: `<section-awards  :awards="awards" title="Awards" />`,
})
