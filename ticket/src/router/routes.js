const Ticket = () =>
  import( "@/pages/Ticket.vue");
const All = () =>
  import( "@/pages/All.vue");

const routes = [
  {
    path: "/",
    name: "index",
    component: All
  },
  {
    path: "/ticket",
    name: "ticket",
    component: Ticket
  },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
