import PanelMenu from "@/components/site/PanelMenu"
import API from "@/static/db.json"

let menuItem = {
    ...API.menuItems.nodes[0],
}

const mainMenu = [
    {
        ...menuItem,
        label: "Directors",
    },
    {
        ...menuItem,
        label: "Work",
    },
    {
        ...menuItem,
        label: "About",
    },
    {
        ...menuItem,
        label: "News",
    },
    {
        ...menuItem,
        label: "Contact",
    },
]

export default {
    title: "Doomsday / PanelMenu",
}

export const Default = () => ({
    components: { PanelMenu },
    data() {
        return {
            api: API,
            mainMenu: mainMenu,
        }
    },
    template: `<panel-menu :mainMenu="mainMenu" />`,
})