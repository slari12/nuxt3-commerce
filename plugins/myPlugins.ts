export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    console.log("hello from plugin");
  });
});
