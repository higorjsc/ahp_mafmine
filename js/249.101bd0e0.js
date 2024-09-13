"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[249],{361:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var i=r(252);const s={class:"container-tabview"};function o(e,t,r,o,a,n){const l=(0,i.up)("vuePrimeiraPersonalizado");return(0,i.wg)(),(0,i.iD)("section",s,[(0,i.Wm)(l)])}var a=r(577);const n={class:"section-esquerda"},l={key:0,class:"container-esquerda"},c={class:"section-direita section-direita-primeira"},u={class:"container-matriz-vetor",id:"matriz"},h={class:"container-vetor-cons"};function d(e,t,r,s,o,d){const m=(0,i.up)("vueMenuAhp"),p=(0,i.up)("vueSlider"),g=(0,i.up)("vueMatriz"),v=(0,i.up)("vueVetor"),z=(0,i.up)("vueConsistencia");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m),(0,i._)("section",n,[(0,i._)("h3",null,(0,a.zw)(d.matrizAtual),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.criteriosPrimeira,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[e===d.matrizAtual?((0,i.wg)(),(0,i.iD)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.sliderStore[0],((e,r)=>((0,i.wg)(),(0,i.j4)(p,{key:r,id:`${r}`,classe:`${t}`,name:`slider-${t+1}-${r+2}`,texto:e.texto,valor:o.sliderStore[t][r].valor,onSliderValue:d.handleInputValue},null,8,["id","classe","name","texto","valor","onSliderValue"])))),128))])):(0,i.kq)("",!0)])))),128))]),(0,i._)("section",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.criteriosPrimeira,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"container-direita",key:t},[(0,i._)("h3",null,(0,a.zw)(e),1),(0,i._)("div",u,[(0,i.Wm)(g,{idMatriz:e,optionMatriz:d.optionsPrimeira,valueMatriz:d.matrizValores[t],onClick:t=>d.trocaMatrizInputAtual(e)},null,8,["idMatriz","optionMatriz","valueMatriz","onClick"]),(0,i._)("div",h,[(0,i.Wm)(v,{tituloVetor:"Peso",idVetor:e,valueVetor:d.vetorPeso(t),onClick:t=>d.trocaMatrizInputAtual(e)},null,8,["idVetor","valueVetor","onClick"]),(0,i.Wm)(z,{RI:d.consistencia(t,"ri"),CI:d.consistencia(t,"ci"),CR:d.consistencia(t,"cr"),lambda:d.consistencia(t,"lambda")},null,8,["RI","CI","CR","lambda"])])])])))),128))])],64)}var m=r(958),p=r(469),g=r(483),v=r(350),z=r(112),f=r(486),M=r(713),P=r(755);const S={name:"vue-primeira-etapa",components:{vueSlider:m.Z,vueMatriz:p.Z,vueVetor:g.Z,vueConsistencia:v.Z,vueMenuAhp:P.Z},mixins:[z.Z],data(){return{sliderValue:[],sliderStore:[],vetorPesos:[]}},computed:{matrizAtual(){return this.$store.getters.currentMatrizInputAtual},matrizValores(){return this.$store.getters.currentMatrizPrimeira},slideres(){return this.$store.getters.currentSlideresPrimeira},criteriosPrimeira(){return this.$store.getters.currentCriteriosLabelPrimeira},optionsPrimeira(){return this.$store.getters.currentOptionsSimboloPrimeira}},created(){this.sliderStore=this.$store.getters.currentSlideresPrimeira,this.changeMatrix(),this.$store.dispatch("changeMatrizInputAtual",this.criteriosPrimeira[0])},mounted(){this.changeMatrixColor(),setTimeout((()=>{this.hoverSlider("primeira")}),200)},beforeUnmount(){this.$store.dispatch("changeSlideresPrimeira",this.sliderStore),this.changeMatrix()},methods:{trocaMatrizInputAtual(e){this.$store.dispatch("changeMatrizInputAtual",e),this.$store.dispatch("changeSlideresPrimeira",this.sliderStore),this.changeMatrixColor(e),setTimeout((()=>{this.hoverSlider("primeira")}),200)},handleInputValue(e){this.sliderStore[e[0]][e[1]].valor=Number(e[2]),this.mouseDownSlider(e,"primeira");const t=(0,f.throttle)(this.changeMatrix,50);t()},matrizMaker(e){const t=t=>{console.log(this.conveterEscala(this.sliderStore[e]));const r=t[0]===t[1]?1:this.conveterEscala(this.sliderStore[e].find((e=>e.id===t)).valor);return r.toFixed(2)},r=t=>{const r=1/this.conveterEscala(this.sliderStore[e].find((e=>e.id===t)).valor);return r>1?Math.floor(r).toFixed(2):r.toFixed(2)},i=[];for(let s=1;s<=this.optionsPrimeira.length;s++){const e=[];for(let i=1;i<=this.optionsPrimeira.length;i++)s<=i?e.push(t(`${s}${i}`)):e.push(r(`${i}${s}`));i.push(e)}return i},changeMatrix(){let e=[];for(let t=0;t<this.criteriosPrimeira.length;t++)e.push(this.matrizMaker(t));e=this.calcula(e),this.$store.dispatch("changeMatrizPrimeira",e)},calcula(e){const t=(e,t,r)=>{let i=0;for(let s=0;s<r;s++)i+=Number(e[s][t]);return i},r=r=>{const i=[];for(let s=0;s<e[r].length;s++){const o=[];for(let i=0;i<e[r][s].length;i++){const a=Number(e[r][s][i])/t(e[r],i,e[r].length);o.push(a.toFixed(2))}i.push(o)}return i},i=[];for(let g=0;g<e.length;g++)i.push(r(g));const s=e=>{const t=[];for(let r=0;r<i[e].length;r++)t.push((i[e][r].reduce(((e,t)=>e+parseFloat(t)),0)/i[e][r].length).toFixed(2));return t},o=[];for(let g=0;g<i.length;g++)o.push(s(g));const a=t=>{const r=[];for(let i=0;i<e[t].length;i++){const s=[];for(let r=0;r<e[t].length;r++)s.push(Number(o[t][r])*Number(e[t][i][r]));r.push(s.reduce(((e,t)=>e+t),0))}return r},n=[];for(let g=0;g<e.length;g++)n.push(a(g));console.log("WS:",n);const l=e=>{const t=[];for(let r=0;r<o[e].length;r++)t.push(n[e][r]/o[e][r]);return t},c=[];for(let g=0;g<o.length;g++)c.push(l(g));console.log("CONS:",c);const u=[];for(let g=0;g<c.length;g++)u.push(c[g].reduce(((e,t)=>e+t),0)/c[g].length);console.log("Lambda:",u);const h=[],d=c.length-1;for(let g=0;g<c.length;g++)h.push((u[g]-d)/(d-1));console.log("n:",d),console.log("CI:",h);const m=[];for(let g=0;g<c.length;g++)m.push(h[g]/M.RI[d]);const p=e=>{const t={normalizada:i[e],pesos:o[e],ws:n[e],cons:c[e],lambda:u[e],ci:h[e],cr:m[e],ri:M.RI[d],n:d};return t};for(let g=0;g<e.length;g++)e[g].push(p(g));return e},vetorPeso(e){return this.matrizValores[e][this.matrizValores[e].length-1]["pesos"]},consistencia(e,t){return this.matrizValores[e][this.matrizValores[e].length-1][t]}}};var $=r(744);const V=(0,$.Z)(S,[["render",d],["__scopeId","data-v-3c3a6d3e"]]),w=V;var C=r(287);const b={name:"vue-view-mcdm-primeira-etapa",components:{vuePrimeiraPersonalizado:w},mixins:[C.Z]},x=(0,$.Z)(b,[["render",o]]),I=x}}]);
//# sourceMappingURL=249.101bd0e0.js.map