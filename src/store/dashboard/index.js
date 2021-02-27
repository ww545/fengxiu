import { Home } from '@/model/home/index.js'

const Dashboard = {
    state: () => ({ 
        userinfo:[],
     }),
    mutations: { 
        async getThemeA  (){
          const data = await  Home.getThemeA();
           console.log(data);
           
        }
     },
    actions: { 
        getTheme (context) {
            context.commit('getThemeA')
          }
     },
    getters: { 
        
    }
}

export {
    Dashboard
}