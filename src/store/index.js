import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogIn: false,
    dolarObject: {},
    euroObject: {},
    bitcoinObject: {},
    simulation: {
      email: '',
      name: '',
      lastname: '',
      secondLastname: '',
      phone: '',
      money: '',
      region: {
        selected: null,
        options: [
          { value: null, text: 'Ingresa tu region'},
          { value: 'Región de Arica y Parinacota', text: 'Región de Arica y Parinacota'},
          { value: 'Región de Tarapacá', text: 'Región de Tarapacá'},
          { value: 'Región de Antofagasta', text: 'Región de Antofagasta'},
          { value: 'Región de Atacama', text: 'Región de Atacama'},
          { value: 'Región de Coquimbo', text: 'Región de Coquimbo'},
          { value: 'Región de Valparaíso', text: 'Región de Valparaíso'},
          { value: 'Región Metropolitana de Santiago', text: 'Región Metropolitana de Santiago'},
          { value: 'Región del Libertador General Bernardo OHiggins', text: 'Región del Libertador General Bernardo OHiggins'},
          { value: 'Región del Maule', text: 'Región del Maule'},
          { value: 'Región de Ñuble', text: 'Región de Ñuble' },
          { value: 'Región del Biobío', text: 'Región del Biobío'},
          { value: 'Región de La Araucanía', text: 'Región de La Araucanía'},
          { value: 'Región de Los Ríos', text: 'Región de Los Ríos'},
          { value: 'Región de Los Lagos', text: 'Región de Los Lagos'},
          { value: 'Región Aysén del General Carlos Ibáñez del Campo', text: 'Región Aysén del General Carlos Ibáñez del Campo'},
          { value: 'Región de Magallanes y de la Antártica Chilena', text: 'Región de Magallanes y de la Antártica Chilena'}
        ]
      },
      resultType: {
        selected: null,
        options: [
          { value: null, text: 'Ingresa el tipo de moneda' },
          { value: 'USD', text: 'Dolar' },
          { value: 'EUR', text: 'Euro' },
          { value: 'BTC', text: 'Bitcoin'}
        ]
      },
      result: null
    },
    simulationsCollection: [
      {
        email: 'peter.ramoz@gmail.com',
        name: 'Pedro',
        lastname: 'Ramirez',
        secondLastname: 'Mozard',
        phone: '555-1234',
        money: 10000,
        region: {
          selected: 'Región Metropolitana de Santiago',
        },
          resultType: {
          selected: 'USD'
        },
        result: '13.30'
      },
      {
        email: 'papermon@gmail.com',
        name: 'Pablo',
        lastname: 'Perez',
        secondLastname: 'Montenegro',
        phone: '555-2345',
        money: 50500,
        region: {
          selected: 'Región de Tarapacá',
        },
          resultType: {
          selected: 'EUR'
        },
        result: '56.91'
      },
      {
        email: 'cintygonz@gmail.com',
        name: 'Cintia',
        lastname: 'Gonzalez',
        secondLastname: 'Segura',
        phone: '555-6543',
        money: 400000,
        region: {
          selected: 'Región de La Araucanía',
        },
          resultType: {
          selected: 'BTC'
        },
        result: '11.82'
      },
      {
        email: 'romi.mar@gmail.com',
        name: 'Romina',
        lastname: 'Marquez',
        secondLastname: 'Briseño',
        phone: '555-4312',
        money: 35500,
        region: {
          selected: 'Región de Coquimbo',
        },
          resultType: {
          selected: 'BTC'
        },
        result: '1.049'
      },
      {
        email: 'jesgarcar@gmail.com',
        name: 'Jesus',
        lastname: 'Garcia',
        secondLastname: 'Campos',
        phone: '555-3465',
        money: 100000,
        region: {
          selected: 'Región de Valparaíso',
        },
          resultType: {
          selected: 'EUR'
        },
        result: '112.7'
      },
      {
        email: 'isitabonita@gmail.com',
        name: 'Isabella',
        lastname: 'Saavedra',
        secondLastname: 'Navarro',
        phone: '555-6543',
        money: 25000,
        region: {
          selected: 'Región del Biobío',
        },
          resultType: {
          selected: 'USD'
        },
        result: '33.27'
      },
      {
        email: 'matigol123@gmail.com',
        name: 'Matias',
        lastname: 'Smith',
        secondLastname: 'Canales',
        phone: '555-8765',
        money: 50000,
        region: {
          selected: 'Región de Los Lagos',
        },
          resultType: {
          selected: 'EUR'
        },
        result: '56.05'
      },
      {
        email: 'locoro66@gmail.com',
        name: 'Luis',
        lastname: 'Cornejo',
        secondLastname: 'Rojas',
        phone: '555-5487',
        money: 1000000,
        region: {
          selected: 'Región de Los Ríos',
        },
          resultType: {
          selected: 'BTC'
        },
        result: '29.55'
      },
      {
        email: 'carcar11@gmail.com',
        name: 'Carlos',
        lastname: 'Carreño',
        secondLastname: 'Letelier',
        phone: '555-8553',
        money: 5000000,
        region: {
          selected: 'Región Metropolitana de Santiago',
        },
          resultType: {
          selected: 'USD'
        },
        result: '147.7'
      },
      {
        email: 'jurbide34@gmail.com',
        name: 'Julieta',
        lastname: 'Urbina',
        secondLastname: 'Delgado',
        phone: '555-3674',
        money: 450000,
        region: {
          selected: 'Región de Valparaíso',
        },
          resultType: {
          selected: 'EUR'
        },
        result: '504.4'
      },
      {
        email: 'laugigi@gmail.com',
        name: 'Laura',
        lastname: 'Gimenez',
        secondLastname: 'Mendoza',
        phone: '555-6433',
        money: 66600,
        region: {
          selected: 'Región de Magallanes y de la Antártica Chilena',
        },
          resultType: {
          selected: 'EUR'
        },
        result: '74.66'
      },
      {
        email: 'clauflo@gmail.com',
        name: 'Claudia',
        lastname: 'Flores',
        secondLastname: 'Cancino',
        phone: '555-8787',
        money: 890000,
        region: {
          selected: 'Región Metropolitana de Santiago',
        },
          resultType: {
          selected: 'BTC'
        },
        result: '26.30'
      },
      {
        email: 'jocaror123@gmail.com',
        name: 'Jose',
        lastname: 'Carvajal',
        secondLastname: 'Ortiz',
        phone: '555-6543',
        money: 120000,
        region: {
          selected: 'Región de Tarapacá',
        },
          resultType: {
          selected: 'USD'
        },
        result: '159.2'
      },
      {
        email: 'jaimoralv@gmail.com',
        name: 'Jaime',
        lastname: 'Morales',
        secondLastname: 'Alvarado',
        phone: '555-3647',
        money: 500000,
        region: {
          selected: 'Región de Magallanes y de la Antártica Chilena',
        },
          resultType: {
          selected: 'USD'
        },
        result: '663.4'
      },
      {
        email: 'animefig@gmail.com',
        name: 'Ana',
        lastname: 'Meneses',
        secondLastname: 'Figueroa',
        phone: '555-8876',
        money: 600000,
        region: {
          selected: 'Región del Biobío',
        },
          resultType: {
          selected: 'BTC'
        },
        result: '17.73'
      }
    ],
    totalSales: '',
    dolarSales: '',
    euroSales: '',
    bitcoinSales: '',
    biggestPurchase: '',
    lowestPurchase: ''
  },
  mutations: {
    // Esconde el login al presionar boton.
    hideLogIn(state) {
      state.showLogIn = true
    },
    // Trae informacion del Dolar, Euro y Bitcoin.
    getCurrencyValues(state) {
      axios.get("https://mindicador.cl/api")
      .then(response => {
        let mindicador = response;
        state.dolarObject = mindicador.data.dolar;
        state.euroObject = mindicador.data.euro;
        state.bitcoinObject = mindicador.data.bitcoin;
          console.log(mindicador);
      })
      .catch()
    },
    // Convierte de CLP a tipo de divisa seleccionada.
    convertCurrency(state) {
      let money = state.simulation.money;
      let resultType = state.simulation.resultType
      let dolar = state.dolarObject.valor;
      let euro = state.euroObject.valor;
      let bitcoin = state.bitcoinObject.valor;
      let fullResult = 0;

      if (resultType.selected == "USD") {
        fullResult = money / dolar;
        state.simulation.result = String(fullResult.toFixed(2));
      } else if (resultType.selected == "EUR") {
        fullResult = money / euro;
        state.simulation.result = String(fullResult.toFixed(2));
      } else if (resultType.selected == "BTC") {
        fullResult = money / bitcoin;
        state.simulation.result = String(fullResult.toFixed(2));
      }
    },
    saveSimulation(state) { 
      let simulation = {
        "email": state.simulation.email,
        "name": state.simulation.name,
        "lastname": state.simulation.lastname,
        "secondLastname": state.simulation.secondLastname,
        "phone": state.simulation.phone,
        "money": Number(state.simulation.money),
        "region": {
          "selected": state.simulation.region.selected
        },
        "resultType": {
          "selected": state.simulation.resultType.selected
        },
        "result": state.simulation.result
      }
      state.simulationsCollection.unshift(simulation);
    
    },
    // Calcula todos los elementos que se muestrana en Dash Board
    calculateDashBoard(state) {
      let collection = state.simulationsCollection;
      let totalSales = 0;
      let dolarSales = 0;
      let euroSales = 0;
      let bitcoinSales = 0;
      let biggestPurchase = 0;
      let lowestPurchase = 1000000;
      for (let index = 0; index < collection.length; index++) {
        // Aqui se cuenta la cantidad total de ventas
        totalSales += collection[index].money;
        // Aquí se evalua la cantidad de cada tipo de venta
        if (collection[index].resultType.selected == 'USD') {
          dolarSales += 1;
        } else if (collection[index].resultType.selected == 'EUR') {
          euroSales += 1;
        } else if (collection[index].resultType.selected == 'BTC') {
          bitcoinSales += 1;
        }
        // Aqui se evalua cual fue la mayor compra
        if (collection[index].money > biggestPurchase) {
          biggestPurchase = collection[index].money;
        }
        // Aqui se evalua cual fue la menor compra
        if (collection[index].money < lowestPurchase) {
          lowestPurchase = collection[index].money;
        }
      }
      state.totalSales = totalSales.toString();
      state.dolarSales = dolarSales.toString();
      state.euroSales = euroSales.toString();
      state.bitcoinSales = bitcoinSales.toString();
      state.biggestPurchase = biggestPurchase.toString();
      state.lowestPurchase = lowestPurchase.toString();
    },
    onReset(state) {
      state.simulation.email = ''
      state.simulation.name = ''
      state.simulation.lastname = ''
      state.simulation.secondLastname = ''
      state.simulation.region.selected = null
      state.simulation.phone = ''
      state.simulation.money = ''
      state.simulation.resultType.selected = null
      state.simulation.result = null
    }
  },
  actions: {
    hideLogInAction(context) {
      context.commit("hideLogIn")
    },
    getCurrencyValuesAction(context) {
      context.commit("getCurrencyValues")
    },
    convertCurrencyAction(context) {
      context.commit("convertCurrency")
    },
    calculateDashBoardAction(context) {
      context.commit("calculateDashBoard")
    },
    saveSimulationAction(context) {
      context.commit("saveSimulation")
    },
    onResetAction(context) {
      context.commit('onReset')
    }
  },
  modules: {
  }
})