export default{
    state:{
        isCollapse:false,
        tabsList:[{
            path:'/',
            name:'home',
            lable:'首页',
            icon:'home'
        }],
        currentMenu:null
    },
    mutations:{
        CollapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,value){
            if(value.name !== 'home'){
                state.currentMenu=value
                const result = state.tabsList.findIndex(item => item.name === value.name)
                if(result === -1){
                    state.tabsList.push(value)
                }
            }else{
                state.currentMenu = null
            }
        },
        closeTag(state,val){
            const result = state.tabsList.findIndex(item=>item.name === val.name)
            state.tabsList.splice(result,1)
        }
    }
}