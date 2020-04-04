document.addEventListener("DOMContentLoaded",()=>{

    const a = ["Senglar", "Esquirol", "Ca", "Llop", "Gos", "Gat", "Rovelló", "Pardal","Mussol","Gall","Poll","Teixó","Talp","Talpó", "Marrà", "Cabrit","Cabirol","Isard","Xai","Vedell","Garrí","Porc", "Ase","Ruc","Poltre","Cargol", "Llimac", "Escarbat", "Dragonet"];
    const b = ["Just","Foll", "Enfollit", "Boig", "Torbat", "Irat", "Esquerp", "Feréstec", "Sorrut", "Rabiós", "Joiós", "Alegre", "Ebri", "Torbat", "Enrarit", "Calmat", "Moderat", "Assenyat", "Serè", "Despert","Veloç", "Just","Penedit", "Coratjós", "Afalagat", "Temperat", "Inquiet", "Gelat", "Calent", "Ardent", "Fervent", "Assenyat", "Exigent", "Furibund", "Esgarrifós", "Brut","Polit","Immaculat","Sanguinari","Cruel","Impacient","Brut","Llardós","Esbudellador","Fulminant","Prolífic","Generós","Erudit","Esquifit","Moix","Trist","Ensopit","Pansit"];

    const meteo = [ "Llamp","Tro","Esclafit","Vent","Ruixat"];
    const objectes = ["Mànec","Mall","Martell","Bat","Roc","Bastó","Ganivet","Trabuc","Fusell"];

var app = new Vue({
    el: '#app',
    data: {
      nom: ''
    },
    methods: {
      operacio: function () {
        const aN = Math.ceil(Math.random()*a.length-1);
        const bN = Math.ceil(Math.random()*b.length-1);
        console.log(aN);
        console.log(bN);
        this.nom =`${a[aN]} ${b[bN]}`
      }
    }
  })


})