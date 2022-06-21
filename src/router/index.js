import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeVue.vue";
import About from "../views/AboutVue.vue";
import Contact from "../views/ContactVue.vue";
import EditNote from "../views/notes/EditVue.vue";
import NewNote from "../views/notes/CreateVue.vue";
import TableOfNote from "../views/notes/TableVue.vue";
import ShowTheNote from "../views/notes/ShowVue.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "pages.about",
    component: About,
  },
  {
    path: "/contact",
    name: "pages.contact",
    component: Contact,
  },
  {
    path: "/notes/create",
    name: "notes.create",
    component: NewNote,
  },
  {
    path: "/notes/table",
    name: "notes.table",
    component: TableOfNote,
  },
  {
    path: "/notes/:noteSlug/table",
    name: "notes.show",
    component: ShowTheNote,
  },
  {
    path: "/notes/:noteSlug/edit",
    name: "notes.edit",
    component: EditNote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
