(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{452:function(e,n,t){"use strict";var r=t(2),d=(t(44),t(51),t(183),t(9),t(8),t(46),t(146),t(10),t(6),t(12),t(13),t(4)),o=t(71),l=t(87);function m(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}n.a=Object(d.a)(o.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var n=Object.values(e).includes(!0);this.$emit("input",!n)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,n=function(input){return input.$watch("hasError",(function(n){e.$set(e.errorBag,input._uid,n)}),{immediate:!0})},t={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?t.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(t.valid=n(input)))})):t.valid=n(input),t},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var n=this.watchers.find((function(i){return i._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var n=this;return e("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(e){return n.$emit("submit",e)}}},this.$slots.default)}})},583:function(e,n,t){"use strict";t(10),t(6),t(9),t(12),t(8),t(13);var r=t(19),d=t(2),o=(t(20),t(52),t(146),t(186),t(36),t(28),t(44),t(51),t(182),t(147),t(428),t(424)),l=t(450),m=t(0);function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(d.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}n.a=l.a.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return o.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var n=this.delimiters.find((function(n){return e.endsWith(n)}));null!=n&&(this.internalSearch=e.slice(0,e.length-n.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=l.a.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(e,n){var t=this,r=o.a.options.methods.genChipSelection.call(this,e,n);return this.multiple&&(r.componentOptions.listeners=h(h({},r.componentOptions.listeners),{},{dblclick:function(){t.editingIndex=n,t.internalSearch=t.getText(e),t.selectedIndex=-1}})),r},onChipInput:function(e){o.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(e,n){this.autoSelectFirst&&l.a.options.methods.onFilteredItemsChanged.call(this,e,n)},onKeyDown:function(e){var n=e.keyCode;!e.ctrlKey&&[m.x.home,m.x.end].includes(n)||o.a.options.methods.onKeyDown.call(this,e),this.multiple&&n===m.x.left&&0===this.$refs.input.selectionStart?this.updateSelf():n===m.x.enter&&this.onEnterDown(e),this.changeSelectedIndex(n)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();l.a.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(l.a.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){o.a.options.methods.setValue.call(this,null!=e?e:this.internalSearch)},updateEditing:function(){var e=this,n=this.internalValue.slice(),t=this.selectedItems.findIndex((function(n){return e.getText(n)===e.internalSearch}));if(t>-1){var d="object"===Object(r.a)(n[t])?Object.assign({},n[t]):n[t];n.splice(t,1),n.push(d)}else n[this.editingIndex]=this.internalSearch;this.setValue(n),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,n=this.getMenuIndex();if(!(n<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var t=this.selectedItems.findIndex((function(n){return e.internalSearch===e.getText(n)})),d=t>-1&&"object"===Object(r.a)(this.selectedItems[t])?Object.assign({},this.selectedItems[t]):this.internalSearch;if(t>-1){var o=this.internalValue.slice();o.splice(t,1),this.setValue(o)}if(n>-1)return this.internalSearch=null;this.selectItem(d),this.internalSearch=null}},onPaste:function(e){var n;if(this.multiple&&!this.searchIsDirty){var t=null==(n=e.clipboardData)?void 0:n.getData("text/vnd.vuetify.autocomplete.item+plain");t&&-1===this.findExistingIndex(t)&&(e.preventDefault(),o.a.options.methods.selectItem.call(this,t))}},clearableCallback:function(){this.editingIndex=-1,l.a.options.methods.clearableCallback.call(this)}}})},603:function(e,n,t){"use strict";t.r(n);var r=t(26),d=(t(96),{props:{patient:{type:Object,default:function(){}}},data:function(){return{disabled:!1,firstName:"",lastName:"",document:"",dob:"",phone:"",gender:"",nationality:"",city:"",country:"",postalCode:"",address:"",profession:"",workplace:"",maritalStatus:"",heathcare:"",genderItems:["Masculino","Femenino"],maritalStatusItems:["Soltero","Casado/a","Divorciado/a"],countryItems:[{id:24,name:"Afganistán"},{id:25,name:"Alandia"},{id:26,name:"Albania"},{id:27,name:"Argelia"},{id:28,name:"Samoa Americana"},{id:29,name:"Andorra"},{id:30,name:"Angola"},{id:31,name:"Anguilla"},{id:32,name:"Antártida"},{id:33,name:"Antigua y Barbuda"},{id:34,name:"Argentina"},{id:35,name:"Armenia"},{id:36,name:"Aruba"},{id:37,name:"Australia"},{id:38,name:"Austria"},{id:39,name:"Azerbaiyán"},{id:40,name:"Bahamas"},{id:41,name:"Bahrein"},{id:42,name:"Bangladesh"},{id:43,name:"Barbados"},{id:44,name:"Bielorrusia"},{id:45,name:"Bélgica"},{id:46,name:"Belice"},{id:47,name:"Benín"},{id:48,name:"Bermudas"},{id:49,name:"Bután"},{id:50,name:"Bolivia"},{id:51,name:"Bonaire, Sint Eustatius and Saba"},{id:52,name:"Bosnia y Herzegovina"},{id:53,name:"Botswana"},{id:54,name:"Isla Bouvet"},{id:55,name:"Brasil"},{id:56,name:"Territorio Británico del Océano Índico"},{id:57,name:"Islas Ultramarinas Menores de Estados Unidos"},{id:58,name:"Islas Vírgenes del Reino Unido"},{id:59,name:"Islas Vírgenes de los Estados Unidos"},{id:60,name:"Brunei"},{id:61,name:"Bulgaria"},{id:62,name:"Burkina Faso"},{id:63,name:"Burundi"},{id:64,name:"Camboya"},{id:65,name:"Camerún"},{id:66,name:"Canadá"},{id:67,name:"Cabo Verde"},{id:68,name:"Islas Caimán"},{id:69,name:"República Centroafricana"},{id:70,name:"Chad"},{id:71,name:"Chile"},{id:72,name:"China"},{id:73,name:"Isla de Navidad"},{id:74,name:"Islas Cocos o Islas Keeling"},{id:75,name:"Colombia"},{id:76,name:"Comoras"},{id:77,name:"Congo"},{id:78,name:"Congo (Rep. Dem.)"},{id:79,name:"Islas Cook"},{id:80,name:"Costa Rica"},{id:81,name:"Croacia"},{id:82,name:"Cuba"},{id:83,name:"Curaçao"},{id:84,name:"Chipre"},{id:85,name:"República Checa"},{id:86,name:"Dinamarca"},{id:87,name:"Yibuti"},{id:88,name:"Dominica"},{id:89,name:"República Dominicana"},{id:90,name:"Ecuador"},{id:91,name:"Egipto"},{id:92,name:"El Salvador"},{id:93,name:"Guinea Ecuatorial"},{id:94,name:"Eritrea"},{id:95,name:"Estonia"},{id:96,name:"Etiopía"},{id:97,name:"Islas Malvinas"},{id:98,name:"Islas Faroe"},{id:99,name:"Fiyi"},{id:100,name:"Finlandia"},{id:101,name:"Francia"},{id:102,name:"Guayana Francesa"},{id:103,name:"Polinesia Francesa"},{id:104,name:"Tierras Australes y Antárticas Francesas"},{id:105,name:"Gabón"},{id:106,name:"Gambia"},{id:107,name:"Georgia"},{id:108,name:"Alemania"},{id:109,name:"Ghana"},{id:110,name:"Gibraltar"},{id:111,name:"Grecia"},{id:112,name:"Groenlandia"},{id:113,name:"Grenada"},{id:114,name:"Guadalupe"},{id:115,name:"Guam"},{id:116,name:"Guatemala"},{id:117,name:"Guernsey"},{id:118,name:"Guinea"},{id:119,name:"Guinea-Bisáu"},{id:120,name:"Guyana"},{id:121,name:"Haiti"},{id:122,name:"Islas Heard y McDonald"},{id:123,name:"Santa Sede"},{id:124,name:"Honduras"},{id:125,name:"Hong Kong"},{id:126,name:"Hungría"},{id:127,name:"Islandia"},{id:128,name:"India"},{id:129,name:"Indonesia"},{id:130,name:"Costa de Marfil"},{id:131,name:"Iran"},{id:132,name:"Irak"},{id:133,name:"Irlanda"},{id:134,name:"Isla de Man"},{id:135,name:"Israel"},{id:136,name:"Italia"},{id:137,name:"Jamaica"},{id:138,name:"Japón"},{id:139,name:"Jersey"},{id:140,name:"Jordania"},{id:141,name:"Kazajistán"},{id:142,name:"Kenia"},{id:143,name:"Kiribati"},{id:144,name:"Kuwait"},{id:145,name:"Kirguizistán"},{id:146,name:"Laos"},{id:147,name:"Letonia"},{id:148,name:"Líbano"},{id:149,name:"Lesotho"},{id:150,name:"Liberia"},{id:151,name:"Libia"},{id:152,name:"Liechtenstein"},{id:153,name:"Lituania"},{id:154,name:"Luxemburgo"},{id:155,name:"Macao"},{id:156,name:"Macedonia"},{id:157,name:"Madagascar"},{id:158,name:"Malawi"},{id:159,name:"Malasia"},{id:160,name:"Maldivas"},{id:161,name:"Mali"},{id:162,name:"Malta"},{id:163,name:"Islas Marshall"},{id:164,name:"Martinica"},{id:165,name:"Mauritania"},{id:166,name:"Mauricio"},{id:167,name:"Mayotte"},{id:168,name:"México"},{id:169,name:"Micronesia"},{id:170,name:"Moldavia"},{id:171,name:"Mónaco"},{id:172,name:"Mongolia"},{id:173,name:"Montenegro"},{id:174,name:"Montserrat"},{id:175,name:"Marruecos"},{id:176,name:"Mozambique"},{id:177,name:"Myanmar"},{id:178,name:"Namibia"},{id:179,name:"Nauru"},{id:180,name:"Nepal"},{id:181,name:"Países Bajos"},{id:182,name:"Nueva Caledonia"},{id:183,name:"Nueva Zelanda"},{id:184,name:"Nicaragua"},{id:185,name:"Níger"},{id:186,name:"Nigeria"},{id:187,name:"Niue"},{id:188,name:"Isla de Norfolk"},{id:189,name:"Corea del Norte"},{id:190,name:"Islas Marianas del Norte"},{id:191,name:"Noruega"},{id:192,name:"Omán"},{id:193,name:"Pakistán"},{id:194,name:"Palau"},{id:195,name:"Palestina"},{id:196,name:"Panamá"},{id:197,name:"Papúa Nueva Guinea"},{id:198,name:"Paraguay"},{id:199,name:"Perú"},{id:200,name:"Filipinas"},{id:201,name:"Islas Pitcairn"},{id:202,name:"Polonia"},{id:203,name:"Portugal"},{id:204,name:"Puerto Rico"},{id:205,name:"Catar"},{id:206,name:"Kosovo"},{id:207,name:"Reunión"},{id:208,name:"Rumania"},{id:209,name:"Rusia"},{id:210,name:"Ruanda"},{id:211,name:"San Bartolomé"},{id:212,name:"Santa Helena"},{id:213,name:"San Cristóbal y Nieves"},{id:214,name:"Santa Lucía"},{id:215,name:"Saint Martin"},{id:216,name:"San Pedro y Miquelón"},{id:217,name:"San Vicente y Granadinas"},{id:218,name:"Samoa"},{id:219,name:"San Marino"},{id:220,name:"Santo Tomé y Príncipe"},{id:221,name:"Arabia Saudí"},{id:222,name:"Senegal"},{id:223,name:"Serbia"},{id:224,name:"Seychelles"},{id:225,name:"Sierra Leone"},{id:226,name:"Singapur"},{id:227,name:"Sint Maarten (Dutch part)"},{id:228,name:"República Eslovaca"},{id:229,name:"Eslovenia"},{id:230,name:"Islas Salomón"},{id:231,name:"Somalia"},{id:232,name:"República de Sudáfrica"},{id:233,name:"Islas Georgias del Sur y Sandwich del Sur"},{id:234,name:"Corea del Sur"},{id:235,name:"Sudán del Sur"},{id:236,name:"España"},{id:237,name:"Sri Lanka"},{id:238,name:"Sudán"},{id:239,name:"Surinam"},{id:240,name:"Islas Svalbard y Jan Mayen"},{id:241,name:"Suazilandia"},{id:242,name:"Suecia"},{id:243,name:"Suiza"},{id:244,name:"Siria"},{id:245,name:"Taiwán"},{id:246,name:"Tayikistán"},{id:247,name:"Tanzania"},{id:248,name:"Tailandia"},{id:249,name:"Timor Oriental"},{id:250,name:"Togo"},{id:251,name:"Islas Tokelau"},{id:252,name:"Tonga"},{id:253,name:"Trinidad y Tobago"},{id:254,name:"Túnez"},{id:255,name:"Turquía"},{id:256,name:"Turkmenistán"},{id:257,name:"Islas Turks y Caicos"},{id:258,name:"Tuvalu"},{id:259,name:"Uganda"},{id:260,name:"Ucrania"},{id:261,name:"Emiratos Árabes Unidos"},{id:262,name:"Reino Unido"},{id:263,name:"Estados Unidos"},{id:264,name:"Uruguay"},{id:265,name:"Uzbekistán"},{id:266,name:"Vanuatu"},{id:267,name:"Venezuela"},{id:268,name:"Vietnam"},{id:269,name:"Wallis y Futuna"},{id:270,name:"Sahara Occidental"},{id:271,name:"Yemen"},{id:272,name:"Zambia"},{id:273,name:"Zimbabue"}]}},methods:{savePatient:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t={}).first_name=e.firstName,t.last_name=e.lastName,t.document=e.document,t.dob=e.dob,t.phone=e.phone,t.gender=e.gender,t.nationality=e.nationality,t.city=e.city,t.country=e.country,t.postal_code=e.postalCode,t.address=e.address,t.profession=e.profession,t.workplace=e.workplace,t.marital_status=e.maritalStatus,t.healthcare=e.heathcare,n.next=18,e.$axios.post("patients",t);case 18:200===(r=n.sent).status&&e.$router.push("/patients/"+r.data.id);case 20:case"end":return n.stop()}}),n)})))()}}}),o=t(84),l=t(112),m=t.n(l),c=t(450),h=t(187),f=t(399),v=t(469),y=t(583),S=t(456),I=t(598),x=t(452),C=t(476),w=t(470),O=t(424),k=t(425),component=Object(o.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-form",{on:{submit:function(n){return n.preventDefault(),e.savePatient.apply(null,arguments)}}},[t("v-container",[t("h1",[e._v("Nuevo Paciente")]),e._v(" "),t("v-card",{staticClass:"mt-10 pa-10",staticStyle:{"max-width":"700px"}},[t("v-text-field",{attrs:{label:"Nombre",required:""},model:{value:e.firstName,callback:function(n){e.firstName=n},expression:"firstName"}}),e._v(" "),t("v-text-field",{attrs:{label:"Apellido",required:""},model:{value:e.lastName,callback:function(n){e.lastName=n},expression:"lastName"}}),e._v(" "),t("v-text-field",{attrs:{label:"Documento",required:""},on:{change:function(n){return e.$emit("onChange",Object.assign({},e.patient,{document:n}))}},model:{value:e.document,callback:function(n){e.document=n},expression:"document"}}),e._v(" "),t("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,d=n.attrs;return[t("v-text-field",e._g(e._b({attrs:{label:"Fecha de nacimiento","prepend-icon":"mdi-calendar",disabled:e.disabled},model:{value:e.dob,callback:function(n){e.dob=n},expression:"dob"}},"v-text-field",d,!1),r))]}}])},[e._v(" "),t("v-date-picker",{model:{value:e.dob,callback:function(n){e.dob=n},expression:"dob"}})],1),e._v(" "),t("v-text-field",{attrs:{label:"Número de Teléfono",placeholder:"+54 343 1234567",required:"",readonly:e.disabled},model:{value:e.phone,callback:function(n){e.phone=n},expression:"phone"}}),e._v(" "),t("v-select",{attrs:{items:e.genderItems,label:"Genero",readonly:e.disabled},model:{value:e.gender,callback:function(n){e.gender=n},expression:"gender"}}),e._v(" "),t("v-row",{staticClass:"d-flex justify-space-around"},[t("v-col",[t("v-autocomplete",{attrs:{items:e.countryItems,rules:[function(e){return!!e||"El país es requerido."}],label:"País",required:"","item-text":"name","item-value":"name"},model:{value:e.country,callback:function(n){e.country=n},expression:"country"}})],1),e._v(" "),t("v-col",[t("v-text-field",{attrs:{label:"Nacionalidad",required:"",readonly:e.disabled},model:{value:e.nationality,callback:function(n){e.nationality=n},expression:"nationality"}})],1),e._v(" "),t("v-col",[t("v-text-field",{attrs:{label:"Ciudad",required:"",readonly:e.disabled},model:{value:e.city,callback:function(n){e.city=n},expression:"city"}})],1),e._v(" "),t("v-col",[t("v-text-field",{attrs:{label:"Código postal",required:"",readonly:e.disabled},model:{value:e.postalCode,callback:function(n){e.postalCode=n},expression:"postalCode"}})],1)],1),e._v(" "),t("v-text-field",{attrs:{label:"Domicilio",required:"",readonly:e.disabled},model:{value:e.address,callback:function(n){e.address=n},expression:"address"}}),e._v(" "),t("v-row",{staticClass:"d-flex justify-space-around"},[t("v-col",{attrs:{cols:"10",md:"3"}},[t("v-text-field",{attrs:{label:"Profesión/Actividad",required:"",readonly:e.disabled},model:{value:e.profession,callback:function(n){e.profession=n},expression:"profession"}})],1),e._v(" "),t("v-col",{attrs:{cols:"10",md:"3"}},[t("v-text-field",{attrs:{label:"Lugar de trabajo",required:"",readonly:e.disabled},model:{value:e.workplace,callback:function(n){e.workplace=n},expression:"workplace"}})],1),e._v(" "),t("v-col",{attrs:{cols:"10",md:"3"}},[t("v-combobox",{attrs:{label:"Estado civil",required:"",items:e.maritalStatusItems,readonly:e.disabled},model:{value:e.maritalStatus,callback:function(n){e.maritalStatus=n},expression:"maritalStatus"}})],1),e._v(" "),t("v-col",{attrs:{cols:"10",md:"3"}},[t("v-text-field",{attrs:{label:"Ob. Social",required:"",readonly:e.disabled},model:{value:e.heathcare,callback:function(n){e.heathcare=n},expression:"heathcare"}})],1)],1),e._v(" "),t("v-row",{staticClass:"d-flex justify-right"},[t("v-col",{attrs:{cols:"10",md:"4"}},[t("v-btn",{staticClass:"mr-4",attrs:{primary:"",type:"submit"}},[e._v(" Guardar ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;m()(component,{VAutocomplete:c.a,VBtn:h.a,VCard:f.a,VCol:v.a,VCombobox:y.a,VContainer:S.a,VDatePicker:I.a,VForm:x.a,VMenu:C.a,VRow:w.a,VSelect:O.a,VTextField:k.a})}}]);