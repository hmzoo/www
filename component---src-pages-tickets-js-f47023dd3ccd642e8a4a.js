(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{uwLi:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return y}));var a=n("dI71"),i=n("q1tI"),r=n.n(i),o=n("Bl7J"),l=n("7D6J"),c=n.n(l),u=n("k8rR"),f=n.n(u),m=n("X6by"),s=n.n(m),_=n("i7eo"),d=n.n(_),p=n("xSfO"),h=n.n(p),v=n("EDnw"),E=n.n(v),g=(n("ZVna"),n("Arhh"),n("d9jf"));function N(e,t,n){return n.indexOf(e)===t}var w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={filtre_domaine:"",filtre_affectation:""},t}Object(a.a)(t,e);var n=t.prototype;return n.onChange_domaine=function(e){this.setState({filtre_domaine:e.target.value,filtre_affectation:""})},n.onChange_affectation=function(e){this.setState({filtre_affectation:e.target.value,filtre_domaine:""})},n.ticket_filter=function(e){if(""===this.state.filtre_domaine&&""===this.state.filtre_affectation)return!0;var t=[e.Produit__Produit,e.Service__Nom,e.Sous_cat_gorie_de_service__Nom],n=[e.Agent__Nom_complet,e.Equipe__Nom];return t.includes(this.state.filtre_domaine)||n.includes(this.state.filtre_affectation)},n.render=function(){var e=this.props.data.allExportDeDemandeUtilisateurXlsxSheet1.edges,t=e.length,n=e.map((function(e){return e.node.Produit__Produit})),a=e.map((function(e){return e.node.Service__Nom})),i=e.map((function(e){return e.Sous_cat_gorie_de_service__Nom})),l=n.concat(a.concat(i)),u=e.map((function(e){return e.node.Equipe__Nom})),m=e.map((function(e){return e.node.Agent__Nom_complet})),_=u.concat(m);return r.a.createElement(o.a,null,r.a.createElement(d.a,null),r.a.createElement(c.a,{fluid:!0,style:{marginTop:"22px"}},r.a.createElement(f.a,null,r.a.createElement(s.a,{md:"12",className:"mui--text-title"},"TICKETS (",t,")")),r.a.createElement(f.a,null,r.a.createElement(s.a,{md:"6"},r.a.createElement(h.a,{name:"input",value:this.state.filtre_domaine,placeholder:"Domaines",onChange:this.onChange_domaine.bind(this)},l.filter(N).map((function(e,t){var n=l.filter((function(t){return t==e})).length;return r.a.createElement(E.a,{value:e,label:e+" ("+n+")",key:t,className:"mui--text-caption"})})))),r.a.createElement(s.a,{md:"6"},r.a.createElement(h.a,{name:"input",value:this.state.filtre_affectation,placeholder:"Affectation",onChange:this.onChange_affectation.bind(this)},_.filter(N).map((function(e,t){var n=_.filter((function(t){return t==e})).length;return r.a.createElement(E.a,{value:e,label:e+" ("+n+")",key:t,className:"mui--text-caption"})}))))),e.map((function(e,t){return this.ticket_filter(e.node)?r.a.createElement(f.a,{key:t},r.a.createElement(s.a,{md:"12"},r.a.createElement(g.a,{node:e.node}))):void 0}),this)))},t}(r.a.Component);t.default=w;var y="584987216"}}]);
//# sourceMappingURL=component---src-pages-tickets-js-f47023dd3ccd642e8a4a.js.map