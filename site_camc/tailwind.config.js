/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background-initial': "./public/backgroundModel.png",
      },
      content: {
        'logo-jornada': "url('https://static.wixstatic.com/media/48eda6_71c4d245ff094ec7aeaeaca82b827744~mv2.png/v1/crop/x_0,y_420,w_1080,h_320/fill/w_799,h_237,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20(3).png')",
      },
    },
  },
  plugins: [],
}

