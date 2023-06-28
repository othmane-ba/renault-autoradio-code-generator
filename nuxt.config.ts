// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  head: {
    title: "fullstack-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  modules: ["@nuxtjs/tailwindcss"],
};
