const r=new Map;function l(t,u,n){let e=r.get(t);return e||(e=new Intl.PluralRules(t),r.set(t,e)),n[e.select(u)]??n.other}export{l as p};
