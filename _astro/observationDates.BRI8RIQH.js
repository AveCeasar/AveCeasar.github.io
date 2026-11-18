function i(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;const e=new Date(`${t}T00:00:00Z`);return Number.isFinite(e.getTime())&&e.toISOString().slice(0,10)===t}export{i};
